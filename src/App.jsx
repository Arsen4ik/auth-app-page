import Button from "./Ui/button/Button";
import { useState } from 'react'
import Modal from './Components/Modal/Modal'
import { Link } from 'react-router-dom'

export default function App(){
  const [active, setActive] = useState(false)
  return (
    <>
      <Link to={'/login'}>
        <Button title={'регистрация / авторизация'} color={'yellow'} onClick={() => setActive(true)} />
      </Link>
      <Modal active={active} setActive={setActive} />
    </>
  )
}