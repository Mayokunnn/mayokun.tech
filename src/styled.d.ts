import "styled-components";
import { ThemeType } from "./utils/types";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
