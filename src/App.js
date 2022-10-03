import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

import './App.scss'

const validations = {
  lower: new RegExp('(?=.*[a-z])'),
  upper: new RegExp('(?=.*[A-Z])'),
  number: new RegExp('(?=.*[0-9])'),
  special: new RegExp('(?=.*[!@#\$%\^&\*])'),
  length: new RegExp('(?=.{8,})')
}

const App = () => {
  const [passValue, setPassValue] = useState('')
  const [view, setView] = useState(false)
  const [validated, setValidated] = useState({
    lower: false,
    upper: false,
    number: false,
    special: false,
    length: false
  })

  useEffect(() => {
    const tempValidated = validated;

    Object.entries(validations).map((obj) => {
      const key = obj[0]
      const val = obj[1]

      if(val.test(passValue)) {
        tempValidated[key] = true;
        console.log(validated)
      } else {
        tempValidated[key] = false;
      }
    })

    setValidated(tempValidated);
  }, [passValue])
  

  return (
    <div className='App'>
      <div className='Login'>
        <h3>Faça Login</h3>
        <div className='Login__inputs'>
          <input type={'email'} placeholder="Seu Email"></input>
          <div className='Password'>
            <input value={passValue} onChange={({target}) => {setPassValue(target.value)}} type={view ? 'text' : 'password'} placeholder="Sua Senha"></input>
            {view ? <AiFillEye className='icon' onClick={() => setView(!view)}/> : <AiFillEyeInvisible className='icon' onClick={() => setView(!view)}/>}
          </div>

          <ul className='Inputs__checks'>
            <li className={validated.length ? 'true' : 'false'}>Ter mais de 8 caracteres</li>
            <li className={validated.upper ? 'true' : 'false'}>Ter uma letra maiúscula</li>
            <li className={validated.lower ? 'true' : 'false'}>Ter uma letra minúscula</li>
            <li className={validated.special ? 'true' : 'false'}>Ter um caractere especial (%,&,*)</li>
            <li className={validated.number ? 'true' : 'false'}>Ter pelo menos um número</li>
          </ul>

          <button type={'button'} className='Inputs__button'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default App