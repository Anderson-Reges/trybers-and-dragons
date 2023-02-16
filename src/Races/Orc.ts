import Race from './Race';

class Orc extends Race {
  public maxLifePoints: number;
  static countInstance = 0;

  constructor(name: string, dexterity: number, life = 74) {
    super(name, dexterity);
    this.maxLifePoints = life;
    Orc.setCountInstace();
  }

  static setCountInstace() {
    this.countInstance += 1;
  }

  static createdRacesInstances() {
    return this.countInstance;
  }
}

export default Orc;