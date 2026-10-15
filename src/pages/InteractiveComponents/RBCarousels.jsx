import { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

function RBCarousels() {
    const refSlider = useRef(null);
    const [index, setIndex] = useState(0);

    const slides = [
        {
            image:
                "https://media.istockphoto.com/id/1136437406/photo/san-francisco-skyline-with-oakland-bay-bridge-at-sunset-california-usa.jpg?s=612x612&w=0&k=20&c=JVBBZT2uquZbfY0njYHv8vkLfatoM4COJc-lX5QKYpE=",
            title: "First Slide",
            description: "First slide description."
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsw3-99yRs9W7DGhngxtxbtVD7rWCX5_olpnLPT2Bzq5ETVHsE9y1J9de&s=10",
            title: "Second Slide",
            description: "Second slide description."
        },
        {
            image:
                "https://media.istockphoto.com/id/931041896/photo/manhattan-skyline-with-the-one-world-trade-center-building-at-twilight.jpg?s=612x612&w=0&k=20&c=oXsu01_sszmeT3ncC_Xg1Y1qU_-Ye6VT_mby-Y-2TPU=",
            title: "Third Slide",
            description: "Third slide description."
        },
        
    ];

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handlePrevious = () => {
        setIndex((currentIndex) => Math.max(0, currentIndex - 1));
    };

    const handleNext = () => {
        setIndex((currentIndex) =>
            Math.min(slides.length - 1, currentIndex + 1)
        );
    };

    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-4">Carousel</h2>

            {/* Carousel */}
            <div
                ref={refSlider}
                className="position-relative rounded-4 overflow-hidden"
            >
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={false}
                    interval={null}
                >
                    {slides.map((slide) => (
                        <Carousel.Item key={slide.title}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="d-block w-100 rounded-4"
                                style={{
                                    height: "350px",
                                    objectFit: "cover"
                                }}
                            />

                            <Carousel.Caption>
                                <h3 className="fw-bold text-white">
                                    {slide.title}
                                </h3>
                                <p className="fw-semibold text-white">
                                    {slide.description}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Custom Previous Arrow */}
                <Button
                    variant="link"
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 p-0 border-0 text-white"
                    onClick={handlePrevious}
                    disabled={index === 0}
                    aria-label="Previous slide"
                >
                    <span
                        className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-white"
                        style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "transparent",
                            opacity: 0.8
                        }}
                    >
                        <ArrowLeft size={18} />
                    </span>
                </Button>

                
                <Button
                    variant="link"
                    className="position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0 text-white"
                    onClick={handleNext}
                    disabled={index === slides.length - 1}
                    aria-label="Next slide"
                >
                    <span
                        className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-white"
                        style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "transparent",
                            opacity: 0.8
                        }}
                    >
                        <ArrowRight size={18} />
                    </span>
                </Button>
            </div>

            
            <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-center mt-3"
            >
                {slides.map((slide, slideIndex) => (
                    <Button
                        key={slide.title}
                        variant={
                            index === slideIndex
                                ? "primary"
                                : "secondary"
                        }
                        className="rounded-circle p-0  "
                        style={{
                            width: "12px",
                            height: "12px"
                        }}
                        onClick={() => setIndex(slideIndex)}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                        aria-pressed={index === slideIndex}
                    />
                ))}
            </Stack>

            
            <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-center mt-3"
            >
                <Button
                    variant="primary"
                    onClick={handlePrevious}
                    disabled={index === 0}
                >
                    <ArrowLeft size={18} /> Previous
                </Button>

                <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={index === slides.length - 1}
                >
                    Next <ArrowRight size={18} />
                </Button>
            </Stack>
        </div>
    );
}

export default RBCarousels;