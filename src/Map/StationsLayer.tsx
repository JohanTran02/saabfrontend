import { FeatureGroup } from "react-leaflet";
import MapMarker from "./MapMarker";
import { useBaseStore } from "./BaseStore";

export default function StationsLayer() {
    const stations = useBaseStore((state) => (state.bases));
    return (
        <FeatureGroup>
            {
                stations.map((station) => <MapMarker key={station.id} {...station} />)
            }
        </FeatureGroup>
    )
}