import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Marcha da Maconha BH",
  description:
    "Conheça nossa política de privacidade, proteção de dados e como tratamos suas informações pessoais.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Conteúdo Principal */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Botão Voltar */}
          <Link
            href="/"
            className="group mb-12 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-emerald-600 uppercase transition-colors hover:text-emerald-700 dark:text-emerald-400"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Voltar para o site
          </Link>

          {/* Cabeçalho */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 dark:bg-emerald-900/30">
                <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                  Proteção de Dados
                </span>
                <h1 className="mt-2 text-4xl leading-tight font-black tracking-tight md:text-6xl">
                  Política de <br />
                  <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    Privacidade
                  </span>
                </h1>
              </div>
            </div>

            <p className="max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
              Última atualização: 15 de janeiro de 2026. Esta política descreve
              como coletamos, usamos e protegemos suas informações pessoais no
              site da Marcha da Maconha BH.
            </p>
          </div>

          {/* Conteúdo */}
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              {/* Seção 1 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  1. Coleta de Informações
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Coletamos informações que você nos fornece voluntariamente
                    quando:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Preenche formulários de contato ou acolhimento
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Inscreve-se para receber newsletters ou atualizações
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Participa de pesquisas ou campanhas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Doa para o movimento através de nossa plataforma
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Seção 2 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  2. Uso das Informações
                </h2>
                <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                  <p>Utilizamos suas informações para:</p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Acolhimento Jurídico e Médico
                      </h3>
                      <p className="text-sm">
                        Processar solicitações de apoio e conectar você com
                        nossa rede de profissionais
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Comunicação
                      </h3>
                      <p className="text-sm">
                        Enviar informações sobre eventos, ações e atualizações
                        do movimento
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Melhoria do Site
                      </h3>
                      <p className="text-sm">
                        Analisar dados anônimos para melhorar a experiência do
                        usuário
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Conformidade Legal
                      </h3>
                      <p className="text-sm">
                        Cumprir obrigações legais e proteger nossos direitos
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Seção 3 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  3. Compartilhamento de Dados
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    <strong>
                      Não vendemos, alugamos ou comercializamos seus dados
                      pessoais.
                    </strong>
                  </p>
                  <p>
                    Compartilhamos informações apenas quando necessário para:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Fornecer serviços de apoio jurídico ou médico (com seu
                        consentimento explícito)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Cumprir obrigações legais ou responder a solicitações
                        governamentais
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Proteger os direitos, propriedade ou segurança do
                        coletivo MMBH
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Seção 4 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  4. Proteção e Segurança
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Implementamos medidas de segurança para proteger suas
                    informações:
                  </p>
                  <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-800/50">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900/30">
                          <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white">
                            Criptografia SSL
                          </h4>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Todas as transmissões de dados são criptografadas
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900/30">
                          <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white">
                            Acesso Restrito
                          </h4>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Apenas membros autorizados têm acesso aos dados
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900/30">
                          <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white">
                            Conformidade LGPD
                          </h4>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Total aderência à Lei Geral de Proteção de Dados
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Seção 5 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  5. Seus Direitos
                </h2>
                <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                  <p>De acordo com a LGPD, você tem direito a:</p>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        title: "Acesso",
                        desc: "Solicitar cópia dos seus dados pessoais",
                      },
                      {
                        title: "Correção",
                        desc: "Retificar informações incompletas ou desatualizadas",
                      },
                      {
                        title: "Exclusão",
                        desc: "Solicitar a eliminação de seus dados pessoais",
                      },
                      {
                        title: "Portabilidade",
                        desc: "Receber seus dados em formato estruturado",
                      },
                      {
                        title: "Revogação",
                        desc: "Retirar consentimento a qualquer momento",
                      },
                      {
                        title: "Oposição",
                        desc: "Opor-se ao tratamento de seus dados",
                      },
                    ].map((direito) => (
                      <div
                        key={direito.title}
                        className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/30"
                      >
                        <h4 className="mb-2 font-bold text-emerald-700 dark:text-emerald-300">
                          {direito.title}
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {direito.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-6 dark:bg-emerald-900/20">
                    <p className="font-medium text-emerald-800 dark:text-emerald-300">
                      Para exercer seus direitos, entre em contato através do
                      nosso formulário de acolhimento ou pelo e-mail:
                      <strong className="ml-2">
                        privacidade@marchadamaconhabh.org
                      </strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* Seção 6 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  6. Cookies e Tecnologias Similares
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Utilizamos cookies para melhorar sua experiência no site:
                  </p>
                  <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-800/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-bold text-zinc-900 dark:text-white">
                          Cookies Essenciais
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Necessários para o funcionamento básico do site
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-bold text-zinc-900 dark:text-white">
                          Cookies de Análise
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Coletam informações anônimas para análise de uso
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-bold text-zinc-900 dark:text-white">
                          Cookies de Preferência
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Lembram suas escolhas (como tema dark/light)
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Você pode controlar o uso de cookies através das
                    configurações do seu navegador.
                  </p>
                </div>
              </section>

              {/* Seção 7 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  7. Alterações nesta Política
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Podemos atualizar esta política periodicamente. A versão
                    mais recente estará sempre disponível nesta página, com a
                    data de última atualização no topo.
                  </p>
                  <p>
                    Recomendamos que você revise esta política regularmente para
                    se manter informado sobre como protegemos suas informações.
                  </p>
                </div>
              </section>

              {/* Seção 8 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  8. Contato
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Para questões sobre esta política de privacidade ou sobre o
                    tratamento de seus dados pessoais, entre em contato:
                  </p>
                  <div className="rounded-xl bg-emerald-50 p-6 dark:bg-emerald-900/20">
                    <div className="space-y-3">
                      <p className="font-medium text-emerald-800 dark:text-emerald-300">
                        <strong>
                          Coletivo MMBH - Encarregado de Proteção de Dados
                        </strong>
                      </p>
                      <p className="text-emerald-700 dark:text-emerald-400">
                        📧 privacidade@marchadamaconhabh.org
                      </p>
                      <p className="text-emerald-700 dark:text-emerald-400">
                        📍 Belo Horizonte - Minas Gerais
                      </p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-500">
                        Resposta em até 15 dias úteis
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Rodapé do Documento */}
            <div className="mt-16 rounded-2xl bg-linear-to-r from-emerald-50 to-green-50 p-8 dark:from-zinc-800/50 dark:to-zinc-800/30">
              <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
                Esta política foi elaborada em conformidade com a Lei
                13.709/2018 (LGPD) e reflete nosso compromisso com a
                transparência e proteção de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
