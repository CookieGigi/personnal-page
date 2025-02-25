import { JSX } from "react";



export default function Surface({ children, className }: { children: string | JSX.Element | JSX.Element[], className?: string }) {
  return (
    <div className={` card bg-surface  rounded-3xl w-fit ` + (className ?? "")}>
      {children}
    </div>
  )
}
