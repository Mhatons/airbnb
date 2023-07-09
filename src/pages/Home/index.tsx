import React, { useState } from "react";
import Card from "../../components/card";
import { BsToggleOn } from "react-icons/bs"
import { GrFormCheckmark } from "react-icons/gr"

import image from "../../asset/banner.jpeg"
import image2 from "../../asset/banner2.jpg"
import image3 from "../../asset/193cc9b1-06b9-4ccc-a673-a45f31eb5957.jpeg"
import image4 from "../../asset/073089b8-d783-47df-bcda-e636bdb0d0a9.jpeg"
import image5 from "../../asset/f9fd0022-500a-47a3-ab25-24f0a61e7d5e.jpg"
import image6 from "../../asset/4edf42b0-2bf9-41a3-b23b-2791e0f16af1.jpeg"
import image7 from "../../asset/c7ecaa29-a2a6-4e50-8dd5-a4719096fb4b.jpg"
import image8 from "../../asset/5c6ae46f-5ede-46e4-97d3-f8fd4a01e984.jpeg"
import image9 from "../../asset/424802d0-703b-4b1a-afb4-5e4a8de2e45b.jpeg"
import image10 from "../../asset/2e59c7d2-3766-42cb-ba86-9958cbe307bc.jpg"
import image11 from "../../asset/5fee653a-1ed4-4801-b30a-d13a3bbaeeec.jpg"
import image12 from "../../asset/78e79acf-8af4-4b18-815f-70475ec2c506.jpeg"
import image13 from "../../asset/db91b151-be3e-4a4c-8790-ed64c0ac7698.jpeg"
import image14 from "../../asset/bbe939d6-8991-4f7b-9d5d-52b4fdd8a583.jpg"
import image15 from "../../asset/606157a6-ef10-4eb7-b7f4-33ac86f83823.webp"
import image16 from "../../asset/20c47e50-644f-4a3e-9193-80d11b5b1904.jpg"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { allInfo, setToggleShow, setToggleState } from "../../features/actionslice";

const Home = () => {
  const { toggleShow, toggleState } = useAppSelector(allInfo)
  const dispatch = useAppDispatch()

  const cards = [
    {
      id: 1,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: true,
      image: [
        image,
        image2,
        image3,
        image4,
        image5
      ]
    },
    {
      id: 2,
      title: "Ubud, Indonesia",
      rate: 4.85,
      views: "7,382",
      date: "Aug 18-23",
      price: 119,
      liked: true,
      image: [
        image8,
        image7,
        image6,
        image9,
        image10,
      ]
    },
    {
      id: 3,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image12,
        image11,
        image13,
        image14,
        image15,
      ]
    },
    {
      id: 4,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image3,
        image,
        image16,
        image9,
        image5,
      ]
    },
    {
      id: 5,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image4,
        image14,
        image7,
        image3,
        image5,
      ]
    },
    {
      id: 6,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image13,
        image15,
        image11,
        image6,
        image16,
      ]
    },
    {
      id: 7,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image,
        image2,
        image3,
        image4,
        image5
      ]
    },
    {
      id: 8,
      title: "Ubud, Indonesia",
      rate: 4.85,
      views: "7,382",
      date: "Aug 18-23",
      price: 119,
      liked: false,
      image: [
        image6,
        image7,
        image8,
        image9,
        image10,
      ]
    },
    {
      id: 9,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image11,
        image12,
        image13,
        image14,
        image15,
      ]
    },
    {
      id: 10,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image16,
        image,
        image3,
        image9,
        image5,
      ]
    },
    {
      id: 11,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image13,
        image11,
        image7,
        image5,
        image9,
      ]
    },
    {
      id: 12,
      title: "Balian Beach, Indonesia",
      rate: 4.85,
      views: "43,682",
      date: "Aug 11-18",
      price: 118,
      liked: false,
      image: [
        image15,
        image16,
        image13,
        image,
        image11,
      ]
    },
  ]

  localStorage.setItem("cards", JSON.stringify(cards))
  let storedCards = localStorage.getItem("cards")
  const getCards = storedCards? JSON.parse(storedCards): []
  
  return (
    <div className="pt-5">
      <div className="flex items-center justify-between md:w-[42%] w-[95%] border rounded-xl px-3 py-1 m-auto">
        <div className="md:flex items-center text-sm gap-4">
          <b className="md:border-e pe-4">Display total price</b>
          <p className="text-zinc-500">Includes all fees, before taxes</p>
        </div>
        <div className="relative">
          <BsToggleOn onClick={() => dispatch(setToggleShow(!toggleShow))} className={` hover:text-zinc-500 cursor-pointer text-zinc-400 text-[3.4em] ${toggleShow ? "text-zinc-800" : "rotate-180"}`} />
          {
            toggleShow && <GrFormCheckmark className="absolute top-5 right-2 text-white" />
          }
        </div>
      </div>
      <div className="grid items-center gap-6  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7 md:w-[90%] w-[95%] m-auto">
        {
          getCards.length ? (
            getCards.map((info: any) => (
              <Card
                key={info.id}
                title={info.title}
                views={info.views}
                rate={info.rate}
                price={info.price}
                date={info.date}
                image={info.image}
                id={info.id}
              />
            ))
          ) : null
        }
      </div>
    </div>
  );
};

export default Home;
