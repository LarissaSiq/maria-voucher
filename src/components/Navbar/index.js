import React from "react";
import './index.css';
import './responsive.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

const Navbar = ({
    show,
    buy,
    setShow,
    setBuy,
    pay
}) => {
    return (
        <div className='navbar-container' style={{
            display: pay && 'none'
        }}>
            <div className={`navbar-buy-vouchers ${buy && 'active'}`} onClick={() => setBuy(true, setShow(false))}>
                <ShoppingCartIcon />
                <p className='navbar-p'>COMPRAR VOUCHERS</p>
            </div>
            <div className={`navbar-see-vouchers ${show && 'active'}`} onClick={() => setShow(true, setBuy(false))}>
                <InventoryIcon />
                <p className='navbar-p'>CONSULTAR VOUCHERS</p>
            </div>
        </div>
    )
}

export default Navbar;