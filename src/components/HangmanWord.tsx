
interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  isWin: boolean;
  isLose: boolean;
}

function HangmanWord({
  word,
  selectedLetters,
  isWin,
  isLose,
}: HangmanWordProps) {
  return (
    <section className="flex gap-6">
      {word.split("").map((letter, index) => {
        return (
          <span
            key={index}
            className="uppercase font-bold text-5xl border-b-6"
          >
            <span
              className={`${
                selectedLetters.includes(letter) || isLose
                  ? "visible"
                  : "invisible"
              } ${
                isWin
                  ? "text-green-500"
                  : selectedLetters.includes(letter)
                  ? "text-black"
                  : "text-red-500"
              }`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;
