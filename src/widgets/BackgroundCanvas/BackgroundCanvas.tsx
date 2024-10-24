import { Canvas, EHTMLSizes } from '@/shared';
import { FC, MutableRefObject, useCallback, useEffect, useRef } from 'react';
import bg1 from '@/assets/backgrounds/city 1/1.png';

export const BackgroundCanvas: FC = () => {
  const backgroundCanvasRef = useRef(null) as MutableRefObject<HTMLCanvasElement | null>;

  const canvasRefCallback = useCallback((canvasEl: HTMLCanvasElement | null) => {
    backgroundCanvasRef.current = canvasEl;
  }, []);

  useEffect(() => {
    if (backgroundCanvasRef.current) {
      const image1 = new Image();
      image1.src = bg1;

      const ctx = backgroundCanvasRef.current.getContext('2d');

      if (ctx) {
        console.log('ctx', ctx);
        ctx.clearRect(0, 0, EHTMLSizes.CANVAS_SIZE, 0);
        ctx.drawImage(image1, 0, 0);

        // TODO: remove this after mobX setup
        setTimeout(() => {
          ctx.clearRect(0, 0, EHTMLSizes.CANVAS_SIZE, 0);
          ctx.drawImage(image1, 0, 0);
        });
      }
    }
  }, [backgroundCanvasRef.current]);

  return <Canvas refCallback={canvasRefCallback} />;
};
