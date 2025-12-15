document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-btn");
  const div = document.getElementById("navbar");

  btn.addEventListener("click", () => {
    if (div.style.display === "none" || div.style.display === "") {
      // If hidden, show it
      div.style.display = "block";
    } else {
      // If visible, hide it
      div.style.display = "none";
    }
  });
});


//form mail system 

document.getElementById("consultationForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("form_name").value,
    phone: document.getElementById("phone").value,
    product: document.getElementById("product").value,
  };

  try {
    const res = await fetch("/api/send-consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert("❌ Something went wrong. Please try again.");
  }

  // clear the form
    this.reset();
});
