import { Card } from '../../Components/FlipFlop/Card';

export function FlipFlop() {
  return (
    <section className="flip-flop">
      <div className="flip-flop__container">
        <div className="flip-flop__grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 900].map((index) => (
            <Card imageLink={`static/${index}.png`} />
          ))}
        </div>
      </div>
    </section>
  );
}
