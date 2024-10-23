import { EEntityAnimations, TEnityAnimationsMeta } from '@/shared';
import { Animator } from '@/shared/classes/animator.classes';
import { Entity } from '@shared/classes';

const animationsMeta: TEnityAnimationsMeta = {
  [EEntityAnimations.IDLE]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.FIRST_ATTACK]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.SECOND_ATTACK]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.THIRD_ATTACK]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.HURT]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.JUMP]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.SHIELD]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.WALK]: { frames: [{ x: 0, y: 0 }] },
  [EEntityAnimations.RUN]: { frames: [{ x: 0, y: 0 }] },
};

export class Fighter extends Entity {
  constructor(healthPoints: number, damage: number) {
    super(healthPoints, damage, new Animator(animationsMeta));
  }
}
