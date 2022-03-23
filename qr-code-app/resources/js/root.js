import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <div className="container">
            <Dashboard />
        </div>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
