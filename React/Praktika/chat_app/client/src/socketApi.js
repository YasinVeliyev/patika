import io from "socket.io-client";

let socket;

export const init = () => {
	console.log("Connecting....");
	socket = io("http://localhost:3000", {
		transports: ["websocket"],
	});

	socket.on("connect", () => console.log("Connected"));
};

export const sendMessage = (message) => {
	if (socket) {
		socket.emit("new-message", message);
	}
};

export const subscribeNewMessages = (callback) => {
	if (socket) {
		socket.on("receive-message", (message) => {
			callback(message);
			console.log("Yeni mesaj var");
		});
	}
};

export const getAllMessages = (callback) => {
	if (socket)
		[
			socket.on("message-list", (messages) => {
				callback(messages);
			}),
		];
};
