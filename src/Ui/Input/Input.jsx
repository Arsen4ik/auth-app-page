import { forwardRef } from 'react'
import s from './Input.module.css'

// export default function Input({ title, color, ...otherProps }){
//     return (
//         <input type="" />
//     )
// }

const Input = forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={s.inp_elem} />
    )
})

export default Input