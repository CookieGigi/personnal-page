import Image from "next/image";

export default function Avatar({ src, size, alt }: { src: string, size: number, alt: string }) {
  return (
    <Image className={`rounded-full w-[${size}px] h-[${size}] shadow-shadow shadow-xl border border-outline avatar`} src={src} width={size} height={size} alt={alt} />
  )
}
