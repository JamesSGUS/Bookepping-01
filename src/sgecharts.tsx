import {useEffect, useRef} from 'react';

export function ReactEcharts() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(container.current);
  });
  return (
    <div ref={container}>hi</div>
  );
}