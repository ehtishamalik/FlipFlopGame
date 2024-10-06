export interface CounterRef {
  start: () => void;
  stop: () => void;
}

export interface CounterProps {
  movesCount: number;
}
