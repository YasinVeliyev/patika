let ul = document.querySelector("section>ul");

ul.innerHTML = urunler.map((urun) => `<li>${urun.ad}</li>`).join("");

document.querySelector("button").addEventListener("click", () => {
    window.location.assign("/hakkimizda.html");
});
