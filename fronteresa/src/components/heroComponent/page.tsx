"use client";

import Image from "next/image";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useEffect, useState } from "react";

export function HeroComponent() {
  const theme = useAppTheme();
  const [imageSrc, setImageSrc] = useState<string>("/Jornal_light.png");

  useEffect(() => {
    if (!theme) return;

    setImageSrc(theme === "dark" ? "/Jornal_dark.png" : "/Jornal_light.png");
  }, [theme]);

  if (!theme) return null;

  return (
    <div className="space-y-8">
      <div className="relative w-[65vw] m-auto mb-4 h-170 border-t-2 border-b-2 border-(--bordas)">
        <Image
          src={imageSrc}
          alt="Logo do Jornal Teresa"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
