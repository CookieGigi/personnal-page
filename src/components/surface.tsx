import { JSX } from "react";



export default function Surface({ children, className }: { children: string | JSX.Element | JSX.Element[], className?: string }) {
  return (
    <div className={`bg-surface border border-solid border-outline rounded-3xl w-fit ` + (className ?? "")}>
      {children}
    </div>
  )
}
