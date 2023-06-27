import React, { Component } from "react";

interface CounterProps {
  startNumber: number;
}

interface CounterState {
  number: number;
  id: number;
  text: string;
  array: { id: number; text: string }[];
}

export default class TypeClassComp extends Component<
  CounterProps,
  CounterState
> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      number: props.startNumber,
      id: props.startNumber,
      text: "one",
      array: [
        { id: 1, text: "one" },
        { id: 2, text: "two" },
      ],
    };
  }

  handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ number: parseInt(e.target.value) });
  };

  render() {
    return (
      <div>
        <h3>Counter 컴포넌트</h3>
        <p>초기 props값으로 전달된 값: {this.props.startNumber}</p>
        <p>props값을 받아와 수정한 state값: {this.state.number}</p>
        수정할 숫자 <input type="number" onChange={this.handleNum} />
        <hr />
        <li>id: text</li>
        {this.state.array.map((arr) => (
          <li key={arr.id}>
            {arr.id}: {arr.text}
          </li>
        ))}
      </div>
    );
  }
}
