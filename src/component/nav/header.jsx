import { useState, useCallback } from "react"
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    styled,
    alpha,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        primary: {
            main: "#d32f2f",
            darker: "#053e85",
        },
    },
})

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}))

function Header({ onSearchResultEvent }) {
    const onKeyDownEventHandler = useCallback((e) => {
        if (e.key != "Enter") return
        const value = e.target.value
        onSearchResultEvent(value)
    }, [])

    return (
        <Box sx={boxStyle}>
            <AppBar theme={theme} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={buttonStyle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={contentStyle}
                    >
                        Metube
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onKeyDown={onKeyDownEventHandler}
                            placeholder="Search…"
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const boxStyle = {
    flexGrow: 1,
}

const buttonStyle = {
    mr: 2,
}

const contentStyle = {
    flexGrow: 1,
    display: {
        xs: "none",
        sm: "block",
    },
}

export default Header
