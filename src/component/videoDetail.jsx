import { useLocation } from "react-router"
import { Box, CardMedia } from "@mui/material"

const VideoDetail = () => {
    const { state } = useLocation()
    return (
        <Box sx={boxStyle}>
            <CardMedia
                sx={mediaStyle}
                component="iframe"
                src={`https://www.youtube-nocookie.com/embed/${state.id}`}
                alt="video"
            />
        </Box>
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

export default VideoDetail
