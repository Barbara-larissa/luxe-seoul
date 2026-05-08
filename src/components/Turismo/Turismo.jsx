import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importe o Hook para navegar
import styles from './Turismo.module.css';

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
  const navigate = useNavigate(); // Inicializa a função de navegação

  return (
    <div className={styles.page_turismo}>
      
      {/* BOTÃO VOLTAR FLUTUANTE */}
      <motion.button 
        className={styles.btn_voltar}
        onClick={() => navigate('/')} // Volta para a página inicial
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 0, 126, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>←</span> VOLTAR
      </motion.button>

      <header className={styles.header_turismo}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}