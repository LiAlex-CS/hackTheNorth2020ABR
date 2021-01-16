import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

export default function ListingCardComponent({data}){

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === data.listingImgSrcs.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? data.listingImgSrcs.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    const slides = data.listingImgSrcs.map((src, index) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
          >
            <img src={src} alt="img did not load"/>
          </CarouselItem>
        );
    });


    return(
        <div class="card flex-row flex-wrap">
            <div class="card-header border-0 col-4">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
            <div class="card-block px-2 col-8">
                <h4 class="card-title mt-4"> {data.title}</h4>
                <p class="card-text text-muted">{data.address}</p>
                <p class="card-text">{`This posting was made by ${data.listingUserId} on ${data.date}`}</p>
                <p class="card-text">{data.description}</p>
                <a href="#" class="btn btn-primary">Check It Out</a>
            </div>
            <div class="w-100">
            </div>
    </div>
    );
}