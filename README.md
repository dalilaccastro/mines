# 💣 Campo Minado (React Native)

Este projeto é uma recriação mobile do clássico jogo Campo Minado, desenvolvida com **React Native** e **TypeScript**. O foco está em aplicar lógica condicional, controle de estado e interatividade em dispositivos móveis.

---

## 🚀 Funcionalidades

- Geração dinâmica de tabuleiro com minas aleatórias
- Abrir e marcar campos
- Derrota ao abrir uma mina e vitória ao completar o desafio
- Níveis de dificuldade ajustáveis

---

## 🧠 Estrutura do Projeto

A aplicação foi dividida em componentes reutilizáveis e lida com lógica de jogo através de funções separadas para melhor manutenção:

- `Field`, `MineField`, `Header`: componentes visuais do jogo
- `gameLogic.ts`: contém funções principais como abrir campo, espalhar minas e verificar vitória

### 🔢 Exemplo de Lógica

```ts
function createMinedBoard(rows, columns, minesAmount) {
  // Gera um tabuleiro com minas aleatórias
}
```

---

## 🛠️ Tecnologias Utilizadas

- React Native  
- TypeScript  
- Styled Components  
- Expo

---

## 📦 Instalação

```bash
git clone https://github.com/dalilaccastro/mines.git
cd mines
npm install
npx expo start
```

---

## 👩‍💻 Autora

Desenvolvido por [@dalilaccastro](https://github.com/dalilaccastro)

---

# 💣 Minesweeper (React Native)

A mobile remake of the classic Minesweeper game, built using **React Native** and **TypeScript**. This project focuses on applying conditional logic, state management, and mobile interaction.

---

## 🚀 Features

- Dynamic board generation with random mines
- Tap to open cells and long-press to mark
- Lose by opening a mine and win by clearing all safe cells
- Adjustable difficulty levels

---

## 🧠 Project Structure

The app is divided into reusable components and handles core logic through utility functions for better maintainability:

- `Field`, `MineField`, `Header`: visual game components  
- `gameLogic.ts`: includes functions like openField, spreadMines, and checkWin

### 🔢 Logic Example

```ts
function createMinedBoard(rows, columns, minesAmount) {
  // Generates a board with random mines
}
```

---

## 🛠️ Technologies Used

- React Native  
- TypeScript  
- Styled Components  
- Expo

---

## 📦 Installation

```bash
git clone https://github.com/dalilaccastro/mines.git
cd mines
npm install
npx expo start
```

---

## 👩‍💻 Author

Developed by [@dalilaccastro](https://github.com/dalilaccastro)
