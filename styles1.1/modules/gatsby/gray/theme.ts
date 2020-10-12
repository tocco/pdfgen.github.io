import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#707070",
            main: "#3B3B3B",
            dark: "#222222",
        },
        secondary: {
            light: "#707070",
            main: "#8F8F8F",
            dark: "#3B3B3B",
        },
        text: {
            primary: "#404040",
            secondary: "#fff",
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    },
    shape: {
        borderRadius: 0,
    },
});