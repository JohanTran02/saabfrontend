export type Station = {
    stationType: StationType,
    coordinates: [lat: number, long: number],
    id: string
}

export type StationType = 'huvudbas' | 'sidobas' | 'reservbas';