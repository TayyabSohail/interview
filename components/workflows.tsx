import Image from "next/image";
// import { Button } from "@shadcn/ui";

// Replace with actual image paths
import Bike1 from "E:IMPORTED FROM CDesktopinterviewBike_WebpublicimagesWhiteBike.png";
import Bike2 from "E:IMPORTED FROM CDesktopinterviewBike_Webpublicimages\blackBike.png";
import Bike3 from "E:IMPORTED FROM CDesktopinterviewBike_WebpublicimageswhiteTrailBlaze.png";
import Link from "next/link";

const bikes = [
  {
    name: "White Thunder",
    description: "A sleek and stylish bike designed for speed and performance.",
    image: Bike1,
  },
  {
    name: "Black Panther",
    description: "A powerful and sturdy bike with an aggressive look.",
    image: Bike2,
  },
  {
    name: "Red Beast",
    description: "A bold and dynamic bike built for adventure seekers.",
    image: Bike3,
  },
];

const BikeCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: any;
}) => {
  return (
    <div className="flex w-full max-w-6xl px-4 sm:px-6 my-10 bg-gray-800 rounded-lg shadow-lg">
      {/* Left Side: Image */}
      <div className="w-1/2 flex justify-center p-6">
        <Image
          className="object-cover w-full h-auto rounded-lg"
          src={image}
          alt={name}
          width={500}
          height={500}
        />
      </div>

      {/* Right Side: Details */}
      <div className="w-1/2 p-8 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">{name}</h2>
        <p className="text-lg text-gray-300 mb-6">{description}</p>
        <Link
          href="#"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default function BikeShowcase() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-10">
      {bikes.map((bike, index) => (
        <BikeCard key={index} {...bike} />
      ))}
    </section>
  );
}
