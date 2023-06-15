import { Carousel } from "flowbite-react";

function DefaultCarousel({ name, gender }) {
  const FIRST_IMAGE =
    gender === "female"
      ? "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
      : "https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg";
  return (
    <div className="relative">
      <Carousel>
        <h1 className="text-black">Hello {name}</h1>
        <img className="relative" src={FIRST_IMAGE} />
        <img
          className="relative"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="3"
        />
      </Carousel>
    </div>
  );
}

export default DefaultCarousel;
