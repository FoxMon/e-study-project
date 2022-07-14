import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router"
import { Container } from "@mui/material"
import Video from "../component/video"
import Header from "../component/nav/header"
import YoutubeFetcher from "../fetcher/youtubeFetcher"

const VideoListContainer = () => {
    const [videos, setVideos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        YoutubeFetcher.getMostPopular().then((result) => {
            setVideos(result)
        })
    }, [])

    const onPlayButtonClickEventHandler = useCallback((video) => {
        navigate("/detail", {
            state: video,
        })
    }, [])

    const onSearchResultEventHandler = useCallback((data) => {
        setVideos(data)
    }, [])

    return (
        <React.Fragment>
            <Header onSearchResultEvent={onSearchResultEventHandler} />
            <Container sx={containerStyle}>
                {videos.map((v) => (
                    <Video
                        key={v.id}
                        video={v}
                        onPlayButtonClickEvent={onPlayButtonClickEventHandler}
                    />
                ))}
            </Container>
        </React.Fragment>
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
