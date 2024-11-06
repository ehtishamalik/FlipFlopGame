export interface CounterRef {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export interface CounterProps {
  movesCount: number;
}
