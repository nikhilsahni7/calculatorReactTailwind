import PropTypes from "prop-types";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    "AC",
    "1",
    "2",
    "+",
    "=",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onButtonClick(button)}
          className={`w-24 h-24 text-3xl font-semibold rounded-lg shadow-md focus:outline-none focus:ring-4 ${
            button === "="
              ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300"
              : button.match(/[+\-*/]/)
              ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-200"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

ButtonsContainer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default ButtonsContainer;
