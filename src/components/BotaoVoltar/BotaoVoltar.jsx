import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import styles from './BotaoVoltar.module.css';

export default function BotaoVoltar() {
  const navigate = useNavigate();
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
    return () => setMontado(false);
  }, []);

  if (!montado) return null;

  return createPortal(
    <button
      className={styles.btn_voltar} // Usando apenas a classe do módulo
      onClick={() => navigate('/')}
    >
      ← VOLTAR
    </button>,
    document.body
  );
}