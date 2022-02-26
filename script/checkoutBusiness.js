 const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  import { Minifooter } from "../components/footer.js";

  let footerDiv = document.getElementById("footer_div");
  footerDiv.innerHTML = Minifooter();


  let formStepsNum = 0;

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
    });
  });

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
  }

  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let otp = document.getElementById("otp").value;
    if (otp == 1234) {
      let form = document.getElementById("checkout-form");
      form.style.display = "none";
      document.querySelector(".wait").style.display = "block";
      setTimeout(() => {
        let success_tik = document.getElementById("payment-success");
        success_tik.style.display = "flex";
        document.querySelector(".wait").style.display = "none";
      }, 5000);
    } else {
      alert("Wrong OTP , Please Enter Valid OTP");
    }
  });

  let done = document.getElementById("submit");
  //   done.addEventListener("click", (e) => {
  //       e.preventDefault()
  //     let success_tik = document.getElementById("payment-success");
  //     success_tik.style.display = "flex";
  //     let form = document.getElementById("checkout-form");
  //     form.style.display = "none";
  //   });

  let numOfUser = document.getElementById("no-of-user");
  numOfUser.addEventListener("keyup", () => {
    let count = numOfUser.value;
    let totalPriceDisplay = document.querySelectorAll("#total-price");
    let total = count * 319;
    totalPriceDisplay.forEach((el) => {
      el.innerHTML = `$${total}`;
    });
    let userCountDisplay = document.getElementById("user-count");
    userCountDisplay.innerHTML = `X${count}`;
  });

  