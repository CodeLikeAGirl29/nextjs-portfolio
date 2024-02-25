"use client";
import { context } from "@/context/context";
import { useContext } from "react";

const Css = () => {
	const { mode } = useContext(context);
	return (
		<head>
			<link
				rel="stylesheet"
				href={`css/style-${mode ? "dark" : "light"}.css`}
			/>
		</head>
	);
};
export default Css;
