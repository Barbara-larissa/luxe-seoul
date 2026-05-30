import styles from './PaginaHoteis.module.css';

import {
  MapPin,
  Phone,
  Car,
  Gift,
  Star
} from 'lucide-react';

const HotelCard = ({
  name,
  rating,
  formatted_address,
  imagemManual,
  telefone,
  distanciaAgencia,
  parceriaTag,
  beneficio
}) => {

  const imageFallback =
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop";

  const imageUrl = imagemManual || imageFallback;

  const validRating = Math.max(
    1,
    Math.min(5, Math.round(rating || 5))
  );

  return (
    <article className={styles.hotel_item}>

      <div
        className={styles.image_box}
        style={{ position: 'relative' }}
      >
        <img
          src={imageUrl}
          alt={name || "Hotel"}
          className={styles.hotel_img}
          loading="lazy"
          onError={(e) => {
            e.target.src = imageFallback;
          }}
        />

        {parceriaTag && (
          <span
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              background: '#EF007E',
              color: '#fff',
              padding: '5px 12px',
              fontSize: '0.7rem',
              fontWeight: '800',
              borderRadius: '50px',
              textTransform: 'uppercase'
            }}
          >
            {parceriaTag}
          </span>
        )}
      </div>

      <div className={styles.info_box}>

        <span
          className={styles.location_tag}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <MapPin size={14} />
          {formatted_address || 'Localização sob consulta'}
        </span>

        <h2 className={styles.hotel_title}>
          {name || 'Nome do Hotel'}
        </h2>

        <div
          className={styles.stars}
          style={{
            display: 'flex',
            gap: '4px',
            marginBottom: '15px'
          }}
        >
          {[...Array(validRating)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
              strokeWidth={1.5}
            />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '20px',
            fontSize: '0.85rem',
            textAlign: 'left'
          }}
        >

          {telefone && (
            <p
              style={{
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#bdbdbd'
              }}
            >
              <Phone size={14} />
              {telefone}
            </p>
          )}

          {distanciaAgencia && (
            <div className={styles.premium_box}>
              <Car size={14} />
              <span>
                A apenas {distanciaAgencia}
              </span>
            </div>
          )}

          {beneficio && (
            <div className={styles.benefit_box}>
              <Gift size={15} />
              <span>{beneficio}</span>
            </div>
          )}

        </div>

        <button className={styles.btn_detalhes}>
          Solicitar Reserva
        </button>

      </div>

    </article>
  );
};

export default HotelCard;