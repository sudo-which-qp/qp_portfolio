import { Provider } from "@/components/ui/provider";

function App({ children }: { children: React.ReactNode }) {
  return (
      <Provider>
        {children}
      </Provider>
  );
}

export default App;
