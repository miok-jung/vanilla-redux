import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  // modifier == reducer
  if (action.type === "ADD") {
    return count + 1;
    console.log("they are telling me to add one");
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });

countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
// redux -> countModifier -> myAction
