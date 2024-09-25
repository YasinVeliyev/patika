/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

let update_form = document.querySelectorAll("form.modal-body");
update_form.forEach((form) => {
  form.addEventListener("submit", (event) => sendRequest(event, "PUT"));
});
function update(event) {
  let modal = event.target.parentElement.parentElement.parentElement;
  modal.children[0].classList.toggle("hidden");
  modal.children[1].classList.toggle("hidden");
}

let add_form = document.querySelector("form.addPortfolio");
let add_button = document.querySelector("form.addPortfolio>button");

add_form.addEventListener("submit", (event) => sendRequest(event, "POST"));

function sendRequest(event, method) {
  event.preventDefault();
  const formData = new FormData();
  let { name, description, client, category, formFile } = event.target;
  if (!formFile.files[0] && method !== "PUT") {
    formFile.classList.add("alert");
    formFile.classList.add("alert-danger");
  }
  if (checkContent([name, client, category, description]) && (formFile.files[0] || method === "PUT")) {
    formData.append("file", formFile.files[0]);
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("client", client.value);
    formData.append("category", category.value);
    fetch("http://localhost:6061/", {
      method,
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        document.querySelector("#addPortfolio .btn-close").click();
      })
      .catch(console.error);
  }
}

function checkContent(inputs) {
  return inputs
    .map((input) => {
      if (!input.value) {
        input.classList.add("alert");
        input.classList.add("alert-danger");
        return false;
      }
      return true;
    })
    .every((elem) => elem);
}
