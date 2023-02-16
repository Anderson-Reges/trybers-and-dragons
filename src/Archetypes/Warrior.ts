import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public _energyType: EnergyType;
  static countInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.setCountInstace();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static setCountInstace() {
    this.countInstance += 1;
  }

  static createdArchetypeInstances() {
    return this.countInstance;
  }
}

export default Warrior;