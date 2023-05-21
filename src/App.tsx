import { Error } from "./components/Error";
import './index.css';
import { RootProvider } from "./providers/root";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <RootProvider />
    </ErrorBoundary>
  )
}

export default App
