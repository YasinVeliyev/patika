const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

<<<<<<<< HEAD:React/Praktika/realtime_colors/backend/app.js
let lastColor = "#282c33";

========
>>>>>>>> ca350ea (	modified:   .gitignore):React/Praktika/chat_app/backend/app.js
io.on("connection", (socket) => {
	console.log("a user connected");

	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});

	socket.on("new-message", (message) => {
		console.log(message);
		Messages.upsert({ message });

		socket.broadcast.emit("receive-message", message);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});
