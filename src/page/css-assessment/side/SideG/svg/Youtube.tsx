import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#E2E8F0"
      d="M17.812 5.017H6.145C3.855 5.017 2 6.852 2 9.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V9.116c0-2.264-1.856-4.1-4.145-4.1v.001Zm-2.803 7.263-5.457 2.575a.218.218 0 0 1-.314-.196V9.35a.22.22 0 0 1 .318-.193l5.458 2.735a.215.215 0 0 1 .085.31.217.217 0 0 1-.09.079v-.001Z"
    />
  </svg>
)
export { SvgComponent as Youtube }
