// <!-- As a link -->
import React, { Component, createFactory } from "react";
// <nav class="navbar navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
// </nav>

// <!-- As a heading -->
// <nav class="navbar navbar-light bg-light">
//   <span class="navbar-brand mb-0 h1">Navbar</span>
// </nav>

// class Navbar extends Component {
//   //   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="//#region ">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="//#region ">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
