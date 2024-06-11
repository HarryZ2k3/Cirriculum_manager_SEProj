// import PropTypes from 'prop-types';
// import './SwitchButton.css';

// const SwitchButton = ({ options, selectedOption, onSelect }) => {
//   return (
//     <div className="switch-button">
//       {options.map((option) => (
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
