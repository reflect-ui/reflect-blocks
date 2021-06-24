import React from "react";
import styled from "@emotion/styled";
import { embed, FigmaEmbedInput } from "@design-sdk/figma-url";

interface FigmaEmbedProps {
  src: FigmaEmbedInput;
  width?: string;
  height?: string;
}

export function FigmaEmbed(props: FigmaEmbedProps) {
  const src = embed(props.src);

  return <Iframe width={props.width} height={props.height} src={src} />;
}

const Iframe = styled.iframe<{
  width?: string;
  height?: string;
}>`
  border: none;
  width: ${(p) => p.width ?? __DEFAULT_EMBED_SIZE.width};
  height: ${(p) => p.height ?? __DEFAULT_EMBED_SIZE.heigh};
`;

/**
 * default size fillows iPhone X size
 */
const __DEFAULT_EMBED_SIZE = {
  width: 315,
  heigh: 712,
};

export default FigmaEmbed;
