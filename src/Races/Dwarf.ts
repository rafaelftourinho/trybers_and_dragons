import Race from './Race';

export default class Dwarf extends Race {
  static instanceCount = 0;
  constructor(name: string, dexterity: number, public HP = 80) {
    super(name, dexterity);
    Dwarf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.HP;
  }

  public static createdRacesInstances(): number {
    return this.instanceCount;
  }
}
