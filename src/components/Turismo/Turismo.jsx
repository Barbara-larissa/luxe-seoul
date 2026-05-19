import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Turismo.module.css';
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';

// Importando as imagens conforme estão na sua pasta
import seulImg from '../../assets/img/seul.png';
import busanImg from '../../assets/img/busan.png';
import jejuImg from '../../assets/img/jeju.png';

const cidades = [
  {
    id: 1,
    cidade: "SEUL: A DINASTIA MILENAR",
    desc: "Seul, o coração do poder de Joseon, para os 5.000 anos. Gyeongbokgung tem o brilho das cerejeiras.",
    img: seulImg
  },
  {
    id: 2,
    cidade: "BUSAN: A COSTA RESILIENTE",
    desc: "Busan é resiliência e cultura de mar. Das suas portas ao brilho neon que pulsa como as ondas.",
    img: busanImg
  },
  {
    id: 3,
    cidade: "JEJU: A ILHA DOS DEUSES",
    desc: "Vulcânica, majestosa e coberta de mistérios. Onde o fogo encontrou o mar.",
    img: jejuImg
  }
];

export default function Turismo() {
  const navigate = useNavigate();

  return (
    <>
      {/* BOTÃO FORA DA PÁGINA */}
      <BotaoVoltar />

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
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
            >
              <div className={styles.img_wrapper}>
                <img src={item.img} alt={item.cidade} />
              </div>

              <div className={styles.card_content}>
                <span className={styles.tag_text}>
                  {item.tag}
                </span>

                <h3>{item.cidade}</h3>

                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </>
  );
}