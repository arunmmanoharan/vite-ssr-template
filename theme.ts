import { alpha, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export interface IColors {
  primary: "#27AAE1";
  secondary: "#546eb2";
  green: "#00AF68";
  blue: "#356CEC";
  disabled: (typeof grey)[300];
  white: "#FFFFFF";
  red: "#D32F2F";
  muted: "#333333";
}

export const colors: IColors = {
  primary: "#27AAE1",
  secondary: "#546eb2",
  green: "#00AF68",
  blue: "#356CEC",
  disabled: grey[300],
  white: "#FFFFFF",
  red: "#D32F2F",
  muted: "#333333",
};

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    green: string;
    blue: string;
    disabled: string;
    white: string;
    red: string;
    muted: string;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    smallLaptop: true;
    laptop: true;
    desktop: true;
  }
}

/**
 * @type {import('@mui/material').ThemeOptions}
 */
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 1200,
      xl: 1600,
      mobile: 576,
      tablet: 768,
      smallLaptop: 769,
      laptop: 1366,
      desktop: 1600,
    },
  },
  typography: {
    h1: {
      fontSize: "3.75rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2.125rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    common: {
      green: colors.green,
      blue: colors.blue,
      disabled: colors.disabled,
      white: colors.white,
      red: colors.red,
      muted: colors.muted,
    },
    error: {
      main: colors.red,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { size: "small" },
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
        containedPrimary: {
          color: colors.white,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "$labelcolor",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          height: "58px",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.primary,
        },
        colorSecondary: {
          "&$checked": {
            color: colors.primary,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            borderLeft: `5px solid ${colors.secondary}`,
            backgroundColor: alpha(colors.secondary, 0.1),
            "&:hover": {
              backgroundColor: alpha(colors.secondary, 0.1),
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          color: colors.primary,
          "&$checked": {
            color: colors.primary,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "none",
          },
          verticalAlign: "middle",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: colors.secondary,
            color: colors.white,
            "&:hover": {
              backgroundColor: colors.secondary,
            },
          },
          "&.Mui-disabled": {
            backgroundColor: colors.disabled,
          },
          height: "2rem",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.primary, 0.1),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: colors.disabled,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: colors.disabled,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: `rgba(39, 170, 225, 0.08)`,
            fontWeight: 600,
          },
          backgroundColor: "#E8EDF3",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#E8EDF3",
          color: "black",
          border: "1px solid #dadde9",
          "& .MuiTooltip-arrow": {
            color: "#E8EDF3",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: props => ({
          color: props.theme.palette.primary.main,
          backgroundColor: alpha(props.theme.palette.primary.main, 0.1),
        }),
        colorSecondary: props => ({
          color: props.theme.palette.secondary.main,
          backgroundColor: alpha(props.theme.palette.secondary.main, 0.1),
        }),
        colorSuccess: props => ({
          color: props.theme.palette.success.main,
          backgroundColor: alpha(props.theme.palette.success.main, 0.1),
        }),
        colorError: props => ({
          color: props.theme.palette.error.main,
          backgroundColor: alpha(props.theme.palette.error.main, 0.1),
        }),
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          width: "100%",
        },
      },
    },
  },
});
