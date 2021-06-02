import React from "react";
import styled from "styled-components";

const categories = [
  {
    id: 1,
    title: "Dim Sum",
    to: "./store/categoria/dim-sum",
  },
  {
    id: 2,
    title: "Promociones",
    to: "./store/categoria/promociones",
  },
  {
    id: 3,
    title: "Menú",
    to: "./store/categoria/menu",
  },
  {
    id: 4,
    title: "Sopa",
    to: "./store/categoria/sopa",
  },
  {
    id: 5,
    title: "Bebidas",
    to: "./store/categoria/bebidas",
  },
  {
    id: 6,
    title: "Platos dulces",
    to: "./store/categoria/platos-dulces",
  },
  {
    id: 7,
    title: "Platos salados",
    to: "./store/categoria/platos-salados",
  },
  {
    id: 8,
    title: "A la carta",
    to: "./store/categoria/a-la-carta",
  },
  {
    id: 9,
    title: "Familiar",
    to: "./store/categoria/familiar",
  },
];

export const Sidebar = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div key={`category-${index}`}>{category.title}</div>
      ))}
    </>
  );
};
