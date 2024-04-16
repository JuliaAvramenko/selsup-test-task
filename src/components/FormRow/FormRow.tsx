import React, { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './FormRow.module.css'
import { paramsData } from '../../mockData/data';

type TFormRowProps = {
    value: string
    label: string | undefined
    paramId: number
    callback: (paramId: number, newParamValue: string) => void
}


const FormRow: FC<TFormRowProps> = ({ value, label, paramId, callback }) => {
    const [localValue, setLocalValue] = useState('')

    useEffect(() => {
        setLocalValue(value)
    }, [value])

    function onChangeHandler(e: any) {
        setLocalValue(e.target.value)
        callback(paramId, e.target.value)
    }
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} name="name" value={localValue} onChange={onChangeHandler}></input>
        </div>


    );
}

export default FormRow;