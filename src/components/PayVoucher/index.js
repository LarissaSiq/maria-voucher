import React, { useState } from "react";
import PixQRCode from '../../utils/Pix/pixQRCode';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Loading from "../../components/Loading";
import Button from '../Button';
import CardMask from '../../utils/cardMask';
import formatCurrency from "../../utils/currency";
import "./index.css";
import "./responsive.css";

const PayVoucher = ({
    pay,
    setPay,
    show,
    showVouchers,
    showPrice,
}) => {
    const [card, setCard] = useState(false);
    const [pix, setPix] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderSend, setOrderSend] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false, setOrderSend(true)), 4500);
    };

    return (
        <section className="payment-container">
            {pay && <ArrowBackIcon className={`payment-back ${orderSend && 'disable'}`} onClick={() => setPay(false, show(true))} style={{
                fontSize: '2rem'
            }} />}
            {card && <ArrowBackIcon className={`payment-back ${orderSend && 'disable'}`} onClick={() => setCard(false)} style={{
                fontSize: '2rem'
            }} />
            }
            {pix && <ArrowBackIcon className={`payment-back ${orderSend && 'disable'}`} onClick={() => setPix(false)} style={{
                fontSize: '2rem'
            }} />
            }
            {orderSend ? <div className="payment-div">
                <h1 className="payment-h1-complete">Pagamento concluído</h1>
                <div className="payment-complete">
                    <CheckCircleIcon className="check" style={{
                        fontSize: '8rem'
                    }} />
                    <p className="payment-p">
                        Seu pagamento foi confirmado, você já pode acessar seus vouchers e escolher como envia-los.
                    </p>
                </div>
                <p className="payment-p-complete" onClick={() => showVouchers(true, setPay(false))}>
                    Consultar vouchers
                </p>
            </div>
                : <div className="payment-div">
                    {
                        card ?
                            <h1 className="payment-h1">Forma de pagamento: Cartão de crédito</h1>
                            : pix ? <h1 className="payment-h1">Forma de pagamento: PIX</h1>
                                : <h1 className="payment-h1">Escolha uma forma de pagamento</h1>}
                    <div className="payment-total">
                        <p className="orders-p-qtd">Total a pagar</p>
                        <p className="orders-p-voucher">{formatCurrency(showPrice)}</p>
                    </div>
                    {card ?
                        <div className="payment-data">
                            <CardMask setShowButton={setShowButton} />
                            {showButton &&
                                <Button className="payment-btn" buttonOnClick={handleClick}>
                                    EFETUAR PAGAMENTO
                                </Button>
                            }

                            {loading && <Loading />}
                        </div>
                        : pix ? <div className="payment-data">
                            <div className="payment-qr-code-div">
                                <p className="payment-qr-code-text">
                                    Utilize o QR Code para o pagamento do voucher
                                </p>
                                <PixQRCode className="payment-qrCode" text="https://www.google.com" />
                                <Button className="payment-btn" buttonOnClick={handleClick} type="button">
                                    EFETUAR PAGAMENTO
                                </Button>
                                {loading && <Loading />}
                            </div>
                        </div>
                            : <div className="payment-options">
                                <div className={`payment-option-card ${card && 'active'}`} onClick={() => setCard(true, setPix(false))}>
                                    <div className="payment-card">
                                        <CreditCardIcon />
                                        <h2 className="payment-h2" >Cartão de crédito</h2>
                                    </div>
                                    <div className="payment-text-card">
                                        <p>Envio de voucher após a liberação da operadora do seu cartão</p>
                                    </div>
                                </div>
                                <div className={`payment-option-pix ${pix && 'active'}`} onClick={() => setPix(true, setCard(false))}>
                                    <div className="payment-pix">
                                        <QrCodeIcon />
                                        <h2 className="payment-h2" >PIX</h2>
                                    </div>
                                    <div className="payment-text">
                                        <p>Envio imediato do voucher</p>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            }
        </section >
    );
};

export default PayVoucher;