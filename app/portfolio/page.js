"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const portfolioItems = [
	{ id: 1, img: "/img/portfolio/1.png", title: "Dictionarium" },
	{ id: 2, img: "/img/portfolio/2.png", title: "Unsplash API" },
	{ id: 3, img: "/img/portfolio/3.png", title: "City Tours" },
	{ id: 4, img: "/img/portfolio/4.png", title: "Galaxy Ventures" },
	{ id: 5, img: "/img/portfolio/5.png", title: "Unleashed" },
	{ id: 6, img: "/img/portfolio/6.jpg", title: "Branded Package" },
];

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.jpg");
		page_info_function("Recent projects", "portfolio", "portfolio");
	}, []);
	return (
		<Layout>
			<div className="row">
				{portfolioItems.map((item) => (
					<div className="col-lg-6" key={item.id}>
						{/* portfolio item */}
						<a
							data-fancybox="portfolio"
							href={item.img}
							className="trm-portfolio-item trm-scroll-animation"
							data-scroll
							data-scroll-offset={40}
							data-cat="icon"
						>
							<div className="trm-cover-frame">
								<img className="trm-cover" src={item.img} alt="item" />
							</div>
							<div className="trm-item-description">
								<h6>{item.title}</h6>
								<div className="trm-zoom-icon">
									<i className="fas fa-search-plus" />
								</div>
							</div>
						</a>
						{/* portfolio item end */}
					</div>
				))}
			</div>
		</Layout>
	);
};
export default Index;
