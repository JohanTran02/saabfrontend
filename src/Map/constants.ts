import type { Base, Resources, ResourceType } from './types';

export const dummyBases: Base[] = [
    {
        baseType: 'huvudbas',
        coordinates: [60.073774388521656, 16.808927085708422],
        id: 'asdfoasjdfoajsodf',
        assignedFlights: [],
        assignedResources: {} as Resources,
        currentResources: {} as Resources,
    },
    {
        baseType: 'reservbas',
        coordinates: [60.13882461404783, 14.123980863454367],
        id: 'iosajdgouiasdfiais',
        assignedFlights: [],
        assignedResources: {} as Resources,
        currentResources: {} as Resources,
    },
    {
        baseType: 'sidobas',
        coordinates: [60.66805933137298, 14.070586699767079],
        id: 'asodfoasdjfoasdfjas',
        assignedFlights: [],
        assignedResources: {} as Resources,
        currentResources: {} as Resources,
    },
    {
        baseType: 'reservbas',
        coordinates: [59.268549179577285, 14.266775673332363],
        id: 'aoisdfiuahsdiufhaiusdfgiuasd',
        assignedFlights: [],
        assignedResources: {} as Resources,
        currentResources: {} as Resources,
    },
];

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
    } ]

export type ResourceItem = Resources[ResourceType] & {
  id: string;
  name: string;
};

// Now, type your dummy data explicitly
export const dummyResources: ResourceItem[] = [
  { id: "1", name: "Jet Fuel", type: "fuel", amount: 100, unit: "liters" },
  { id: "2", name: "Fighter Jet Bullets", type: "ammunition", amount: 50, unit: "kg" },
  { id: "3", name: "Smart Air Targeting System", type: "weapons", amount: 20, unit: "units" },
];
