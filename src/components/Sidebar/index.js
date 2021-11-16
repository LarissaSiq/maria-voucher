import React from "react";
import { useNavigate } from "react-router";
import { logout } from "../../services";
import './index.css';
import './responsive.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import logoPreto from '../../assets/img/LogoPreto.png';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ({
    show,
    buy,
    setShow,
    setBuy,
    pay
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        logout().then(() => {
            localStorage.removeItem('uid');
            localStorage.removeItem('name');
            navigate('/login')
        })
    }
    return (
        <div className='sidebar-container'>
            <div className='sidebar-icon'>
                <LogoutIcon className={`sidebar-logout-icon ${pay ? 'disable' : ''}`}
                    onClick={() => handleClick()}
                    style={{
                        fontSize: '2.5rem'
                    }} />
            </div>
            <div className={`sidebar-buy-vouchers ${buy ? 'active' : pay ? 'disable' : ''}`} onClick={() => setBuy(true, setShow(false))}>
                <ShoppingCartIcon />
                <p className='sidebar-p'>COMPRAR VOUCHERS</p>
            </div>
            <div className={`sidebar-see-vouchers ${show ? 'active' : pay ? 'disable' : ''}`} onClick={() => setShow(true, setBuy(false))}>
                <InventoryIcon />
                <p className='sidebar-p'>CONSULTAR VOUCHERS</p>
            </div>
            <div className='sidebar-user'>
                <img className='sidebar-img-user' src={logoPreto} alt='logo-user' />
            </div>
        </div >
    )
}

export default Sidebar;