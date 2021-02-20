// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const input = document.querySelector("#input");

let cal = "";

const reset = (element) => {
  element.innerText = "";
  cal = "";
};

document.querySelector(".clear").addEventListener("click", () => {
  reset(input);
});

document.querySelectorAll(".number").forEach((e) => {
  e.addEventListener("click", () => {
    if (
      input.innerText.includes("Infinity") ||
      input.innerText.includes("SyntaxError")
    ) {
      input.innerText = "";
      cal = "";
    } else {
      if (input.innerText.length < 19) {
        input.innerText += e.innerText;
      }
    }
  });
});

document.querySelectorAll(".ope").forEach((e) => {
  e.addEventListener("click", () => {
    if (input.innerText) {
      cal = `${cal} ${input.innerText} ${e.innerText}`;
    } else if (cal.slice(-2).includes("*", "/", "-", "+")) {
      let deduplicationOpe = cal.slice(0, -1);
      deduplicationOpe += e.innerText;
      cal = deduplicationOpe;
    }
    input.innerText = "";
  });
});

document.querySelector(".result").addEventListener("click", () => {
  try {
    input.innerText = eval(cal + input.innerText);
  } catch (error) {
    if (error instanceof SyntaxError) {
      input.innerText = "SyntaxError!";
      return;
    }
  }
});
