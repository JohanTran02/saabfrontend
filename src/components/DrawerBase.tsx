import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  Portal,
  Field,
  Input,
  Menu,
} from "@chakra-ui/react";
import { useState } from "react";
export default function DrawerUI() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement={"start"}
    >
      <Box position="fixed" bottom="1.5rem" right="1.5rem" zIndex="overlay">
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm" background={"black"}>
            Set up new Flightbase
          </Button>
        </Drawer.Trigger>
      </Box>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Set up new Flightbase</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Flex direction="column" gap={4}>
                <Field.Root required>
                  <Field.Label>Flightbase Name</Field.Label>
                  <Input placeholder="Enter flightbase name" />

                  <Field.Label>Flightbase Coordinates</Field.Label>
                  <Flex gap={2}>
                    <Input flex={1} placeholder="Latitude" />
                    <Input flex={1} placeholder="Longitude" />
                  </Flex>

                  <Field.Label> Assign Flight to Flightbase</Field.Label>
                  <Menu.Root>
                    <Menu.Trigger asChild>
                      <Button variant="outline">Select Flight</Button>
                    </Menu.Trigger>
                    <Menu.Content>
                      <Menu.Item value="flight 1">Flight 1</Menu.Item>
                      <Menu.Item value="flight 2">Flight 2</Menu.Item>
                      <Menu.Item value="flight 3">Flight 3</Menu.Item>
                    </Menu.Content>
                  </Menu.Root>

                  <Field.Label> Assign Resources to Flightbase</Field.Label>
                  <Menu.Root>
                    <Menu.Trigger asChild>
                      <Button variant="outline">Select Resource</Button>
                    </Menu.Trigger>
                    <Menu.Content>
                      <Menu.Item value="resource 1">Resource 1</Menu.Item>
                      <Menu.Item value="resource 2">Resource 2</Menu.Item>
                      <Menu.Item value="resource 3">Resource 3</Menu.Item>
                    </Menu.Content>
                  </Menu.Root>

                  <Field.Label>Time Estimate</Field.Label>
                  <Input placeholder="Set Estimated Time of Arrival" />
                </Field.Root>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
