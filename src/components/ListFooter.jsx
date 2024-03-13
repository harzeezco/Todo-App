// import Button from "./Button";

// import PropTypes from "prop-types";

// const buttonLists = ["All", "Active", "Completed"];

// const ListFooter = ({ listNum, onToggleCompletedItem, setSortBy, sortBy }) => {
//   return (
//     <footer className="flex footer">
//       <p className="list-num">
//         {listNum ? `${listNum}  items left` : "Add todos"}
//       </p>

//       <ul className="flex">
//         {buttonLists.map((items) => (
//           <li className="btn-wrapper" key={items}>
//             <Button
//               sortBy={sortBy == items}
//               setSortBy={() => setSortBy(items)}
//               listNum={listNum}
//             >
//               {items}
//             </Button>
//           </li>
//         ))}
//       </ul>

//       <Button onToggleCompletedItem={onToggleCompletedItem}>
//         Clear completed
//       </Button>
//     </footer>
//   );
// };

// ListFooter.propTypes = {
//   listNum: PropTypes.number,
//   onToggleCompletedItem: PropTypes.func,
//   setSortBy: PropTypes.func,
//   sortBy: PropTypes.string,
// };

// export default ListFooter;
