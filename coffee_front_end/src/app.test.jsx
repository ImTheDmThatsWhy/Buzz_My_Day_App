import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, test } from 'vitest'
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Review from "./Components/Reviews/Reviews";

test("Home: renders hero section title", () => {
  render(<Home />);
  expect(screen.getByText("Buzz My Day App")).toBeInTheDocument();
});

test("Nav: renders navigation links", () => {
  render(<Nav />);
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});

test("Footer: renders copyright information", () => {
  render(<Footer />);
  expect(screen.getByText("Copyright SiteName 2025")).toBeInTheDocument();
});

test("Contact: renders contact form heading", () => {
  render(<Contact />);
  expect(screen.getByText("Contact Form")).toBeInTheDocument();
});

test("Coffee: renders coffee section", async () => {
  render(<Review />);
  const ratingFound = await screen.findByText("Your rating is");
  expect(ratingFound).toBeInTheDocument();
});
