"use client";
import { Card } from "flowbite-react";

const cardItems = [
  {
    title: "Pick up where you left off",
    image: "https://m.media-amazon.com/images/I/714pdrsVA6L._AC_SY270_.jpg",
    button: "",
  },
  {
    title: "FREE Shipping to Philipines",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/1460058_2528408_us_gw_pc_single_category_card_1x_758x608_us-en._SY608_CB609924804_.jpg",
    button: "Learn More",
  },
  {
    title: "Top Deal",
    image: "https://m.media-amazon.com/images/I/41bJ3hVnIfL._AC_SY460_.jpg",
    button: "See all deals",
  },
  {
    title: "Refresh your Space",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg",
    button: "See More",
  },
  {
    title: "Shop deals in Fashion",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg",
    button: "See all deals",
  },
  {
    title: "Electronics",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    button: "See more",
  },


];


function Body() {
  //className="container wrapper columns-3xs"
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardItems.map( ({title, image, button}) => (
        <Card key={title}>
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h5>
        <img src={image} alt={title} />
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <a href="">{button}</a>
        </div>
      </Card>
      ))}

    </div>
  );
}

export default Body;
