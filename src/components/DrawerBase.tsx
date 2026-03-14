import { Button, Field, Input, Stack } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { Base } from "@/Map/types";
import {
  dummyFlights,
  dummyResources,
} from "@/Map/constants";
import { useBaseStore } from "@/Map/BaseStore";



export default function DrawerUI() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<Base>({
    defaultValues: { id: "", name: "", baseType: "huvudbas", coordinates: [0, 0], assignedFlights: [], assignedResources: [], currentResources: [] },
  });

  const baseStore = useBaseStore();



  const selectedFlights = watch("assignedFlights");
  const selectedResources = watch("assignedResources");

  const onSubmit: SubmitHandler<Base> = (data) => {
    console.log("Station Instance Data:", data);
    console.log(typeof data.coordinates)

    baseStore.addBase(data);
    setOpen(false);
  };

  return (
    <DrawerRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerHeader>
            <DrawerTitle>Set up new Flightbase</DrawerTitle>
          </DrawerHeader>

          <DrawerBody>
            <Stack gap="4">
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input {...register("name")} placeholder="New Flightbase" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Base Type</Field.Label>
                <Input {...register("baseType")} placeholder="Base Type" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Coordinates</Field.Label>
                <Input
                  {...register("coordinates", {
                    setValueAs: (value: any) => {
                      
                      if (Array.isArray(value)) return value;

                     
                      if (typeof value !== "string" || !value.trim())
                        return [0, 0];

                     
                      const parts = value
                        .split(",")
                        .map((v) => parseFloat(v.trim()));

                      return parts.length === 2 && !parts.some(isNaN)
                        ? parts
                        : [0, 0];
                    },
                  })}
                  placeholder="58.41, 15.62"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Flights</Field.Label>
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Button
                      variant="outline"
                      width="full"
                      justifyContent="start"
                    >
                      {selectedFlights.length > 0
                        ? `${selectedFlights.length} Selected`
                        : "Select Flights"}
                    </Button>
                  </MenuTrigger>
                  <MenuContent>
                    {dummyFlights.map((f) => (
                      <MenuItem
                        key={f.id}
                        value={f.model}
                        onClick={() =>
                          setValue("assignedFlights", [
                            ...selectedFlights, f
                          ])
                        }
                      >
                        {f.model}
                      </MenuItem>
                    ))}
                  </MenuContent>
                </MenuRoot>
                <MenuRoot>
                  <Field.Label>Resources</Field.Label>
                  <MenuTrigger asChild>
                    <Button
                      variant="outline"
                      width="full"
                      justifyContent="start"
                    >
                      {selectedResources.length > 0
                        ? `${selectedResources.length} Selected`
                        : "Select Resources"}
                    </Button>
                  </MenuTrigger>
                  <MenuContent>
                    {dummyResources.map((r) => (
                      <MenuItem
                        key={r.id}
                        value={r.name}
                        onClick={() =>
                          setValue("assignedResources", [
                            ...selectedResources,
                            r
                          ])
                        }
                      >
                        {r.name}
                      </MenuItem>
                    ))}
                  </MenuContent>
                </MenuRoot>
              </Field.Root>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Station</Button>
          </DrawerFooter>
        </form>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
