"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaTrash } from "react-icons/fa";

interface Card {
  id: number;
  name: string;
  image: string;
  price: string;
}

const SwiperCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [newCard, setNewCard] = useState({ name: "", image: "", price: "" });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const response = await axios.get("http://localhost:3001/cards");
    setCards(response.data);
  };

  const addCard = async () => {
    if (!newCard.name || !newCard.image || !newCard.price) return;
    const response = await axios.post("http://localhost:3001/cards", newCard);
    setCards([...cards, response.data]);
    setNewCard({ name: "", image: "", price: "" });
  };

  const deleteCard = async (id: number) => {
    await axios.delete(`http://localhost:3001/cards/${id}`);
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="container mx-auto mt-24 mb-24">
      <div className="text-center my-6">
        <h1 className="text-2xl font-bold">
          <span className="text-green-400 ml-[200px] mb-10">Spotlight.</span>{" "}
          Collection youll love
        </h1>
      </div>

      <Swiper spaceBetween={50} slidesPerView={4}>
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                src={card.image}
                alt={card.name}
                className="rounded-md hover:scale-105 transform transition duration-300"
              />
              <h3 className="text-white mt-4">{card.name}</h3>
              <p className="text-green-400">{card.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => setShowTable(!showTable)}
        className="mt-8 px-4 py-2 text-white  bg-gray-700 hover:bg-[#22BF37] transition-colors duration-300 rounded-md"
      >
        Browse All
      </button>

      {showTable && (
        <div className="mt-8">
          <table className="w-full text-left bg-gray-900 text-white">
            <thead>
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr key={card.id} className="border-b border-gray-700">
                  <td className="p-4">
                    <img src={card.image} alt={card.name} className="w-20 " />
                  </td>
                  <td className="p-4">{card.name}</td>
                  <td className="p-4">{card.price}</td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8">
            <h3 className="text-xl text-white mb-4">Add New Card</h3>
            <input
              type="text"
              placeholder="Name"
              value={newCard.name}
              onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
              className="p-2 rounded-md bg-gray-800 text-white mr-4"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newCard.image}
              onChange={(e) =>
                setNewCard({ ...newCard, image: e.target.value })
              }
              className="p-2 rounded-md bg-gray-800 text-white mr-4"
            />
            <input
              type="text"
              placeholder="Price"
              value={newCard.price}
              onChange={(e) =>
                setNewCard({ ...newCard, price: e.target.value })
              }
              className="p-2 rounded-md bg-gray-800 text-white mr-4"
            />
            <button
              onClick={addCard}
              className="bg-gray text-white py-2 px-4 bg-gray-700 hover:bg-[#22BF37] transition-colors duration-300 rounded-md  hover:bg-green-600"
            >
              Add Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperCards;
