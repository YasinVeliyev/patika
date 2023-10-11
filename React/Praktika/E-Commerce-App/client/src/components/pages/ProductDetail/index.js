import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../../contexts/BasketContext";

function ProductDetail() {
	const { product_id } = useParams();
	const { addToBasket, items } = useBasket();
	const { isLoading, isError, data } = useQuery(["product", product_id], () => {
		fetchProduct(product_id);
	});
	if (isLoading) {
		return <div>Loading ...</div>;
	}
	if (isError) {
		return <div>Error.</div>;
	}

	const isInBasket = items.find((item) => item._id == product_id);
	const images = data?.photos.map((url) => ({ original: url }));
	return (
		<div>
			<Button colorScheme="pink" onClick={() => addToBasket(data)}>
				{isInBasket ? "Remove from Basket" : "Add to basket"}
			</Button>
			<Text mt="1" fontWeight="semibold" as="h2" lineHeight="tight">
				{data?.title}
			</Text>
			<Box d="plex" alignItems="baseline">
				{moment(data?.createdAt).format("DD/MM/YYYY")}
			</Box>
			<p>{data?.description}</p>
			<Box margin="10">{/* <ImageGallery items={images} /> */}</Box>
		</div>
	);
}

export default ProductDetail;
