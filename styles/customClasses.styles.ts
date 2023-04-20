import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();

  const styles = {
    page_container: {
      maxWidth: theme.breakpoints.values.lg,
      margin: "auto",
      padding: theme.spacing(8),
    },
    flex_row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    main: {
      backgroundColor: theme.palette.common.white,
      minHeight: "100vh",
    },
  };

  return styles;
};
