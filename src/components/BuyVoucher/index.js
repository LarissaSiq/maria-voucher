import React, { useState, useEffect } from "react";
import Input from "../Input";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Orders from "../Orders";
import Button from "../Button";
import formatCurrency from "../../utils/currency";
import { createVoucher } from "../../services";
import "./index.css";
import "./responsive.css";

const BuyVouchers = ({
    setPayVouchers,
    setBuyVouchers,
    setShowPrice
}) => {

    const [minval, setMinval] = useState(150);
    const [noOrders, setNoOrders] = useState(true);
    const [values, setValues] = useState([{
        voucher: '',
        qtd: 1,
    }]);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price = values.reduce((acc, item) => acc + item.voucher * item.qtd, 0)
        setTotalPrice(price)
    }, [values]);

    const handleChange = (i, e) => {
        let value = [...values];
        value[i][e.target.name] = Number(e.target.value);
        setValues(value);
    };

    const addVoucher = () => {
        setValues([...values, { voucher: '', qtd: 1 }]);
        setNoOrders(false)

    };

    const removeVoucher = (element) => {
        values.splice(element, 1)
        setValues([...values])
    };

    const createVouchers = () => {
        setPayVouchers(true)
        setBuyVouchers(false)
        const id = localStorage.getItem('uid')
        const vouchers = []
        values.forEach((item) => {
            const obj = {
                price: item.voucher,
                qtd: item.qtd,
            }
            vouchers.push(obj)
        })
        const docObj = {
            userId: id,
            total: totalPrice,
            vouchers: vouchers,
        }
        createVoucher(docObj).then(() => {
            setShowPrice(totalPrice)
        })
    };

    return (
        <section className="voucher-container">
            <h1 className='voucher-h1'>Digite o valor e a quantidade de vouchers</h1>
            <div className='voucher-main'>
                {values.map((element, index) => (
                    <div className="voucher-div-input" key={index}>
                        <label className="voucher-label">R$</label>
                        <Input
                            type='number'
                            placeholder='Valor do Voucher'
                            className='voucher-input'
                            name='voucher'
                            onChange={(e) => handleChange(index, e)}
                            value={element.voucher}
                        >
                        </Input>
                        <div className="voucher-amount-order">
                            <Button className="voucher-less-item" buttonOnClick={() => {
                                values.map((item, i) => {
                                    if (item.qtd > 1 && (element === item)) {
                                        values[i].qtd--
                                        setValues([...values])
                                    }
                                    return item;
                                })
                            }}
                            > - </Button>
                            <div className="voucher-input-qtd">
                                {element.qtd}
                            </div>
                            <Button className="voucher-more-item" buttonOnClick={() => {
                                values.map((item, i) => {
                                    if (item.qtd >= 0 && (element === item)) {
                                        values[i].qtd++
                                        setValues([...values])
                                    }
                                    return item;
                                })
                            }}
                            > + </Button>
                        </div>
                        {index < 1 && <AddCircleOutlineIcon className='voucher-add' onClick={addVoucher} />}
                        {index >= 1 && <HighlightOffIcon className='voucher-remove' onClick={() => removeVoucher(index)} />}
                    </div>
                ))}
            </div>
            <Orders noOrders={noOrders}>
                <h1 className='orders-h1'>PEDIDOS</h1>
                <div className='orders-scroll'>
                    {values.map((index, key) => (
                        <div className='orders-items' key={key}>
                            <p className="orders-p-qtd">{index.qtd} Vouchers</p>
                            <p className="orders-p-voucher">{formatCurrency(index.voucher)}</p>
                        </div>
                    ))}
                </div>
                <div className="orders-div-total">
                    <div className={`orders-total ${totalPrice < minval && 'active'}`}>
                        <p className="orders-p-qtd">Total a pagar</p>
                        <p className="orders-p-voucher">{formatCurrency(totalPrice)}</p>
                    </div>
                    {totalPrice >= minval &&
                        <Button className='orders-btn' buttonOnClick={createVouchers}>IR PARA O PAGAMENTO</Button>
                    }

                </div>
            </Orders>
        </section >
    );
};

export default BuyVouchers;