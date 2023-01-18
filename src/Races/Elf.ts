import Race from './Race';

export default class Elf extends Race {
  static instanceCount = 0;
  constructor(name: string, dexterity: number, public HP = 99) {
    super(name, dexterity);
    Elf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.HP;
  }

  public static createdRacesInstances(): number {
    return this.instanceCount;
  }
}
