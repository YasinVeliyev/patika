import React from "react";
import Card from "../../Card";
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import { useQuery, useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../../api.js";

function Products() {
	const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery("products", fetchProductList, {
		getNextPageParam: (lastPage, pages) => {
			const morePagesExits = lastPage?.length === 12;
			if (!morePagesExits) {
				return;
			}
			return pages.length + 1;
		},
	});
	console.log(data);
	if (status === "loading") return "Loading...";

	if (status === "error") return "An error has occurred: " + error.message;

	return (
		<div>
			<Grid templateColumns={"repeat(5,1fr)"} gap={4}>
				{/* {data.pages.map((item, index) => (
					<Card key={index} item={item} />
				))} */}

				{data.pages.map((group, i) => {
					return (
						<React.Fragment key={i}>
							{group.map((item) => {
								return (
									<Box w="100" key={item._id}>
										<Card item={item} />
									</Box>
								);
							})}
						</React.Fragment>
					);
				})}
			</Grid>
			<Flex mt="10" justifyContent={"center"}>
				<div>
					<Button onClick={() => fetchNextPage()} isFetching={isFetchingNextPage} disabled={!hasNextPage || isFetchingNextPage}>
						{isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
					</Button>
				</div>
				<div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
			</Flex>
		</div>
	);
}

export default Products;
