import React, { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router"
import { Container } from "@mui/material"
import Video from "../component/video"
import Header from "../component/nav/header"
import YoutubeType from "../type/youtubeType"
import YoutubeFetcher from "../fetcher/youtubeFetcher"

const VideoListContainer = () => {
    const [videos, setVideos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        YoutubeFetcher.getMostPopular().then((result) => {
            const vArr = []
            result.forEach((d) => {
                const obj = new YoutubeType(
                    d.id,
                    d.snippet.title,
                    d.snippet.channelTitle,
                    d.snippet.thumbnails.medium.url
                )
                vArr.push(obj)
            })
            setVideos(vArr)
        })
    }, [])

    const onPlayButtonClickEventHandler = useCallback((video) => {
        navigate("/detail", {
            state: video,
        })
    }, [])

    const onSearchResultEventHandler = useCallback((data) => {
        const sArr = []
        data.forEach((d) => {
            const obj = new YoutubeType(
                d.id,
                d.snippet.title,
                d.snippet.channelTitle,
                d.snippet.thumbnails.medium.url
            )
            sArr.push(obj)
        })
        setVideos(sArr)
    }, [])

    return (
        <React.Fragment>
            <Header onSearchResultEvent={onSearchResultEventHandler} />
            <Container sx={containerStyle}>
                {videos.map((v) => (
                    <Video
                        key={v.uuid}
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
