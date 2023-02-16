import Race from './Race';

class Dwarf extends Race {
  public maxLifePoints: number;
  static countInstance = 0;

  constructor(name: string, dexterity: number, life = 80) {
    super(name, dexterity);
    this.maxLifePoints = life;
    Dwarf.setCountInstace();
  }

  static setCountInstace() {
    this.countInstance += 1;
  }

  static createdRacesInstances() {
    return this.countInstance;
  }
}

export default Dwarf;