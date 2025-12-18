var dom = {
  html: document.querySelector("html"),
  toogel_dark: document.getElementById("theme-toggle-button"),
  settings_toggle: document.querySelector("#settings-toggle"),
  settings_sidebar: document.querySelector("#settings-sidebar"),
  close_settings: document.getElementById("close-settings"),
  portfolio_filter_tabs: document.querySelectorAll(".portfolio-filter"),
  portfolio_items: document.querySelectorAll(".portfolio-item"),
  nav_link: document.querySelectorAll("nav a"),
  sections: document.querySelectorAll("section"),
  href_link: document.querySelectorAll("a [href]"),
  testimonial_card: document.querySelectorAll(".testimonial-card"),
  next_testimonial: document.getElementById("next-testimonial"),
  prev_testimonial: document.getElementById("prev-testimonial"),
  carousel_indicator: document.querySelectorAll(".carousel-indicator"),
  scroll_to_top: document.getElementById("scroll-to-top"),
  color: document.querySelectorAll(".color"),
  span: document.querySelectorAll("span"),
};
// scroll top button
window.addEventListener("scroll", () => {
  window.pageYOffset >= 1000
    ? dom.scroll_to_top.classList.remove("invisible")
    : dom.scroll_to_top.classList.add("invisible");
});
dom.scroll_to_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// show carsoul
var currentIndex = 0;
function getCount() {
  return window.innerWidth >= 768 ? 3 : 1;
}
function showCarsoul() {
  dom.testimonial_card.forEach((card, index) => {
    card.classList.remove("active");
    if (index >= currentIndex && index < currentIndex + getCount()) {
      card.classList.add("active");
    }
    awitindecator();
  });
}

dom.next_testimonial.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > dom.testimonial_card.length - getCount()) {
    currentIndex = 0;
  }
  console.log(currentIndex);
  showCarsoul();
});
dom.prev_testimonial.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = dom.testimonial_card.length - getCount();
  }
  showCarsoul();
});
dom.carousel_indicator.forEach((indecatore, index) => {
  indecatore.addEventListener("click", () => {
    currentIndex = index;
    showCarsoul();
  });
});
function awitindecator() {
  dom.carousel_indicator.forEach((indecatore, index) => {
    indecatore.classList.toggle("active", currentIndex === index);
  });
}

(function autoswap() {
  return setInterval(() => {
    currentIndex++;
    if (currentIndex > dom.testimonial_card.length - getCount()) {
      currentIndex = 0;
    }
    showCarsoul();
  }, 3000);
})();

//scroll spy
window.addEventListener("scroll", () => {
  let current_section = "";
  dom.sections.forEach((section) => {
    let start_section = section.offsetTop;
    if (pageYOffset >= start_section - 100) {
      current_section = section.getAttribute("id");
    }
    dom.nav_link.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current_section}`) {
        link.classList.add("active");
      }
    });
  });
});

dom.toogel_dark.addEventListener("click", () => {
  dom.html.classList.toggle("dark");
});
dom.settings_toggle.addEventListener("click", () => {
  dom.settings_sidebar.classList.toggle("translate-x-full");
});
dom.close_settings.addEventListener("click", () => {
  dom.settings_sidebar.classList.add("translate-x-full");
});
//nav tap task
dom.portfolio_filter_tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    dom.portfolio_filter_tabs.forEach((t) => t.classList.remove("active"));
    dom.portfolio_items.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    let target = tab.dataset.filter;
    console.log(target);
    if (target === "all") {
      dom.portfolio_items.forEach((item) => item.classList.add("active"));
    } else {
      document
        .querySelectorAll(`[data-category="${target}"]`)
        .forEach((item) => item.classList.add("active"));
    }
  });
});
window.addEventListener("load", () => {
  dom.portfolio_items.forEach((item) => item.classList.add("active"));

  showCarsoul();
});
//thems color change
dom.color.forEach((btn) => {
  let current_color = btn.dataset.color;
  console.log(current_color);

  btn.addEventListener("click", () => {
    dom.span.forEach((span) => {
      span.style.color = `${current_color}`;
    });
  });
});

dom.reset_settings.addEventListener("click", () => {
  dom.span.forEach((span) => {
    span.style.color = "#7163f2";
  });
});
