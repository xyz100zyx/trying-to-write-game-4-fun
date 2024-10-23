import { Attackable } from '@shared/interfaces';
import { Animator } from './animator.classes';

export abstract class Entity implements Attackable {
  private _healthPoints: number;
  private _damage: number;
  private _animator: Animator;

  constructor(healthPoints: number, damage: number, animator: Animator) {
    this._healthPoints = healthPoints;
    this._damage = damage;
    this._animator = animator;
    this._animator.bindAnimatedEntity(this)
  }

  get healthPoints() {
    return this._healthPoints;
  }

  set healthPoints(newHealthPoints: number) {
    this._healthPoints = newHealthPoints;
  }

  get damage() {
    return this._damage;
  }

  set damage(newDamage: number) {
    this.damage = newDamage;
  }

  incrementHealthPoints(value: number) {
    if (value <= 0) return;
    this.healthPoints -= value;
  }

  getDamage(damage: number) {
    this.healthPoints -= damage;
    if (this.healthPoints < 0) throw new Error('Player killed');
  }

  attack(entity: Entity) {
    entity.getDamage(this.damage);
  }

  get animator(){
    return this._animator
  }
}
