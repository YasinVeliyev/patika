import React, { useState } from "react";

import { send } from "../socketApi";

export default function Pallet(props) {
	let [color, setColor] = useState("#000");
	console.log(props);
	return (
		<div className="pallete">
			Pallet
			<input type="color" name="color" id="color" value={props.activeColor} onChange={(event) => setColor(event.target.value)} />
			<button onClick={() => send(color)}>Click</button>
		</div>
	);
}
