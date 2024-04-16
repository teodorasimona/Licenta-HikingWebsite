import React from "react";

export default function Cards() {
  return (
    <div>
      <p className="text-[33px] px-36 font-semibold text-white pt-12 pb-2">
        Trasee populare langa Brasov
      </p>
      <div className="flex justify-between pb-4 px-32">
        <TrailCard
          imageUrl="\images\drumul-serpentinelor.webp"
          title="Mt Tampa via Drumul Serpentinelor"
          location="Braşov, Braşov, Romania"
          dificulty="Moderate"
          rating={4.6}
          reviewsCount={187}
        />

        <TrailCard
          imageUrl="\images\poiana-stanii.webp"
          title="Poiana Stanii"
          location="Sacele, Braşov, Romania"
          dificulty="Moderate"
          rating={4.3}
          reviewsCount={169}
        />

        <TrailCard
          imageUrl="\images\canionul-7-scari.webp"
          title="Canionul 7 scari"
          location="Brasov, Braşov, Romania"
          dificulty="Moderate"
          rating={4.5}
          reviewsCount={101}
        />

        <TrailCard
          imageUrl="\images\cabana-caraiman.webp"
          title="Cabana Caraiman"
          location="Brasov, Braşov, Romania"
          dificulty="Moderate"
          rating={4.1}
          reviewsCount={88}
        />
      </div>
    </div>
  );
}

interface TrailCardProps {
  imageUrl: string;
  title: string;
  location: string;
  dificulty: string;
  rating: number;
  reviewsCount: number;
}

function TrailCard({
  imageUrl,
  title,
  location,
  dificulty,
  rating,
  reviewsCount,
}: TrailCardProps) {
  return (
    <div className="w-1/4 p-4 max-w-sm  rounded-lg   ">
      <a href="#">
        <img
          className="rounded-lg w-full h-[236px] object-cover"
          src={imageUrl}
          alt="Drumul Serpentinelor"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-1x1 font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-white">
          {location} <br />
          {dificulty} • {rating.toFixed(1)}({reviewsCount})
        </p>
      </div>
    </div>
  );
}
