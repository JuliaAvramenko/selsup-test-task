import React, { useEffect, useState } from 'react';
import FormRow from '../FormRow/FormRow';
import { getModel, getParamById } from '../../api/api';
import { Model } from '../../mockData/types';


function Form() {
    const [modelState, setModelState] = useState<Model>()

    useEffect(() => {
        const model: Model = getModel()
        setModelState(model)
    }, [])

    function updateParamValueCallback(paramId: number, newParamValue: string) {
        setModelState({
            ...modelState,
            paramValues: [
                ...modelState!.paramValues.filter(item => item.paramId != paramId),
                {
                    paramId: paramId,
                    value: newParamValue
                }
            ].sort((a, b) => a.paramId - b.paramId)
        })
    }

    return (
        <form>
            {modelState && modelState.paramValues.map((item) => {
                return <FormRow
                    key={item.paramId}
                    paramId={item.paramId}
                    value={item.value}
                    label={getParamById(item.paramId)}
                    callback={updateParamValueCallback}
                />
            })}

        </form>

    );
}

export default Form;