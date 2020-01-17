import React from "react";

class Hooks extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is constructor");
    this.state = {
      // prev: null,
      content: 0
    };
  }

  handleClick() {
    const { content } = this.state;
    this.setState({ content: content + 1 });
  }

  static getDerivedStateFromProps() {
    console.log("this is getDerivedStateFromProps");
    // return an obj to update the state or null to update nothing
    // RARE use cases where the state depends on changes in props over time.
    // static method, does not have access to the component instance
    return {};
  }

  componentDidMount() {
    console.log("this is componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this is shouldComponentUpdate", nextProps, nextState);
    // always called when the component updates due to state or props changes.
    // use for application performance optimization.

    // return a boolean value to decide component re-render or not (true/false)
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("this is getSnapshotBeforeUpdate", prevProps, prevState);
    // invoked before the most recently rendered output is committed to the DOM.
    // RARE use cases where the component needs to capture information from the DOM before it is potentially changed
    return 110;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("this is componentDidUpdate", prevProps, prevState, snapshot);
    // invoked immediately after updating, but not for initial render.
    // here to use it as to perform DOM operation ot to perform more async requests.
    // if the component uses getSnapshotBeforeUpdate before, then its output will be the input 'snapshot'

    // this.setState({ prev: snapshot });
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    // should not modify the component
    // gets an input as props and state
    const { content } = this.state;

    return (
      <div>
        <button
          type="submit"
          onClick={() => {
            this.handleClick();
          }}
        ></button>
        <h1>{content}</h1>
      </div>
    );
  }
}

export default Hooks;
