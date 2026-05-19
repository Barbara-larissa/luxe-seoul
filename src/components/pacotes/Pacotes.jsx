import { motion } from 'framer-motion';
import styles from './Pacotes.module.css';

// ✅ IMPORT DO SEU COMPONENTE GLOBAL
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar'; 

// ✅ IMPORT DAS IMAGENS
import seulImg from '../../assets/img/seul.png';
import busanImg from '../../assets/img/busan.png';
import jejuImg from '../../assets/img/jeju.png';

const pacotes = [
  {
    id: 1,
    titulo: "IMERSÃO EM SEUL",
    preco: "8.500",
    base: "por pessoa",
    desc: "7 dias explorando o coração da Coreia. Inclui hospedagem em Bukchon Hanok Village e tour gastronômico.",
    img: seulImg
  },
  {
    id: 2,
    titulo: "ROTA DOS PALÁCIOS E MAR",
    preco: "12.900",
    base: "por pessoa",
    desc: "12 dias entre Seul e Busan. Voo executivo, hotéis 5 estrelas e guia exclusivo durante toda a viagem.",
    img: busanImg
  },
  {
    id: 3,
    titulo: "A JORNADA COMPLETA",
    preco: "18.200",
    base: "por pessoa",
    desc: "20 dias de luxo total. De Seul às praias de Jeju, com motorista particular e experiências reais.",
    img: jejuImg
  }
];

export default function Pacotes() {

  // Função para enviar os dados do pacote específico para o WhatsApp
  const irParaWhatsApp = (pacote) => {
    const numeroWhatsApp = "5543996818242"; 
    const message = `Olá! Vi no site e quero informações sobre:\n\n` +
                    `🌟 *${pacote.titulo}*\n` +
                    `💰 Valor base: R$ ${pacote.preco} (${pacote.base})\n\n` +
                    `Gostaria de saber as próximas datas disponíveis!`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* 🌟 O Botão agora é global, livre de bugs e pronto para reuso nas outras telas */}
      <BotaoVoltar />

      <div className={styles.page_pacotes}>
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
                <span className={styles.tag_card}>PREMIUM</span>
                
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
                
                <div className={styles.price_action}>
                  <div className={styles.price_info}>
                     <span className={styles.price_label}>A partir de</span>
                     <span className={styles.price}>R$ {item.preco}</span>
                     <span className={styles.price_base}>{item.base}</span>
                  </div>
                  
                  <button 
                    className={styles.btn_reserva} 
                    onClick={() => irParaWhatsApp(item)}
                  >
                    RESERVAR AGORA
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </>
  );
}