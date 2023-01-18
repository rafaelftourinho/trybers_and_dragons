export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  // private static _instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    // Race._instancesCounter += 1;
  }

  public get name(): string {
    return this.name;
  }

  public get dexterity(): number {
    return this.dexterity;
  }

  public set dexterity(value: number) {
    this._dexterity = value;
  }

  public static createdRacesInstances(): number {
    // return Race._instancesCounter;
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
