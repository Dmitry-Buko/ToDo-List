import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToDoProvider } from "../provider/ToDoProvider";
import { Provider } from "react-redux";
import store from '../redux/store.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </Provider>
  </StrictMode>,
);
