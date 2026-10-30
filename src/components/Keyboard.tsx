
import clsx from "clsx";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  isGameOver: boolean;
}

function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  isGameOver,
}: KeyboardProps) {
  return (
    <section className="flex flex-wrap w-140 gap-2">
      {KEYS.map((letter, index) => {
        const lowerLetter = letter.toLowerCase();
        const isInactive = inactiveLetters.includes(lowerLetter);
        const isActive = activeLetters.includes(lowerLetter);

        return (
          <div
            key={index}
            onClick={() => {
              if (!isGameOver) {
                onKeyboardClick(lowerLetter);
              }
            }}
            className={clsx(
              "border-2 font-semibold p-5",
              isInactive && "bg-red-400",
              isActive && "bg-green-400",
              isGameOver
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            )}
          >
            {letter}
          </div>
        );
      })}
    </section>
  );
}

export default Keyboard;
