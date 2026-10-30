
import { useEffect, useState } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../wordList.json";

function App() {
  // Mengambil satu kata random di wordList.json
  const [currentWord, setCurrentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // State penampung huruf-huruf yang dipilih pemain
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // Mengetahui berapa kali pemain salah menebak
  const incorrectLetters = selectedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  });

  // Mengambil huruf yang benar
  const correctLetters = selectedLetters.filter((letter) => {
    return currentWord.includes(letter);
  });

  // Kondisi kalah
  const isLose = incorrectLetters.length >= 6;

  // Kondisi menang
  const isWin =
    currentWord.split("").filter((letter) => {
      return selectedLetters.includes(letter);
    }).length === currentWord.length;

  // Kondisi game selesai
  const isGameOver = isWin || isLose;

  const addLetter = (Letter: string) => {
    // Jika game sudah selesai, huruf tidak bisa dipilih
    if (isGameOver) return;

    // Jika huruf sudah dipilih, tidak perlu dimasukkan lagi
    if (selectedLetters.includes(Letter)) return;

    setSelectedLetters((prev) => [...prev, Letter]);
  };

  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      if (isGameOver) return;

      e.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", onKeyboardPress);

    return () => {
      document.removeEventListener("keypress", onKeyboardPress);
    };
  }, [selectedLetters, isGameOver]);

  return (
    <section className="flex flex-col items-center gap-10">
      <div className="text-xl font-bold">
        {isLose
          ? "Nice try, Breee"
          : isWin
          ? "Ente menang, Nice"
          : "Lose Win"}
      </div>

      <HangmanDraw attempts={Math.min(incorrectLetters.length, 6)} />

      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        isWin={isWin}
        isLose={isLose}
      />

      <Keyboard
        onKeyboardClick={addLetter}
        inactiveLetters={incorrectLetters}
        activeLetters={correctLetters}
        isGameOver={isGameOver}
      />
    </section>
  );
}

export default App;
