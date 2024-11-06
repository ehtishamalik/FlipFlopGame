import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startCounter,
  stopCounter,
  incrementCounter,
  resetCounter,
} from '../../../store';
import { RootState } from '../../../store';
import { CounterProps, CounterRef } from './types';
import { formatSeconds } from '../../../utils';

export const Counter = forwardRef<CounterRef, CounterProps>((props, ref) => {
  const dispatch = useDispatch();
  const running = useSelector((state: RootState) => state.counter.running);
  const seconds = useSelector((state: RootState) => state.counter.seconds);

  const intervalId = useRef(0);

  // Start and Stop functions, callable from outside the component
  useImperativeHandle(ref, () => ({
    start: () => dispatch(startCounter()),
    stop: () => dispatch(stopCounter()),
    reset: () => dispatch(resetCounter()),
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
      <div className="counter__container">
        <div className="counter__moves">
          <p className="counter__moves--text">Moves Count</p>
          <p className="counter__moves--value">{props.movesCount}</p>
        </div>
        <div className="counter__timer">
          <p className="counter__timer--text">Seconds</p>
          <p className="counter__timer--value">{formatSeconds(seconds)}</p>
        </div>
      </div>
    </section>
  );
});
