import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(n: string) {
    this.name = n;
    this.special = 0;
    this.cost = 0;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}
export default Archetype;