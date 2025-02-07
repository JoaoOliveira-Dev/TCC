"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { VulnType } from "../types/types";

interface VulnProps {
  vulns: VulnType[];
  setVulns: React.Dispatch<React.SetStateAction<VulnType[]>>;
}

export default function Vuln({ vulns, setVulns }: VulnProps) {
  const [novaVuln, setNovaVuln] = useState<string>("");

  const adicionarVuln = () => {
    if (novaVuln.trim() !== "") {
      setVulns([...vulns, { id: uuidv4(), vulnera: novaVuln }]);
      setNovaVuln("");
    } else {
      alert("Por favor, insira uma vulnerabilidade válida.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tipos de Vulnerabilidades</h1>
      {/* Formulário para adicionar vulnerabilidades */}
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={novaVuln}
          onChange={(e) => setNovaVuln(e.target.value)}
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
      {/* Tabela de vulnerabilidades */}
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
    </div>
  );
}
