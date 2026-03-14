import { CircleMarker } from 'react-leaflet';
import { useBaseStore } from './BaseStore';
import type { LeafletEventHandlerFnMap } from 'leaflet';

type Base = {
    guid: string,
    name: string,
    position: {
        latitude: number,
        longitude: number
    },
    status: number,
    permanenceId: string,
}


export default function MapMarker({ base }: { base: Base }) {
    const { currentBase, setCurrentBase, setBaseModalContent } = useBaseStore();
    const eventHandler: LeafletEventHandlerFnMap = {
        click() {
            setCurrentBase(base);
            setBaseModalContent(true);
            console.log(currentBase)
        }
    }

    return (
        <CircleMarker key={base.guid} center={[base.position.latitude, base.position.longitude]} eventHandlers={eventHandler}></CircleMarker>
    )
}