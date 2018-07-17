import React from "react";
import app from "./app.scss";

class App extends React.Component {
    render() {
        return (
            <div className={app.box}>
                <span>React</span>
                CSS Modules
            </div>
        );
    }
};

export default App;
