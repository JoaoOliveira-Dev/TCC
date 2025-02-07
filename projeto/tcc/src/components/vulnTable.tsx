import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { VulnType } from "../types/types";

const styles = StyleSheet.create({
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
  <View style={styles.table}>
    <View style={styles.row}>
      <Text style={styles.headerID}>ID</Text>
      <Text style={styles.headerVuln}>VULNERABILIDADE</Text>
    </View>
    {vulns.map((vuln, index) => (
      <View key={vuln.id} style={styles.row}>
        <Text style={styles.cell}>{String(index + 1).padStart(2, "0")}</Text>
        <Text style={styles.cell}>{vuln.vulnera}</Text>
      </View>
    ))}
  </View>
);

export default VulnTable;
