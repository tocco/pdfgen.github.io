import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#09AFD6",
            main: "#09AFD6",
            dark: "#003749",
        },
        secondary: {
            light: "#FDB602",
            main: "#D95700",
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
