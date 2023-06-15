import { Carousel } from "flowbite-react";

function DefaultCarousel(props) {
  return (
    <div className="relative" >
      <Carousel>
        <h1 className="text-black">Hello {props.name} {props.gender}</h1>
        <img className="relative"
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt="2"
        />
        <img  className="relative"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="3"
        />
      </Carousel>
    </div>
  );
}

export default DefaultCarousel;
