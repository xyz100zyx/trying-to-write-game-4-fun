import { FC, memo } from 'react';
import { EHTMLElementsIds, EHTMLSizes } from '@shared/constants';

interface IProps {
  refCallback: (el: HTMLCanvasElement | null) => void;
}
export const Canvas: FC<IProps> = memo(({ refCallback }: IProps) => {
  return (
    <canvas
      ref={refCallback}
      width={EHTMLSizes.CANVAS_SIZE}
      height={EHTMLSizes.CANVAS_SIZE}
      id={EHTMLElementsIds.CANVAS}
    />
  );
});

Canvas.displayName = 'Canvas';
