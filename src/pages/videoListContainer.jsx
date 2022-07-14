import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router"
import { Container } from "@mui/material"
import Video from "../component/video"
import YoutubeFetcher from "../fetcher/youtubeFetcher"

const VideoListContainer = () => {
    const [videos, setVideos] = useState([])
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        YoutubeFetcher.getMostPopular().then((result) => {
            setVideos(result)
        })
    }, [])

    const onPlayButtonClickEventHandler = useCallback((video) => {
        setSelected(video)
        navigate("/detail", {
            state: video,
        })
    }, [])

    return (
        <Container sx={containerStyle}>
            {videos.map((v) => (
                <Video
                    key={v.id}
                    video={v}
                    onPlayButtonClickEvent={onPlayButtonClickEventHandler}
                />
            ))}
        </Container>
    )
}

const containerStyle = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: 20,
    mt: 2,
}

export default VideoListContainer
