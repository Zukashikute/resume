import { createTheme, darken, lighten } from "@mui/material/styles";
import chroma from "chroma-js";
// import templateTheme from "./assets/theme";
import rgba from "./assets/theme/rgba";
import breakpoints from "./assets/theme/base/breakpoints";

export const PRIMARY_DEFAULT = "#00aeef";

export const BRIGHTNESS_MIN = 0.20;
export const BRIGHTNESS_MAX = 0.70;

export const generateTheme = (primaryColor) => {
   const pColor = chroma.valid(primaryColor) ? primaryColor : PRIMARY_DEFAULT;
   const pColorLight = lighten(pColor, 0.35);
   const pColorDark = darken(pColor, 0.10);
   const sColor = darken(pColor, 0.30);
   const tColor = darken(pColor, 0.40);
   const tColorDarkest = darken(tColor, 0.70);

   return createTheme({
      palette: {
         primary: {
            main: pColor,
            focus: lighten(pColor, 0.35),
            lighter: lighten(pColor, 0.50),
            lightest: lighten(pColor, 0.80),
            dark: darken(pColor, 0.10),
            darker: darken(pColor, 0.40),
            darkest: darken(pColor, 0.70),
         },
         secondary: {
            main: sColor,
            focus: lighten(sColor, 0.35),
            lighter: lighten(sColor, 0.50),
            lightest: lighten(sColor, 0.80),
            darker: darken(sColor, 0.40),
            darkest: darken(sColor, 0.70),
         },
         tertiary: {
            main: tColor,
            focus: lighten(tColor, 0.35),
            light: lighten(sColor, 0.20),
            lighter: lighten(sColor, 0.50),
            lightest: lighten(sColor, 0.80),
            dark: darken(tColor, 0.10),
            darker: darken(tColor, 0.40),
            darkest: darken(tColor, 0.70),
            contrastText: "#FFFFFF",
         },
         gradient: `linear-gradient(270deg, ${pColor}, ${sColor})`,
         radialGradient: `radial-gradient(59.05% 147.38% at 50% -36.49%, #FFFFFF 0%, ${pColorLight} 50%, ${pColor} 75%, ${sColor} 100%)`,
         circleGradient: `radial-gradient(circle, ${pColorLight} 0%, ${pColorDark} 40%, ${tColorDarkest} 60%)`,
         gradients: {
            primary: {
               main: darken(pColor, 0.35),
               state: lighten(pColor, 0.20),
            },
            secondary: {
               main: darken(sColor, 0.35),
               state: lighten(sColor, 0.20),
            },
            tertiary: {
               main: darken(tColor, 0.35),
               state: lighten(tColor, 0.20),
            },
         },
         dividerGradients: {
            light: `linear-gradient(to right, ${rgba(pColorLight, 0)}, ${rgba(pColorLight, 0.5)}, ${rgba(pColorLight, 0)}) !important`,
            dark: `linear-gradient(to right, ${rgba(pColorDark, 0)}, ${rgba(pColorDark, 0.5)}, ${rgba(pColorDark, 0)}) !important`,
         },
      },
      breakpoints: { ...breakpoints }
   });
};
