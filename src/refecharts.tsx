import {useEffect, useRef} from 'react';
import * as echarts from 'echarts/core';

export function ReactEcharts() {
  const container = useRef<HTMLDivElement>(null);
  let chart = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(container.current);
    const width = document.documentElement.clientWidth;
    (container.current!).style.width = `${width - 20}px`;
    (container.current!).style.height = `${(width - 20) * 1.2}px`;
    // @ts-ignore
    chart.current = echarts.init((container.current!), 'dark');
  }, []);
  return (
    <div ref={container}/>
  );
}
