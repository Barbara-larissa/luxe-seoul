import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './PaginaHoteis.module.css';
import HotelCard from './HotelCard'; 
import { hoteisParceiros } from './hoteisDados'; 
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';

const PaginaHoteis = () => {
  const navigate = useNavigate();
  const { cidade } = useParams();

  // 🌟 Função ajustada: Se "nome" for vazio/undefined (clique no Header), ela assume 'Seoul' automaticamente
  const formatarCidade = (nome) => {
    if (!nome) return 'Seoul'; 
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  };

  // Iniciamos o estado já tratando se veio cidade ou se caiu no padrão 'Seoul'
  const [cidadeAtiva, setCidadeAtiva] = useState(formatarCidade(cidade));

  // O useEffect monitora a URL. Se o usuário clicar no Header, "cidade" muda para undefined e resetamos para 'Seoul'
  useEffect(() => {
    setCidadeAtiva(formatarCidade(cidade));
  }, [cidade]);

  const cidades = ['Seoul', 'Busan', 'Jeju'];

  // Pega os hotéis de forma segura
  const hoteisExibidos = hoteisParceiros[cidadeAtiva] || [];

  return (
    <main className={styles.container}>
      <header className={styles.header_content}>
        <BotaoVoltar />
        <h1 className={styles.title_page}>Luxury Hotels</h1>
      </header>

      <section className={styles.menu_cidades}>
        {cidades.map((cidadeItem) => (
          <button
            key={cidadeItem}
            onClick={() => setCidadeAtiva(cidadeItem)}
            className={cidadeAtiva === cidadeItem ? styles.city_item_active : styles.city_item}
          >
            {cidadeItem.toUpperCase()}
          </button>
        ))}
      </section>

      <section className={styles.hotels_grid}>
        {hoteisExibidos.map((hotel) => (
          <HotelCard
            key={hotel.place_id}
            name={hotel.name}
            rating={hotel.rating}
            formatted_address={hotel.formatted_address}
            imagemManual={hotel.imagemManual}
            telefone={hotel.telefone}
            distanciaAgencia={hotel.distanciaAgencia}
            parceriaTag={hotel.parceriaTag}
            beneficio={hotel.beneficio}
          />
        ))}
      </section>
    </main>
  );
};

export default PaginaHoteis;