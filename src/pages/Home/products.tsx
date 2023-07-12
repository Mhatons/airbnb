import React from "react";
import Card from "../../components/card";

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


import image17 from "../../asset/4d713a1e-ab4c-4d70-905f-d24b4042189f.jpeg"
import image18 from "../../asset/4ee10ddd-a741-4cd1-bf5d-e5955f6072ff.jpeg"
import image19 from "../../asset/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg"
import image20 from "../../asset/181d4be2-6cb2-4306-94bf-89aa45c5de66.jpg"
import image21 from "../../asset/239adad6-2478-45c8-9c9b-bd3527b792ff.jpeg"
import image22 from "../../asset/427b9c9e-27a1-45ce-9f04-0609eb74cb48.jpeg"
import image23 from "../../asset/afc5bd2b-093d-4ac0-8381-a1c0dac38a1b.jpeg"
import image24 from "../../asset/b8a5f60d-2bda-4050-bc9e-55af012d6eb4.jpg"
import image25 from "../../asset/eaf8887f-410f-41e4-be1b-88c2a74fbfcf.jpeg"
import image26 from "../../asset/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg"
import image27 from "../../asset/f5cd57a3-b42d-4211-a73c-047c6cc2fc13.jpeg"
import image28 from "../../asset/ff9344bd-1646-4068-a395-5eaeecea83ca.jpeg"


import userImg1 from "../../asset/userImg1 (1).jpg"
import userImg2 from "../../asset/userImg1 (2).jpg"
import userImg3 from "../../asset/userImg1 (8).jpg"
import userImg4 from "../../asset/userImg1 (4).jpg"
import userImg5 from "../../asset/userImg1 (5).jpg"
import userImg6 from "../../asset/userImg1 (6).jpg"
import userImg7 from "../../asset/userImg1 (7).jpg"
import userImg8 from "../../asset/userImg1 (8).jpg"
import userImg9 from "../../asset/userImg1 (9).jpg"
import userImg10 from "../../asset/userImg1 (10).jpg"
import userImg11 from "../../asset/userImg1 (13).jpg"
import userImg12 from "../../asset/userImg1 (12).jpg"
import userImg13 from "../../asset/userImg1 (13).jpg"
import userImg14 from "../../asset/userImg1 (14).jpg"
import userImg15 from "../../asset/userImg1 (15).jpg"
import userImg16 from "../../asset/userImg1 (16).jpg"

const Products = () => {

 const cards = [
  {
   id: 1,
   title: "Balian Beach, Indonesia",
   rate: 4.85,
   views: "43,682",
   date: "Aug 11-18",
   price: 118,
   liked: true,
   userImg: userImg1,
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
   userImg: userImg2,
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
   title: "Guadix, Spain",
   rate: 4.77,
   views: "3,493",
   date: "Aug 31- Sep 6",
   price: 86,
   liked: false,
   userImg: userImg3,
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
   title: "Mozaga, Spain",
   rate: 4.79,
   views: "3,080",
   date: "Oct 16-21",
   price: 98,
   liked: false,
   userImg: userImg4,
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
   title: "Granada, Spain",
   rate: 5.0,
   views: "3,493",
   date: "Sep 9-16",
   price: 201,
   liked: false,
   userImg: userImg5,
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
   title: "Medinine, Tunisia",
   rate: 5.0,
   views: "3,063",
   date: "Jul 12-19",
   price: 52,
   liked: false,
   userImg: userImg6,
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
   title: "Tiznit, Morocco",
   rate: 4.84,
   views: "2,944",
   date: "Jul 14-21",
   price: 54,
   liked: false,
   userImg: userImg7,
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
   title: "Boumalne, Morocco",
   rate: 4.83,
   views: "2,945",
   date: "Jul 12-19",
   price: 29,
   liked: false,
   userImg: userImg8,
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
   title: "Mexico City, Mexico",
   rate: 4.89,
   views: "4,682",
   date: "Oct 12-22",
   price: 60,
   liked: false,
   userImg: userImg9,
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
   title: "Plouhinec, France",
   rate: 4.75,
   views: "2,682",
   date: "Aug 19-26",
   price: 100,
   liked: false,
   userImg: userImg10,
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
   title: "Marrakesh, Morocco",
   rate: 4.88,
   views: "2,642",
   date: "Nov 5-12",
   price: 101,
   liked: false,
   userImg: userImg11,
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
   title: "Mijas, Spain",
   rate: 4.9,
   views: "3,450",
   date: "Jul 30- Aug 4",
   price: 320,
   liked: false,
   userImg: userImg12,
   image: [
    image15,
    image16,
    image13,
    image,
    image11,
   ]
  },
  {
   id: 13,
   title: "Bhalil, Morocco",
   rate: 4.85,
   views: "3,164",
   date: "Jul 13-18",
   price: 47,
   liked: false,
   userImg: userImg13,
   image: [
    image17,
    image28,
    image20,
    image14,
    image21,
   ]
  },
  {
   id: 14,
   title: "Beni Khedache, Tunisia",
   rate: 4.96,
   views: "3,062",
   date: "Jul 12-19",
   price: 33,
   liked: false,
   userImg: userImg14,
   image: [
    image18,
    image27,
    image12,
    image5,
    image9,
   ]
  },
  {
   id: 15,
   title: "El Juncal, Spain",
   rate: 4.92,
   views: "3,122",
   date: "Jul 12-19",
   price: 37,
   liked: false,
   userImg: userImg15,
   image: [
    image19,
    image6,
    image3,
    image8,
    image14,
   ]
  },
  {
   id: 16,
   title: "Toujane, Tunisia",
   rate: 4.86,
   views: "3,083",
   date: "Jul 12-17",
   price: 29,
   liked: false,
   userImg: userImg16,
   image: [
    image20,
    image26,
    image12,
    image,
    image7,
   ]
  },
  {
   id: 17,
   title: "Gor, Spain",
   rate: 5.0,
   views: "3,498",
   date: "Jul 13-19",
   price: 90,
   liked: false,
   userImg: userImg15,
   image: [
    image21,
    image27,
    image17,
    image9,
    image5,
   ]
  },
  {
   id: 18,
   title: "Ir-Rabat, Malta",
   rate: 4.89,
   views: "3,459",
   date: "Jul 17-22",
   price: 216,
   liked: false,
   userImg: userImg8,
   image: [
    image22,
    image25,
    image28,
    image8,
    image19,
   ]
  },
  {
   id: 19,
   title: "Tijarafe, Spain",
   rate: 4.85,
   views: "3,342",
   date: "Jul 26-31",
   price: 82,
   liked: false,
   userImg: userImg5,
   image: [
    image23,
    image27,
    image2,
    image4,
    image11,
   ]
  },
  {
   id: 20,
   title: "Artenara, Spain",
   rate: 4.94,
   views: "3,128",
   date: "Jul 15-22",
   price: 97,
   liked: false,
   userImg: userImg12,
   image: [
    image24,
    image19,
    image18,
    image3,
    image12,
   ]
  },
 ]

 localStorage.setItem("cards", JSON.stringify(cards))
 let storedCards = localStorage.getItem("cards")
 const getCards = storedCards ? JSON.parse(storedCards) : []

 return (
  <div id="products" className=" grid items-center gap-6 pt-7 md:w-[90%] w-[93%] m-auto">
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
       userImg={info.userImg}
      />
     ))
    ) : null
   }
  </div>
 );
};

export default Products;
