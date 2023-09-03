import io from "socket.io-client";

const END_URL = process.env.REACT_APP_END_URL;
export const socket = io.connect(END_URL);