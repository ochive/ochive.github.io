'use strict'
let mountNode = document.getElementById("container");

const e = React.createElement;
ReactDOM.render(<antd.Button type="primary">hello</antd.Button>, mountNode);
// ReactDOM.render((<div>hello world!</div>), document.getElementById("container"));