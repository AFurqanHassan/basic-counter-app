import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 5 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleIncrement = counter => {
  //   // console.log(counter);
  //   // const counters = [...this.state.counters];
  //   // counters[0] = {...counter};
  //   // counters[0].value++;
  //   // console.log(this.state.counters[0]);
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = {...counter};
  //   counters[index].value++;
  //   this.setState({ counters });
  // }

  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters })
  // }


  // handleDelete = (counterId) => {
  //   // console.log("Event handler", counterId);
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({counters});
  // };
  render() {
    return (
      <div>
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
          // <Counter key={counter.id} value={counter.value}>
          //     <h4>Counter #{counter.id}</h4>
          // </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
