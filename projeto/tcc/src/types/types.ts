export interface Alvo {
  id: string;
  link: string;
}

export interface VulnType {
  id: string | null; // Pode ser nulo inicialmente
  nome: string;
  descVuln: string;
  ativos: string;
  referencia: string;
  impacto: string;
  reparo: string;
  poc: string;
  severidade: string;
}
