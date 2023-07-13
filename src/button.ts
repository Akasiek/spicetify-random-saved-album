import ShuffleIcon from "./shuffleIcon";
import { handleClick } from "./util";

const renderButton = () => {
  const randomBtn = new Spicetify.Topbar.Button(
    "Get Random Saved Album",
    `<svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">${ShuffleIcon}</svg>`,
    handleClick
  );

  randomBtn.element.id = "random-saved-album-btn";
};

export const addButton = () => {
  const btn = document.getElementById("random-saved-album-btn");

  if (!btn) {
    renderButton();
  }
};

export const removeButton = () => {
  const btn = document.getElementById("random-saved-album-btn");

  if (btn) {
    btn.remove();
  }
};