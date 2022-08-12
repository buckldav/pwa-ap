function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = data.get("answer1");

  if (value === "24 mph") {
    alert("You are worthy of the kingdom");
  } else {
    alert("Wrong");
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
