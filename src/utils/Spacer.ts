import styled from "styled-components";

interface SpacerProps {
  axis?: "horizontal" | "vertical";
  size: number;
}

function getHeight({ axis, size }: SpacerProps): number {
  return axis === "horizontal" ? 1 : size;
}

function getWidth({ axis, size }: SpacerProps): number {
  return axis === "vertical" ? 1 : size;
}

const Spacer = styled.span<SpacerProps>`
  display: block;
  width: ${(props) => getWidth(props)}px;
  min-width: ${(props) => getWidth(props)}px;
  height: ${(props) => getHeight(props)}px;
  min-height: ${(props) => getHeight(props)}px;
`;

export default Spacer;
