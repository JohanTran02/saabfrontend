import { CircleMarker } from 'react-leaflet';
import type { Base } from './types';

export default function MapMarker({ position, id }: Base) {
    return (
        <CircleMarker key={id} center={[position.latitude, position.longitude]} ></CircleMarker>
    )
}