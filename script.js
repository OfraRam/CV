fetch("cv.json")
  .then(res => res.json())
  .then(data => {
    document.querySelector("h1").innerText = data.name;
  });
