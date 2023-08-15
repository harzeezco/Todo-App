import React from "react";

const Footer = React.memo(() => {
  return (
    <footer>
      <p className="footer-text">Drag and drop to reorder list</p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
