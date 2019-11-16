import { Rereact } from "./library";

/* @jsx Rereact.createElement */
const element = (
  <div id="foo">
    <h1>Hello world</h1>
  </div>
);

const container = document.getElementById("root");
Rereact.render(element, container);
