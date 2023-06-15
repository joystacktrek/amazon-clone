<a name="readme-top"></a>

<h1 align="center">Amazone Clone <img src="https://edu.stacktrek.com/logo192.png" width="30px"></h1>
<p align="center">A sample React Project presented during lecture</p>

<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#lecturenotes">Lecture Notes</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](/src/assets/images/project_screen.png)

The Amazon Clone project is a web application developed as a sample project for lectures aimed at DICT (Department of Information and Communications Technology) Scholars. This project serves as a practical demonstration of building a fully functional e-commerce platform using ReactJS, a popular JavaScript library for building user interfaces.

The main objective of this project is to provide DICT Scholars with hands-on experience in developing a real-world application using modern web development technologies. By replicating the core features and functionalities of the Amazon website, participants will gain a deeper understanding of the ReactJS framework, component-based architecture, and state management concepts.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![TailwindCSS][Tailwindcss.com]][Tailwindcss-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### 🚧 Prerequisites

Check if nodejs is installed

  ```sh
  node -v
  npm -v
  ```

### 🛠️ Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Fork the repo
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/amazon-clone.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Main Page
- [x] Created components
- [x] Display data using JSON Data
- [x] Able to pass values using props
- [ ] Hooks and States
- [ ] Routing

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LECTURENOTES -->
## Lecture Notes

<h2>JSX</h2>
<h3>JSX attribute - className</h3>
In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

<h3>JSX conditionals</h3>
JSX does not support if/else syntax in embedded JavaScript. There are three ways to express conditionals for use with JSX elements:

- a ternary within curly braces in JSX
- an if statement outside a JSX element, or
- the && operator.

<h3>Embedding JavaScript code in JSX</h3>
Any text between JSX tags will be read as text content, not as JavaScript. In order for the text to be read as JavaScript, the code must be embedded between curly braces { }.

- syntax and attributes
- self-closing
- multiline
- nested
- event listener
- .map
- key attribute

<h2>React Components</h2>

- return
- function
- import and export
- capitalization

<h2>Interacting Components</h2>

- props
- destructuring



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- Helpful Links -->
##  📝 Helpful Links

* [Legacy React Docs](https://legacy.reactjs.org/docs/hello-world.html)
* [TailwindCSS Installation](https://tailwindcss.com/docs/installation)
* [Flowbite Installation](https://www.flowbite-react.com/docs/getting-started/introduction)
* [Tailwind Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: src/assets/images/project_screen.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[Tailwindcss-url]: https://tailwindcss.com 





