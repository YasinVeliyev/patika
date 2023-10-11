import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
	const { loggedIn } = useAuth();
	const { items } = useBasket();
	console.log(items);

	return (
		<nav className={styles.nav}>
			<div className={styles.left}>
				<div className={styles.logo}>
					<Link to="/">eCommerce</Link>
				</div>
				<ul className={styles.menu}>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>
			<div className={styles.right}>
				{!loggedIn && (
					<>
						{items.length > 0 && (
							<Link to="/basket">
								<Button colorScheme="pink" variant="outline">
									Basket ({items.length})
								</Button>
							</Link>
						)}
						<Link to="/signin">
							<Button colorScheme="pink">Login</Button>
						</Link>
						<Link to="/signup">
							<Button colorScheme="pink">Register</Button>
						</Link>
					</>
				)}

				{loggedIn && (
					<>
						<Link to="/me">
							<Button colorScheme="pink">Profile</Button>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
