# AlgoVisu

A modern, interactive sorting algorithm visualizer built with React and Vite. Watch algorithms come to life with smooth animations and an intuitive interface.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **5 Sorting Algorithms** — Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, Selection Sort
- **Real-time Visualization** — See comparisons and swaps highlighted as they happen
- **Adjustable Speed** — Control animation speed from 0.5x to 100x
- **Custom Arrays** — Generate random arrays or enter your own values
- **Playback Controls** — Start, Pause, Resume, and Stop at any time
- **Responsive Design** — Works seamlessly on desktop and mobile

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/AlgoVisu.git
cd AlgoVisu/my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🎮 Usage

1. **Select an Algorithm** — Choose from the dropdown menu
2. **Set Array Size** — Enter a size (5–50) and click "Generate Random Array"
3. **Or Enter Custom Values** — Type comma-separated numbers (1–100)
4. **Adjust Speed** — Use the slider to control visualization speed
5. **Click Start** — Watch the algorithm sort your array step by step

---

## 📁 Project Structure

```
AlgoVisu/
└── AlgoVisualiser/
    ├── src/
    │   ├── Algorithms/
    │   │   ├── boubblesort.jsx
    │   │   ├── quicksort.jsx
    │   │   ├── mergesort.jsx
    │   │   ├── insertionsort.jsx
    │   │   └── selectionsort.jsx
    │   ├── components/
    │   │   ├── visualise.jsx
    │   │   └── visualise.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

---

## 🎨 Color Palette

| Variable          | Hex       | Description                  |
|-------------------|-----------|------------------------------|
| `--bg-color`      | `#F4F3EE` | Soft off-white background    |
| `--text-color`    | `#1C1C1C` | Deep dark grey for text      |
| `--accent-color`  | `#fa9c7b` | Warm peach accent            |
| `--accent-hover`  | `#C15F3C` | Deeper terracotta for hover  |
| `--border-color`  | `#E0E0E0` | Light grey for borders       |
| `--disabled-color`| `#B1ADA1` | Muted grey for disabled      |

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite** — Build tool & dev server
- **CSS3** — Custom styling with CSS variables
- **ESLint** — Code linting

---

## 📜 Available Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Run ESLint                     |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ for learning algorithms
</p>
