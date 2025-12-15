document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-btn");
  const div = document.getElementById("navbar");

  btn.addEventListener("click", () => {
    div.style.display = div.style.display === "block" ? "none" : "block";
  });

  // form mail system
  const form = document.getElementById("consultationForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("form_name").value,
      phone: document.getElementById("phone").value,
      product: document.getElementById("product").value,
    };

    try {
      const res = await fetch(
        "https://shivam-backend-1.onrender.com/api/send-consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // ✅ FIX
        }
      );

      const data = await res.json();
      alert(data.message);
      form.reset(); // clear form
    } catch (err) {
      alert("❌ Something went wrong. Please try again.");
      console.error(err);
    }
  });
});
