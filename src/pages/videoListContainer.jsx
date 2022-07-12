import { useEffect, useState } from "react"
import { Container } from "@mui/material"
import Video from "../component/video"
import YoutubeFetcher from "../fetcher/youtubeFetcher"

const VideoListContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        YoutubeFetcher.getMostPopular().then((result) => {
            setVideos(result)
        })
    }, [])

    return (
        <Container sx={containerStyle}>
            {videos.map((v) => (
                <Video key={v.id} video={v} />
            ))}
        </Container>
    )
}

const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
}

export default VideoListContainer