"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { isValidUrl } from "../utils/helpers";
import { Alvo } from "../types/types";

interface ScopeProps {
  alvos: Alvo[];
  setAlvos: React.Dispatch<React.SetStateAction<Alvo[]>>;
}

export default function Scope({ alvos, setAlvos }: ScopeProps) {
  const [novoAlvo, setNovoAlvo] = useState<string>("");

  const adicionarAlvo = () => {
    if (novoAlvo.trim() !== "" && isValidUrl(novoAlvo)) {
      setAlvos([...alvos, { id: uuidv4(), link: novoAlvo }]);
      setNovoAlvo("");
    } else {
      alert("Por favor, insira uma URL válida.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Escopo do Pentest</h1>
      {/* Formulário para adicionar alvos */}
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
      {/* Tabela de alvos */}
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
    </div>
  );
}
