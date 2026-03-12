export type Base = {
    id: string,
    baseType: BaseType,
    coordinates: [lat: number, long: number],
    assignedResources: Resources,
    assignedFlights: Flights['id'][];
    currentResources: Resources
}

type BaseResourceType = {
    amount: number,
    type: string,
    unit: string | null,
}

type ResourceType = 'fuel' | 'ammunition' | 'weapons' | 'spare_parts';

export type Resources = {
    [Key in ResourceType]: BaseResourceType;
}

export type Flights = {
    id: string,
    model: string,
    status: 'idle' | 'flying' | 'repairing'
}

export type BaseType = 'huvudbas' | 'sidobas' | 'reservbas';