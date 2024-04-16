import { modelData, paramsData } from "../mockData/data";

export function getModel() {
    return modelData
}

export function getParams() {
    return paramsData
}

export function getParamById(id: number) {
    const labels = paramsData.filter(item => item.id === id)
    if (labels.length === 1) {
        return labels[0].name
    }

    return undefined
}