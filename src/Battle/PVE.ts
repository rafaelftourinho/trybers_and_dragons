import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _p: Fighter;
  private _enemy: (Fighter | SimpleFighter)[];

  constructor(p: Fighter, enemy: (Fighter | SimpleFighter)[]) {
    super(p);
    this._p = p;
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((e) => {
      while (this._p.lifePoints > 0 && e.lifePoints > 0) {
        this._p.attack(e);
        e.attack(this._p);
      }
    });
    return super.fight();
  }
}
