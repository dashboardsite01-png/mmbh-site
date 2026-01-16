// app/(pages)/acolhimento/data/acolhimento-data.ts
export const servicosData = [
  {
    id: "juridico",
    titulo: "Apoio Jurídico",
    descricao:
      "Defesa especializada em casos de cannabis. Habeas corpus preventivo, defesa criminal e acompanhamento processual.",
    descricaoLonga:
      "Oferecemos suporte jurídico especializado para pessoas criminalizadas por cultivo, porte ou uso de cannabis. Nossa rede de advogados trabalha com estratégias de defesa que consideram a perspectiva antiproibicionista e os direitos humanos.",
    icon: "⚖️",
    cor: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    features: [
      "Habeas Corpus preventivo para cultivo",
      "Defesa em processos criminais",
      "Acompanhamento de inquéritos policiais",
      "Orientação sobre direitos durante abordagens",
      "Conectamos com advogados especializados",
    ],
    formularioLink: "https://forms.gle/juridico-mmbh",
    whatsappLink:
      "https://wa.me/5531999999999?text=Preciso%20de%20apoio%20jur%C3%ADdico%20sobre%20cannabis",
  },
  {
    id: "saude",
    titulo: "Acolhimento em Saúde",
    descricao:
      "Rede de profissionais de saúde informados sobre cannabis medicinal. Acesso a tratamento humanizado e redução de danos.",
    descricaoLonga:
      "Conectamos pacientes com médicos, psicólogos e outros profissionais de saúde que trabalham com uma abordagem antiproibicionista. Oferecemos suporte para acesso à cannabis medicinal, redução de danos e cuidado integral.",
    icon: "❤️",
    cor: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    features: [
      "Rede de médicos prescritores",
      "Acompanhamento psicológico",
      "Orientação sobre redução de danos",
      "Suporte para acesso via SUS",
      "Informação científica sobre cannabis medicinal",
    ],
    formularioLink: "https://forms.gle/saude-mmbh",
    whatsappLink:
      "https://wa.me/5531999999999?text=Preciso%20de%20acolhimento%20em%20sa%C3%BAde%20sobre%20cannabis",
  },
  {
    id: "psicologia",
    titulo: "Apoio Psicológico",
    descricao:
      "Atendimento psicológico com perspectiva antiproibicionista. Cuidado para lidar com estigma, ansiedade e trauma.",
    descricaoLonga:
      "Oferecemos apoio psicológico para pessoas afetadas pelo proibicionismo. Trabalhamos com redução de danos, superação do estigma e cuidado com a saúde mental em um contexto de criminalização.",
    icon: "🧠",
    cor: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    features: [
      "Atendimento com perspectiva antiproibicionista",
      "Suporte para lidar com o estigma",
      "Cuidado com saúde mental de usuários",
      "Orientação para familiares",
      "Grupos de apoio e escuta coletiva",
    ],
    formularioLink: "https://forms.gle/psicologia-mmbh",
    whatsappLink:
      "https://wa.me/5531999999999?text=Preciso%20de%20apoio%20psicol%C3%B3gico%20sobre%20cannabis",
  },
  {
    id: "social",
    titulo: "Apoio Social",
    descricao:
      "Rede de solidariedade para situações de vulnerabilidade. Acolhimento emergencial e apoio comunitário.",
    descricaoLonga:
      "Oferecemos apoio social para pessoas em situação de vulnerabilidade devido ao proibicionismo. Conectamos com redes de solidariedade, oferecemos acolhimento emergencial e ajudamos na reconstrução de projetos de vida.",
    icon: "🤝",
    cor: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    features: [
      "Acolhimento emergencial",
      "Rede de solidariedade",
      "Orientação sobre direitos sociais",
      "Apoio para reconstrução de vida",
      "Conectamos com organizações parceiras",
    ],
    formularioLink: "https://forms.gle/social-mmbh",
    whatsappLink:
      "https://wa.me/5531999999999?text=Preciso%20de%20apoio%20social%20relacionado%20%C3%A0%20cannabis",
  },
];

export const perguntasFrequentes = [
  {
    pergunta: "Como funciona o acolhimento?",
    resposta:
      "Após entrar em contato, nossa equipe faz uma triagem inicial para entender sua situação. Em seguida, conectamos você com o profissional ou serviço mais adequado dentro da nossa rede. Todo o processo respeita sua privacidade e sigilo.",
  },
  {
    pergunta: "É gratuito?",
    resposta:
      "Sim, todos os nossos serviços de acolhimento são gratuitos. Somos um movimento social independente e nosso trabalho é baseado na solidariedade e apoio mútuo.",
  },
  {
    pergunta: "Meus dados estão protegidos?",
    resposta:
      "Sim, seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados). Todas as informações são tratadas com sigilo absoluto. Não compartilhamos dados sem sua autorização explícita.",
  },
  {
    pergunta: "Quanto tempo leva para ser atendido?",
    resposta:
      "Fazemos o possível para responder em até 48 horas. Em casos de emergência, temos um protocolo de resposta mais rápida através do nosso WhatsApp.",
  },
  {
    pergunta: "Atendem online?",
    resposta:
      "Sim, a maioria dos atendimentos pode ser feita online. Também temos encontros presenciais em Belo Horizonte quando necessário e seguro.",
  },
  {
    pergunta: "Posso ajudar como voluntário?",
    resposta:
      "Sim! Estamos sempre ampliando nossa rede. Se você é profissional da saúde, direito ou áreas sociais e quer contribuir, entre em contato conosco.",
  },
];

export const depoimentosData = [
  {
    nome: "Carlos S.",
    idade: 34,
    servico: "Jurídico",
    texto:
      "Quando fui preso por cultivo caseiro, pensei que estava sozinho. O GT Jurídico da Marcha não só me ajudou com o HC, mas me deu esperança. Hoje sou voluntário do movimento.",
    data: "Março 2023",
  },
  {
    nome: "Ana L.",
    idade: 42,
    servico: "Saúde",
    texto:
      "Minha filha tem epilepsia refratária. Graças à rede de acolhimento, encontrei um médico que prescreveu cannabis medicinal. Hoje ela tem uma qualidade de vida que nunca imaginei possível.",
    data: "Julho 2023",
  },
  {
    nome: "Rafael M.",
    idade: 29,
    servico: "Psicológico",
    texto:
      "O estigma do uso me deixou com ansiedade severa. O apoio psicológico do movimento me ajudou a entender que não há vergonha em cuidar da minha saúde mental.",
    data: "Novembro 2023",
  },
  {
    nome: "Tereza C.",
    idade: 56,
    servico: "Social",
    texto:
      "Perdi meu filho para a guerra às drogas. O acolhimento social me deu força para seguir em frente e hoje luto para que outras mães não passem pelo que passei.",
    data: "Janeiro 2024",
  },
];
