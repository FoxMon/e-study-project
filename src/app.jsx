import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./component/nav/header"
import VideoListContainer from "./pages/videoListContainer"
import VideoDetail from "./component/videoDetail"

function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<VideoListContainer />} />
                <Route path="/detail" element={<VideoDetail />} />
            </Routes>
        </React.Fragment>
    )
}

export default App
