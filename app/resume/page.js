"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.jpg");
		page_info_function("My Skills<br>and History", "resume", "resume");
	}, []);
	return (
		<Layout>
			{/* skills */}
			<div className="row">
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Communication</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Teamwork</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Problem-solving</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Adaptability</h6>
								<span className="trm-label trm-label-light">60%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p60" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills end */}
			{/* skills */}
			<div className="row">
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">HTML</h6>
								<span className="trm-label trm-label-light">100%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p100" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">CSS</h6>
								<span className="trm-label trm-label-light">100%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p100" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">SCSS</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">React.js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Next js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">JavaScript</h6>
								<span className="trm-label trm-label-light">75%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills end */}
			{/* knowledge */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Knowledge <span data-number={2} />
					</h5>
				</div>
				<div className="col-lg-12">
					<div className="trm-card">
						<div className="row">
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Nodejs</li>
									<li>Express</li>
									<li>API&apos;s</li>
								</ul>
							</div>
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Gulp</li>
									<li>Sass</li>
									<li>Bootstrap</li>
								</ul>
							</div>
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Bootstrap</li>
									<li>React js</li>
									<li>Next js</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* history */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Employment History <span data-number={3} />
					</h5>
				</div>
				<div className="col-lg-6">
					{/* timeline */}
					<div className="trm-timeline">
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">
											Full-Stack Web Development Certificate - Nucamp
										</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>Aug 2021 - Jan 2022</i>
										</div>
									</div>
								</div>
								<div className="trm-mb-20">
									A comprehensive program that equips aspiring developers with
									the skills to navigate both frontend and backend technologies.
									This hands-on certificate provides a solid foundation in HTML,
									CSS, JavaScript, and React, along with server-side
									technologies like Node.js, Express, and MongoDB, preparing
									individuals for diverse roles in the dynamic field of
									full-stack web development.
								</div>
								<a
									data-fancybox
									href="files/diploma.jpg"
									className="trm-label trm-label-color"
								>
									Diploma <i className="fas fa-arrow-right" />
								</a>
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">
											Software Development Certificate - Thinkful
										</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>April 2020 - Nov 2020</i>
										</div>
									</div>
								</div>
								<div className="trm-mb-20">
									Designed to equip you with the skills to build robust and
									scalable web applications. Through hands-on projects and
									personalized mentorship, you&apos;ll master both frontend and
									backend technologies, positioning yourself as a versatile and
									proficient full-stack developer in today&apos;s competitive
									tech landscape.
								</div>
								<a
									data-fancybox
									href="files/diploma.jpg"
									className="trm-label trm-label-color"
								>
									Diploma <i className="fas fa-arrow-right" />
								</a>
							</div>
						</div>
					</div>
					{/* timeline end */}
				</div>
				<div className="col-lg-6">
					<div className="trm-timeline">
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">Web Developer</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>April 2021 - Present</i>
										</div>
									</div>
								</div>
								<div>
									I leverage my skills to bring clients' visions to life,
									enjoying the flexibility to choose projects, set my own
									schedule, and constantly evolve in the ever-changing landscape
									of web development.
								</div>
							</div>
							<div
								className="trm-timeline-item trm-scroll-animation trm-active-el"
								data-scroll
								data-scroll-offset={40}
							>
								<div className="trm-timeline-mark-light" />
								<div className="trm-timeline-mark" />
								<div className="trm-a trm-timeline-content">
									<div className="trm-card-header">
										<div className="trm-left-side">
											<h6 className="trm-mb-15">Sales and Marketing</h6>
											<div className="trm-text-sm trm-accent-color trm-mb-15">
												<i>Oct 2016 - April 2021</i>
											</div>
										</div>
									</div>
									<div>
										I am a results-driven professional with a proven track
										record of developing and executing strategic sales and
										marketing initiatives. I excel in building and leading
										high-performance teams, cultivating client relationships,
										and implementing innovative campaigns to drive revenue
										growth and brand visibility.
									</div>
								</div>
							</div>
							<div
								className="trm-timeline-item trm-scroll-animation trm-active-el"
								data-scroll
								data-scroll-offset={40}
							>
								<div className="trm-timeline-mark-light" />
								<div className="trm-timeline-mark" />
								<div className="trm-a trm-timeline-content">
									<div className="trm-card-header">
										<div className="trm-left-side">
											<h6 className="trm-mb-15">
												UI/UX Designer, Web Developer
											</h6>
											<div className="trm-text-sm trm-accent-color trm-mb-15">
												<i>jan 2018 - may 2020</i>
											</div>
										</div>
									</div>
									<div>
										I specialize in crafting seamless and visually engaging
										digital experiences. From intuitive user interfaces that
										prioritize functionality to thoughtfully designed user
										experiences, I merge creativity with user-centric design
										principles to enhance the overall usability and aesthetic
										appeal of web and mobile applications.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Index;
