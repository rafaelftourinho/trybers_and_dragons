import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instanceCount += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._instanceCount;
  }
}
