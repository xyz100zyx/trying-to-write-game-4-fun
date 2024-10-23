import { EEntityAnimations } from '../constants';
import { Animated, Attackable } from '../interfaces';
import { TEnityAnimationsMeta } from '../interfaces/entityAnimationState.interfaces';

export abstract class Entity implements Attackable, Animated {
  private _healthPoints: number;
  private _damage: number;

  animationsMeta: TEnityAnimationsMeta;
  currentAnimation: EEntityAnimations = EEntityAnimations.IDLE;

  constructor(healthPoints: number, damage: number, animationsMeta: TEnityAnimationsMeta) {
    this._healthPoints = healthPoints;
    this._damage = damage;
    this.animationsMeta = animationsMeta;
  }

  changeAnimaton(newAnimation: EEntityAnimations) {
    this.currentAnimation = newAnimation;
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
}
