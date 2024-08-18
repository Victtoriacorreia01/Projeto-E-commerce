
import styles from './confirmation.module.css';

const Confirmation = () => {
  return (
    <div className={styles.confirmationContainer}>
      <h2 className={styles.confirmationTitle}>Pagamento realizado com sucesso!</h2>
      <p>Seu pedido foi processado e está sendo preparado para envio.</p>
      <button className={styles.confirmationButton}>Voltar para a Home</button>
    </div>
  );
};

export default Confirmation;
