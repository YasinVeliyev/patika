import React from "react";

import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import validations from "./validations";
import { fetchLogin } from "../../../../api";

import { AuthProvider, useAuth } from "../../../../contexts/AuthContext";

export default function Signin() {
	const { login } = useAuth();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
		},
		validationSchema: validations,
		onSubmit: async (values, bag) => {
			try {
				let res = await fetchLogin({ email: values.email, password: values.password });
				if (res.user) {
					login(res);
				} else {
					throw res;
				}
			} catch (e) {
				bag.setErrors({ general: e.message });
			}
		},
	});
	return (
		<div>
			<Flex align={"center"} width={"full"} justifyContent={"center"}>
				<Box pt="10">
					<Box textAlign={"center"}>
						<Heading>Signin</Heading>
					</Box>
					<Box my={5}>{formik.errors.general && <Alert status="error">{formik.errors.general}</Alert>}</Box>
					<Box my={5} textAlign={"left"}>
						<form onSubmit={formik.handleSubmit}>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									type="email"
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									isInvalid={formik.touched.email && formik.errors.email}
								></Input>
							</FormControl>
							<FormControl mt="4">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									name="password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
									isInvalid={formik.touched.password && formik.errors.password}
								></Input>
							</FormControl>

							<Button mt="4" width={"full"} type="submit">
								Sign In
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>
		</div>
	);
}
