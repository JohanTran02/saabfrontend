import { FeatureGroup } from "react-leaflet";
import MapMarker from "./MapMarker";
import type { Station } from "./types";

const stations: Station[] = [
    { stationType: 'huvudbas', coordinates: [60.073774388521656, 16.808927085708422], id: 'asdfoasjdfoajsodf' },
    { stationType: 'reservbas', coordinates: [60.13882461404783, 14.123980863454367], id: 'iosajdgouiasdfiais' },
    { stationType: 'sidobas', coordinates: [60.66805933137298, 14.070586699767079], id: 'asodfoasdjfoasdfjas' },
    { stationType: 'reservbas', coordinates: [59.268549179577285, 14.266775673332363], id: 'aoisdfiuahsdiufhaiusdfgiuasd' },
]

export default function StationsLayer() {
    return (
        <FeatureGroup>
            {
                stations.map((station) => <MapMarker key={station.id} {...station} />)
            }
        </FeatureGroup>
    )
}