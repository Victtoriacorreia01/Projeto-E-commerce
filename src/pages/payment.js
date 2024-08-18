import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import styles from './payment.module.css';
import pag1 from '../assets/mastercard.jpg';
import pag2 from '../assets/nubank.jpg';
import pag3 from '../assets/pix.jpg';
import pag4 from '../assets/hipercard.jpg';
import pag5 from '../assets/caixa.jpg';
import pag6 from '../assets/paypal.jpg';

const Payment = () => {
  const router = useRouter();
  const { total } = router.query; // Recupera o total do query param
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    if (paymentMethod === 'pix') {
      alert('Código PIX gerado para pagamento!');
    } else {
      alert(`Pagamento processado com o cartão: ${cardDetails.cardNumber}`);
    }
    router.push('/confirmation');
  };

  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.paymentTitle}>Escolha sua Forma de Pagamento</h2>
      
      <div className={styles.paymentOptions}>
        <div className={styles.paymentOption} onClick={() => handlePaymentSelection('mastercard')}>
          <Image src={pag1} alt="MasterCard" width={80} height={50} />
          <p>MasterCard</p>
        </div>
        <div className={styles.paymentOption} onClick={() => handlePaymentSelection('nubank')}>
          <Image src={pag2} alt="Nubank" width={80} height={50} />
          <p>Nubank</p>
        </div>
        <div className={styles.paymentOption} onClick={() => handlePaymentSelection('pix')}>
          <Image src={pag3} alt="Pix" width={50} height={50} />
          <p>Pix</p>
        </div>
        <div className={styles.paymentOption} onClick={() => handlePaymentSelection('hipercard')}>
          <Image src={pag4} alt="Hipercard" width={80} height={50} />
          <p>Hipercard</p>
        </div>
        <div className={styles.paymentOption} onClick={() => handlePaymentSelection('caixa')}>
          <Image src={pag5} alt="Caixa" width={80} height={50} />
          <p>Caixa</p>
        </div>
        <div className={styles.paymentOption} onClick={() => handlePaymentSelection('paypal')}>
          <Image src={pag6} alt="PayPal" width={80} height={50} />
          <p>PayPal</p>
        </div>
      </div>

      {paymentMethod === 'paypal' && (
        <div className={styles.paypalLink}>
          <p>Para pagar com PayPal, <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">clique aqui para acessar sua conta PayPal</a>.</p>
        </div>
      )}

      {paymentMethod && paymentMethod !== 'pix' && paymentMethod !== 'paypal' && (
        <div className={styles.cardDetails}>
          <h3>Detalhes do Cartão</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Número do Cartão"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Data de Validade (MM/AA)"
            value={cardDetails.expiryDate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleInputChange}
          />
        </div>
      )}

      <button className={styles.paymentButton} onClick={handlePayment}>
        Confirmar Pagamento
      </button>

      <div className={styles.orderSummary}>
        <h3>Total a pagar: R$ {total}</h3>
      </div>
    </div>
  );
};

export default Payment;
