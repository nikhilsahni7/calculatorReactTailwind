// calculator-react-js\src\components\Display.jsx
import PropTypes from "prop-types";

/**
 * Display component
 * @param {Object} props - The component props
 * @param {string} props.input - The input value
 * @param {string} props.result - The result value
 * @returns {JSX.Element} The display component
 */
const Display = ({ input, result }) => {
  return (
    <input
      className="text-4xl w-full h-20 bg-gray-800 text-white text-right p-4 border-none outline-none"
      type="text"
      value={result || input}
      readOnly
    />
  );
};

Display.propTypes = {
  input: PropTypes.string.isRequired,
  result: PropTypes.string,
};

export default Display;
