export const buildViewport = (
  height: number,
  width: number,
  targetElement: HTMLElement
) => {
  const vp = document.createElement("div");
  (vp.style.width = "width"),
    (vp.style.height = "height"),
    (vp.style.border = "2px solid");
  targetElement.appendChild(vp);
};
