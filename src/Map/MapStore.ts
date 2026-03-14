import {create} from 'zustand';

type MapState = {
    coordinates: [number, number] | null;
    setCoordinates: (lat: number, lng: number) => void;
}

export const useMapStore = create<MapState>((set) => ({
    coordinates: null,
    setCoordinates: (lat, lng) => set({ coordinates: [lat, lng] }),
}))