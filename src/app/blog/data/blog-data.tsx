export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogData: Post[] = [
  {
    id: 1,
    title: "Justiça Social e a Luta Antiproibicionista em BH",
    excerpt:
      "Entenda como a guerra às drogas impacta desproporcionalmente as periferias da capital mineira e por que a regulamentação é uma questão de direitos humanos.",
    content:
      "A proibição da cannabis no Brasil nunca foi sobre a planta, mas sim sobre o controle de corpos e territórios. Em Belo Horizonte, os dados de segurança pública revelam um padrão de seletividade penal que atinge prioritariamente a juventude negra e periférica. Discutir a regulamentação é, antes de tudo, discutir uma reparação histórica e a implementação de políticas públicas que priorizem a vida em vez do encarceramento em massa. Nossa luta busca transformar o cenário atual através de educação e incidência política direta.",
    date: "12 Jan, 2026",
    author: "Coletivo MMBH",
    category: "Ativismo",
    image: "/images/banners/1.jpg", // Imagem de manifestação/social
  },
  {
    id: 2,
    title: "Habeas Corpus para Cultivo Doméstico: Guia Prático",
    excerpt:
      "Aprenda os passos fundamentais para buscar segurança jurídica no seu tratamento e garantir o direito constitucional à saúde através do auto-cultivo.",
    content:
      "O avanço das decisões judiciais favoráveis ao cultivo doméstico para fins terapêuticos tem sido uma vitória constante para os pacientes mineiros. O processo envolve a obtenção de um laudo médico detalhado, a prescrição da cannabis e a comprovação da necessidade do tratamento contínuo. Nossa rede de apoio jurídico destaca que o Habeas Corpus preventivo é a ferramenta mais segura para evitar intervenções policiais indevidas. É fundamental que o paciente mantenha um registro rigoroso do seu cultivo e siga as orientações de especialistas para garantir a proteção plena perante a lei.",
    date: "10 Jan, 2026",
    author: "Depto. Jurídico MMBH",
    category: "Jurídico",
    image: "/images/banners/2.jpg", // Imagem relacionada a legalidade/justiça
  },
  {
    id: 3,
    title: "Cannabis na Psiquiatria: Redução de Danos e Saúde Mental",
    excerpt:
      "Como o uso terapêutico de canabinoides tem auxiliado no tratamento de ansiedade e depressão sob uma perspectiva de cuidado ético e científico.",
    content:
      "A ciência moderna tem comprovado o que muitos usuários já relatam na prática: o sistema endocanabinoide desempenha um papel crucial na regulação do humor e do estresse. Na psiquiatria antiproibicionista, trabalhamos com a integração do CBD e do THC como ferramentas complementares à terapia tradicional. O foco é sempre a redução de danos, buscando a menor dosagem eficaz e o equilíbrio biológico do paciente. É importante desmistificar o uso da planta dentro dos consultórios médicos de Belo Horizonte para que mais pessoas tenham acesso a uma alternativa segura e menos invasiva que os fármacos sintéticos convencionais.",
    date: "08 Jan, 2026",
    author: "Dra. Marina Silva",
    category: "Saúde",
    image: "/images/blog/1.jpg", // Imagem médica/terapêutica
  },
  {
    id: 4,
    title: "A História da Marcha: Desde 2008 Ocupando as Ruas",
    excerpt:
      "Uma retrospectiva visual e política dos quase 20 anos de movimento em Minas Gerais e os desafios para a edição deste ano.",
    content:
      "O que começou como um pequeno grupo de ativistas na Praça da Estação em 2008 transformou-se em um dos maiores movimentos sociais de Belo Horizonte. Ao longo desses anos, enfrentamos repressão, censura e preconceito, mas nunca recuamos na defesa da liberdade. A Marcha da Maconha BH não é apenas um evento anual, é um organismo vivo que atua em vilas, favelas e câmaras municipais. Relembrar nossa trajetória é entender que a mudança nas leis é consequência direta da pressão popular e da ocupação consciente do espaço público com pautas sérias e urgentes.",
    date: "05 Jan, 2026",
    author: "Arquivo Histórico MMBH",
    category: "História",
    image: "/images/blog/4.jpg", // Imagem histórica/arquivo
  },
  {
    id: 5,
    title: "Redução de Danos: Práticas para um Uso Consciente",
    excerpt:
      "Dicas fundamentais sobre pureza, métodos de consumo e hidratação para quem opta pelo uso adulto da planta de forma responsável.",
    content:
      "Informação é a melhor ferramenta de saúde. A estratégia de Redução de Danos (RD) reconhece que o consumo de substâncias faz parte da sociedade e busca minimizar riscos em vez de apenas punir. Para quem faz uso da cannabis, isso inclui o uso de filtros e piteiras longas para resfriar a fumaça, a escolha de vaporizadores de ervas secas para proteger os pulmões e a atenção especial à procedência do material. Estar bem hidratado e em um ambiente seguro também são pilares para uma experiência positiva. Nossa cartilha de acolhimento reforça que o autocuidado é um ato político contra o estigma do 'usuário problemático'.",
    date: "02 Jan, 2026",
    author: "Núcleo de RD",
    category: "Redução de Danos",
    image: "/images/blog/5.jpg", // Imagem educativa/informativa
  },
  {
    id: 6,
    title: "Cannabis e a Luta Antimanicomial em Minas Gerais",
    excerpt:
      "O papel da regulamentação na reforma psiquiátrica e o fim do modelo de comunidades terapêuticas isoladas.",
    content:
      "Minas Gerais tem uma tradição histórica de luta antimanicomial, e a cannabis está inserida nesse contexto como uma alternativa ao isolamento forçado. Muitas comunidades terapêuticas hoje funcionam como novos manicômios, muitas vezes substituindo o cuidado científico por doutrinas religiosas e privação de liberdade. Defendemos que o cuidado em saúde mental deve ser feito em liberdade, com base territorial e utilizando todas as ferramentas terapêuticas disponíveis, inclusive a cannabis. A regulamentação enfraquece o modelo punitivista e fortalece o cuidado humanizado em redes de atenção psicossocial abertas e democráticas.",
    date: "28 Dez, 2025",
    author: "Fórum de Saúde Mental",
    category: "Social",
    image: "/images/blog/6.jpg", // Imagem de comunidade/social
  },
  {
    id: 7,
    title: "Cultivo Urbano Sustentável em Belo Horizonte",
    excerpt:
      "Técnicas de cultivo orgânico e sustentável para a produção doméstica na realidade urbana mineira.",
    content:
      "O cultivo urbano de cannabis não é apenas uma questão de acesso, mas também de sustentabilidade. Em Belo Horizonte, adaptamos técnicas de permacultura para pequenos espaços, utilizando iluminação LED eficiente, sistemas de irrigação por gotejamento e controle biológico de pragas. Este guia prático ensina como transformar varandas, quintais e até paredes em pequenas hortas medicinais, sempre respeitando os ciclos naturais da planta e priorizando métodos orgânicos. O cultivo próprio é um ato de autonomia e resistência, que conecta o usuário com o processo terapêutico desde a semente até o consumo final.",
    date: "15 Jan, 2026",
    author: "Coletivo Cultivo BH",
    category: "Cultivo",
    image: "/images/blog/7.jpg", // Imagem de cultivo/plantas
  },
  {
    id: 8,
    title: "Mercado Canábico Inclusivo: Economia e Trabalho Digno",
    excerpt:
      "Como a regulamentação pode gerar empregos e oportunidades econômicas para comunidades historicamente marginalizadas.",
    content:
      "A regulamentação da cannabis representa não apenas uma mudança social, mas também uma revolução econômica. Em Minas Gerais, estima-se que um mercado legal possa gerar mais de 10 mil empregos diretos em cultivo, processamento, pesquisa e varejo. Nossa proposta defende que ao menos 30% das licenças sejam destinadas a cooperativas de produtores familiares, comunidades tradicionais e empreendedores das periferias. Este modelo inclusivo busca reparar os danos da guerra às drogas através da criação de riqueza e trabalho digno, com foco na economia solidária e no desenvolvimento local sustentável.",
    date: "18 Jan, 2026",
    author: "Coletivo Econômico MMBH",
    category: "Economia",
    image: "/images/blog/8.jpg", // Imagem de trabalho/comunidade
  },
  {
    id: 9,
    title: "Cannabis e Arte: Expressão Cultural e Política",
    excerpt:
      "A relação histórica entre a cannabis e as expressões artísticas brasileiras, do samba ao hip-hop mineiro.",
    content:
      "A cannabis sempre esteve presente na cultura brasileira, influenciando ritmos, letras e movimentos artísticos. Em Belo Horizonte, a planta aparece como tema e inspiração em diversas manifestações culturais, desde as rodas de samba até o hip-hop das periferias. Este texto explora como a proibição também é uma censura cultural e como a regulamentação pode fortalecer a cena artística local. A arte, assim como a cannabis, é uma forma de resistência e expressão da identidade de um povo, e ambas merecem ser celebradas e protegidas pelo Estado.",
    date: "20 Jan, 2026",
    author: "Coletivo Cultural MMBH",
    category: "Cultura",
    image: "/images/blog/9.jpg", // Imagem artística/cultural
  },
  {
    id: 10,
    title: "Mulheres na Luta Antiproibicionista",
    excerpt:
      "O protagonismo feminino na Marcha da Maconha BH e os desafios específicos das mulheres no movimento.",
    content:
      "As mulheres sempre estiveram na linha de frente da luta antiproibicionista, muitas vezes enfrentando duplo estigma: o de serem usuárias e o de transgredirem os papéis de gênero tradicionalmente atribuídos. Na Marcha da Maconha BH, criamos espaços seguros e coletivos de apoio para discutir questões como o uso medicinal para condições ginecológicas, o cuidado com a saúde mental materna e a proteção contra a violência obstétrica. Este texto celebra a trajetória das mulheres no movimento e reforça nosso compromisso com uma luta interseccional que combata todas as formas de opressão.",
    date: "22 Jan, 2026",
    author: "Coletivo Feminista MMBH",
    category: "Gênero",
    image: "/images/blog/10.jpg", // Imagem de mulheres/coletivo
  },
  {
    id: 11,
    title: "Pesquisa Científica e Inovação em Minas Gerais",
    excerpt:
      "Os avanços da pesquisa com cannabis nas universidades mineiras e as oportunidades para o desenvolvimento científico.",
    content:
      "Minas Gerais tem se destacado como um polo de pesquisa canábica no Brasil, com universidades como a UFMG, UFV e UFJF desenvolvendo estudos pioneiros em farmacologia, agronomia e medicina. Este artigo mapeia as principais linhas de pesquisa em andamento no estado, desde o desenvolvimento de cultivares adaptados ao nosso clima até estudos clínicos com pacientes reumáticos e oncológicos. A regulamentação é fundamental para que a ciência mineira possa competir em igualdade com centros internacionais e gerar soluções terapêuticas acessíveis para a população brasileira.",
    date: "25 Jan, 2026",
    author: "Rede de Pesquisa MG",
    category: "Ciência",
    image: "/images/blog/11.jpg", // Imagem científica/laboratório
  },
];
