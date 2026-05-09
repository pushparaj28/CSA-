document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  function setError(input, message) {
    const group = input.closest(".input-group");
    const errorEl = group?.querySelector(".error-text");
    if (errorEl) errorEl.textContent = message;
    input.style.borderColor = message ? "#d83a4d" : "#ccdafd";
  }

  function validate() {
    let valid = true;
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const phone = form.querySelector("#phone");
    const course = form.querySelector("#course");
    const message = form.querySelector("#message");

    const nameValue = name?.value.trim() || "";
    const emailValue = email?.value.trim() || "";
    const phoneValue = phone?.value.trim() || "";
    const courseValue = course?.value.trim() || "";
    const msgValue = message?.value.trim() || "";

    if (name && nameValue.length < 3) {
      setError(name, "Please enter at least 3 characters.");
      valid = false;
    } else if (name) {
      setError(name, "");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(emailValue)) {
      setError(email, "Enter a valid email address.");
      valid = false;
    } else if (email) {
      setError(email, "");
    }

    const phonePattern = /^[6-9]\d{9}$/;
    if (phone && !phonePattern.test(phoneValue)) {
      setError(phone, "Enter a valid 10-digit Indian mobile number.");
      valid = false;
    } else if (phone) {
      setError(phone, "");
    }

    if (course && !courseValue) {
      setError(course, "Please select a course.");
      valid = false;
    } else if (course) {
      setError(course, "");
    }

    if (message && msgValue.length < 10) {
      setError(message, "Message must be at least 10 characters.");
      valid = false;
    } else if (message) {
      setError(message, "");
    }

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      if (status) {
        status.textContent = "Please fix the highlighted fields.";
        status.style.color = "#c7243a";
      }
      return;
    }
    form.reset();
    if (status) {
      status.textContent = "Thank you! Your enquiry has been submitted successfully.";
      status.style.color = "#0f8a41";
    }
  });
});
