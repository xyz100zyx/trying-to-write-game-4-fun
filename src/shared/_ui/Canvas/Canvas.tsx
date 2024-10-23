import { FC } from 'react';
import { EHTMLElementsIds, EHTMLSizes } from '@shared/constants';

export const Canvas: FC = () => {
  return <canvas width={EHTMLSizes.CANVAS_SIZE} height={EHTMLSizes.CANVAS_SIZE} id={EHTMLElementsIds.CANVAS} />;
};
