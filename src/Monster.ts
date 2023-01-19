import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints;
  private _strength;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints = attackPoints - this.lifePoints;

    if (this.lifePoints <= 0) this._lifePoints = -1;

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const damageGiven = this.strength;
    enemy.receiveDamage(damageGiven);
  }
}
