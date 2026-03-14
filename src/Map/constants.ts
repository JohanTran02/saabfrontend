import type { ResourceItem } from './types';

export const dummyFlights = [
    {
        id: '1',
        model: 'Jas 39 Gripen',
        status: 'idle' as const,
    },
    {
        id: '2',
        model: 'Jas 39 Gripen',
        status: 'flying' as const,
    },
    {
        id: '3',
        model: 'Jas 39 Gripen',
        status: 'repairing' as const,
    }]




export const dummyResources: ResourceItem[] = [
    { id: "1", name: "Jet Fuel", type: "fuel", amount: 100, unit: "liters" },
    { id: "2", name: "Fighter Jet Bullets", type: "ammunition", amount: 50, unit: "kg" },
    { id: "3", name: "Smart Air Targeting System", type: "weapons", amount: 20, unit: "units" },
];
