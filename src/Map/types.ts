

// export type Base = {
//     id: string,
//     name: string,
//     baseType: BaseType,
//     coordinates: [lat: number, long: number],
//     assignedResources: ResourceItem[],
//     assignedFlights: Flights[];
//     currentResources: ResourceItem[];
// }

// type BaseResourceType = {
//     amount: number,
//     type: ResourceType,
//     unit: string | null,
// }
// export type ResourceItem = Resources[ResourceType] & {
//   id: string;
//   name: string;
// };

export type ResourceType = 'fuel' | 'ammunition' | 'weapons' | 'spare_parts';

export type BaseResourceType = {
    amount: number;
    type: ResourceType;
    unit: string | null;
};

export type Resources = {
    [Key in ResourceType]: BaseResourceType;
};

export type Flights = {
    id: string;
    model: string;
    status: 'idle' | 'flying' | 'repairing';
};

export type BaseType = 'huvudbas' | 'sidobas' | 'reservbas';

export interface Coordinate {
    latitude: number;
    longitude: number;
}

export interface Status {
    id: number;
    statusType: string;
}

export interface PermanenceType {
    id: number;
    permanence: string;
}

export interface Base {
    id: string;
    name: string;
    position: Coordinate;
    status: number;
    permanenceId: string;
    statusNavigation?: Status;
    permanenceNavigation?: PermanenceType;
    vehiclesStationed?: Vehicle[];
    cargoItems?: CargoItem[];
}

export interface CargoItem {
    id: string; 
    title: string;
    quantity: number;
    unit: string;
    note: string | null;
}

export interface OnGoingRepair {
    id: number;
    maintenanceType: {
        id: number;
        title: string;
        description: string;
        estimatedCompletion?: number; 
    };
}

export interface Schedule {
    id: number;
    destination: Coordinate;
    scheduledDate: string | Date; 
    createdDate: string | Date;
}

export interface Vehicle {
    guid: string;
    identifier: string;
    model: string;
    position: Coordinate;
    status: Status | null;
    scheduleNavigation: Schedule | null;
    onGoingRepairs: OnGoingRepair[];
    cargoItems: CargoItem[];
}
