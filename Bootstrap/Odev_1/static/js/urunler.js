let row = document.querySelector(".row");

row.innerHTML = urunler
    .map(
        (urun) =>
            `<div class="col-12 col-sm-6 col-lg-4">
                <div class="urun card mb-2" >
                    <img src="${urun.img}" class="card-img-top" alt="${urun.name}">
                    <div class="card-body">
                        <h5 class="card-title">${urun.ad}</h5>
                        <div class="row">
                            <p class="card-text col-6 m-auto">${urun.qiymet} TL</p>
                            <a href="${urun.url} " class="col-4 m-auto btn btn-primary">Hakkinda</a>
                        </div>
                        
                    </div>
                </div>
            </div>`
    )
    .join("");
