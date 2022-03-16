import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PhoneProvider } from "./Context/PhoneContext";
import { NotebookProvider } from "./Context/NotebookContext";
import { AccessorieProvider } from "./Context/AccessorieContext";
import { OrderingProvider } from "./Context/OrderingContext";
import { LangProvider } from "./Context/LangContext";
import { TestProvider } from "./Context/TestContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TestProvider>
      <LangProvider>
       <NotebookProvider>
          <PhoneProvider>
            <AccessorieProvider>
              <OrderingProvider>
                  <App />
              </OrderingProvider>
            </AccessorieProvider>
          </PhoneProvider>
        </NotebookProvider>
      </LangProvider>
    </TestProvider>


    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
