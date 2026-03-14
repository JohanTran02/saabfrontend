import Map from "./Map/Map";
import DrawerUI from "./components/DrawerBase";
import { Provider } from "./components/ui/provider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <DrawerUI />
        <Map />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
