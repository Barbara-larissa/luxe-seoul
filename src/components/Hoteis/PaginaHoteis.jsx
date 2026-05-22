import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './PaginaHoteis.module.css';
import HotelCard from './HotelCard';
import { hoteisParceiros } from './hoteisDados';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BotaoUp from '../../components/BotaoUp/BotaoUp';

const PaginaHoteis = () => {
  const navigate = useNavigate();
  const { cidade } = useParams();

  const formatarCidade = (nome) => {
    if (!nome) return 'Seoul';
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  };

  const [cidadeAtiva, setCidadeAtiva] = useState(formatarCidade(cidade));

  useEffect(() => {
    setCidadeAtiva(formatarCidade(cidade));
  }, [cidade]);

  const cidades = ['Seoul', 'Busan', 'Jeju'];

  const hoteisExibidos = hoteisParceiros[cidadeAtiva] || [];

  return (
    <>
      {/* HEADER */}
      <Header />

      <main className={styles.container}>

        <header className={styles.header_content}>
          <h1 className={styles.title_page}>Luxury Hotels</h1>
        </header>

        <section className={styles.menu_cidades}>
          {cidades.map((cidadeItem) => (
            <button
              key={cidadeItem}
              onClick={() => setCidadeAtiva(cidadeItem)}
              className={
                cidadeAtiva === cidadeItem
                  ? styles.city_item_active
                  : styles.city_item
              }
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

      {/* FOOTER + BOTÃO UP */}
      <Footer />
      <BotaoUp />
    </>
  );
};

export default PaginaHoteis;