import { EEntityAnimations } from '../constants';
import { TEnityAnimationsMeta } from './entityAnimationMeta.interfaces';

export interface Animated {
  animationsMeta: TEnityAnimationsMeta;

  currentAnimation: EEntityAnimations;

  changeAnimaton: (_newAnimation: EEntityAnimations) => void;
}
