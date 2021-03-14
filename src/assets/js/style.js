import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "12px",
                color: "white",
                fontFamily: "Poppins",
                backgroundColor: "#26282C",
            }
        }
    }
});