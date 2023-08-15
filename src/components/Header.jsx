import React from "react";
import PropTypes from "prop-types";

const Header = React.memo(({ onToggleMode, isDisplay }) => {
  return (
    <header className="flex">
      <h3 className="app-name">Todo</h3>

      <span className="icons-box cursor" onClick={onToggleMode}>
        {isDisplay ? (
          <ion-icon name="moon-outline"></ion-icon>
        ) : (
          <ion-icon name="sunny-outline"></ion-icon>
        )}
      </span>
    </header>
  );
});

Header.propTypes = {
  onToggleMode: PropTypes.func,
  isDisplay: PropTypes.bool,
};

Header.displayName = "Header";

export default Header;
