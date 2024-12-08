import React, { useState, useEffect } from 'react';

function RentSavingsCalculator() {
  const [rent, setRent] = useState(900);
  const [dailyGoal, setDailyGoal] = useState(0);

  useEffect(() => {
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const daysLeft = lastDayOfMonth.getDate() - today.getDate();

    const dailyGoal = rent / daysLeft;
    setDailyGoal(dailyGoal.toFixed(2));
  }, [rent]);

  return (
    <div>
      <h2>Rent Savings Calculator</h2>
      <p>Your daily savings goal to reach $900 by the 3rd is: ${dailyGoal}</p>
    </div>
  );
}

export default RentSavingsCalculator;
