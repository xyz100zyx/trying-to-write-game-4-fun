import { EEntityAnimations } from '@shared/constants';
import { TEnityAnimationsMeta } from '@shared/interfaces';
import { Entity } from './entity.classes';

export class Animator {
  private animatedEntity: Entity;
  private animationsMeta: TEnityAnimationsMeta;

  private currentAnimation: EEntityAnimations = EEntityAnimations.IDLE;

  constructor(animationMeta: TEnityAnimationsMeta) {
    this.animationsMeta = animationMeta;
    this.animate();
  }

  animate() {
    console.log('this animated Entity', this.animatedEntity);
  }

  changeAnimaton(newAnimation: EEntityAnimations) {
    this.currentAnimation = newAnimation;
  }

  bindAnimatedEntity(entity: Entity) {
    this.animatedEntity = entity;
  }
}
