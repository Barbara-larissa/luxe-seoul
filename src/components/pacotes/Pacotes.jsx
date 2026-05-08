import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Pacotes.module.css';

// ✅ IMPORT CORRETO DAS IMAGENS
import seulImg from '../../assets/img/seul.png';
import busanImg from '../../assets/img/busan.png';
import jejuImg from '../../assets/img/jeju.png';

const pacotes = [
  {
    id: 1,
   
    titulo: "IMERSÃO EM SEUL",
    preco: "R$ 8.500",
    desc: "7 dias explorando o coração da Coreia. Inclui hospedagem em Bukchon Hanok Village e tour gastronômico.",
    img: seulImg
  },
  {
    id: 2,

    titulo: "ROTA DOS PALÁCIOS E MAR",
    preco: "R$ 12.900",
    desc: "12 dias entre Seul e Busan. Voo executivo, hotéis 5 estrelas e guia exclusivo durante toda a viagem.",
    img: busanImg
  },
  {
    id: 3,

    titulo: "A JORNADA COMPLETA",
    preco: "R$ 18.200",
    desc: "20 dias de luxo total. De Seul às praias de Jeju, com motorista particular e experiências reais.",
    img: jejuImg
  }
];

export default function Pacotes() {
  const navigate = useNavigate();

  return (
    <div className={styles.page_pacotes}>
      {/* Botão Voltar estiloso */}
      <button className={styles.btn_voltar} onClick={() => navigate('/')}>
        ← VOLTAR
      </button>

      <header className={styles.header}>
        <span className={styles.top_tag}>EXPERIÊNCIAS EXCLUSIVAS</span>
        <h1>NOSSOS <span className={styles.magenta}>PACOTES</span></h1>
      </header>

      <main className={styles.container}>
        {pacotes.map((item, index) => (
          <motion.div 
            key={item.id}
            className={styles.card_pacote}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.img_box}>
              <img src={item.img} alt={item.titulo} />
            </div>
            
            <div className={styles.info_box}>
              <span className={styles.tag_card}>{item.tag}</span>
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
              
              <div className={styles.price_action}>
                <span className={styles.price}>{item.preco}</span>
                <button className={styles.btn_reserva}>RESERVAR AGORA</button>
              </div>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}