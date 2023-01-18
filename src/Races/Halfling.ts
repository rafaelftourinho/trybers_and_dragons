import Race from './Race';

export default class Halfling extends Race {
  static instanceCount = 0;
  constructor(name: string, dexterity: number, public HP = 60) {
    super(name, dexterity);
    Halfling.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.HP;
  }

  public static createdRacesInstances(): number {
    return this.instanceCount;
  }
}
