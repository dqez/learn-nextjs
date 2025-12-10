import { useState } from "react"

function Button() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
            Bạn đã nhấn **{count}** lần
        </button>
    );
}

export default Button;