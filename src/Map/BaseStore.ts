import { create } from "zustand";
import type { Station } from "./types";

type BaseState = {
    bases: Station[];
}

type BaseAction = {
    addStation: (base: Station) => void
}

export const useBaseStore = create<BaseState & BaseAction>((set) => ({
    bases: [
        { stationType: 'huvudbas', coordinates: [60.073774388521656, 16.808927085708422], id: 'asdfoasjdfoajsodf' },
        { stationType: 'reservbas', coordinates: [60.13882461404783, 14.123980863454367], id: 'iosajdgouiasdfiais' },
        { stationType: 'sidobas', coordinates: [60.66805933137298, 14.070586699767079], id: 'asodfoasdjfoasdfjas' },
        { stationType: 'reservbas', coordinates: [59.268549179577285, 14.266775673332363], id: 'aoisdfiuahsdiufhaiusdfgiuasd' },
    ],
    addStation: (base) => set((state) => ({ bases: [...state.bases, base] }))
}))