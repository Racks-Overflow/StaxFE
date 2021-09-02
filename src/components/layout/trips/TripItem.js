/** @format */

import classes from "./TripItem.module.css";
import Card from "../../ui/Card";
import FavoritesContext from "../../../store/favorite";
import { useContext } from "react";

function TripItem(props) {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			FavoritesContext.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				destination: props.destination,
				groupSize: props.groupSize,
				tripEstimate: props.tripEstimate,
				balance: props.balance,
				totalSpent: props.totalSpent,
				estimatePerPerson: props.estematePerPerson,
				isActive: props.isActive,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.content}>
					<h3>{props.destination}</h3>
					<h3>{props.groupSize}</h3>
					<h3>{props.tripEstimate}</h3>
					<h3>{props.balance}</h3>
					<h3>{props.totalSpent}</h3>
					<h3>{props.estimatePerPerson}</h3>
					<h3>{props.isActive}</h3>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
}
export default TripItem;
