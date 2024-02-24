# Vite + React Pricing App

This project is a simple pricing app built with Vite and React, allowing users to toggle between monthly and yearly pricing options and displaying pricing details from a JSON file.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Demonstrates the integration of Vite and React.
It utilizes React components to display pricing options fetched from a JSON file.

- Display pricing options from a JSON file
- Toggle between monthly and yearly pricing
- Responsive design

<img src="public/screenshot.png" width="500px">

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vite-react-pricing-app.git
```

2. Navigate to the project directory:
3. Install dependencies:

```bash
npm install
```

4. `npm start`
5. Open your browser and navigate to http://localhost:3000 to view the project.

## toogle switch HTML & CSS

```html
<input id="checkboxInput" type="checkbox" />
<label class="toggleSwitch" for="checkboxInput"> </label>
```

```css
/* To hide the checkbox */
#checkboxInput {
  display: none;
}

.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90px;
  height: 30px;
  background-color: rgb(206, 206, 206);
  border-radius: 40px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.toggleSwitch::after {
  content: "";
  position: absolute;
  height: 30px;
  width: 50%;
  left: 0px;
  background: conic-gradient(
    rgba(26, 26, 26, 0.555),
    white,
    rgba(26, 26, 26, 0.555),
    white,
    rgba(26, 26, 26, 0.555)
  );
  border-radius: 40px;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.281);
}

#checkboxInput:checked + .toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: 0.3s;
}
/* Switch background change */
#checkboxInput:checked + .toggleSwitch {
  background-color: rgb(124, 173, 206);
  transition-duration: 0.3s;
}
```
