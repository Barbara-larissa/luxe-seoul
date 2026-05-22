import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Turismo.module.css';
import Header from '../Header/Header';

import seulImg from '../../assets/img/seul.png';
import busanImg from '../../assets/img/busan.png';
import jejuImg from '../../assets/img/jeju.png';

const cidades = [
  {
    id: 1,
    cidade: "SEUL: A DINASTIA MILENAR",
    desc: "Seul, o coração do poder de Joseon, para os 5.000 anos. Gyeongbokgung tem o brilho das cerejeiras.",
    img: seulImg,
    historia: `Seul é uma das cidades mais antigas do mundo, com uma história que remonta a cerca de 2.000 anos. A área às margens do Rio Han foi habitada desde aproximadamente 4.000 a.C., mas foi em 18 a.C. que a cidade ganhou seu primeiro registro histórico com o nome de Wiryeseong, como capital do Reino de Baekje, um dos Três Reinos da Coreia.

Ao longo dos séculos, o controle da região passou de Baekje para Goguryeo no século V e depois para Silla no século VI, refletindo as intensas disputas entre os reinos pela posição estratégica da cidade. No século XI, durante a dinastia Goryeo, um palácio de verão foi construído no local, sendo chamado de "Capital do Sul".

O grande salto aconteceu com a dinastia Joseon (1392–1897), quando Seul — então chamada de Hanyang e depois Hanseong — tornou-se a capital oficial do reino. Foi nesse período que o magnífico Palácio Gyeongbokgung foi erguido, no século XIV, servindo como residência real até 1592. A cidade era cercada por uma imponente muralha de pedra maciça construída em formato circular para proteger seus habitantes.

Após a colonização japonesa (1910–1945), a Guerra da Coreia (1950–1953) e a reconstrução nas décadas seguintes, Seul transformou-se em uma das metrópoles mais modernas e populosas do mundo, com mais de 25 milhões de habitantes em sua região metropolitana — a segunda maior área metropolitana do planeta, atrás apenas de Tóquio.`
  },
  {
    id: 2,
    cidade: "BUSAN: A COSTA RESILIENTE",
    desc: "Busan é resiliência e cultura de mar. Das suas portas ao brilho neon que pulsa como as ondas.",
    img: busanImg,
    historia: `Busan é a segunda maior cidade da Coreia do Sul, com mais de 3,5 milhões de habitantes, localizada no extremo sudeste da península coreana, entre o Mar do Japão e o Mar da China Oriental. Seu nome, em sino-coreano, significa "Montanha Chaleira", uma referência ao antigo nome do Monte Hwang Young, a montanha mais representativa da região.

A história de Busan remonta a milhares de anos, quando já era um importante porto durante o período dos Três Reinos da Coreia. Ao longo dos séculos, a cidade serviu como ponto crucial de contato comercial e diplomático com o Japão e outras partes da Ásia, influenciando profundamente sua cultura e desenvolvimento.

Durante a Guerra da Coreia (1950–1953), Busan ganhou papel central na história do país: foi a única grande cidade não ocupada pelas forças norte-coreanas, servindo como capital provisória e refúgio para refugiados de todo o país. Essa mistura de pessoas de diferentes regiões moldou a cultura única e diversificada que Busan tem até hoje.

Conhecida como a "Cidade do Cinema", Busan sedia desde 1996 o Festival Internacional de Cinema de Busan, um dos mais importantes da Ásia. Entre seus tesouros estão a Praia de Haeundae, o Templo Budista Beomeosa, o Templo Haedong Yonggungsa à beira-mar, o vibrante Mercado Jagalchi — o maior mercado de frutos do mar da Coreia — e o Gamcheon Culture Village, o colorido bairro artístico conhecido como a "Santorini da Coreia".`
  },
  {
    id: 3,
    cidade: "JEJU: A ILHA DOS DEUSES",
    desc: "Vulcânica, majestosa e coberta de mistérios. Onde o fogo encontrou o mar.",
    img: jejuImg,
    historia: `Jeju é a maior ilha da Coreia do Sul, com aproximadamente 1.846 km², localizada a 130 km ao sul da Península Coreana, no Estreito da Coreia. Sua origem é inteiramente vulcânica: a ilha foi formada por erupções vulcânicas iniciadas há cerca de 2 milhões de anos, durante os períodos Terciário e Quaternário, e consiste principalmente em basalto e lava solidificada.

No centro da ilha ergue-se o Monte Hallasan, um vulcão adormecido com 1.950 metros de altitude — a montanha mais alta de toda a Coreia do Sul. Ao seu redor existem cerca de 360 vulcões de menor dimensão. A última atividade vulcânica registada na ilha ocorreu há aproximadamente 800 anos.

Em 2007, a UNESCO classificou a Ilha Vulcânica de Jeju e seus Tubos de Lava como Patrimônio Natural Mundial, reconhecendo sua beleza incomparável e suas formações geológicas únicas. Em 2012, Jeju foi eleita uma das Novas Sete Maravilhas da Natureza. Os principais sítios protegidos incluem o Parque Nacional do Hallasan, o Pico Seongsan Ilchulbong — formado por erupções submarinas há cerca de 5.000 anos — e o extenso sistema de tubos de lava do Geomunoreum.

Jeju também é famosa pelas Haenyeo, as mulheres mergulhadoras que há séculos mergulham em apneia para colher frutos do mar, uma tradição reconhecida como Patrimônio Imaterial da Humanidade pela UNESCO. Ao longo da história, a ilha serviu como local de descanso e refúgio para os reis da dinastia Joseon, desenvolvendo ao longo do tempo cultura, tradições e até dialeto próprios.`
  }
];

export default function Turismo() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

  return (
    <>
      <Header />

      <div className={styles.page_turismo}>
        <header className={styles.header_turismo}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.page_title}
          >
            EXPLORE A HISTÓRIA DA COREIA
          </motion.h2>
        </header>

        <main className={styles.cards_container}>
          {cidades.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.turismo_card}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.img_wrapper}>
                <img src={item.img} alt={item.cidade} />
              </div>

              <div className={styles.card_content}>
                <span className={styles.tag_text}>{item.tag}</span>
                <h3>{item.cidade}</h3>
                <p>{item.desc}</p>
                <button
                  className={styles.btn_saiba_mais}
                  onClick={() => setCidadeSelecionada(item)}
                >
                  Saiba Mais
                </button>
              </div>
            </motion.div>
          ))}
        </main>
      </div>

      {/* MODAL DE HISTÓRIA */}
      <AnimatePresence>
        {cidadeSelecionada && (
          <motion.div
            className={styles.modal_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCidadeSelecionada(null)}
          >
            <motion.div
              className={styles.modal_content}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.btn_fechar}
                onClick={() => setCidadeSelecionada(null)}
              >
                ✕
              </button>
              <h2 className={styles.modal_titulo}>{cidadeSelecionada.cidade}</h2>
              <div className={styles.modal_img_wrapper}>
                <img src={cidadeSelecionada.img} alt={cidadeSelecionada.cidade} />
              </div>
              <div className={styles.modal_texto}>
                {cidadeSelecionada.historia.split('\n\n').map((paragrafo, i) => (
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}