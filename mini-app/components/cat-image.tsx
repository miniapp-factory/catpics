"use client";

import Image from "next/image";

export default function CatImage() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src="/cute-cat.png"
        alt="Cute cat with a funny caption"
        width={512}
        height={512}
        className="rounded-lg"
      />
      <p className="text-lg font-medium text-muted-foreground">
        Purr‑fectly funny!
      </p>
    </div>
  );
}
