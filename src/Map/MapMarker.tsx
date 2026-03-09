import { CircleMarker, Popup } from 'react-leaflet';
import type { Station, StationType } from './types';

type StationTypeColors = 'green' | 'yellow' | 'red';

const stationsProperties: Record<StationType, StationTypeColors> = {
    huvudbas: 'green',
    sidobas: 'yellow',
    reservbas: 'red',
}

export default function MapMarker({ stationType, coordinates }: Station) {
    return (
        <CircleMarker center={coordinates} fillColor={stationsProperties[stationType]} color={stationsProperties[stationType]} >
            <Popup>{stationType}</Popup>
        </CircleMarker>
    )
}