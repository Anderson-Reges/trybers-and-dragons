import Fighter from './Fighter';
import Monster from './Monster';

class Dragon extends Monster {
  constructor(lifePoints = 999) {
    super(lifePoints);
  }

  get lifePoints() {
    return this._lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    if (this.lifePoints <= 0) this._lifePoints = -1;
    this._lifePoints -= attackPoints;

    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Dragon;