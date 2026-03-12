import { CircleMarker, Popup } from 'react-leaflet';
import type { Base, BaseType } from './types';

type BaseTypeColors = 'green' | 'yellow' | 'red';

const BasesProperties: Record<BaseType, BaseTypeColors> = {
    huvudbas: 'green',
    sidobas: 'yellow',
    reservbas: 'red',
}

export default function MapMarker({ baseType: BaseType, coordinates, id }: Base) {
    return (
        <CircleMarker center={coordinates} fillColor={BasesProperties[BaseType]} color={BasesProperties[BaseType]} >
            <Popup>
                Base Type:{BaseType}<br />
                lat:{coordinates[0]}<br />
                long:{coordinates[1]}<br />
                Id:{id}<br />
            </Popup>
        </CircleMarker>
    )
}