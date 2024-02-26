import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Renders the Testimonials component.
 *
 * @return {JSX.Element} The Testimonials component
 */
const Testimonials = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Testimonials <span data-number={9} />
				</h5>

				{/* testimonials slider */}
				<Swiper
					{...sliderProps.testimonials}
					className="swiper-container trm-testimonials-slider trm-scroll-animation"
					data-scroll=""
					data-scroll-offset={40}
				>
					<SwiperSlide className="swiper-slide">
						<div
							className="trm-testimonial-card"
							data-swiper-parallax=""
							data-swiper-parallax-scale=".8"
							data-swiper-parallax-opacity={0}
							data-swiper-parallax-duration={800}
						>
							<div className="trm-testimonial-author">
								<img src="/img/testimonials/3.jpg" alt="Client" />
								<h6 className="trm-mb-15">Precious Gartrell</h6>
								<div className="trm-text-sm trm-accent-color">
									<i>Tech Support</i>
								</div>
							</div>
							<div className="trm-testimonial-text">
								<p>
									Lindsey is always participating in class and problem solves
									well. She is a team player, always ready to help her
									classmates in whatever way she can. She even took the
									initiative to reach out to me personally regarding a question
									I had in class for my teacher. I&apos;m confident she will be
									a good addition to any team!
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div
							className="trm-testimonial-card"
							data-swiper-parallax=""
							data-swiper-parallax-scale=".8"
							data-swiper-parallax-opacity={0}
							data-swiper-parallax-duration={800}
						>
							<div className="trm-testimonial-author">
								<img src="/img/testimonials/2.jpg" alt="Client" />
								<h6 className="trm-mb-15">Anne Racel</h6>
								<div className="trm-text-sm trm-accent-color">
									<i> Branch Chief at US Air Force</i>
								</div>
							</div>
							<div className="trm-testimonial-text">
								<p>
									I mentored Lindsey through her online training program. I
									found her intelligent and eager to learn. I would highly
									recommend her for any web development opportunity.
								</p>
							</div>
						</div>
					</SwiperSlide>

					<div className="trm-slider-navigation">
						<div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
							<i className="fas fa-arrow-left" />
						</div>
						<div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
							<i className="fas fa-arrow-right" />
						</div>
					</div>
				</Swiper>
				{/* testimonials slider end */}
			</div>
		</div>
	);
};
export default Testimonials;
