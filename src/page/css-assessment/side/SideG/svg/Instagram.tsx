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
      d="M16.017 2h-8.07A5.954 5.954 0 0 0 2 7.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 16.017 2Zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07-.001Z"
    />
    <path
      fill="#E2E8F0"
      d="M11.982 6.819a5.17 5.17 0 0 0-5.162 5.163 5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164 5.17 5.17 0 0 0-5.165-5.162v-.001Zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31ZM17.156 8.095a1.237 1.237 0 1 0 0-2.474 1.237 1.237 0 0 0 0 2.474Z"
    />
  </svg>
)
export { SvgComponent as Instagram }