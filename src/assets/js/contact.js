function printContactSection() {
  return `
    <div class="contact-section w-75 mx-auto">
      <h2 class="text-center mb-2">
        <i class="fas fa-paper-plane me-2"></i>Get In Touch
      </h2>
      <p class="text-center mb-5" style="color: rgba(255, 255, 255, 0.7);">
        We'd love to hear from you! Fill out the form below.
      </p>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="position-relative">
            <i class="fas fa-user position-absolute" style="left: 15px; top: 50%; transform: translateY(-50%); color: #d4af37;"></i>
            <input id="nameInput" type="text" class="form-control ps-5" placeholder="Enter Your Name">
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-circle me-1"></i>Special characters and numbers not allowed
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-relative">
            <i class="fas fa-envelope position-absolute" style="left: 15px; top: 50%; transform: translateY(-50%); color: #d4af37;"></i>
            <input id="emailInput" type="email" class="form-control ps-5" placeholder="Enter Your Email">
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-circle me-1"></i>Email not valid *example@yyy.zzz
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-relative">
            <i class="fas fa-phone position-absolute" style="left: 15px; top: 50%; transform: translateY(-50%); color: #d4af37;"></i>
            <input id="phoneInput" type="text" class="form-control ps-5" placeholder="Enter Your Phone">
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-circle me-1"></i>Enter valid Phone Number
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-relative">
            <i class="fas fa-birthday-cake position-absolute" style="left: 15px; top: 50%; transform: translateY(-50%); color: #d4af37;"></i>
            <input id="ageInput" type="number" class="form-control ps-5" placeholder="Enter Your Age">
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-circle me-1"></i>Enter valid age
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-relative">
            <i class="fas fa-lock position-absolute" style="left: 15px; top: 50%; transform: translateY(-50%); color: #d4af37;"></i>
            <input id="passwordInput" type="password" class="form-control ps-5" placeholder="Enter Your Password">
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-circle me-1"></i>Minimum 8 chars, at least 1 letter & 1 number
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-relative">
            <i class="fas fa-lock position-absolute" style="left: 15px; top: 50%; transform: translateY(-50%); color: #d4af37;"></i>
            <input id="repasswordInput" type="password" class="form-control ps-5" placeholder="Confirm Password">
            <div class="invalid-feedback">
              <i class="fas fa-exclamation-circle me-1"></i>Passwords not match
            </div>
          </div>
        </div>
      </div>

      <button id="submitBtn" class="btn btn-outline-danger mt-5 d-block mx-auto px-5" disabled>
        <i class="fas fa-paper-plane me-2"></i>Submit Message
      </button>
    </div>
  `;
}




function displayContactSection() {
  let container = document.querySelector(".myCards");
  container.innerHTML = printContactSection();

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const ageInput = document.getElementById("ageInput");
  const passwordInput = document.getElementById("passwordInput");
  const repasswordInput = document.getElementById("repasswordInput");
  const submitBtn = document.getElementById("submitBtn");

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
  const ageRegex = /^([1-9][0-9]?|100)$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function validate(input, regex) {
    if (regex.test(input.value)) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
    }
  }

  function checkSubmitEnabled() {
    const isNameValid = nameInput.classList.contains("is-valid");
    const isEmailValid = emailInput.classList.contains("is-valid");
    const isPhoneValid = phoneInput.classList.contains("is-valid");
    const isAgeValid = ageInput.classList.contains("is-valid");
    const isPassValid = passwordInput.classList.contains("is-valid");
    const isRepassValid = repasswordInput.classList.contains("is-valid");

    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid && isAgeValid && isPassValid && isRepassValid);
  }

  nameInput.addEventListener("input", () => {
    validate(nameInput, nameRegex);
    checkSubmitEnabled();
  });

  emailInput.addEventListener("input", () => {
    validate(emailInput, emailRegex);
    checkSubmitEnabled();
  });

  phoneInput.addEventListener("input", () => {
    validate(phoneInput, phoneRegex);
    checkSubmitEnabled();
  });

  ageInput.addEventListener("input", () => {
    validate(ageInput, ageRegex);
    checkSubmitEnabled();
  });

  passwordInput.addEventListener("input", () => {
    validate(passwordInput, passRegex);
    checkSubmitEnabled();
  });

  repasswordInput.addEventListener("input", () => {
    if (repasswordInput.value === passwordInput.value && repasswordInput.value !== "") {
      repasswordInput.classList.add("is-valid");
      repasswordInput.classList.remove("is-invalid");
    } else {
      repasswordInput.classList.add("is-invalid");
      repasswordInput.classList.remove("is-valid");
    }
    checkSubmitEnabled();
  });
}

export { displayContactSection };