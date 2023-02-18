import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private characterFighter: Fighter,
    private monstersArray: Array<Fighter | SimpleFighter>,
  ) {
    super(characterFighter);
  }

  private battle() {
    while (this.characterFighter.lifePoints !== -1
      && this.monstersArray.some((enemy) => enemy.lifePoints !== -1)) {
      this.monstersArray.forEach((enemy) => {
        this.characterFighter.attack(enemy);
        enemy.attack(this.characterFighter);
      });
    }
  }

  fight(): number {
    this.battle();

    return super.fight();
  }
}

export default PVE;