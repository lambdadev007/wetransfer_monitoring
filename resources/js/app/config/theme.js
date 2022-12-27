import { createMuiTheme } from "@material-ui/core/styles";

import muiLocaleKa from "./muiLocaleKa";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3F51B5"
        }
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});
theme.typography.h6 = {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.6,
    fontFeatureSettings: "'case' on",
    textTransform: "uppercase"
};
theme.typography.subtitle1 = {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "22px",
    fontFeatureSettings: "'case' on",
    textTransform: "uppercase"
};
theme.overrides.MuiListItemText = {
    primary: {
        fontSize: "0.95rem"
    }
};
theme.overrides.MuiListItemIcon = {
    root: {
        minWidth: theme.spacing(5)
    }
};
theme.overrides.MuiDialog = {
    paper: {
        [theme.breakpoints.up("sm")]: {
            minWidth: "80%"
        }
    }
};
theme.overrides.MuiButton = {
    label: {
        fontFeatureSettings: "'case' on",
        textTransform: "uppercase"
    }
};
theme.overrides.MuiTableCell = {
    root: {
        wordBreak: "normal"
    },
    head: {
        fontFeatureSettings: "'case' on",
        textTransform: "uppercase",
        whiteSpace: "nowrap"
    }
};
theme.overrides.MuiMenuItem = {
    root: {
        whiteSpace: "normal"
    }
};
theme.overrides.MuiTooltip = {
    tooltip: {
        backgroundColor: "#111",
        fontSize: "0.85rem",
        maxWidth: "400px"
    }
};
theme.overrides.MuiFormGroup = {
    root: {
        flexDirection: "row"
    }
};
theme.overrides.MuiTableSortLabel = {
    root: {
        fontFeatureSettings: "'case' on",
        textTransform: "uppercase"
    }
};

theme.props = muiLocaleKa.props;

export default theme;
