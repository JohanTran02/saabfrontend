import { Button } from "@chakra-ui/react";
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useBaseStore } from "@/Map/BaseStore";
import { checkPermanence, checkStatus } from "@/Map/helpers";


export default function DrawerBaseContent() {
    const { baseModalContent, setBaseModalContent } = useBaseStore();

    const { currentBase } = useBaseStore();

    if (!currentBase) return;

    return (
        <DrawerRoot
            open={baseModalContent}
            onOpenChange={(e) => setBaseModalContent(e.open)}
            placement="start"
        >
            <DrawerTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    bg="black"
                    color="white"
                    position="fixed"
                    bottom="6"
                    right="6"
                    zIndex="overlay"
                >
                    Set up new Flightbase
                </Button>
            </DrawerTrigger>

            <DrawerBackdrop />
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{currentBase.name}</DrawerTitle>
                </DrawerHeader>

                <DrawerBody>
                    <div>Staus: {checkStatus(currentBase.status)}</div>
                    <div>Base Type: {checkPermanence(currentBase.permanenceId)}</div>
                    <div>Latitude: {currentBase.position.latitude} Longitude:{currentBase.position.longitude}</div>
                </DrawerBody>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot >
    );
}
