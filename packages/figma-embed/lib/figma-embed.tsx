import React from "react";
import styled from "@emotion/styled";
import { buildFigmaEmbedUrl, FigmaEmbedInput } from "@design-sdk/figma-url";

interface FigmaEmbedProps {
  src: string | FigmaEmbedInput;
  width?: string;
  height?: string;
}

export function FigmaEmbed(props: FigmaEmbedProps) {
  const src = buildFigmaEmbedUrl(
    typeof props.src == "string" ? { url: props.src } : props.src
  );

  return <Iframe src={src} />;
}
const Iframe = styled.iframe<{
  width?: string;
  height?: string;
}>`
  border: none;
  width: ${(p) => p.width ?? __DEFAULT_EMBED_SIZE.width};
  width: ${(p) => p.height ?? __DEFAULT_EMBED_SIZE.heigh};
`;

/**
 * default size fillows iPhone X size
 */
const __DEFAULT_EMBED_SIZE = {
  width: 315,
  heigh: 712,
};

export default FigmaEmbed;
