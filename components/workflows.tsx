import Image from "next/image";
import BlackBike from "@/public/images/blackBike.png";
import WhiteBike from "@/public/images/WhiteBike.png";
import WhiteTrailBlaze from "@/public/images/whiteTrailBlaze.png";

export default function BikeSection() {
  return (
    <section
      className="flex flex-col py-12 space-y-12"
      style={{ backgroundColor: "#080414" }}
    >
      {/* First row: Black Bike */}
      <div className="flex items-center justify-center space-x-12">
        <Image src={BlackBike} alt="Black Bike" width={600} height={400} />
        <div className="text-justify">
          <h2 className="text-2xl font-bold text-white">Black Bike</h2>
          <p className="text-lg text-gray-300">
            The Black Bike combines speed, performance, and style in one sleek
            package.
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg">
            Buy Now
          </button>
        </div>
      </div>

      {/* Second row: White Bike */}
      <div className="flex items-center justify-center space-x-12">
        <div className="text-justify">
          <h2 className="text-2xl font-bold text-white">White Bike</h2>
          <p className="text-lg text-gray-300">
            The White Bike offers a smooth and powerful ride for urban
            commuting.
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg">
            Buy Now
          </button>
        </div>
        <Image src={WhiteBike} alt="White Bike" width={600} height={400} />
      </div>

      {/* Third row: Trail Blaze Bike */}
      <div className="flex items-center justify-center space-x-12">
        <Image
          src={WhiteTrailBlaze}
          alt="Trail Blaze"
          width={600}
          height={400}
        />
        <div className="text-justify">
          <h2 className="text-2xl font-bold text-white">Trail Blaze</h2>
          <p className="text-lg text-gray-300">
            The Trail Blaze is built for adventure, offering durability and
            speed on rough terrains.
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
