import { useMediaQuery, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const useResponsive = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return { isSmallScreen };
};
