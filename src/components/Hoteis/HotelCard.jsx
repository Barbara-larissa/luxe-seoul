import styles from './PaginaHoteis.module.css'; // 🌟 Ajustado para o CSS que existe!

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
  const validRating = Math.max(1, Math.min(5, Math.round(rating || 5)));

  return (
    <article className={styles.hotel_item}>
      
      <div className={styles.image_box} style={{ position: 'relative' }}>
        <img
          src={imageUrl}
          alt={name || "Hotel"}
          className={styles.hotel_img}
          onError={(e) => {
            e.target.src = imageFallback;
          }}
          loading="lazy"
        />
        {parceriaTag && (
          <span style={{
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
          }}>
            {parceriaTag}
          </span>
        )}
      </div>

      <div className={styles.info_box}>
        
        <span className={styles.location_tag}>
          📍 {formatted_address || 'Localização sob consulta'}
        </span>

        <h2 className={styles.hotel_title}>
          {name || 'Nome do Hotel'}
        </h2>

        <div className={styles.stars}>
          {"★".repeat(validRating)}
          <span style={{ color: '#e0e0e0' }}>
            {"★".repeat(5 - validRating)}
          </span>
        </div>

        {/* Informações de telefone, distância e o benefício exclusivo da parceria */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', fontSize: '0.85rem', color: '#555', textAlign: 'left' }}>
          {telefone && (
            <p style={{ margin: 0 }}><strong>📞 Telefone:</strong> {telefone}</p>
          )}
          {distanciaAgencia && (
            <p style={{ margin: 0, background: '#fff5f8', padding: '6px 10px', borderRadius: '8px', borderLeft: '3px solid #EF007E', color: '#333' }}>
              <strong>🚗 Agência:</strong> A apenas {distanciaAgencia}
            </p>
          )}
          {beneficio && (
            <div style={{ background: '#f9f9f9', border: '1px dashed #EF007E', color: '#1a1a1a', padding: '8px 12px', borderRadius: '8px', fontWeight: '600', marginTop: '4px' }}>
              {beneficio}
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