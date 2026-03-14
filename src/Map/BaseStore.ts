import { create } from "zustand";
import type { Flights, Resources } from "./types";
import { decreaseResources, increaseResources } from "./helpers";


type Base = {
    id: string,
    name: string,
    position: {
        latitude: number,
        longitude: number
    },
    status: number,
    permanenceId: string,
}

type BaseState = {
    bases: Base[];
    assignedFlights: Flights['id'][],
    assignedResources: Resources,
    currentResources: Resources
}

type BaseAction = {
    addBase: (base: Base) => void,
    addBases: (base: Base[]) => void,
    removeBase: (baseId: string) => void
    updateBase: (updatedBase: Base) => void
    addFlights: (flights: Flights['id'][]) => void
    removeFlights: (flightIds: string[]) => void,
    incrementCurrentResources: (resources: Resources) => void,
    decreaseCurrentResources: (resources: Resources) => void,
    incrementAssignedResources: (resources: Resources) => void,
    decreaseAssignedResources: (resources: Resources) => void,
}

export const useBaseStore = create<BaseState & BaseAction>((set) => ({
    bases: [],
    assignedFlights: [],
    assignedResources: {} as Resources,
    currentResources: {} as Resources,
    addBase: (base) => set((state) => ({ bases: [...state.bases, base] })),
    addBases: (bases) => set((state) => ({ bases: [...state.bases, ...bases] })),
    removeBase: (baseId) => set((state) => ({ bases: state.bases.filter((base) => baseId !== base.id) })),
    updateBase: (updatedBase: Base) =>
        set((state) => ({
            bases: state.bases.map((base) =>
                base.id === updatedBase.id ? updatedBase : base
            ),
        })),
    addFlights: (flights) => set((state) => ({ assignedFlights: [...state.assignedFlights, ...flights] })),
    removeFlights: (flightIds) => set((state) => ({ assignedFlights: state.assignedFlights.filter((flight) => !flightIds.includes(flight)) })),
    incrementCurrentResources: (resources) => set((state) => ({ currentResources: increaseResources(state.currentResources, resources) })),
    decreaseCurrentResources: (resources) => set((state) => ({ currentResources: decreaseResources(state.currentResources, resources) })),
    incrementAssignedResources: (resources) => set((state) => ({ assignedResources: increaseResources(state.assignedResources, resources) })),
    decreaseAssignedResources: (resources) => set((state) => ({ assignedResources: decreaseResources(state.assignedResources, resources) }))
}))