import "./assets/main.css";
import { Viewport } from "./common/geometry-utils";
import { Vector } from "./common/vector";

let element = document.getElementById("setViewportParams");
let vp0;
element.addEventListener("click", () => {
  setViewportParams();
});

function setViewportParams() {
  const vp = document.querySelector("#vp");
  const vpWidth = document.querySelector("#vp-width").value;
  const vpHeight = document.querySelector("#vp-height").value;
  if (vpWidth > 10 && vpHeight > 10 && vp) {
    vp0 = Viewport.build(vpWidth, vpHeight, vp);
  } else {
    vp0 = Viewport.build(250, 250, vp);
  }
}

document.getElementById("draw-vector").addEventListener("click", () => {
  if (vp0) {
    const svg = vp0.getOverlaySvg();
    let v1 = Vector.create(10, 20, svg);
    console.log(v1);
    // drawVector(v1, svg);
  }
});

// drawVector(vector, svg) {
//   const cx = svg.getAttribute("width") / 2;
//   const cy = svg.getAttribute("height") / 2;
//   const line = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "line"
//   );
//   line.setAttribute('x1', cx.toString());
//   line.setAttribute('y1', cy.toString());
//   line.setAttribute('x2', vector[0].toString());
//   line.setAttribute('y2', vector[1].toString());
//  // line.setAttribute('style', 'stroke:rgb(255,0,0);stroke-width:2');
// }

//window.onload = drawVector;
