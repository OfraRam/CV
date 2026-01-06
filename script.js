fetch("cv.json")
  .then(response => response.json())
  .then(data => {
    console.log("CV data loaded:", data);

    document.getElementById("name").textContent = data.personal.name;
    document.getElementById("title").textContent = data.personal.title;
  })
  .catch(error => {
    console.error("Error loading CV data:", error);
  });
