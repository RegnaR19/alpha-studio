import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './components/App'
import './css/index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

// Importing the Bootstrap CSS
import './bootstrap/css/bootstrap.css';

const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />);   