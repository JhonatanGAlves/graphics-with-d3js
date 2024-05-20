export const Header = () => {
  return (
    <header className="flex justify-center items-center h-16 bg-gray-950">
      <h3 className="text-xl font-bold">
        Rendering charts using{" "}
        <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
          <span className="underline text-orange-500 hover:text-orange-400 transition-all">
            D3js
          </span>
        </a>
      </h3>
    </header>
  );
};
