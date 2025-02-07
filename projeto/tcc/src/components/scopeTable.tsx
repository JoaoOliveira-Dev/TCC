import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Alvo } from "../types/types";

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
  headerAlvo: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#ef4444",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderStyle: "solid",
  },
  headerLink: {
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

interface ScopeTableProps {
  alvos: Alvo[];
}

const ScopeTable = ({ alvos }: ScopeTableProps) => (
  <View style={styles.table}>
    <View style={styles.row}>
      <Text style={styles.headerAlvo}>ALVO</Text>
      <Text style={styles.headerLink}>LINK/LOGIN/SENHA</Text>
    </View>
    {alvos.map((alvo, index) => (
      <View key={alvo.id} style={styles.row}>
        <Text style={styles.cell}>{String(index + 1).padStart(2, "0")}</Text>
        <Text style={styles.cell}>{alvo.link}</Text>
      </View>
    ))}
  </View>
);

export default ScopeTable;
