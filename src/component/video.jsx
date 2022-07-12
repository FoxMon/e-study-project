import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Box,
    Typography,
} from "@mui/material"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

const Video = ({ video }) => {
    return (
        <Card sx={cardStyle}>
            <CardMedia
                sx={videoStyle}
                component="img"
                alt="video"
                src={video.snippet.thumbnails.medium.url}
            />
            <Box sx={boxStyle}>
                <CardContent sx={contentStyle}>
                    <Typography component="div" variant="h5">
                        {video.snippet.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        {video.snippet.channelTitle}
                    </Typography>
                </CardContent>
                <Box sx={contentBoxStyle}>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={arrowIconStyle} />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    )
}

const cardStyle = {
    display: "block",
}

const boxStyle = {
    display: "flex",
    flexDirection: "column",
}

const contentStyle = {
    flex: "1 0 auto",
}

const contentBoxStyle = {
    display: "flex",
    alignItems: "center",
    pl: 1,
    pb: 1,
}

const arrowIconStyle = {
    height: 30,
    width: 30,
}

const videoStyle = {
    height: 200,
    width: 400,
}

export default Video
