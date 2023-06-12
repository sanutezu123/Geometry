export class Viewport {
  #overlaySvg;

  constructor(height, width, targetElement) {
    this.buildViewport(height, width, targetElement);
  }

  static build(height, width, targetElement) {
    return new Viewport(height, width, targetElement);
  }

  buildViewport = (height, width, targetElement) => {
    this.#overlaySvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const vp = document.createElement("div");
    (vp.style.width = height + "px"),
      (vp.style.height = width + "px"),
      (vp.style.border = "2px solid");
    //set svg attributes
    this.#overlaySvg.setAttribute("width", width.toString());
    this.#overlaySvg.setAttribute("height", height.toString());
    vp.appendChild(this.#overlaySvg);
    targetElement.appendChild(vp);
  };

  getOverlaySvg() {
    return this.#overlaySvg;
  }
}
