import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import mariaVoucherHome from '../../assets/img/LogoMobile.png';
import "./index.css";
import "./responsive.css";

const Welcome = () => {

  const navigate = useNavigate();
  navigate('/Login')

  return (
    <main className="home-container">
      <div className="home-img">
        <img
          className="home-img-maria"
          src={mariaVoucherHome}
          alt="Logo Maria Voucher"
        />
      </div>

      <div className="home-texto">
        <h1 className="home-titulo">Saudades de um Happy Hour né minha filha?</h1>
        <p>
          Compre com Maria Voucher os melhores cupons, para seus funcionários
          sextar de forma segura e com qualidade.
        </p>
      </div>

      <div className="home-div-btn">
        <Button
          type="submit"
          className="home-button"
          buttonOnClick={navigate}>
          CONTINUAR
        </Button>

      </div>
    </main>
  )
}
export default Welcome;