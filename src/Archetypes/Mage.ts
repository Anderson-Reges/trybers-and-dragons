import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public _energyType: EnergyType;
  static countInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.setCountInstace();
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

export default Mage;