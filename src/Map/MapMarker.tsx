import { CircleMarker, Popup } from 'react-leaflet';
import type { Base, StationType } from './types';

type StationTypeColors = 'green' | 'yellow' | 'red';

const stationsProperties: Record<StationType, StationTypeColors> = {
    huvudbas: 'green',
    sidobas: 'yellow',
    reservbas: 'red',
}

export default function MapMarker({ stationType, coordinates, id }: Base) {
    return (
        <CircleMarker center={coordinates} fillColor={stationsProperties[stationType]} color={stationsProperties[stationType]} >
            <Popup>
                Station Type:{stationType}<br />
                lat:{coordinates[0]}<br />
                long:{coordinates[1]}<br />
                Id:{id}<br />
            </Popup>
        </CircleMarker>
    )
}