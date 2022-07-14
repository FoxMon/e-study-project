import React from "react"
import { Route, Routes } from "react-router-dom"
import VideoListContainer from "./pages/videoListContainer"
import VideoDetail from "./component/videoDetail"

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<VideoListContainer />} />
                <Route path="/detail" element={<VideoDetail />} />
            </Routes>
        </React.Fragment>
    )
}

export default App
