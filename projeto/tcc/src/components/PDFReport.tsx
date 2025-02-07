import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import CoverPage from "./coverPage";
import ScopeTable from "./scopeTable";
import VulnTable from "./vulnTable";
import { Alvo, VulnType } from "../types/types";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 20,
  },
});

interface PDFReportProps {
  alvos: Alvo[];
  vulns: VulnType[];
}

const PDFReport = ({ alvos, vulns }: PDFReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <CoverPage />
      <View style={styles.section}>
        <ScopeTable alvos={alvos} />
      </View>
      <View style={styles.section}>
        <VulnTable vulns={vulns} />
      </View>
    </Page>
  </Document>
);

export default PDFReport;
