import React from "react";
import { buildFigmaEmbedUrl, FigmaEmbedInput } from "@design-sdk/figma-url";

interface FigmaEmbedProps {
  src: FigmaEmbedInput;
}

export function FigmaEmbed(props: FigmaEmbedProps) {
  const src = buildFigmaEmbedUrl(props.src);
  return <iframe src={src} />;
}
