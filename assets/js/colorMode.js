"use strict";

// selecting elements
const toggleColorModeElem = document.querySelector(".color--mode__toggle");
const documentElement = document.documentElement;

// internal state
let isDarkMode = true;

// function
const toggleColorMode = function () {
  // invert the isDarkMode
  isDarkMode = !isDarkMode;

  // custom light mode colors
  const lightModeColors = new Map([
    ["--primary-color", "#eeeeee"],
    ["--secondary-color", "#D5D5D5"],
    ["--tertiary-color", "#D5D5D5"],
    ["--secondary-color-hover", "#2f3332"],
    ["--light-color", "#272424"],
  ]);
  // custom dark mode colors
  const darkModecolors = new Map([
    ["--primary-color", "#141313"],
    ["--secondary-color", "#2f3332"],
    ["--tertiary-color", "#272424"],
    ["--secondary-color-hover", "#a0a0a0"],
    ["--light-color", "#ffffff"],
  ]);
  const colors = isDarkMode ? darkModecolors : lightModeColors;
  // set the custom properties
  for (const [key, color] of colors.entries()) {
    documentElement.style.setProperty(key, color);
  }
  toggleColorModeElem.textContent = isDarkMode
    ? "Light Mode 🌞"
    : "Dark Mode 🌙";
};

toggleColorModeElem.addEventListener("click", toggleColorMode);
