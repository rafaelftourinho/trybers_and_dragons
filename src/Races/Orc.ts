import Race from './Race';

export default class Orc extends Race {
  static instanceCount = 0;
  constructor(name: string, dexterity: number, public HP = 74) {
    super(name, dexterity);
    Orc.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.HP;
  }

  public static createdRacesInstances(): number {
    return this.instanceCount;
  }
}
