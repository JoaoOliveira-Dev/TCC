export const vulnerabilidadesIniciais = [
  {
    value: "XSS",
    label: "XSS",
  },
  {
    value: "Information Disclosure",
    label: "Information Disclosure",
    desc: "Foi identicada uma vulnerabilidade crítica na API de favoritar um cartão, onde informações sensíveis, como credenciais do banco de dados (usuário e senha do MySQL), endereço IP do servidor MySQL e queries executadas, estão sendo retornadas nas respostas das requisições.",
    referencia:
      "- https://owasp.org/www-community/vulnerabilities/Information_disclosure\n- https://portswigger.net/web-security/information-disclosure",
  },
  {
    value: "SQL Injection",
    label: "SQL Injection",
  },
  {
    value: "Remote Code Execution",
    label: "Remote Code Execution",
  },
  {
    value: "CSRF",
    label: "CSRF",
  },
  {
    value: "DoS",
    label: "DoS",
  },
  {
    value: "LFI",
    label: "LFI",
  },
  {
    value: "RFI",
    label: "RFI",
  },
  {
    value: "SSRF",
    label: "SSRF",
  },
  {
    value: "Command Injection",
    label: "Command Injection",
  },
  {
    value: "IDOR",
    label: "IDOR",
  },
  {
    value: "Open Redirect",
    label: "Open Redirect",
  },
  {
    value: "XXE",
    label: "XXE",
  },
];

export const InformationDisclosure = [];
