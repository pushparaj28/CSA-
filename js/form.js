document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    // Disable the button to prevent multiple clicks
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    if (status) {
      status.textContent = "Sending... Please wait.";
      status.style.color = "#3b82f6";
    }

    const data = new FormData(event.target);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        if (status) {
          status.textContent = "✅ Success! Your message has been sent.";
          status.style.color = "#059669";
        }
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          if (status) {
            status.textContent = result.errors.map(error => error.message).join(", ");
            status.style.color = "#dc2626";
          }
        } else {
          if (status) {
            status.textContent = "❌ Oops! Something went wrong. Check your Formspree ID.";
            status.style.color = "#dc2626";
          }
        }
      }
    } catch (error) {
      console.error("Form error:", error);
      if (status) {
        status.textContent = "❌ Network error. Please check your connection.";
        status.style.color = "#dc2626";
      }
    } finally {
      // Re-enable the button after 2 seconds to allow retries if it failed
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
      }, 2000);
    }
  });
});
