import './../../index.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useRef } from 'react';
import firebase from '../../firebase/firebaseutils';
import {v4 as uuid} from "uuid"; 

import { CalculateCurrentTime } from '../../helpers';

import { useGlobalContext } from '../../context';

const AddCard = () => {
  const {setActiveTimers } = useGlobalContext();

  const timeInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const consoleNoRef = useRef(null);
  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth()+1;
  var dia = today.getDate();
  var fecha =dia+"-"+mes+"-"+year;
  const createNewCardHandler = () => {
      console.log('here');
    //   if(+timeInputRef.current.value) return;
    //   if(+nameInputRef.current.value) return;
    //   if(+consoleNoRef.current.value) return;

      setActiveTimers(previousState => {
          const newInput = {
            fullName: nameInputRef.current.value,  
            timeLeft: timeInputRef.current.value,
            consoleNumber: consoleNoRef.current.value,
            startTime: CalculateCurrentTime()            
          }
          const db=firebase.firestore().collection(`${fecha}`).doc(`${uuid()}`);
 db.set(newInput);
          //console.log(newInput);

          // Clearing all fields
          timeInputRef.current.value = '';
          nameInputRef.current.value = '';
          consoleNoRef.current.value = '';
          
          return [...previousState, newInput];
      })

  };

  //?  Time increment and decrement Handler Functions for Create New Entry Card
  const incrementHandler = () => {
    const value = timeInputRef.current.value;
    timeInputRef.current.value = Number(value) + 30;
  };
  const decrementHandler = () => {
    const value = timeInputRef.current.value;

    //Guard Clause to avoid negative input
    if (+value === 0) return;

    timeInputRef.current.value = Number(value) - 30;
  };
  //? ///////////////////////////////////////////////////////////////////////
  return (
    <div className="add--new--card">
      <h1 className="new--card--header">Create New Entry</h1>
      <input
        ref={nameInputRef}
        placeholder="Name"
        className="new--card--input"
        type="text"
      />
      <input
        placeholder="Console No."
        className="new--card--input"
        type="number"
        ref={consoleNoRef}
      />
      <h3>Time</h3>
      <div className="time--input--container">
        <div className="time--input--icons--wrapper">
          <AiOutlineMinusCircle
            className="time--input--icons"
            onClick={decrementHandler}
          />
        </div>

        <input
          ref={timeInputRef}
          className="time--input"
          type="number"
          step="30"
          min="0"
          max="999"
        />
        <div className="time--input--icons--wrapper">
          <AiOutlinePlusCircle
            className="time--input--icons"
            onClick={incrementHandler}
          />
        </div>
      </div>
      <div className="button--wrapper">
        <button
          onClick={createNewCardHandler}
          className="btn--create--new--card"
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default AddCard;
