import { io } from "socket.io-client"

const BACKEND_URL = "http://localhost:3000/"

export const initSocket = () => {
    return io(BACKEND_URL, {
        reconnectionAttempts: 5,
    })
}
