import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { VulnType } from "../types/types";

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#3b82f6",
    marginTop: 5,
  },
  table: {
    width: "100%",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderStyle: "solid",
  },
  cell: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderStyle: "solid",
  },
  headerID: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#ef4444",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderStyle: "solid",
  },
  headerVuln: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#3b82f6",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderStyle: "solid",
  },
});

interface VulnTableProps {
  vulns: VulnType[];
}

const VulnTable = ({ vulns }: VulnTableProps) => (
  <View>
    {vulns.map((vuln, index) => (
      <View key={vuln.id || index} style={styles.section}>
        <Text style={styles.title}>
          {index + 1}. {vuln.nome}
        </Text>
        <View style={styles.row}>
          <View style={[styles.cell, { backgroundColor: "#3b82f6" }]}>
            <Text>{vuln.nome}</Text>
          </View>
          <View style={[styles.cell, { backgroundColor: "#ef4444" }]}>
            <Text>{vuln.severidade}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>
              <strong>CVSS Points</strong>
            </Text>
          </View>
          <View style={styles.cell}>
            <Text>9.8</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>
              <strong>Vetores</strong>
            </Text>
          </View>
          <View style={styles.cell}>
            <Text>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Descrição da Vulnerabilidade:</Text>
        <Text>{vuln.descVuln}</Text>
        <Text style={styles.subtitle}>Ativo Afetado:</Text>
        <Text>{vuln.ativos}</Text>
        <Text style={styles.subtitle}>Referência:</Text>
        <Text>{vuln.referencia}</Text>
        <Text style={styles.subtitle}>Impacto:</Text>
        <Text>{vuln.impacto}</Text>
        <Text style={styles.subtitle}>Ação para Reparo:</Text>
        <Text>{vuln.reparo}</Text>
        <Text style={styles.subtitle}>Proof Of Concept:</Text>
        <Text>{vuln.poc}</Text>
      </View>
    ))}
  </View>
);

export default VulnTable;
