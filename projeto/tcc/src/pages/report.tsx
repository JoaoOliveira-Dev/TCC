"use client";
import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFReport from "../components/PDFReport";
import Scope from "../components/scope";
import Vuln from "../components/vuln";
import { Alvo, VulnType } from "../types/types";
import { Card } from "src/components/ui/card";
import { NavBar } from "src/components/navBar";

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
    <div className="h-screen">
      <NavBar />
      <Card className="p-8 max-w-3xl mx-auto mt-3">
        <Scope alvos={alvos} setAlvos={setAlvos} />
        <Vuln />
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
      </Card>
    </div>
  );
}
