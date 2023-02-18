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
    this.monstersArray.forEach((monster) => {
      this.characterFighter.attack(monster);
      monster.attack(this.characterFighter);
    });
  }

  fight(): number {
    this.battle();

    return super.fight();
  }
}

export default PVE;