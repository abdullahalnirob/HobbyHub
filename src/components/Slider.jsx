import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Slider = () => {
  const slides = [
    {
      id: "slide1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1200px-Youth-soccer-indiana.jpg",
      title: "Join Sports Groups",
      description:
        "Connect with local sports enthusiasts and stay active together",
      buttonText: "Find Sports Groups",
      prev: "slide4",
      next: "slide2",
    },
    {
      id: "slide2",
      image:
        "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630",
      title: "Professional Networking",
      description: "Expand your professional circle and grow your career",
      buttonText: "Join Business Groups",
      prev: "slide1",
      next: "slide3",
    },
    {
      id: "slide3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Fun._band.jpg",
      title: "Music & Arts Communities",
      description: "Express yourself and discover creative talents together",
      buttonText: "Explore Arts Groups",
      prev: "slide2",
      next: "slide4",
    },
    {
      id: "slide4",
      image:
        "https://jessup.edu/wp-content/uploads/2023/12/Programming-in-Computer-Science.jpg",
      title: "Tech & Coding Meetups",
      description:
        "Build projects and learn new skills with fellow tech enthusiasts",
      buttonText: "Join Tech Groups",
      prev: "slide3",
      next: "slide1",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="carousel w-full relative">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          {" "}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
                {slide.description}
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-white/90 font-medium max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
                <div className="flex itmes-center gap-3">
                  Join the{" "}
                  <Typewriter
                    words={[
                      "Drawing & Painting Group",
                      "Photography Group",
                      "Video Gaming Group",
                      "Fishing Group",
                      "Running Group",
                      "Cooking Group",
                      "Reading Group",
                      "Writing Group",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </p>
              <Slide>
                <Link to={"/groups"}>
                  <button className="bg-white text-gray-900 hover:bg-gray-100 duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center gap-2 sm:gap-3 group shadow-xl cursor-pointer">
                    <span>{slide.buttonText}</span>
                    <FiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </Slide>
            </motion.div>
          </div>
          <div className="absolute left-2 sm:left-4 right-2 sm:right-4 top-1/2 flex justify-between z-30 transform -translate-y-1/2">
            <a
              href={`#${slide.prev}`}
              className="btn btn-circle bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <span className="text-xl sm:text-2xl">❮</span>
            </a>
            <a
              href={`#${slide.next}`}
              className="btn btn-circle bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center"
              aria-label="Next slide"
            >
              <span className="text-xl sm:text-2xl">❯</span>
            </a>
          </div>
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-20">
            {slides.map((indicator) => (
              <a
                key={indicator.id}
                href={`#${indicator.id}`}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  indicator.id === slide.id
                    ? "bg-white scale-150"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to ${indicator.title}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
