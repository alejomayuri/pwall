import { themeColors } from "styles/themes";

export function useRandomColor() {
  const i = Math.floor(Math.random() * themeColors.length);

  return {
    color: themeColors[i],
  };
}
