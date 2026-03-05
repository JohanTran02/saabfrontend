import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

export default function Map() {
    return (
        <MapContainer bounds={[[55, 10], [70, 25]]} maxBounds={[[55, 10], [70, 25]]} zoomControl={false} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                minZoom={5}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="topright" />
        </MapContainer>
    )
}