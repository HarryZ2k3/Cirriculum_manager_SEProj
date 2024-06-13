import PropTypes from 'prop-types';
import './SwitchButton.css';

const SwitchButton = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="switch-button">
      {options.map((option) => (
        <button
          key={option}
          className={selectedOption === option ? 'active' : ''}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

SwitchButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SwitchButton;

// import PropTypes from 'prop-types';
// import './SwitchButton.css';

// const SwitchButton = ({ options, selectedOption, onSelect }) => {
//   return (
//     <div className="switch-button">
//       {options.map(option => (
//         <button
//           key={option}
//           className={selectedOption === option ? 'active' : ''}
//           onClick={() => onSelect(option)}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// SwitchButton.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   selectedOption: PropTypes.string.isRequired,
//   onSelect: PropTypes.func.isRequired,
// };

// export default SwitchButton;



// const SwitchButton = ({ options, selectedOption, onSelect }) => {
//   return (
//     <div className="flex space-x-2">
//       {options.map(option => (
//         <button
//           key={option}
//           className={`px-4 py-2 rounded ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           onClick={() => onSelect(option)}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default SwitchButton;
