import React from 'react';
import Cards from 'elt-react-credit-cards';
import luhn from 'luhn'
import InputMask from './inputMask';
import { useState } from 'react';


const CardMask = ({setShowButton}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');

const validateCard = luhn.validate(number)

if(validateCard) {
  setShowButton(true)
}else{
  setShowButton(false)
}

  return (
    <>
      <Cards
        number={number}
        name={name}
        cvc={cvc}
        expiry={expiry}
        focused={focus}
      />

      <form>
        <div className="column">
          <InputMask
            type="tel"
            name="number"
            mask="9999 9999 9999 9999"
            placeholder="Número do cartão"
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            className="form-card"
          />
          <InputMask
            type="text"
            name="name"
            placeholder="Nome impresso no cartão"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            className="form-card"
          />
          <div className="row">
            <InputMask
              type="text"
              mask="99/99"
              name="expiry"
              placeholder="Validade Mês/Ano"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              className="form-card-validate"
            />
            <InputMask
              mask="999"
              type="tel"
              name="cvc"
              placeholder="CVV"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              className="form-card-cvv"
            />
           
          </div>
        </div>
      </form>
    </>
  )
}

export default CardMask;