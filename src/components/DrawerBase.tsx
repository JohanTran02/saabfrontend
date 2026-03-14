import { useEffect, useState } from "react";
import { useForm, useFieldArray,  type SubmitHandler } from "react-hook-form";
import { Button, Field, Input, Stack, Box, Text,Separator, DrawerTrigger, FieldRoot } from "@chakra-ui/react";
import {
  DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent,
  DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle,
} from "@/components/ui/drawer";
import { useMapStore } from "@/Map/MapStore"; 
import { useBaseStore } from "@/Map/BaseStore";
import type { Base } from "@/Map/types";

export default function DrawerUI() {
  const [open, setOpen] = useState(false);
  const { coordinates } = useMapStore(); 
  const { addBase } = useBaseStore();

  const { register, handleSubmit, control, setValue, reset } = useForm<Base>({
    defaultValues: {
      name: "",
      position: { latitude: 0, longitude: 0 },
      vehiclesStationed: [],
      cargoItems: []
    },
  });

useEffect(() => {
    if (coordinates && coordinates.length === 2) {
      setValue("position.latitude", coordinates[0]);
      setValue("position.longitude", coordinates[1]);
      // keep drawer closed; open only via button
    }
  }, [coordinates, setValue]);

  // 2. Dynamic Arrays for Vehicles and Cargo
  const { fields: vehicleFields, append: appendVehicle, remove: removeVehicle } = useFieldArray({
    control,
    name: "vehiclesStationed"
  });

  const { fields: cargoFields, append: appendCargo, remove: removeCargo } = useFieldArray({
    control,
    name: "cargoItems"
  });

  const onSubmit: SubmitHandler<Base> = (data) => {
    const finalizedBase = { ...data, id: crypto.randomUUID() };
    addBase(finalizedBase);
    console.log(finalizedBase);
   
    reset(); // Clear form for next time
  };

  return (
    <DrawerRoot 
    placement="start"
     size="md"
     open={open} 
      onOpenChange={(e) => setOpen(e.open)} 
    >
      <DrawerTrigger asChild>
        <Button 
          variant="solid" 
          colorPalette="blue" 
          position="fixed" 
          bottom="20px" 
          left="20px" 
          zIndex="1000"
        >
          Add New Base
        </Button>
      </DrawerTrigger>
      <DrawerBackdrop />
      <DrawerContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerHeader>
            <DrawerTitle>Register New Base</DrawerTitle>
          </DrawerHeader>

          <DrawerBody maxHeight="calc(100vh - 160px)" overflowY="auto">
            <Stack gap="6">
              {/* --- SECTION: BASIC INFO --- */}
              <Box>
                <Text fontWeight="bold" mb="2">General Information</Text>
                <Field.Root>
                  <Field.Label>Base Name</Field.Label>
                  <Input {...register("name", { required: "Name is required" })} placeholder="Base Alpha" />
                </Field.Root>

                <Stack direction="row" mt="4" gap="4">
                  <Field.Root>
                    <Field.Label>Lat</Field.Label>
                    <Input {...register("position.latitude")} readOnly bg="gray.50" />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Lng</Field.Label>
                    <Input {...register("position.longitude")} readOnly bg="gray.50" />
                  </Field.Root>
                </Stack>
              </Box>

              <Separator />

              {/* --- SECTION: VEHICLES (Flight/Transport) --- */}
          {/* --- SECTION: VEHICLES (Expanded) --- */}
<Box>
  <Stack direction="row" justify="space-between" align="center" mb="2">
    <Text fontWeight="bold">Stationed Vehicles</Text>
    <Button size="xs" colorPalette="teal" variant="surface" onClick={() =>
      appendVehicle({ 
        guid: crypto.randomUUID(), 
        identifier: "", 
        model: "", 
        position: { 
          latitude: coordinates ? coordinates[0] : 0, 
          longitude: coordinates ? coordinates[1] : 0 
        }, 
        onGoingRepairs: [], 
        cargoItems: [], // Vehicles have their own cargo
        status: { id: 1, statusType: "Operational" }, // Default status
        scheduleNavigation: null
      })}>
      + Add Vehicle
    </Button>
  </Stack>
  
  <Stack gap="4">
    {vehicleFields.map((field, index) => (
      <Box key={field.id} p="4" borderWidth="1px" borderRadius="md" bg="gray.50/50">
        <Stack gap="3">
          {/* 1. Basic Info & Remove Button */}
          <Stack direction="row" gap="2">
              <Input size="sm" placeholder="GRIPEN-01" {...register(`vehiclesStationed.${index}.identifier`)} />
              <Input size="sm" placeholder="JAS 39" {...register(`vehiclesStationed.${index}.model`)} />
            <Button size="sm" colorPalette="red" variant="ghost" mt="6" onClick={() => removeVehicle(index)}>×</Button>
          </Stack>

          {/* 2. Status Selection */}
             <select 
               {...register(`vehiclesStationed.${index}.status.id`, { valueAsNumber: true })}
               style={{ fontSize: '12px', padding: '4px', border: '1px solid #ddd', borderRadius: '4px' }}
             >
               <option value={1}>Operational</option>
               <option value={2}>Maintenance Required</option>
               <option value={3}>In Transit</option>
             </select>

          {/* 3. Schedule (Destination & Date) */}
          <Box p="2" bg="white" borderRadius="sm" borderWidth="1px">
            <Text fontSize="xs" fontWeight="bold" mb="2">Schedule / Destination</Text>
            <Stack direction="row" gap="2">
              <Input size="xs" placeholder="Dest Lat" {...register(`vehiclesStationed.${index}.scheduleNavigation.destination.latitude`, { valueAsNumber: true })} />
              <Input size="xs" placeholder="Dest Lng" {...register(`vehiclesStationed.${index}.scheduleNavigation.destination.longitude`, { valueAsNumber: true })} />
            </Stack>
            <Input size="xs" type="datetime-local" mt="2" {...register(`vehiclesStationed.${index}.scheduleNavigation.scheduledDate`)} />
          </Box>

          {/* Note: Repairs and CargoItems inside a vehicle are usually managed via 
              a separate 'Sub-FieldArray', but to keep it simple for now, 
              you can add a 'Note' field or just these main properties. */}
        </Stack>
      </Box>
    ))}
  </Stack>
</Box>

              <Separator />
              <Box>
                <Stack direction="row" justify="space-between" align="center" mb="2">
                  <Text fontWeight="bold">Cargo Items</Text>
                  <Button size="xs" colorPalette="blue" variant="surface" onClick={() => appendCargo({ 
                    id: crypto.randomUUID(), title: "", quantity: 0, unit: "kg", note: "" 
                  })}>
                    + Add Cargo
                  </Button>
                </Stack>

                <Stack gap="2">
                  {cargoFields.map((field, index) => (
                    <Stack direction="row" key={field.id} gap="2">
                      <Input size="sm" placeholder="Title" {...register(`cargoItems.${index}.title`)} />
                      <Input size="sm" type="number" width="70px" {...register(`cargoItems.${index}.quantity`)} />
                      <Input size="sm"{...register(`cargoItems.${index}.unit`)}/>
                      <Button size="sm" colorPalette="red" variant="ghost" onClick={() => removeCargo(index)}>×</Button>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" colorPalette="blue" onClick={() => setOpen(false)}>Create Base</Button>
          </DrawerFooter>
        </form>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}