interface HangmanDrawProps {
    attempts: number
}

function HangmanDraw( { attempts }: HangmanDrawProps ) {
  return (
    <section className="relative">
        {HangmanFullBody.slice(0, attempts)}

      <div className="bg-black w-2 h-10 absolute right-0 top-0" />
      <div className="bg-black w-40 h-2 ml-32" />
      <div className="bg-black w-2 h-128 ml-32" />
      <div className="bg-black w-64 h-2" />
    </section>
  );
}

const HangmanHead = () => {
    return (
        <div className="rounded-full border-6 border-black w-15 h-15 absolute
        -right-6.5 top-10" />
    );
};

const HangmanBody = () => {
    return (
        <div className="bg-black w-2 h-40 absolute right-0 top-25" />
    );
}

const HangmanRightArm = () => {
    return (
        <div className="bg-black h-2 w-26 absolute -right-23 top-30 -rotate-30" />
    );
}

const HangmanLeftArm = () => {
    return (
        <div className="bg-black h-2 w-26 absolute -right-1 top-30 rotate-30" />
    );
}

const HangmanRightFoot = () => {
    return (
        <div className="bg-black h-2 w-26 absolute -right-17.5 top-75 rotate-65" />
    );
}

const HangmanLeftFoot = () => {
    return (
        <div className="bg-black h-2 w-26 absolute -right-6.5 top-75 -rotate-65" />
    );
};

const HangmanFullBody = [
    <HangmanHead />,
    <HangmanBody />,
    <HangmanRightArm />,
    <HangmanLeftArm />,
    <HangmanRightFoot />,
    <HangmanLeftFoot />,
]

export default HangmanDraw