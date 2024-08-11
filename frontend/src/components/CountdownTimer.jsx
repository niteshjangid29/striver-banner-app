import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime, onExpire }) => {
    const [timeLeft, setTimeLeft] = useState(null);

    const calculateTimeLeft = (endTime) => {
        const total = Date.parse(endTime) - Date.now();
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);

        return { total, days, hours, minutes, seconds };
    };

    useEffect(() => {
        // console.log(Date.parse(endTime));
        // console.log(Date.parse(endTime) - Date.now());
        const interval = setInterval(() => {
            const remaining = calculateTimeLeft(endTime);
            setTimeLeft(remaining);

            if (remaining.total <= 0) {
                clearInterval(interval);
                onExpire();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime, onExpire, timeLeft]);

    if (timeLeft === null) return <p>Loading...</p>;

    return (
        <p className="font-semibold">Ends in: {timeLeft?.days}d {timeLeft?.hours}h {timeLeft?.minutes}m {timeLeft?.seconds}s</p>
    );
};

export default CountdownTimer;