import { CircleMarker } from 'react-leaflet';

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

export default function MapMarker({ position, id }: Base) {
    return (
        <CircleMarker key={id} center={[position.latitude, position.longitude]} ></CircleMarker>
    )
}