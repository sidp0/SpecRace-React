const RECEIVED_MAKES = 'RECEIVED_MAKES'
const RECEIVED_MODELS = 'RECEIVED_MODELS'
const RECEIVED_YEARS = 'RECEIVED_YEARS'
const RECEIVED_TRIMS = 'RECEIVED_TRIMS'
const RECEIVED_SPECS = 'RECEIVED_SPECS'

export const receivedMakes = (makes) => {
    return {
        type: RECEIVED_MAKES,
        makes,
        loading: false
    }
}

export const receivedModels = (selectedMake, models) => {
    return {
        type: RECEIVED_MODELS,
        selectedMake,
        models
    }
}

export const receivedYears = (selectedModel, years) => {
    return {
        type: RECEIVED_YEARS,
        selectedModel,
        years
    }
}

export const receivedTrims = (trims) => {
    return {
        type: RECEIVED_TRIMS,
        trims,
        loading: false
    }
}

export const receivedSpecs = (response) => {
    return {
        type: RECEIVED_SPECS,
        
    }
}