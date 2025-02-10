import { View, Text, StyleSheet } from "@react-pdf/renderer";
import colors from "src/utils/colors";

export const styles = StyleSheet.create({
  tableContainer: {
    display: "flex",
    alignItems: "center", // Centraliza verticalmente
    justifyContent: "center", // Centraliza horizontalmente
    width: "100%", // Ocupa toda a largura disponível
  },
  resultados: {
    fontSize: 48,
    opacity: 0.1, // Ajuste a opacidade conforme necessário
    color: "#000",
    textAlign: "right", // Alinha o texto à direita
    marginBottom: 20, // Espaçamento entre o texto e a tabela
  },
  table: {
    width: "90%", // Largura da tabela (ajustável)
    marginTop: 10,
    alignSelf: "center", // Centraliza a tabela horizontalmente
  },
  row: {
    flexDirection: "row",
    height: 35,
  },
  rows: {
    flexDirection: "row",
    backgroundColor: colors.lightGray,
    height: 35,
  },
  cell1: {
    flex: 1,
    padding: 5,
    fontSize: 10,
  },
  cell2: {
    flex: 3,
    padding: 5,
    fontSize: 10,
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
  headerGravidade: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    color: colors.white,
    backgroundColor: colors.l_blue,
  },
  headerQuantidade: {
    flex: 3,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    color: colors.white,
    backgroundColor: colors.red,
  },
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
});
