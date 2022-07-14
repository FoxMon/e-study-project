import React, { useState } from "react"
import { useLocation } from "react-router"
import {
    Box,
    CardMedia,
    CardActions,
    styled,
    IconButton,
    Collapse,
    CardContent,
    Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    color: "white",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}))

const VideoDetail = () => {
    const [expanded, setExpanded] = useState(true)

    const { state } = useLocation()

    const onExpandButtonClickEventHandler = () => {
        setExpanded(!expanded)
    }

    return (
        <React.Fragment>
            <Box sx={boxStyle}>
                <CardMedia
                    sx={mediaStyle}
                    component="iframe"
                    src={`https://www.youtube-nocookie.com/embed/${state.uuid}`}
                    alt="video"
                />
            </Box>
            <Box sx={moreStyle}>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={onExpandButtonClickEventHandler}
                        aria-expanded={expanded}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Box>
            <Collapse sx={{ color: "white" }} in={expanded} unmountOnExit>
                <CardContent>
                    <Typography paragraph={true}>{state.title}</Typography>
                    <Typography paragraph={true}>{state.channel}</Typography>
                </CardContent>
            </Collapse>
        </React.Fragment>
    )
}

const boxStyle = {
    width: "100%",
}

const mediaStyle = {
    width: "90%",
    height: "500px",
    margin: "0 auto",
    mt: 2,
}

const moreStyle = {
    mt: 2,
}

export default VideoDetail
