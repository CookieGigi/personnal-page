import { JSX } from "react";

export default function Button({ onClick, children, className }: { onClick: React.MouseEventHandler<HTMLButtonElement>, children: string | JSX.Element | JSX.Element[], className: string }) {
  return (
    <button onClick={onClick} className={`border border-solid border-outline rounded-full h-10 px-5 py-4 flex flex-row items-center gap-3 ${className}`}>{children}</button>
  )
}
