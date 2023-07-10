export const hexToRGB = (hexColor: string, alpha?: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const [r, g, b] = hexColor.match(/\w\w/g).map((x) => parseInt(x, 16));
  return alpha ? `rgba(${r},${g},${b},${alpha})` : `rgb(${r},${g},${b})`;
};
