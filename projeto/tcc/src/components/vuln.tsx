"use client";
import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";

import { vulnerabilidadesIniciais } from "../utils/vulns";

export default function Vuln() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [vulnerabilidades, setVulnerabilidades] = React.useState(
    vulnerabilidadesIniciais
  );
  const [descVuln, setDescVuln] = React.useState("");
  const [referencia, setReferencia] = React.useState("");

  // Estado para controlar a nova vulnerabilidade sendo criada
  const [novaVuln, setNovaVuln] = React.useState("");

  // Função para adicionar uma nova vulnerabilidade
  const adicionarNovaVuln = () => {
    if (novaVuln.trim() !== "") {
      const novaVulnerabilidade = {
        value: novaVuln,
        label: novaVuln,
      };
      setVulnerabilidades([...vulnerabilidades, novaVulnerabilidade]);
      setValue(novaVuln); // Define a nova vulnerabilidade como selecionada
      setNovaVuln(""); // Limpa o campo de entrada
      setOpen(false); // Fecha o popover
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Vulnerabilidades</CardTitle>
        <CardDescription>
          Selecione ou crie novas vulnerabilidades encontradas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {value
                ? vulnerabilidades.find(
                    (vulnerabilidade) => vulnerabilidade.value === value
                  )?.label
                : "Lista de Vulns..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Procure a vulnerabilidade" />
              <CommandList>
                <CommandEmpty>
                  <div className="p-2">
                    <p className="text-sm text-muted-foreground mb-2">
                      Nenhuma vulnerabilidade encontrada.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="text"
                        value={novaVuln}
                        onChange={(e) => setNovaVuln(e.target.value)}
                        placeholder="Digite uma nova vulnerabilidade"
                        className="flex-1 px-2 py-1 border rounded-md text-sm"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={adicionarNovaVuln}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CommandEmpty>
                <CommandGroup>
                  {vulnerabilidades.map((vulnerabilidade) => (
                    <CommandItem
                      key={vulnerabilidade.value}
                      value={vulnerabilidade.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                        setDescVuln(vulnerabilidade.desc || "");
                        setReferencia(vulnerabilidade.referencia || "");
                      }}
                    >
                      {vulnerabilidade.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === vulnerabilidade.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {value && (
          <form className="grid w-full items-center gap-4 mt-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="link">Descrição da vulnerabilidade</Label>
              <Textarea
                id="link"
                placeholder="Anote a DESCRIÇÃO da vulnerabilidade"
                value={descVuln}
                onChange={(e) => setDescVuln(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="link">Referência</Label>
              <Textarea
                id="referencia"
                placeholder="Anote as REFERÊNCIAS da vulnerabilidade"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
              />
            </div>
          </form>
        )}
      </CardContent>
    </>
  );
}
