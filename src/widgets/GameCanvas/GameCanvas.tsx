import { Canvas } from '@/shared';
import { FC, useCallback } from 'react';

export const GameCanvas: FC = () => {
  const canvasRefCallback = useCallback((canvasEl: HTMLCanvasElement | null) => {
    console.log('e', canvasEl);
  }, []);

  return <Canvas refCallback={canvasRefCallback} />;
};