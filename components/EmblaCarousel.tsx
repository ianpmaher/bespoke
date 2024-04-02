"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

type AutoplayPluginType = {
    options: {
        stopOnInteraction: boolean;
    };
    stop: () => void;
    reset: () => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = (emblaApi?.plugins()?.autoplay as unknown) as AutoplayPluginType;
        if (!autoplay) return;

        const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

        resetOrStop();
    }, []);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
        emblaApi,
        onNavButtonClick
    );

    return (
        <section className="embla outline outline-blue-400">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">{index}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls outline outline-red-400">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;