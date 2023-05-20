import React, { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(0);
    console.log("hello...")

    const increment = () => {
      setCounter(counter + 1);
    };
    return (
        <div>
            <div>
                This was made from Scratch! Also hello world!
                <button onClick={increment}>Increment</button>
                {counter}
            </div>
        </div>
    )
}