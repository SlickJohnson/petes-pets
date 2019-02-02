if (document.querySelector("#new-pet")) {
  document.querySelector("#new-pet").addEventListener("submit", e => {
    e.preventDefault();

    let pet = {};
    const inputs = document.querySelectorAll(".form-control");
    for (const input of inputs) {
      pet[input.name] = input.value;
    }

    axios
      .post("/pets", pet)
      .then(function(response) {
        window.location.replace(`/pets/${response.data.pet_id}`);
      })
      .catch(function(error) {
        const alert = document.getElementById("alert");
        alert.classList.add("alert-warning");
        alert.textContent = "Oooooooops, s0me2ing wnet wroung. Plz tr1 agunm.";
        alert.style.display = "block";
      });
  });
}
