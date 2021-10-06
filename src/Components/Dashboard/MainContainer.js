import './../../index.css';
import Card from './Card';
import { useState } from 'react';
import AddCard from './AddCard';
import { useGlobalContext } from '../../context';


const MainContainer = () => {
  const { activeTimers } = useGlobalContext();

  return (
    <div className="main--container">
      <div className="main--container_title">DEVICES</div>
      <div className="underline" />

      <div className="card--container">
        {activeTimers.map((timerInfo, index) => {
          const { fullName, timeLeft, consoleNumber, startTime } = timerInfo;

          return (
            <Card
              key={index}
              fullName={fullName}
              timeLeft={timeLeft}
              consoleNumber={consoleNumber}
              startTime={startTime}
            />
          );
        })}

        <AddCard  />
      </div>
    </div>
  );
};

export default MainContainer;
