import AxiosAgent from "../service/axiosAgent"

const YoutubeFetcher = {}

YoutubeFetcher.getMostPopular = async function () {
    const res = await AxiosAgent.get("videos", {
        params: {
            part: "snippet",
            chart: "mostPopular",
            maxResults: 20,
        },
    })
    return res.data.items
}

YoutubeFetcher.searchVideo = async function (q) {
    const res = await AxiosAgent.get("search", {
        params: {
            part: "snippet",
            maxResults: 20,
            type: "video",
            q: q,
        },
    })
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
}

Object.freeze(YoutubeFetcher)
export default YoutubeFetcher
