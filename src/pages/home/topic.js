import React, { useState } from 'react';
import { Button } from 'antd';

export default function Topic(props) {
    const [count, setCount] = useState(0);
    function handleCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <h2>你点击了{count}次</h2>
            <Button onClick={handleCount} type="primary" color="#aaa" >
                click
            </Button>
        </div>
    )
}
