"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

interface Alvo {
  id: string;
  link: string;
}

interface Vuln {
  id: string;
  vulnera: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
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

const ReportPDF = ({ alvos, vulns }: { alvos: Alvo[]; vulns: Vuln[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Escopo do Pentest</Text>
        {/* Tabela de Alvos */}
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.headerAlvo}>ALVO</Text>
            <Text style={styles.headerLink}>LINK/LOGIN/SENHA</Text>
          </View>
          {alvos.map((alvo, index) => (
            <View key={alvo.id} style={styles.row}>
              <Text style={styles.cell}>
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text style={styles.cell}>{alvo.link}</Text>
            </View>
          ))}
        </View>

        {/* Tabela de Vulnerabilidades */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.header}>Tipos de Vulnerabilidades</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.headerAlvo}>ID</Text>
              <Text style={styles.headerLink}>VULNERABILIDADE</Text>
            </View>
            {vulns.map((vuln, index) => (
              <View key={vuln.id} style={styles.row}>
                <Text style={styles.cell}>
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Text style={styles.cell}>{vuln.vulnera}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default function Report() {
  const [alvos, setAlvos] = useState<Alvo[]>([]);
  const [novoAlvo, setNovoAlvo] = useState<string>("");
  const [vulns, setVulns] = useState<Vuln[]>([]);
  const [novaVulns, setNovaVulns] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const adicionarAlvo = () => {
    if (novoAlvo.trim() !== "" && isValidUrl(novoAlvo)) {
      setAlvos([...alvos, { id: uuidv4(), link: novoAlvo }]);
      setNovoAlvo("");
    } else {
      alert("Por favor, insira uma URL válida.");
    }
  };

  const adicionarVuln = () => {
    if (novaVulns.trim() !== "") {
      setVulns([...vulns, { id: uuidv4(), vulnera: novaVulns }]);
      setNovaVulns("");
    } else {
      alert("Por favor, insira uma vulnerabilidade válida.");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Escopo do Pentest</h1>
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={novoAlvo}
          onChange={(e) => setNovoAlvo(e.target.value)}
          placeholder="Insira o link do alvo"
          className="border p-2 flex-1 text-black"
        />
        <button
          onClick={adicionarAlvo}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Adicionar
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="border border-gray-300 p-2">ALVO</th>
            <th className="border bg-blue-500 border-gray-300 p-2">
              LINK/LOGIN/SENHA
            </th>
          </tr>
        </thead>
        <tbody>
          {alvos.map((alvo, index) => (
            <tr key={alvo.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="border border-gray-300 p-2">{alvo.link}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-2xl font-bold mb-4">Tipos de Vulnerabilidades</h1>
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={novaVulns}
          onChange={(e) => setNovaVulns(e.target.value)}
          placeholder="Insira a vulnerabilidade"
          className="border p-2 flex-1 text-black"
        />
        <button
          onClick={adicionarVuln}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Adicionar
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border bg-blue-500 border-gray-300 p-2">
              VULNERABILIDADE
            </th>
          </tr>
        </thead>
        <tbody>
          {vulns.map((vuln, index) => (
            <tr key={vuln.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="border border-gray-300 p-2">{vuln.vulnera}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <PDFDownloadLink
          document={<ReportPDF alvos={alvos} vulns={vulns} />}
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
