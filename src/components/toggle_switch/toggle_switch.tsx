"use client"

import "./toggle_switch.css"

export default function ToggleSwitch() {
  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty('color-scheme', (e.target.checked) ? "dark" : "light");

  }

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handlerOnChange} />
        <span className="slider round"></span>
      </label>
    </>
  );
}
