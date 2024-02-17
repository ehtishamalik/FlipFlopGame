import { Card } from "../Card";
import { allAnimals } from "../common/images";
import { CardsProps } from "./types";

export const Cards = ({
  dimension
}: CardsProps) => {
  const totalCards: number = dimension * dimension;
  const cardsContainer = Array.from({ length: totalCards }, (_, index) => (
    <Card image={allAnimals[index]} showAnimal callback={() => {}} />
  ))
  return (
    <div className="cards-grid">
      {cardsContainer}
    </div>
  );
};
