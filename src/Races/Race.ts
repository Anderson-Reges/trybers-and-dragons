export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  
  constructor(n: string, d: number) {
    this.name = n;
    this.dexterity = d;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}