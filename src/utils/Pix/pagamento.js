import React, { useState } from 'react';
import PixQRCode from './pixQRCode';
import Button from '../../components/Button';

const Temporaria = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  }
  return (
    <>
      <Button
        buttonOnClick={handleClick}
        type="button"
      >
        PAGAMENTO
      </Button >
      { show && <PixQRCode text='https://www.google.com' /> }
    </>
  )
}


export default Temporaria;
