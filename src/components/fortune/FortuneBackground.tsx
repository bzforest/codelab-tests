import Image from "next/image";

export function FortuneBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/image/fortune/BG-Fortune.jpg"
        alt="Mystery Room"
        fill
        priority
        className="object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/80 opacity-90" />
    </div>
  );
}
