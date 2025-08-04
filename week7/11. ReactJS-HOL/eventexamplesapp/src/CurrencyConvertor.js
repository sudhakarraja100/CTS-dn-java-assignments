import React, { useState } from 'react';

function CurrencyConvertor() {
const [rupees, setRupees] = useState('');
const [euro, setEuro] = useState('');

const handleSubmit = () => {
    const converted = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(converted);
};

return (
    <div style={{ marginTop: 30 }}>
        <h2>Currency Converter (INR to Euro)</h2>
        <input
        type="number"
        placeholder="Enter amount in ₹"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        />
        <button onClick={handleSubmit} style={{ marginLeft: 10 }}>Convert</button>
        <p>Converted Value in Euro: €{euro}</p>
    </div>
);
}

export default CurrencyConvertor;
