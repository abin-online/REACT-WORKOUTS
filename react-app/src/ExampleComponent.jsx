import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or updated');

        // Cleanup function (runs on unmount)
        return () => {
            console.log('Component unmounted');
        };
    }, [count]); // Effect runs when 'count' changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

export default ExampleComponent