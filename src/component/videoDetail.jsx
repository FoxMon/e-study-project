import { Box, CardMedia } from "@mui/material"

const VideoDetail = ({ selectedVideo }) => {
    console.log(selectedVideo)
    return (
        <Box sx={boxStyle}>
            <CardMedia
                sx={mediaStyle}
                component="iframe"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}`}
                alt="video"
                allowFullScreen={true}
            />
        </Box>
    )
}

const boxStyle = {
    width: "100%",
}

const mediaStyle = {
    width: "500px",
    height: "500px",
}

export default VideoDetail
