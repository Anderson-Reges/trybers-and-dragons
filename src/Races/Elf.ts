import Race from './Race';

class Elf extends Race {
  public maxLifePoints: number;
  static countInstance = 0;

  constructor(name: string, dexterity: number, life = 99) {
    super(name, dexterity);
    this.maxLifePoints = life;
    Elf.setCountInstace();
  }

  static setCountInstace() {
    this.countInstance += 1;
  }

  static createdRacesInstances() {
    return this.countInstance;
  }
}

export default Elf;