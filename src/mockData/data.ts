import { Model, Param } from "./types";

export const paramsData: Param[] = [
    {
        id: 1,
        name: 'Назначение',
        type: `text`
    },
    {
        id: 2,
        name: 'Длина',
        type: `text`
    }
];



export const modelData: Model = {
    paramValues: [
        {
            paramId: 1,
            value: 'повседневное'
        },
        {
            paramId: 2,
            value: 'макси'
        }
    ]
}




