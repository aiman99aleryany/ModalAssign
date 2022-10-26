// MVU  Model View Update
// 1. if localStorage exist

import * as store from "./store.js";

// HELPER FUNCTIONS

const qs = (s) => document.querySelector(s);

// MODEL
let model = store.get("model");
console.log(model);

// DOM
const modalDOM = qs(".section1");
const openModalDOM = qs(".showPop");

// UPDATE will change the model

// render will change the DOM html

const renderModal = () => {
  console.log(model);
  if (model.isModalOpen) {
    modalDOM.innerHTML = `
      <button id="closeModal">X</button>
      <p>jafklds;fjakls;fjasd;fjadkls;fj</p>
    `;

    const closeModalDOM = qs("#closeModal");
    closeModalDOM.addEventListener("click", (e) => {
      const newModal = { ...model, isModalOpen: false };
      model = store.set("model", newModal);

      renderModal();
    });
  } else {
    modalDOM.innerHTML = `<div class="wrapper1"></div>
    <button class="showPop">Show Pop</button>`;
    const newBtn = qs(".showPop");
    newBtn.addEventListener("click", (e) => {
      const newModel = { ...model, isModalOpen: true };
      model = store.set("model", newModel);
      renderModal();
    });
  }
};

// event
openModalDOM.addEventListener("click", (e) => {
  const newModel = { ...model, isModalOpen: true };
  model = store.set("model", newModel);

  renderModal();
});

store.init();
