import { Link } from "react-router-dom";
import Button from '../../Ui/button/Button'
import Input from "../../Ui/Input/Input";
import { useForm } from "react-hook-form";
import s from './FormElem.module.css'

export default function FormElem({ title, button, link, type, input, infoText }){
    const { reset, register, watch, handleSubmit, formState: {errors} } = useForm()
    const onSubmit = data => {
        console.log(data);
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>
                <p>{input.email}</p>
                <Input {...register('email', {
                    required: 'почта не должна быть пуста',
                    pattern: {
                        value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                        message: 'Указана неверная почта'
                    }
                })}/>
                {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}

                {type !== 'reset' && (
                    <>
                        <p>{input.password}</p>
                        <Input type={(type === 'login' ? 'password' : 'text')} {...register('password', {
                            required: 'пароль должен быть заполнен',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: 'Пароль должен содержать минимум 8 букв и хотя бы 1 цифру'
                            }
                        })}/>
                        {errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
                    </>
                )}

                {type === 'reg' && (
                    <>
                        <p>{input.secondPassword}</p>
                        <Input {...register('secondPassword', {
                            required: 'второй парол  должен быть заполнен',
                            validate: value => value === watch('password') || 'пароли не соответствуют друг другу'
                        })}/>
                        {errors.secondPassword && <p className={s.warning_text}>{errors.secondPassword.message}</p>}
                    </>
                )}

                <p className={s.info_text}>{infoText}</p>
                {type === 'login' && (
                    <Link to={'/reset'}>
                        <p>сбросить пароль</p>
                    </Link>
                )}
                <Link to={link} onClick={() => reset()}>
                    <Button title={button.redirect} color="white" />
                </Link>
                <Button title={button.submit} color="yellow" />
            </form>
        </>
    )
}