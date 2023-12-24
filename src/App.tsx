import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
import Home from "./views/Home";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="md:w-[70%] w-4/5 mx-auto py-6">
          <Home />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
