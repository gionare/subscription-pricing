# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
