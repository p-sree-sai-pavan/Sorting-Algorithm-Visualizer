# 🔢 Sorting Algorithm Visualizer

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Variables-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**An interactive web application to visualize sorting algorithms in real-time**

[Features](#-features) • [Demo]([#-demo](https://p-sree-sai-pavan.github.io/Sorting-Algorithm-Visualizer/)) • [Setup](#-getting-started) • [Algorithms](#-algorithms) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Algorithms](#-algorithms)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Color Palette](#-color-palette)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

The **Sorting Algorithm Visualizer** is an educational web application designed to help students, educators, and developers understand how different sorting algorithms work. Watch algorithms sort data step-by-step with smooth animations, adjustable speed controls, and interactive features.

### Key Highlights:
- 🎨 **Clean Modern UI** - Warm, minimal design with smooth animations
- ⚡ **Real-time Visualization** - See each comparison and swap as it happens
- 🎮 **Full Playback Control** - Start, Pause, Resume, and Stop at any time
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🚀 **Lightning Fast** - Built with Vite for instant hot reload

---

## ✨ Features

### Visualization Controls
- 🎲 **Random Array Generation** - Generate arrays of custom sizes (5-50 elements)
- ✏️ **Custom Array Input** - Enter your own comma-separated values
- ⏯️ **Playback Controls** - Start, Pause, Resume, and Stop sorting
- 🎚️ **Speed Control** - Adjust animation speed from 0.5x to 100x
- 🎨 **Color-coded Bars** - Different colors for comparing, swapping, and sorted elements

### Visual Feedback
- 🔴 **Red** - Elements currently being compared
- 🔵 **Blue** - Default state
- 🟢 **Green** - Sorted / Final position

---

## 📊 Algorithms

| Algorithm | Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space |
|-----------|------------------------|----------------------|-------------------------|-------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 7** | Build Tool & Dev Server |
| **CSS3** | Styling with CSS Variables |
| **ESLint** | Code Linting |

---

## 📁 Project Structure

```
Sorting-Algorithm-Visualizer/
├── AlgoVisualiser/
│   ├── src/
│   │   ├── Algorithms/
│   │   │   ├── boubblesort.jsx
│   │   │   ├── quicksort.jsx
│   │   │   ├── mergesort.jsx
│   │   │   ├── insertionsort.jsx
│   │   │   └── selectionsort.jsx
│   │   ├── components/
│   │   │   ├── visualise.jsx
│   │   │   └── visualise.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/p-sree-sai-pavan/Sorting-Algorithm-Visualizer.git

# Navigate to project
cd Sorting-Algorithm-Visualizer/AlgoVisualiser

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🎮 Usage

1. **Select Algorithm** - Choose from the dropdown (Bubble, Quick, Merge, Insertion, Selection)
2. **Set Array Size** - Enter size (5-50) and click "Generate Random Array"
3. **Or Custom Input** - Type comma-separated numbers (1-100)
4. **Adjust Speed** - Use the slider to control visualization speed
5. **Click Start** - Watch the algorithm in action!
6. **Pause/Resume** - Control playback anytime
7. **Stop** - Reset to original array

---

## 🎨 Color Palette

| Variable | Hex | Preview |
|----------|-----|---------|
| `--bg-color` | `#F4F3EE` | ![#F4F3EE](https://via.placeholder.com/20/F4F3EE/F4F3EE) Soft off-white |
| `--text-color` | `#1C1C1C` | ![#1C1C1C](https://via.placeholder.com/20/1C1C1C/1C1C1C) Deep dark grey |
| `--accent-color` | `#fa9c7b` | ![#fa9c7b](https://via.placeholder.com/20/fa9c7b/fa9c7b) Warm peach |
| `--accent-hover` | `#C15F3C` | ![#C15F3C](https://via.placeholder.com/20/C15F3C/C15F3C) Terracotta |
| `--border-color` | `#E0E0E0` | ![#E0E0E0](https://via.placeholder.com/20/E0E0E0/E0E0E0) Light grey |
| `--disabled-color` | `#B1ADA1` | ![#B1ADA1](https://via.placeholder.com/20/B1ADA1/B1ADA1) Muted beige |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-algorithm`)
3. **Commit** your changes (`git commit -m 'Add: Heap Sort algorithm'`)
4. **Push** to the branch (`git push origin feature/new-algorithm`)
5. **Open** a Pull Request

### Ideas for Contributions
- 🆕 Add more sorting algorithms (Heap Sort, Radix Sort, etc.)
- 🎵 Add sound effects for comparisons
- 📊 Add algorithm complexity display
- 🌙 Add dark mode toggle
- 📱 Improve mobile responsiveness

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🗺️ Roadmap

### Current Features (v1.0)
- ✅ 5 sorting algorithms
- ✅ Real-time visualization
- ✅ Speed control
- ✅ Custom array input
- ✅ Responsive design

### Planned Features (v2.0)
- 🔄 Algorithm comparison mode
- 📊 Time complexity graph
- 🎵 Sound effects
- 🌙 Dark/Light mode toggle
- 📈 Performance metrics
- 🔢 More algorithms (Heap, Radix, Counting)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for learning algorithms

[Report Bug](https://github.com/p-sree-sai-pavan/Sorting-Algorithm-Visualizer/issues) • [Request Feature](https://github.com/p-sree-sai-pavan/Sorting-Algorithm-Visualizer/issues)

</div>
