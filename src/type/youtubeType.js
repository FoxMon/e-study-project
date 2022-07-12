import ErrorUtil from "../util/errorUtil"

class YoutubeType extends Symbol {
    constructor(uuid, title, channel, img, video) {
        super("youtube")
        ErrorUtil.invalidParam(uuid)
        this.uuid = uuid
        ErrorUtil.invalidParam(title)
        this.title = title
        ErrorUtil.invalidParam(channel)
        this.channel = channel
        ErrorUtil.invalidParam(img)
        this.img = img
        ErrorUtil.invalidParam(video)
        this.video = video
    }
}

Object.freeze(YoutubeType)
export default YoutubeType
