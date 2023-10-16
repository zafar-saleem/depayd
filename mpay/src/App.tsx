import "./App.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Router>
  )
}

export default App
