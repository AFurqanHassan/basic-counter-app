import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // value: this.props.value,
  //   // count: 0,
  //   // imageUrl: "https://picsum.photos/200"
  //   // tags: ['tag1', 'tag2', 'tag3']
  //   // tags: [],
  // };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  // }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //   super();
  //   // console.log("constructor", this)
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   // console.log("Increment Clicked", this);
  //   // this.state.count++;
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // console.log('props', this.props);
    // let classes = this.getBadgeClasses();
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    // let classes = this.getBadgeClasses();

    return (
      // <React.Fragment>
      //   <img src={this.state.imageUrl} alt="" /> */}
      //   {/* <h1>Something</h1> */}
      //   {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}
      //   {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()}</span> */}
      //   {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      //   <button className="btn btn-secondary btn-sm ">Increment</button> */}
      //   {/* <ul>
      //     { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
      //   </ul>
      // </React.Fragment>
      <div>
        {/* {this.props.children} */}
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        
        <button
          // onClick={this.doHandleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm "
        >
          Increment
        </button>
        <button
          // onClick={() => this.props.onDelete(this.props.id)}
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn sm m-2"
        >
          Delete
        </button>
      </div>
    );
    // return (
    //   <div>
    //     {this.state.tags.length === 0 && "Create a new tag!"}
    //     {this.renderTags()}
    //   </div>
    // );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  formatCount() {
    // const { value: count } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
    // return count === 0 ? <h1>ZERO</h1> : count;
  }
}

export default Counter;
