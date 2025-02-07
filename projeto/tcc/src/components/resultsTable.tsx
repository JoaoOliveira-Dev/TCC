import { View, Text, StyleSheet } from "@react-pdf/renderer";
import colors from "src/utils/colors";
import { VulnType } from "../types/types";

const styles = StyleSheet.create({
  table: {
    width: "100%",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 5,
    fontSize: 10,
  },
  headerGravidade: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: colors.red,
  },
  headerQuantidade: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: colors.b_blue,
  },
});

interface ResultsTableProps {
  vulns: VulnType[];
}

const ResultsTable = ({ vulns }: ResultsTableProps) => {
  // Função para contar as vulnerabilidades por gravidade
  const countVulnsBySeverity = (severity: string) => {
    return vulns.filter((vuln) => vuln.severidade === severity).length;
  };

  return (
    <View style={styles.table}>
      <Text style={{ fontSize: 12, marginBottom: 10 }}>
        Visão Geral das Descobertas:
      </Text>
      <Text style={{ fontSize: 8, marginBottom: 10 }}>
        As sequências seguintes apresentam as vulnerabilidades e problemas de
        implementação identificados durante o período de testes. As descobertas
        são organizadas de acordo com o grau de gravidade e impacto.
      </Text>
      <View style={styles.row}>
        <Text style={styles.headerGravidade}>GRAVIDADE</Text>
        <Text style={styles.headerQuantidade}>QUANTIDADE</Text>
      </View>
      <View key="critical" style={styles.row}>
        <Text style={styles.cell}>Critical</Text>
        <Text style={styles.cell}>{countVulnsBySeverity("Critical")}</Text>
      </View>
      <View key="high" style={styles.row}>
        <Text style={styles.cell}>High</Text>
        <Text style={styles.cell}>{countVulnsBySeverity("High")}</Text>
      </View>
      <View key="medium" style={styles.row}>
        <Text style={styles.cell}>Medium</Text>
        <Text style={styles.cell}>{countVulnsBySeverity("Medium")}</Text>
      </View>
      <View key="low" style={styles.row}>
        <Text style={styles.cell}>Low</Text>
        <Text style={styles.cell}>{countVulnsBySeverity("Low")}</Text>
      </View>
      <View key="info" style={styles.row}>
        <Text style={styles.cell}>Info</Text>
        <Text style={styles.cell}>{countVulnsBySeverity("Info")}</Text>
      </View>
    </View>
  );
};

export default ResultsTable;
