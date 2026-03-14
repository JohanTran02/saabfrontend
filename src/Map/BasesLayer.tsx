import { FeatureGroup } from "react-leaflet";
import MapMarker from "./MapMarker";
import { fetchAllBases } from "./fetches";
import { useQuery } from "@tanstack/react-query";
import { useBaseStore } from "./BaseStore";

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

export default function BasesLayer() {
    const { addBases, bases } = useBaseStore()
    const { isLoading, isSuccess, isError, data } = useQuery({
        queryKey: ['allBases'],
        queryFn: async () => {
            const bases = await fetchAllBases() as Base[];
            addBases(bases);
            return bases;
        },
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error...</span>
    }

    return (
        <FeatureGroup>
            {
                isSuccess && data && bases.map((base) => <MapMarker key={base.id} {...base} />)
            }
        </FeatureGroup>
    )
}