

export type Base = {
    id: string,
    name: string,
    baseType: BaseType,
    coordinates: [lat: number, long: number],
    assignedResources: ResourceItem[],
    assignedFlights: Flights[];
    currentResources: ResourceItem[];
}

type BaseResourceType = {
    amount: number,
    type: ResourceType,
    unit: string | null,
}
export type ResourceItem = Resources[ResourceType] & {
  id: string;
  name: string;
};

 export type ResourceType = 'fuel' | 'ammunition' | 'weapons' | 'spare_parts';

export type Resources = {
    [Key in ResourceType]: BaseResourceType;
}

export type Flights = {
    id: string,
    model: string,
    status: 'idle' | 'flying' | 'repairing'
}

export type BaseType = 'huvudbas' | 'sidobas' | 'reservbas';