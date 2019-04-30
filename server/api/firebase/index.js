const FCM = require("fcm-node")

class PushNotifications {
    constructor() {
        this.fcm = new FCM(require("./fcm-api.json"))
        this.message = {}
        this.device = []
    }

    setMessage = (messageDetails) => (this.message = messageDetails)
    pushDevice = (device) => this.device.push(device)
    clearDevice = () => (this.device = [])

    sendMessage = (callback) => {
        this.fcm.send(this.message, callback)
    }
}
