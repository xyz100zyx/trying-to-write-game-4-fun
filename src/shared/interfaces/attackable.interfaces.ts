import { Entity } from '../classes/entity.classes';

export interface Attackable {
  attack: (_entity: Entity) => void;
}
