import { createRoot } from "react-dom/client";
import App from "./App";
import './input.css'

const root = createRoot(document.getElementById('root')
);

// eslint-disable-next-line react/react-in-jsx-scope
root.render(<App/>)