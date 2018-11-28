import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <p style={{ color: "green" }}>楼船夜雪瓜洲渡 铁马秋风大散关</p>
            <p>六朝旧事随流水 但寒烟衰草凝绿</p>
            <p>现在是 {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

function tick() {
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
}
setInterval(tick, 1000);
