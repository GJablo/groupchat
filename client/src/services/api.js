import axios  from "axios";
import { io } from "socket.io-client";

const BackendBaseUrl = "http://localhost:5000"
const APIBaseUrl = "http://localhost:5000/api"

const API = axios.create({
  baseURL: APIBaseUrl,
});

export const registerUser = (username) => API.post("/auth/register", { username });

export const getRooms = () => API.get("/rooms");
export const createRoom = (name) => API.post("/rooms", { name });

export const getRoomMessages = (roomId) => API.get(`/messages/${roomId}`);

export const socket = io(BackendBaseUrl, {
  autoConnect: false,
});
