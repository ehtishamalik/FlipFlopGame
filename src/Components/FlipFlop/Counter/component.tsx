import React, { useEffect, useRef, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startCounter, stopCounter, incrementCounter } from '../../../store';
import { RootState } from '../../../store';
import { CounterProps, CounterRef } from './types';

export const Counter = forwardRef<CounterRef, CounterProps>((props, ref) => {
  const dispatch = useDispatch();
  const running = useSelector((state: RootState) => state.counter.running);
  const seconds = useSelector((state: RootState) => state.counter.seconds);

  const intervalId = useRef(0);

  // Start and Stop functions, callable from outside the component
  React.useImperativeHandle(ref, () => ({
    start: () => dispatch(startCounter()),
    stop: () => dispatch(stopCounter()),
  }));

  // Effect to handle the counter update
  useEffect(() => {
    if (running) {
      intervalId.current = setInterval(() => {
        dispatch(incrementCounter());
      }, 1000);
    } else if (!running && intervalId.current) {
      clearInterval(intervalId.current);
    }
    return () => clearInterval(intervalId.current); // Cleanup on unmount
  }, [running, dispatch]);

  return (
    <section className="counter">
      <div className="counter__inner">
        <div className="counter__moves">
          <p className="counter__moves--text">Moves Count</p>
          <p className="counter__moves--value">{props.movesCount}</p>
        </div>
        <div className="counter__timer">
          <p className="counter__timer--text">Seconds</p>
          <p className="counter__timer--value">{seconds}</p>
        </div>
      </div>
    </section>
  );
});
