import './../../index.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Clock from './Clock';
import { useEffect } from 'react';

const Card = ({ fullName, timeLeft, consoleNumber, startTime }) => {
  console.log(fullName, timeLeft, consoleNumber, startTime);

  return (
    <div className="card">
      <h3>{`Console No. ${consoleNumber}`}</h3>
      <div className="clock--container">
        <CountdownCircleTimer
          onComplete={() => {
            // do your stuff here
            return [false];
          }}
          isPlaying
          duration={timeLeft * 60}
          colors="#68A4FF"
          // initialRemainingTime={10}
        >
          <Clock />
        </CountdownCircleTimer>
      </div>
      <h2>{fullName}</h2>
      <h3>{startTime}</h3>
      <div className="button--wrapper">
        <button className="btn--extend">Extend</button>
      </div>
    </div>
  );
};

export default Card;
