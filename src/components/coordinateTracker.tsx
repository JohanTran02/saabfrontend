import { useMapStore } from "@/Map/MapStore"
import { Box, Text } from "@chakra-ui/react";
import { use } from "react"
import { toaster } from "./ui/toaster";

export default function CoordinateTracker() {

    let coordinates = useMapStore((state) => state.coordinates);
    const handleClick = () => {
        if (coordinates) {

         navigator.clipboard.writeText(`${coordinates[0]}, ${coordinates[1]}`);
        toaster.success({ title: "Coordinates copied to clipboard", type: "success" });
        } else {
            toaster.error({ title: "No coordinates to copy", type: "error" });
        }

    };

    return (
    <Box zIndex="overlay" position="absolute" top="0px" left="0px" bg="black" p={2} borderRadius="md" color="white" onClick={handleClick} cursor="pointer">
        <Text>Current Coordinates: {coordinates ? `${coordinates[0]}, ${coordinates[1]}` : "No coordinates selected"}</Text>
    </Box>

    )
}