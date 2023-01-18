import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = Math.ceil(Math.random() * 9);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.ceil(Math.random() * 9);
    this._defense = Math.ceil(Math.random() * 9);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.ceil(Math.random() * 9),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damageGiven = attackPoints - this.defense;

    if (damageGiven > 0) this._lifePoints -= damageGiven;
    if (damageGiven <= 0) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = 1;
    
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damageGiven = this._strength;
    enemy.receiveDamage(damageGiven);
  }

  levelUp(): void {
    this._maxLifePoints += Math.ceil(Math.random() * 9);
    this._strength += Math.ceil(Math.random() * 9);
    this._dexterity += Math.ceil(Math.random() * 9);
    this._defense += Math.ceil(Math.random() * 9);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    if (this._lifePoints < this._maxLifePoints) {
      this._lifePoints = this._maxLifePoints;
    }
  }

  special(enemy: Fighter): void {
    const damageGiven = 2 * this._strength;
    enemy.receiveDamage(damageGiven);
  }
}
