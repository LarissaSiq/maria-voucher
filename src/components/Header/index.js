import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import './responsive.css';
import logoPreto from '../../assets/img/LogoPreto.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../services";

const Header = ({
  show,
  buy,
  setBuy,
  pay,
  setPay,
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
    <header>
      <div className='header-container'>
        <div className='header'>
          <div className='header-user'>
            <img className='header-img-user' src={logoPreto} alt='logo-user' />
          </div>
          <div className='header-icon'>
            <LogoutIcon
              onClick={() => handleClick()}
              className='header-logout-icon'
            />
          </div>
        </div>
        <div className='header-title'>
          <h1 className='header-h1'>
            {show && 'Consulta de voucher'}
            {buy && 'Compra de voucher'}
            {pay && 'Pagamento'}
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header;
