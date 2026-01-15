import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ArrowLeft, FileText, Scale } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos e Condições | Marcha da Maconha BH",
  description:
    "Termos de uso do site e condições para participação nas atividades do movimento.",
};

export default function TermosCondicoesPage() {
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
                <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                  Acordo Legal
                </span>
                <h1 className="mt-2 text-4xl leading-tight font-black tracking-tight md:text-6xl">
                  Termos e <br />
                  <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    Condições
                  </span>
                </h1>
              </div>
            </div>

            <p className="max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
              Última atualização: 15 de janeiro de 2026. Ao acessar e usar este
              site, você concorda com estes termos e condições.
            </p>
          </div>

          {/* Conteúdo */}
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
              {/* Seção 1 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <div className="mb-6 flex items-center gap-3">
                  <Scale className="h-6 w-6 text-emerald-500" />
                  <h2 className="text-2xl font-black text-zinc-900 dark:text-white">
                    1. Aceitação dos Termos
                  </h2>
                </div>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Ao acessar e usar o site da Marcha da Maconha Belo Horizonte
                    (MMBH), você concorda em cumprir e estar vinculado a estes
                    Termos e Condições.
                  </p>
                  <p>
                    Se você não concordar com qualquer parte destes termos, não
                    deverá utilizar nosso site ou serviços.
                  </p>
                  <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-800/50">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      <strong>Importante:</strong> Estes termos se aplicam a
                      todos os visitantes, usuários e outras pessoas que acessam
                      ou usam o site.
                    </p>
                  </div>
                </div>
              </section>

              {/* Seção 2 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  2. Uso do Site
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Você concorda em usar o site apenas para fins legítimos e de
                    acordo com estes termos:
                  </p>

                  <div className="space-y-6">
                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Permitido
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>
                            Acessar informações educativas sobre
                            antiproibicionismo
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>Solicitar acolhimento jurídico ou médico</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>Participar de campanhas e mobilizações</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>
                            Compartilhar conteúdo educativo (com atribuição)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl bg-rose-50/50 p-6 dark:bg-rose-900/10">
                      <h3 className="mb-3 text-lg font-bold text-rose-700 dark:text-rose-300">
                        Proibido
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                          <span>
                            Uso para atividades ilegais ou não autorizadas
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                          <span>
                            Distribuição de conteúdo ofensivo ou discriminatório
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                          <span>Tentativas de violar a segurança do site</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                          <span>Uso comercial não autorizado do conteúdo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Seção 3 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  3. Propriedade Intelectual
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Todo o conteúdo do site, incluindo textos, imagens,
                    logotipos, gráficos e design, é propriedade do Coletivo MMBH
                    ou de seus colaboradores e está protegido por leis de
                    direitos autorais.
                  </p>

                  <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-800/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-bold text-zinc-900 dark:text-white">
                          Licença Creative Commons
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          O conteúdo educativo está licenciado sob Creative
                          Commons Attribution-NonCommercial-ShareAlike 4.0
                          International.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-bold text-zinc-900 dark:text-white">
                          Você pode:
                        </h4>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>
                            • Compartilhar — copiar e redistribuir o material
                          </li>
                          <li>
                            • Adaptar — remixar, transformar e construir sobre o
                            material
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-bold text-zinc-900 dark:text-white">
                          Sob as seguintes condições:
                        </h4>
                        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <li>
                            • Atribuição — Você deve dar o crédito apropriado
                          </li>
                          <li>
                            • NãoComercial — Não pode usar o material para fins
                            comerciais
                          </li>
                          <li>
                            • Compartilhamento pela mesma licença — Se remixar,
                            deve distribuir sob mesma licença
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Seção 4 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  4. Serviços de Acolhimento
                </h2>
                <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Os serviços de acolhimento oferecidos através deste site
                    são:
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Caráter Voluntário
                      </h3>
                      <p className="text-sm">
                        Prestados por profissionais voluntários do movimento,
                        sem custo para os usuários
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Não Substitui Aconselhamento
                      </h3>
                      <p className="text-sm">
                        Não constitui aconselhamento jurídico ou médico formal
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Sigilo Garantido
                      </h3>
                      <p className="text-sm">
                        Todas as informações são tratadas com confidencialidade
                        absoluta
                      </p>
                    </div>

                    <div className="rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/10">
                      <h3 className="mb-3 text-lg font-bold text-emerald-700 dark:text-emerald-300">
                        Responsabilidade
                      </h3>
                      <p className="text-sm">
                        O usuário é responsável por seguir as orientações
                        recebidas
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-amber-50/50 p-6 dark:bg-amber-900/10">
                    <p className="font-medium text-amber-800 dark:text-amber-300">
                      <strong>Aviso Importante:</strong> Em caso de emergência
                      médica ou jurídica, busque imediatamente atendimento
                      profissional especializado.
                    </p>
                  </div>
                </div>
              </section>

              {/* Seção 5 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  5. Limitação de Responsabilidade
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>O Coletivo MMBH não será responsável por:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Qualquer dano direto, indireto, incidental ou
                        consequente resultante do uso do site
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Interrupções no serviço por motivos técnicos ou de
                        manutenção
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Conteúdo de sites de terceiros vinculados ao nosso site
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        Ações tomadas com base em informações disponíveis no
                        site
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Seção 6 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  6. Participação em Atividades
                </h2>
                <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Ao participar de atividades organizadas pelo MMBH, você
                    concorda com:
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: "Conduta Ética",
                        items: [
                          "Respeito a todos os participantes",
                          "Não discriminação de qualquer tipo",
                          "Uso responsável de substâncias",
                        ],
                      },
                      {
                        title: "Segurança",
                        items: [
                          "Seguir orientações dos organizadores",
                          "Cuidado com equipamentos coletivos",
                          "Respeito ao espaço público",
                        ],
                      },
                      {
                        title: "Imagens e Vídeos",
                        items: [
                          "Autorização para uso de imagem",
                          "Compartilhamento educativo",
                          "Direito à privacidade",
                        ],
                      },
                      {
                        title: "Responsabilidade",
                        items: [
                          "Por sua própria segurança",
                          "Por seus pertences pessoais",
                          "Por suas ações e decisões",
                        ],
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-800/50"
                      >
                        <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                          {item.title}
                        </h3>
                        <ul className="space-y-2">
                          {item.items.map((subitem, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                {subitem}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Seção 7 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  7. Alterações nos Termos
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer
                    momento. As alterações entrarão em vigor imediatamente após
                    sua publicação no site.
                  </p>
                  <p>
                    É sua responsabilidade revisar periodicamente estes termos
                    para se manter informado sobre as atualizações.
                  </p>
                  <div className="rounded-xl bg-zinc-50 p-6 dark:bg-zinc-800/50">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      O uso continuado do site após a publicação de alterações
                      constitui aceitação dos novos termos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Seção 8 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  8. Lei Aplicável e Jurisdição
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Estes termos são regidos e interpretados de acordo com as
                    leis da República Federativa do Brasil.
                  </p>
                  <p>
                    Qualquer disputa relacionada a estes termos será submetida à
                    jurisdição exclusiva dos tribunais de Belo Horizonte, Minas
                    Gerais.
                  </p>
                  <div className="rounded-xl bg-emerald-50 p-6 dark:bg-emerald-900/20">
                    <p className="font-medium text-emerald-800 dark:text-emerald-300">
                      Para questões sobre estes termos, entre em contato através
                      do nosso formulário de acolhimento ou pelo e-mail:{" "}
                      <strong>termos@marchadamaconhabh.org</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* Seção 9 */}
              <section className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h2 className="mb-6 text-2xl font-black text-zinc-900 dark:text-white">
                  9. Disposições Gerais
                </h2>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        <strong>Integralidade:</strong> Estes termos constituem
                        o acordo completo entre você e o MMBH.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        <strong>Renúncia:</strong> A falha em exercer qualquer
                        direito não constitui renúncia.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        <strong>Divisibilidade:</strong> Se qualquer disposição
                        for considerada inválida, as demais permanecem válidas.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>
                        <strong>Transferência:</strong> Você não pode transferir
                        seus direitos sob estes termos.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Rodapé do Documento */}
            <div className="mt-16 rounded-2xl bg-linear-to-r from-emerald-50 to-green-50 p-8 dark:from-zinc-800/50 dark:to-zinc-800/30">
              <div className="text-center">
                <p className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                  Ao usar este site, você confirma que leu, compreendeu e
                  concorda com estes Termos e Condições.
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Estas condições foram elaboradas para garantir uma experiência
                  segura e respeitosa para todos os participantes do movimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
