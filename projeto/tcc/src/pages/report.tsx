"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFReport from "../components/PDFReport";
import Scope from "../components/scope";
import Vuln from "../components/vuln";
import { Alvo, VulnType } from "../types/types";

export default function Report() {
  const [alvos, setAlvos] = useState<Alvo[]>([]);
  const [vulns, setVulns] = useState<VulnType[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Passa os estados e funções para os componentes filhos */}
      <Scope alvos={alvos} setAlvos={setAlvos} />
      <Vuln vulns={vulns} setVulns={setVulns} />

      {/* Botão para baixar o PDF */}
      <div className="p-8 max-w-3xl mx-auto">
        <PDFDownloadLink
          document={<PDFReport alvos={alvos} vulns={vulns} />}
          fileName="pentest_report.pdf"
        >
          {({ loading }) => (
            <button className="bg-green-500 text-white px-4 py-2">
              {loading ? "Gerando PDF..." : "Baixar Relatório PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
