import React, { useState } from 'react';
import '../styles/TemperatureCard.css';

const TemperatureCard = () => {
    const [tempCount, setTempCount] = useState(0);

    const increaseTemp = () => {
        setTempCount(prevCount => prevCount + 1);
    };

    const decreaseTemp = () => {
        setTempCount(prevCount => prevCount - 1);
    };

    let cardBackground = ''; 
    let gifImage = '';

    if (tempCount >= 15) {
        cardBackground = 'red-background'; // For high temperature
        gifImage = 'url(https://i.pinimg.com/originals/5a/3d/4a/5a3d4ae6d8b5435b040ac92882b170dc.gif)'; 
    } else if (tempCount >= 0 && tempCount <= 14) {
        cardBackground = 'green-background'; // For moderate temperature
        gifImage = 'url(https://i.pinimg.com/originals/3a/2a/8f/3a2a8f79d9d4a7d36a258fb129ba36f9.gif)'; 
    } else {
        cardBackground = 'iceblue-background'; // For low temperature
        gifImage = 'url(https://clipart-library.com/img/1922007.gif)'; 
    }

    return (
        <div 
            className={`temperature-card ${cardBackground}`} 
            style={{ backgroundImage: gifImage }}
        >
            <div className="temp-value">{tempCount}</div>
            <div className="button-container">
              
                <button onClick={decreaseTemp}>-</button>
                <button onClick={increaseTemp}>+</button>
            </div>
        </div>
    );
};

export default TemperatureCard;
