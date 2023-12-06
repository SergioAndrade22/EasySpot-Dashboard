export type Position = {
    latitude: number
    longitude: number
    timestamp: number
}

export type GeneralMorph = {
    analCloaca: number
    art: string
    carapaceAC: number
    carapaceLMC: number
    carapaceLSC: number
    code: string
    comments: string
    condition: string
    contact: string
    destination: string
    event: string
    fishingArea: string
    generalLocation: string
    headAC: number
    headLC: number
    headLC2: number
    locality: string
    mappingLocation: string
    plastronAC: number
    plastronLC: number
    plastronAnal: number
    position: Position
    responsible: string
    sex: string
    specie: string
    stage: string
    status: string
    tide: string
    weight: number
}

export type Exam = {
    carapace: {
        observation: string
        status: string
    }
    cloaca: {
        observation: string
        status: string
    }
    code: GeneralMorph
    comments: string
    eyes: {
        observation: string
        placement: string
        status: string
    }
    feces: {
        observation: string
    }
    integumentary: {
        observation: string
        region: string
        status: string
    }
    plastron: {
        observation: string
        status: string
    }
    secretions: {
        location: string
        observation: string
        presence: boolean
    }
}

export type Marking = {
    code: GeneralMorph
    new: {
        fin: string
        leftSerial: string
        legend: string
        placed: boolean
        rightSerial: string
        type: string
    }
    noMark: {
        fin: string
        scar: boolean
    }
    previous: {
        correctlyPlaced: boolean
        fin: string
        legend: string
        pit: number
        present: boolean
        serial: string
        skinCovered: boolean
        type: string
    }
}

export type Sample = {
    algae: string
    blood: string
    bloodObservation: string
    bone: string
    code: GeneralMorph
    epibionts: string
    muscle: string
    muscleObservation: string
    other: string
    skin: string
    skinObservation: string
}