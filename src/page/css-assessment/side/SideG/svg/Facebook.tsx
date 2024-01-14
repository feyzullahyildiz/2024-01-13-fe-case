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
      d="M9.046 5.865v2.748H7.032v3.36h2.014v9.986h4.134v-9.985h2.775s.26-1.611.386-3.373h-3.144V6.303c0-.343.45-.805.896-.805h2.254V2h-3.064c-4.34 0-4.237 3.363-4.237 3.865Z"
    />
  </svg>
)
export { SvgComponent as Facebook }
