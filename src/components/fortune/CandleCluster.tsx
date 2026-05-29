import Image from "next/image";
import { MagicFlame } from "@/src/components/fortune/Flame";
import type { FlamePlacement } from "@/src/components/fortune/constants";

type CandleClusterProps = {
  imageSrc: string;
  imageAlt: string;
  flames: FlamePlacement[];
};

export function CandleCluster({ imageSrc, imageAlt, flames }: CandleClusterProps) {
  return (
    <div className="absolute right-5 top-10 w-full h-full scale-200">
      <Image src={imageSrc} alt={imageAlt} fill className="object-contain object-bottom" />
      {flames.map((flame) => (
        <div key={flame.className} className={flame.className}>
          <MagicFlame delay={flame.delay ?? 0} duration={flame.duration} />
        </div>
      ))}
    </div>
  );
}
