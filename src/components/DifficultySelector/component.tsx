import { useState } from "react";
import { DifficultySelectorProps } from "./types";
import clsx from "clsx";

export const DifficultySelector = ({
  levels,
  classNames,
  callback
}: DifficultySelectorProps) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const onClickHandler = (level: string) => {
    setSelectedLevel(level);
    callback(level);
  };
  
  return <div className={`difficulty-selection ${classNames}`}>
    {levels.map((level) => {
      return <button key={level} type="button" className={clsx('button', {
        'selected': selectedLevel === level,
      })} onClick={() => {
        onClickHandler(level);
      }}>{level}</button>
    })}
  </div>
};
