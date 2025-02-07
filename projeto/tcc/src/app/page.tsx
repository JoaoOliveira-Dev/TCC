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
    flexDirection: "row", // Substitui display: "table"
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderStyle: "solid",
  },
  cell: {
    flex: 1, // Garante que as células tenham largura igual
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
    backgroundColor: "#ef4444", // Fundo cinza para cabeçalho
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderStyle: "solid",
  },
  headerLink: {
    flex: 1,
    padding: 5,
    fontSize: 10,
    fontWeight: "bold",
    backgroundColor: "#3b82f6", // Fundo cinza para cabeçalho
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderStyle: "solid",
  },
});

const ReportPDF = ({ alvos }: { alvos: Alvo[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Escopo do Pentest</Text>
        {/* Tabela */}
        <View style={styles.table}>
          {/* Cabeçalho da tabela */}
          <View style={styles.row}>
            <Text style={styles.headerAlvo}>ALVO</Text>
            <Text style={styles.headerLink}>LINK/LOGIN/SENHA</Text>
          </View>
          {/* Linhas da tabela */}
          {alvos.map((alvo, index) => (
            <View key={alvo.id} style={styles.row}>
              <Text style={styles.cell}>
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text style={styles.cell}>{alvo.link}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default function Report() {
  const [alvos, setAlvos] = useState<Alvo[]>([]);
  const [novoAlvo, setNovoAlvo] = useState<string>("");
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
          className="border p-2 flex-1"
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
      <div className="mt-4">
        <PDFDownloadLink
          document={<ReportPDF alvos={alvos} />}
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
