import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Header(props) {
	console.log(props);
	return (
		<header>
			<h1>Header</h1>
			<div>
				<button onClick={props.func}>Click</button>
			</div>

			{JSON.stringify(props)}
		</header>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Header);
