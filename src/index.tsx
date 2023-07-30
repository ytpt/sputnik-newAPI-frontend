import React from "react";
import App from "components/App";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

const root = (
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);