import { useState } from "react";
import { DifficultySelectorProps } from "./types";
import clsx from "clsx";

export const DifficultySelector = ({
  levels,
  classNames,
  callback
}: DifficultySelectorProps) => {
  const [selectedLevel, useSelectedLevel] = useState<string | null>(null);
  
  return <div className={`difficulty-selection ${classNames}`}>
    {levels.map((level) => {
      return <button key={level} type="button" className={clsx('button', {
        'selected': selectedLevel === level,
      })} onClick={() => {
        useSelectedLevel(level);
        callback(level);
      }}>{level}</button>
    })}
  </div>
};
