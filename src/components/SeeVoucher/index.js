import React, { useState, useEffect } from "react";
import currency from '../../utils/currency';
import { getVoucher } from "../../services";
import LogoPreto from "../../assets/img/LogoPreto.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "../Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import Modal from "../Modal";
import './index.css';
import './responsive.css';

const SeeVoucher = ({
  buyVouchers,
  setShow,
}) => {

  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [voucherSend, setVoucherSend] = useState(false);
  const currentUser = localStorage.getItem('uid')

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false, setVoucherSend(true)), 4500)
  };

  useEffect(() => {
    getVoucher()
      .then(snap => {
        const vouchers = []
        snap.forEach(doc => {
          if (currentUser === doc.data().userId) {
            const item = doc.data()
            item.json = false
            item.email = false
            item.select = false
            vouchers.push(item)
          }
        })
        setVouchers(vouchers)
      })
  }, [currentUser]);

  const handleSelect = (index) => {
    let vouchersArray = vouchers.map((voucher, i) => {
      if (index === i) {
        if (voucher.select === true) {
          voucher.select = false
        } else {
          voucher.select = true
        }
      } else {
        voucher.select = false
      }
      return voucher
    })
    setVouchers(vouchersArray)
  };
  const handleEmail = (index) => {
    let emails = vouchers.map((voucher, i) => {
      if (index === i) {
        if (voucher.email === true) {
          voucher.email = false
        } else {
          voucher.email = true
        }
      } else {
        voucher.email = false
      }
      return voucher
    })
    setVouchers(emails);
  };

  return (
    <section className='vouchers-container'>
      {voucherSend ?
        <div className="vouchers-div">
          <div className="vouchers-complete">
            <CheckCircleIcon className="check" style={{
              fontSize: '8rem'
            }} />
            <p className="vouchers-p">
              Seu vouchers foram enviados com sucesso.
            </p>
          </div>
          <p className="vouchers-p-complete" onClick={() => buyVouchers(true, setShow(false))}>
            Voltar para o inicio
          </p>
        </div>
        : vouchers.map((item, index) => (
          <div className='seevoucher-main' key={index}>
            <div className='seevoucher-item'>
              <div className='seevoucher-scroll'>
                {item.vouchers.map((voucher, key) => (
                  <div className='seevoucher-data' key={key}>
                    <p className='seevoucher-qtd'>{voucher.qtd} Vouchers de {currency(voucher.price)}</p>
                  </div>
                ))}
              </div>
              <p className="seevoucher-total">Valor total: {currency(item.total)}</p>
              <div className='seevoucher'>
                <img className='seevoucher-logo' src={LogoPreto} alt='logo' />
                <h1 className='seevoucher-value'>MARIAV0{item.userId.length > 10 && item.userId.substring(0, 7).toUpperCase()}</h1>
              </div>
              <div className={`seevoucher-select ${item.select === true && 'active'}`} onClick={() => handleSelect(index)}>
                <p className="seevoucher-select-send">Selecione o tipo de envio</p>
              </div>
              {item.select === true &&
                <div className='seevoucher-options'>
                  <div className='seevoucher-email-div' onClick={() => handleEmail(index)}>
                    <p className="seevoucher-email">Enviar por e-mail</p>
                  </div>
                  <a className='seevoucher-json-div'
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(vouchers[index]))}`}
                    download="vouchers.json"
                  >
                    <div className='div-json'>{`Exportar por JSON`}
                    </div>
                  </a>
                </div>}
              {item.email === true && <Modal>
                <div className='modal-voucher'>
                  <div className='modal-header'>
                    <h2 className="modal-code">Código do voucher</h2>
                    <h2 className="modal-email">e-mail</h2>
                  </div>
                  <div className="modal-rows">
                    {item.vouchers.map((v, index) => (
                      < div className="modal-column-row" key={index} >
                        {console.log(v)}
                        <p className="modal-p-code">MARIAV{item.userId.length > 10 && item.userId.substring(0, 7).toUpperCase() && v.price}</p>
                        <Input className="modal-input-email" placeholder="Digite o e-mail" />
                      </div>
                    ))
                    }
                  </div>
                  <div className="modal-div-btn">
                    <Button className='modal-btn' buttonOnClick={handleClick}>ENVIAR VOUCHER</Button>
                    <Button className='modal-btn' buttonOnClick={() => handleEmail(index)}>CANCELAR</Button>
                  </div>
                </div>
              </Modal>}
              {loading && <Loading />}
            </div>
          </div>
        ))
      }
    </section >
  )
}

export default SeeVoucher;
