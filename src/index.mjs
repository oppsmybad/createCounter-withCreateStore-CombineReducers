import { createStore } from "redux";

// reducer
const counter = (state = 0, action) => {
  // conditions
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return (state = 0);
  }

  return state;
};

const store = createStore(counter);

// actions
const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};

const reset = {
  type: "RESET",
};

// create btns
const count = document.createElement("div");
count.innerText = store.getState();
count.id = "count";
document.body.append(count);

const decBtn = document.createElement("button");
decBtn.innerText = "-";
decBtn.onclick = () => store.dispatch(decrement);
document.body.append(decBtn);

const incBtn = document.createElement("button");
incBtn.innerText = "+";
incBtn.onclick = () => store.dispatch(increment);
document.body.append(incBtn);

const resetBtn = document.createElement("button");
resetBtn.innerText = "reset";
resetBtn.onclick = () => store.dispatch(reset);
document.body.append(resetBtn);

const render = () => {
  document.getElementById("count").innerText = store.getState();
};

store.subscribe(render);
