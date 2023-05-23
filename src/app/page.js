"use client"

import React, { useState } from 'react';

export default function Home() {
  const [userHeight, setUserHeight] = useState('');
  const [userWeight, setUserWeight] = useState('');
  const [bmiAmount, setBmiAmount] = useState('');

  const heightInputChange = (event) => {
    setUserHeight(event.target.value);
  };

  const weightInputChange = (event) => {
    setUserWeight(event.target.value);
  };

  const calculateBmi = () => {
    const bmi = userWeight / ((userHeight / 100) ** 2);
    setBmiAmount(bmi);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-zinc-8">
        <h2>CALCULATE YOUR BMI</h2>
        <form className="mt-4">
          <label>WEIGHT:</label>
          <input
            type="text"
            required
            value={userWeight}
            onChange={weightInputChange}
            className="w-12 text-gray-900 ml-4 rounded-full"
          />

          <label>HEIGHT:</label>
          <input
            type="text"
            required
            value={userHeight}
            onChange={heightInputChange}
            className="w-12 text-gray-900 ml-4 rounded-full"
          />
        </form>
        <h2 className="mt-[300px] text-2xl">YOUR BMI IS: {bmiAmount}</h2>
        <button
          className="mt-[50px] bg-white font-mono w-[200px] h-[80px] rounded-3xl text-gray-900 text-2xl"
          onClick={calculateBmi}
        >
          CALCULATE
        </button>
      </div>
    </main>
  );
}
