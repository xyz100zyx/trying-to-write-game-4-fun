import { EEntityAnimations } from '../constants';

export type TEnityAnimationsMeta = Record<EEntityAnimations, { frames: { x: number; y: number }[] }>;
