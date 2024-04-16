import React, { FC, useEffect, useState } from 'react';
import FormRow from '../FormRow/FormRow';
import { getModel, getParamById } from '../../api/api';
import { Model, Props } from '../../mockData/types';
import styles from './Form.module.css'


const Form: FC<Props> = ({ params, model }) => {
    const [modelState, setModelState] = useState<Model>(model)

    useEffect(() => {
        const model: Model = getModel()
        setModelState(model)
    }, [])

    function updateParamValueCallback(paramId: number, newParamValue: string) {
        setModelState({
            ...modelState,
            paramValues: [
                ...modelState!.paramValues.filter(item => item.paramId !== paramId),
                {
                    paramId: paramId,
                    value: newParamValue
                }
            ].sort((a, b) => a.paramId - b.paramId)
        })
    }

    return (
        <form className={styles.form}>
            {modelState && modelState.paramValues.map((item) => {
                return <FormRow
                    key={item.paramId}
                    paramId={item.paramId}
                    value={item.value}
                    param={getParamById(item.paramId)}
                    callback={updateParamValueCallback}
                />
            })}

        </form>

    );
}

export default Form;