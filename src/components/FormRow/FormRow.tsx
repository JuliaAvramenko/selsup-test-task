import React, { FC, useEffect, useState } from 'react'
import styles from './FormRow.module.css'
import { Param } from '../../mockData/types'


type TFormRowProps = {
    value: string
    param: Param | undefined
    paramId: number
    callback: (paramId: number, newParamValue: string) => void
}


const FormRow: FC<TFormRowProps> = ({ value, param, paramId, callback }) => {
    const [localValue, setLocalValue] = useState('')

    useEffect(() => {
        setLocalValue(value)
    }, [value])

    function onChangeHandler(e: any) {
        setLocalValue(e.target.value)
        callback(paramId, e.target.value)
    }
    return (
        <div className={styles.row}>
            <label className={styles.label}>{param?.name}</label>
            <input className={styles.input} name="name" type={param?.type} value={localValue} onChange={onChangeHandler}></input>
        </div>


    );
}

export default FormRow;