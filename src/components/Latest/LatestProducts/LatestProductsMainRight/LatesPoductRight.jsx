import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LatestProductsRight.scss";

const LatesPoductRight = () => {
  const [isBtnWinOpen, setIsBtnWinOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(64); // Измените это значение на количество товаров на странице

  const toggleBtnWin = () => {
    setIsBtnWinOpen(!isBtnWinOpen);
  };

  useEffect(() => {
    // Ваш код для загрузки данных с сервера или других источников

    // Пример загрузки данных
    const dummyData = [
      {
        id: "1",
        category: "sneakers",
        img: "/BackImg/sneacker1.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "2",
        category: "sneakers",
        img: "/BackImg/sneacker2.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "3",
        category: "sneakers",
        img: "/BackImg/sneacker3.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "4",
        category: "sneakers",
        img: "/BackImg/sneacker4.webp",
        desc: "Product 50 Description",
        price: 200,
      },
      {
        id: "5",
        category: "sneakers",
        img: "/BackImg/sneacker5.webp",
        desc: "Product 50 Description",
        price: 200,
      },
      {
        id: "6",
        category: "sneakers",
        img: "/BackImg/sneacker6.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "7",
        category: "sneakers",
        img: "/BackImg/sneacker7.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "8",
        category: "sneakers",
        img: "/BackImg/sneacker8.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "9",
        category: "sneakers",
        img: "/BackImg/sneacker9.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "10",
        category: "sneakers",
        img: "/BackImg/sneacker10.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "11",
        category: "sneakers",
        img: "/BackImg/sneacker11.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "12",
        category: "sneakers",
        img: "/BackImg/sneacker12.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "13",
        category: "sneakers",
        img: "/BackImg/sneacker13.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "14",
        category: "sneakers",
        img: "/BackImg/sneacker14.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "15",
        category: "sneakers",
        img: "/BackImg/sneacker15.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "16",
        category: "sneakers",
        img: "/BackImg/sneacker16.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "17",
        category: "sneakers",
        img: "/BackImg/sneacker17.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "18",
        category: "sneakers",
        img: "/BackImg/sneacker18.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "19",
        category: "sneakers",
        img: "/BackImg/sneacker19.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "20",
        category: "sneakers",
        img: "/BackImg/sneacker20.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "21",
        category: "sneakers",
        img: "/BackImg/sneacker21.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "22",
        category: "sneakers",
        img: "/BackImg/sneacker22.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "23",
        category: "sneakers",
        img: "/BackImg/sneacker23.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "24",
        category: "sneakers",
        img: "/BackImg/sneacker24.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "24",
        category: "sneakers",
        img: "/BackImg/sneacker25.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "25",
        category: "sneakers",
        img: "/BackImg/sneacker25.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "26",
        category: "sneakers",
        img: "/BackImg/sneacker26.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "27",
        category: "sneakers",
        img: "/BackImg/sneacker27.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "28",
        category: "sneakers",
        img: "/BackImg/sneacker28.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "29",
        category: "sneakers",
        img: "/BackImg/sneacker29.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "30",
        category: "sneakers",
        img: "/BackImg/sneacker30.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "31",
        category: "sneakers",
        img: "/BackImg/sneacker31.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "32",
        category: "sneakers",
        img: "/BackImg/sneacker32.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "33",
        category: "sneakers",
        img: "/BackImg/sneacker33.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "34",
        category: "sneakers",
        img: "/BackImg/sneacker34.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "35",
        category: "sneakers",
        img: "/BackImg/sneacker35.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "36",
        category: "sneakers",
        img: "/BackImg/sneacker36.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "37",
        category: "sneakers",
        img: "/BackImg/sneacker37.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "38",
        category: "sneakers",
        img: "/BackImg/sneacker38.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "39",
        category: "sneakers",
        img: "/BackImg/sneacker39.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "40",
        category: "sneakers",
        img: "/BackImg/sneacker40.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "41",
        category: "sneakers",
        img: "/BackImg/sneacker41.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "42",
        category: "sneakers",
        img: "/BackImg/sneacker42.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "43",
        category: "sneakers",
        img: "/BackImg/sneacker43.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "44",
        category: "sneakers",
        img: "/BackImg/sneacker44.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "45",
        category: "sneakers",
        img: "/BackImg/sneacker45.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "46",
        category: "sneakers",
        img: "/BackImg/sneacker46.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "47",
        category: "sneakers",
        img: "/BackImg/sneacker47.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "48",
        category: "sneakers",
        img: "/BackImg/sneacker48.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "49",
        category: "sneakers",
        img: "/BackImg/sneacker49.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "50",
        category: "sneakers",
        img: "/BackImg/sneacker50.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "51",
        category: "sneakers",
        img: "/BackImg/sneacker51.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "52",
        category: "sneakers",
        img: "/BackImg/sneacker52.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "53",
        category: "sneakers",
        img: "/BackImg/sneacker53.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "54",
        category: "sneakers",
        img: "/BackImg/sneacker54.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "55",
        category: "sneakers",
        img: "/BackImg/sneacker55.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "56",
        category: "sneakers",
        img: "/BackImg/sneacker56.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "57",
        category: "sneakers",
        img: "/BackImg/sneacker57.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "58",
        category: "sneakers",
        img: "/BackImg/sneacker58.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "59",
        category: "sneakers",
        img: "/BackImg/sneacker59.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "60",
        category: "sneakers",
        img: "/BackImg/sneacker60.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "61",
        category: "sneakers",
        img: "/BackImg/sneacker61.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "62",
        category: "sneakers",
        img: "/BackImg/sneacker1.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "63",
        category: "sneakers",
        img: "/BackImg/sneacker2.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "64",
        category: "sneakers",
        img: "/BackImg/sneacker64.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "65",
        category: "sneakers",
        img: "/BackImg/sneacker65.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "65",
        category: "sneakers",
        img: "/BackImg/sneacker65.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "66",
        category: "sneakers",
        img: "/BackImg/sneacker66.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "67",
        category: "sneakers",
        img: "/BackImg/sneacker67.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "68",
        category: "sneakers",
        img: "/BackImg/sneacker68.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "69",
        category: "sneakers",
        img: "/BackImg/sneacker69.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "70",
        category: "sneakers",
        img: "/BackImg/sneacker70.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "71",
        category: "sneakers",
        img: "/BackImg/sneacker71.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "72",
        category: "sneakers",
        img: "/BackImg/sneacker72.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "73",
        category: "sneakers",
        img: "/BackImg/sneacker73.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "74",
        category: "sneakers",
        img: "/BackImg/sneacker74.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "75",
        category: "sneakers",
        img: "/BackImg/sneacker75.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "76",
        category: "sneakers",
        img: "/BackImg/sneacker76.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "77",
        category: "sneakers",
        img: "/BackImg/sneacker77.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "78",
        category: "sneakers",
        img: "/BackImg/sneacker78.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "79",
        category: "sneakers",
        img: "/BackImg/sneacker79.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "80",
        category: "sneakers",
        img: "/BackImg/sneacker80.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "81",
        category: "sneakers",
        img: "/BackImg/sneacker81.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "82",
        category: "sneakers",
        img: "/BackImg/sneacker82.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "83",
        category: "sneakers",
        img: "/BackImg/sneacker83.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "84",
        category: "sneakers",
        img: "/BackImg/sneacker84.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "85",
        category: "sneakers",
        img: "/BackImg/sneacker85.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "86",
        category: "sneakers",
        img: "/BackImg/sneacker86.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "87",
        category: "sneakers",
        img: "/BackImg/sneacker87.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "88",
        category: "sneakers",
        img: "/BackImg/sneacker88.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "89",
        category: "sneakers",
        img: "/BackImg/sneacker89.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "90",
        category: "sneakers",
        img: "/BackImg/sneacker90.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "91",
        category: "sneakers",
        img: "/BackImg/sneacker91.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "92",
        category: "sneakers",
        img: "/BackImg/sneacker92.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "93",
        category: "sneakers",
        img: "/BackImg/sneacker93.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "94",
        category: "sneakers",
        img: "/BackImg/sneacker94.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "95",
        category: "sneakers",
        img: "/BackImg/sneacker95.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "96",
        category: "sneakers",
        img: "/BackImg/sneacker96.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "97",
        category: "sneakers",
        img: "/BackImg/sneacker97.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "98",
        category: "sneakers",
        img: "/BackImg/sneacker98.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "99",
        category: "sneakers",
        img: "/BackImg/sneacker99.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "100",
        category: "sneakers",
        img: "/BackImg/sneacker100.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "101",
        category: "sneakers",
        img: "/BackImg/sneacker101.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "102",
        category: "sneakers",
        img: "/BackImg/sneacker102.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "103",
        category: "sneakers",
        img: "/BackImg/sneacker103.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "104",
        category: "sneakers",
        img: "/BackImg/sneacker104.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "105",
        category: "sneakers",
        img: "/BackImg/sneacker105.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "106",
        category: "sneakers",
        img: "/BackImg/sneacker106.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "107",
        category: "sneakers",
        img: "/BackImg/sneacker107.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "108",
        category: "sneakers",
        img: "/BackImg/sneacker108.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "109",
        category: "sneakers",
        img: "/BackImg/sneacker109.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "110",
        category: "sneakers",
        img: "/BackImg/sneacker110.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "111",
        category: "sneakers",
        img: "/BackImg/sneacker111.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "112",
        category: "sneakers",
        img: "/BackImg/sneacker112.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "113",
        category: "sneakers",
        img: "/BackImg/sneacker113.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "114",
        category: "sneakers",
        img: "/BackImg/sneacker114.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "115",
        category: "sneakers",
        img: "/BackImg/sneacker115.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "116",
        category: "sneakers",
        img: "/BackImg/sneacker116.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "117",
        category: "sneakers",
        img: "/BackImg/sneacker117.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "118",
        category: "sneakers",
        img: "/BackImg/sneacker118.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "119",
        category: "sneakers",
        img: "/BackImg/sneacker119.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "120",
        category: "sneakers",
        img: "/BackImg/sneacker120.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "121",
        category: "sneakers",
        img: "/BackImg/sneacker121.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "122",
        category: "sneakers",
        img: "/BackImg/sneacker122.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "123",
        category: "sneakers",
        img: "/BackImg/sneacker123.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "124",
        category: "sneakers",
        img: "/BackImg/sneacker124.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "125",
        category: "sneakers",
        img: "/BackImg/sneacker125.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "126",
        category: "sneakers",
        img: "/BackImg/sneacker126.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "127",
        category: "sneakers",
        img: "/BackImg/sneacker127.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "128",
        category: "sneakers",
        img: "/BackImg/sneacker128.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "129",
        category: "sneakers",
        img: "/BackImg/sneacker129.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
      {
        id: "130",
        category: "sneakers",
        img: "/BackImg/sneacker130.webp",
        desc: "Karhu Fusion 2.0 Bright White / Foggy Dew",
        price: 150,
      },
    
    
    ];

    setProducts(dummyData);
  }, []);

  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products__right">
      <h2 className="products__title">Latest</h2>
      <div className="products__nav">
        <div className="products__text">
          <p>{products.length} Items</p>
        </div>
        <div className="products__sorts">
          <p className="products__sort">Sorted by:</p>
          <div className="products__option">
            <button onClick={toggleBtnWin}>Recommended</button>
            {isBtnWinOpen && (
              <div className="products__btn-win">
                <Link to={"/"}>Recommended</Link>
                <Link to={"/"}>Product name</Link>
                <Link to={"/"}>Price</Link>
                <Link to={"/"}>Best discount </Link>
                <Link to={"/"}>Most sold </Link>
                <Link to={"/"}>Latest collections </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="products__cards">
        {currentProducts.map((card) => (
          <Link key={card.id} to={`/product/${card.id}`}>
            <div className="products__card">
              <div className="products__cards-img">
                <img src={card.img} alt="" />
              </div>
              <div className="products__content">
                <p className="products__desc">{card.desc}</p>
                <p className="products__price">{card.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="pagination-container wow zoomIn mar-b-1x"
        data-wow-duration="0.5s"
      >
        <ul className="pagination">
          <li className="pagination-item--wide first">
            <a
              className="pagination-link--wide first"
              href="#"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </a>
          </li>
          {Array.from(
            { length: Math.ceil(products.length / pageSize) },
            (_, index) => (
              <li
                key={index + 1}
                className={`pagination-item ${
                  index + 1 === currentPage ? "is-active" : ""
                }`}
              >
                <a
                  className="pagination-link"
                  href="#"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            )
          )}
          <li className="pagination-item--wide last">
            <a
              className="pagination-link--wide last"
              href="#"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(products.length / pageSize)}
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatesPoductRight;
