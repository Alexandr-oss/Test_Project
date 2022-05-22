"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const sertificat = document.querySelector(".sertification-beauty__text"),
    sertificatInfo = sertificat.querySelectorAll(".sertification-beauty__item"),
    sertficatNum = sertificat.querySelector(
      ".sertification-beauty__text strong"
    );
  sertificat.addEventListener("mouseover", (event) => {
    event.preventDefault();

    sertificatInfo.classList.add("bigText");
  });
  sertificat.addEventListener("mouseout", () => {
    sertificatInfo.classList.remove("bigText");
  });
  const createSertificatItem = () => {};
});
