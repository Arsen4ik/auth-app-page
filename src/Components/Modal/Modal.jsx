import { Route, Routes } from 'react-router-dom'
import s from './Modal.module.css'
import FormElem from '../FormElem/FormElem'
import { ReactComponent as XMarkIcon } from '../../icons/xmark-solid.svg'

export default function Modal({ active, setActive }){
    return (
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
            {/* <button onClick={() => setActive(false)}>X</button> */}
            {/* <Link to="/registration">
                <p>reg to</p>
            </Link> */}
            {/* Modal */}
            <XMarkIcon onClick={() => setActive(false)} className={s.xmark_icon} />
            <Routes>
                <Route path='/login' element={<FormElem
                    title="авторизация"
                    button={{submit: 'авторизоваться', redirect: 'регистрация'}}
                    link={'/registration'}
                    type={'login'}
                    input={{email: 'почта', password: 'пароль'}}
                    infoText="введите логин и пароль вашего аккаунта"
                />}/>
                <Route path='/registration' element={<FormElem
                    title="регистрация"
                    button={{submit: 'зарегестрироваться', redirect: 'авторизация'}}
                    link={'/login'}
                    type={'reg'}
                    input={{email: 'почта', password: 'пароль', secondPassword: 'подтверждение пароль'}}
                    infoText="регистрируясь на сайте ..."
                />} />
                <Route path='/reset' element={<FormElem
                    title="сброс пароля"
                    button={{submit: 'сброс пароля', redirect: 'авторизация'}}
                    link={'/login'}
                    type={'reset'}
                    input={{email: 'почта'}}
                    infoText="ссылка на сброс пароля"
                />} />
            </Routes>
            </div>
        </div>
    )
}