import React, { useState } from "react";
import {
  Document,
  Page,
  pdf,
  Text,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { Button } from "src/components/ui/button";
import { Alvo, VulnType } from "../types/types";
import CoverPage from "./coverPage";
import ScopeTable from "./scopeTable";
import VulnTable from "./vulnTable";
import ResultsTable from "./resultsTable"; // Importe o novo componente
import SeverityDescriptionsTable from "./severityDescriptionTable"; // Importe o novo componente

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
});

interface PDFReportProps {
  alvos: Alvo[];
  vulns: VulnType[];
}

// Componente PDF gerado com @react-pdf/renderer
const MyDocument = ({ alvos, vulns }: PDFReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <CoverPage />
      <View style={styles.section}>
        <h1>ESCOPO</h1>
        <ScopeTable alvos={alvos} />
      </View>
      {/* <View style={styles.section}>
        <VulnTable vulns={vulns} />
      </View> */}
      <View style={styles.section}>
        <h1>RESULTADOS</h1>
        <ResultsTable vulns={vulns} /> {/* Adicione o novo componente */}
      </View>
      <View style={styles.section}>
        <SeverityDescriptionsTable /> {/* Adicione o novo componente */}
      </View>
      <View style={styles.section}>
        <h1>VULNERABILIDADES</h1>
        <VulnTable vulns={vulns} /> {/* Adicione o novo componente */}
      </View>
    </Page>
  </Document>
);

export default function PDFViewerExample({ alvos, vulns }: PDFReportProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Função para gerar o PDF e criar uma URL
  const generatePDF = async () => {
    const blob = await pdf(<MyDocument alvos={alvos} vulns={vulns} />).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);

    // Abre o PDF em uma nova aba
    window.open(url, "_blank");

    // Limpa a URL após o uso (opcional)
    setTimeout(() => {
      URL.revokeObjectURL(url);
      setPdfUrl(null);
    }, 1000); // Espera 1 segundo antes de limpar a URL
  };

  return (
    <div>
      {/* Botão para gerar o PDF */}
      <Button
        variant="outline"
        onClick={generatePDF}
        style={{ marginBottom: 20 }}
      >
        Gerar PDF
      </Button>
    </div>
  );
}
