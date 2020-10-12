import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#457b9d",
            main: "#457b9d",
            dark: "#1d3557",
        },
        secondary: {
            light: "#FDB602",
            main: "#e63946",
            dark: "#D95700",
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
