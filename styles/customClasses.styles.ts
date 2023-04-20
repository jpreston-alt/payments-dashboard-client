import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();

  const styles = {
    page_container: {
      maxWidth: theme.breakpoints.values.lg,
      margin: `${theme.spacing(8)} auto`,
    },
    flex_row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return styles;
};
