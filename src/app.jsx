import VideoListContainer from "./pages/videoListContainer"
import Header from "./component/nav/header"
import React from "react"

function App() {
    return (
        <React.Fragment>
            <Header />
            <VideoListContainer />
        </React.Fragment>
    )
}

export default App
