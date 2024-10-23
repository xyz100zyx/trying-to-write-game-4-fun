import { Entity } from '@shared/classes';

export class Fighter extends Entity {
  constructor(healthPoints: number, damage: number) {
    super(healthPoints, damage);
  }
}
