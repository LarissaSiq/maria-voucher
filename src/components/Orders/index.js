import React from "react";
import imgVoucher from "../../assets/img/imgVoucher.png";
import "./index.css";
import "./responsive.css";

const Orders = ({
  children,
  noOrders
}) => {

  return (
    <section className={`orders-container ${noOrders ? '' : 'active'}`}>
      {
        noOrders ?
          <div>
            < div className="orders-div-img" >
              <img
                className="orders-img"
                src={imgVoucher}
                alt="imagem ilustrativa de um voucher"
              />
            </div >

            <p className="orders-text">
              Bora colocar no carrinho os vouchers para presentear o time?
            </p>
            <h3 className="orders-text-title">Pedido mínimo de R$150,00</h3>
          </div >
          : children}
    </section >
  )
}

export default Orders;