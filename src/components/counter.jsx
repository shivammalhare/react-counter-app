import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
  state = {
    count: 1,
    tags: ['Shivam', 'Saurabh', 'Sam']
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no Tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag1 => (
          <li key={tag1}> {tag1}</li>
        ))}
      </ul>
    );
  }

  handleIcrement = product => {
   console.log(product);
    this.setState({count: this.state.count +1 })
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        {this.renderTags()}
        <span className={classes}> {this.formatCount()} </span>

        <button
          onClick={this.handleIcrement}
          className="btn btn-secondary btn-sm"
        >
          {' '}
          Increament{' '}
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'btn btn-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
