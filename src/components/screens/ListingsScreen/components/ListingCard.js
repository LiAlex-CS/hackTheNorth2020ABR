import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

import { price } from '../utils/price';

export default function ListingCardComponent({data}){

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === data.images.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? data.images.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    const slides = data.images.map((src, index) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
          >
            <img src={src} alt="img did not load" style={{resizeMode: 'contain', height:"200px"}}/>
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
                <h6>{`Price: ${price(data.price)} per ${data.payRate}`}</h6>
                <p class="card-text text-muted">{data.address}</p>
                <p class="card-text">{`This posting was made by ${data.listingUserId} on ${data.date}`}</p>
                <p class="card-text">{data.description}</p>
                <a href={`/lisitings/${data.lisingId}`} class="btn btn-primary">Check It Out</a>
            </div>
            <div class="w-100">
            </div>
    </div>
    );
}