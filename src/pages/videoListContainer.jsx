import { useEffect, useState, useCallback } from "react"
import { Container } from "@mui/material"
import Video from "../component/video"
import VideoDetail from "../component/videoDetail"
import YoutubeFetcher from "../fetcher/youtubeFetcher"

const VideoListContainer = () => {
    const [videos, setVideos] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        YoutubeFetcher.getMostPopular().then((result) => {
            setVideos(result)
        })
    }, [])

    const onPlayButtonClickEventHandler = useCallback((video) => {
        setSelected(video)
    }, [])

    return (
        <Container sx={containerStyle}>
            {selected && <VideoDetail selectedVideo={selected} />}
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
