function setbg() {
    const Posx = Math.floor(Math.random() * 80) + 20;
    console.log(Posx);
    let bg = document.getElementById('Background');
    let BigCircle = document.createElement('div');
    let backCard = document.createElement('div');
    let alert = document.createElement('div');
    let bars = document.createElement('div');
    let SecreTCodeDiv = document.createElement('p');
    bars.className = 'center_div';
    alert.id = 'alert';
    BigCircle.classList.add('Internet');
    backCard.classList.add('BgCard');
    bars.innerHTML = `  <div class="data" style="--index-bar:1;"></div>
                        <div class="data" style="--index-bar:2;"></div>
                        <div class="data" style="--index-bar:3;"></div>
                        <div class="data" style="--index-bar:4;"></div>
                        <div class="data" style="--index-bar:5;"></div>
                        <div class="data" style="--index-bar:6;"></div>
                        <div class="data" style="--index-bar:7;"></div>
                        <div class="data" style="--index-bar:8;"></div>
                        <div class="data" style="--index-bar:9;"></div>
                        <div class="data" style="--index-bar:10;"></div>
                        <div class="data" style="--index-bar:11;"></div>
                        <div class="data" style="--index-bar:12;"></div>
                        <div class="data" style="--index-bar:13;"></div>
                        <div class="data" style="--index-bar:14;"></div>
                        <div class="data" style="--index-bar:15;"></div>
                        <div class="data" style="--index-bar:16;"></div>
                        <div class="data" style="--index-bar:17;"></div>
                        <div class="data" style="--index-bar:18;"></div>
                        <div class="data" style="--index-bar:19;"></div>
                        <div class="data" style="--index-bar:20;"></div>`;
    SecreTCodeDiv.innerHTML = `${SecretCode}`;
    SecreTCodeDiv.className = 'HideCode';
    SecreTCodeDiv.style.setProperty('--PosX', Posx+'%');
    bg.classList.add('bg');
    bg.classList.add('web');
    bg.appendChild(BigCircle);
    bg.appendChild(backCard);
    bg.appendChild(bars);
    bg.appendChild(alert);
    bg.appendChild(SecreTCodeDiv);
}

function Loadbgweb() {
    let color = "#007BFF";
    document.documentElement.style.setProperty('--scrollbar-bar-color', color);
    document.documentElement.style.setProperty('--bg-h', "395px");
    document.documentElement.style.setProperty('--bg-w', "690px");
    setbg();
}
function unloadBgWeb() {
    let bg = document.getElementById('Background');

    // Eliminar elementos creados
    let BigCircle = document.querySelector('.Internet');
    let backCard = document.querySelector('.BgCard');
    let bars = document.querySelector('.center_div');

    if (BigCircle) bg.removeChild(BigCircle);
    if (backCard) bg.removeChild(backCard);
    if (bars) bg.removeChild(bars);


    // Quitar las clases añadidas
    bg.classList.remove('bg');
    bg.classList.remove('web');

    // Restablecer las variables CSS
    document.documentElement.style.removeProperty('--scrollbar-bar-color');
    document.documentElement.style.removeProperty('--bg-h');
    document.documentElement.style.removeProperty('--bg-w');
}