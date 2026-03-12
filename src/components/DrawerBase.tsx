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
import type { BaseType, Flights } from "@/Map/types";
import {
  dummyFlights,
  dummyResources,
  type ResourceItem,
} from "@/Map/constants";

interface IFormInput {
  name: string;
  baseType: BaseType;
  coordinates: string;
  flights: Flights[];
  resources: ResourceItem[];
}

export default function DrawerUI() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<IFormInput>({
    defaultValues: { flights: [], resources: [] },
  });

  const selectedFlights = watch("flights");
  const selectedResources = watch("resources");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Station Instance Data:", data);
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
                  {...register("coordinates")}
                  placeholder="enter coordinates as lat,long"
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
                          setValue("flights", [...selectedFlights, f])
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
                          setValue("resources", [...selectedResources, r])
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
