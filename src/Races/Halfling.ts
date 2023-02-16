import Race from './Race';

class Halfling extends Race {
  public maxLifePoints: number;
  static countInstance = 0;

  constructor(name: string, dexterity: number, life = 60) {
    super(name, dexterity);
    this.maxLifePoints = life;
    Halfling.setCountInstace();
  }

  static setCountInstace() {
    this.countInstance += 1;
  }

  static createdRacesInstances() {
    return this.countInstance;
  }
}

export default Halfling;