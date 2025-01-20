export type GPSPosition = {
    latitude: number
    longitude: number
    timestamp: number
}

export type Data = {
    id: string
    code: string
    position: GPSPosition
    description?: string
    photo?: string
    audio?: string
}
