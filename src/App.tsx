import Map from "./Map/Map";
import DrawerUI from "./components/DrawerBase";
import CoordinateTracker from "./components/coordinateTracker";
import { Provider } from "./components/ui/provider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
import { Toaster } from "./components/ui/toaster";
import DrawerBaseContent from "./components/DrawerBaseContent";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <DrawerBaseContent />
        <DrawerUI />
        <Map />
        <CoordinateTracker />
        <Toaster />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
