import { SVGProps, useRef } from "react";
import { useWindowSize } from "../../../../../../../hooks";
import { Countries } from "./Countries";
export const WorldSvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null!);
  const size = useWindowSize();
  const width = 1050;
  const height = 635;

  let svgWidth: number;
  if (svgRef.current) {
    svgWidth = svgRef.current.clientWidth;
  } else {
    svgWidth = size.width;
  }
  const offetY = 100;

  const viewBoxWidth = Math.floor(Math.min(width, svgWidth));
  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill="none"
      viewBox={`0 -${offetY} ${viewBoxWidth} ${height + offetY}`}
      {...props}
    >
      <g opacity={0.5}>
        <Countries />
      </g>
      <circle cx={922} cy={501} r={10.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={797} cy={352} r={10.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={421} cy={76} r={6.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={894} cy={338} r={6.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={596.5} cy={445.5} r={11} stroke="#A3E635" strokeWidth={3} />
      <circle cx={343} cy={184} r={13.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={379} cy={477} r={6.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={336} cy={511} r={10.5} stroke="#A3E635" strokeWidth={3} />
      <circle cx={222} cy={311} r={10.5} stroke="#A3E635" strokeWidth={3} />
      <circle
        cx={157}
        cy={245}
        r={14.5}
        fill="#D9F99D"
        stroke="#A3E635"
        strokeWidth={3}
      />
      <foreignObject x={157} y={245} width="1" height="1" overflow="visible">
        <div
          style={{
            position: "absolute",
            bottom: "2px",
            transform: "translate(-50%, -0)",
            pointerEvents: "all",
          }}
        >
          {props.children}
        </div>
      </foreignObject>
    </svg>
  );
};
