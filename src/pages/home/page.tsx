import { useState, useEffect } from "react";
import Layout from "../layout";

export default function HomePage() {
  return (
    <div className="relative">
      <div
        className="h-screen py-24 flex flex-col gap-8 items-center"
        style={{
          backgroundImage: "url('/images/carusel-image 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-4 text-white text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-wide leading-none ">
            Gaseste noi trasee montane
          </h1>
          <p className="text-xl font-normal">
            Visezi la trasee montane de neuitat si aventuri noi? Te ajutam noi!
          </p>
        </div>

        <form className="w-96 max-w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cauta trasee "
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-cta-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
            >
              Vezi trasee
            </button>
          </div>
        </form>
      </div>

      <div>
        <p className="text-[33px] pl-36 font-semibold text-white pt-12">
          Trasee populare langa Brasov
        </p>
        <div className="flex justify-between pt-4 p-32">
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

      <div className="flex gap-5 justify-between items-end p-28 bg-orange-100 max-md:flex-wrap max-md:px-5">
        <div className="flex flex-col items-center self-start">
          <div className="text-4xl leading-10 text-black">Activitati</div>
          <div className="flex gap-5 justify-between self-stretch mt-8">
            <div className="flex justify-center items-center my-auto">
              <img
                loading="lazy"
                srcSet="/images/thin-left-arrow.svg"
                className="rounded-full aspect-square bg-white shadow-lg h-12 w-12 p-3"
              />
            </div>
            <Activities imageUrl="\images\hiking.webp" title="Hiking" />
          </div>
        </div>
        <Activities imageUrl="\images\biking.jpg" title="Bicicleta" />
        <Activities imageUrl="\images\alergare.avif" title="Alergare" />
        <Activities imageUrl="\images\camping.jpg" title="Camping" />

        <div className="flex flex-col mt-14 max-md:mt-10">
          <div className="flex gap-5 justify-between">
            <Activities imageUrl="\images\skiat.jpg" title="Schiat" />
            <div className="flex flex-col items-start pb-6 my-auto">
              <img
                loading="lazy"
                srcSet="\images\thin-right-arrow.svg"
                className="rounded-full aspect-square bg-white shadow-lg h-12 w-12 p-3"
              />
            </div>
          </div>
        </div>
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

interface ActivitiesProps {
  imageUrl: string;
  title: string;
}

function Activities({ imageUrl, title }: ActivitiesProps) {
  return (
    <div className="flex flex-col mt-6 text-2xl   leading-8 text-black whitespace-nowrap max-md:mt-10">
      <img
        src={imageUrl}
        className="shrink-0 rounded-full h-[180px] w-[180px]"
      />
      <div className="self-center mt-6">{title}</div>
    </div>
  );
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
