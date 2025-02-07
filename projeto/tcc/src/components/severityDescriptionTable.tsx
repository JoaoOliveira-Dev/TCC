import { View, Text, StyleSheet } from "@react-pdf/renderer";
import colors from "src/utils/colors";

const styles = StyleSheet.create({
  table: {
    width: "100%",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  cellSeverity: {
    flex: 1,
    padding: 5,
    fontSize: 10,
  },
  cellDesc: {
    flex: 4,
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
  headerDescricao: {
    flex: 4, // Aumenta o tamanho da coluna de descrição
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: colors.b_blue,
  },
});

const severityDescriptions = [
  {
    severity: "Critical",
    description:
      "Estas vulnerabilidades devem ser tratadas com urgência, pois podem representar um risco imediato para a segurança das redes, sistemas ou dados. A exploração dessas vulnerabilidades não exige ferramentas ou técnicas avançadas, nem conhecimento especializado sobre o alvo.",
  },
  {
    severity: "High",
    description:
      "Estas vulnerabilidades devem ser abordadas com urgência, pois podem representar um perigo imediato para a segurança das redes, sistemas ou dados. Embora a exploração geralmente seja mais complexa, ela pode resultar em permissões elevadas, perda de dados ou interrupções no funcionamento do sistema.",
  },
  {
    severity: "Medium",
    description:
      "Estas vulnerabilidades devem ser tratadas prontamente. A exploração costuma ser difícil e pode exigir engenharia social, acesso prévio ou condições específicas.",
  },
  {
    severity: "Low",
    description:
      "As vulnerabilidades devem ser registradas e tratadas posteriormente. Esses problemas oferecem poucas oportunidades ou informações para um invasor e podem não representar uma ameaça significativa.",
  },
  {
    severity: "Info",
    description:
      "Esses problemas são meramente informativos e provavelmente não representam uma ameaça real.",
  },
];

const SeverityDescriptionsTable = () => (
  <View style={styles.table}>
    <Text style={{ fontSize: 8, marginBottom: 10 }}>
      Cada vulnerabilidade ou risco identicado foi classicado como uma
      descoberta e categorizado nas seguintes categorias: Risco Crítico, Alto,
      Médio, Baixo ou Informacional, conforme as denições a seguir:
    </Text>
    <View style={styles.row}>
      <Text style={styles.headerGravidade}>GRAVIDADE</Text>
      <Text style={styles.headerDescricao}>DESCRIÇÃO</Text>
    </View>
    {severityDescriptions.map((description) => (
      <View key={description.severity} style={styles.row}>
        <Text style={styles.cellSeverity}>{description.severity}</Text>
        <Text style={styles.cellDesc}>{description.description}</Text>
      </View>
    ))}
  </View>
);

export default SeverityDescriptionsTable;
