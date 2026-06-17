/* Gaurav Rustogi — profile site · lightweight vanilla JS */
(function () {
  "use strict";

  // Dynamic footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form — async submit to Formspree, no page reload
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot: if the hidden field is filled, it's a bot — silently drop.
    var honey = form.querySelector('input[name="_gotcha"]');
    if (honey && honey.value) { return; }

    setStatus("", "");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        if (res.ok) {
          form.reset();
          setStatus("Thanks — your message has been sent. I'll get back to you.", "ok");
        } else {
          return res.json().then(function (data) {
            var msg =
              data && data.errors
                ? data.errors.map(function (x) { return x.message; }).join(", ")
                : "Something went wrong. Please try again or reach me on LinkedIn.";
            setStatus(msg, "err");
          });
        }
      })
      .catch(function () {
        setStatus("Network error. Please try again or reach me on LinkedIn.", "err");
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send message";
      });
  });

  function setStatus(text, kind) {
    if (!status) return;
    status.textContent = text;
    status.className = "form-status" + (kind ? " " + kind : "");
  }
})();

// Sidenav scroll spy — highlights the current section
(function () {
  var links = document.querySelectorAll('.sidenav a[href^="#"]');
  if (!links.length) return;

  var sections = Array.from(links).map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  function onScroll() {
    var scrollY = window.scrollY + window.innerHeight * 0.25;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.offsetTop <= scrollY) current = s;
    });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
