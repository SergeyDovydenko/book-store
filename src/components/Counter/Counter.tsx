import React, { useState } from "react";
import clsx from "clsx";

const Counter = function() {
    const [count, setCount] = useState(0);

    function icrement() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={icrement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;