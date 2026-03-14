import Map from "./Map/Map";
import DrawerUI from "./components/DrawerBase";
import CoordinateTracker from "./components/coordinateTracker";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <Toaster />
      <CoordinateTracker />
      <DrawerUI />
      <Map />
    </Provider>
  );
}

export default App;
