const INIT_MODEL = {
  isModalOpen: false, // Boolean true or false or null
};

const set = (key, item) => {
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
    return get("model");
  } catch (e) {
    console.log(e.message);
  }
};

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e.message);
  }
};

const init = () => {
  const model = get("model");
  if (!model) set("model", INIT_MODEL);
};

export { set, get, init };
