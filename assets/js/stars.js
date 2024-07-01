let addedContent = null;
let MenucurrentCardId = "About-Card";
let SbMenucurrentCardId = "Card-Python";
let currentbg = null;
let currentsectionbg = null;
let SecretCode;
let isOpenImage = false;
let Rewarded = false;
let RewardOpen = false;
let firstTry = true;
let buttonExit = document.createElement('div');
let buttontryAgain = document.createElement('div');
function createStar() {
    const bgStars = document.getElementById('Background');
    if (bgStars.classList.contains('stars')) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * (window.innerHeight - 400) + 'px';
        star.style.left = Math.random() * (window.innerWidth / 2) + 'px';
        document.querySelector('.stars').appendChild(star);
        setTimeout(() => {
            star.remove();
        }, 5000);
    }
}

function generarCodigoAleatorio(longitud, incluirNumeros = true, incluirMayusculas = true, incluirMinusculas = true) {
    const numeros = '0123456789';
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';

    let caracteres = '';
    if (incluirNumeros) caracteres += numeros;
    if (incluirMayusculas) caracteres += letrasMayusculas;
    if (incluirMinusculas) caracteres += letrasMinusculas;

    if (caracteres.length === 0) {
        throw new Error('Debe incluir al menos un tipo de carácter para generar el código.');
    }

    let codigoAleatorio = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigoAleatorio += caracteres.charAt(indiceAleatorio);
    }

    return codigoAleatorio;
}

setInterval(createStar, 700);

function ClearCards(isFirstTime, option) {
    let DefaultCard;
    let allCards;
    if (option === 'Menu') {
        DefaultCard = "About-Card";
        allCards = document.querySelectorAll('.Card');
    }
    else {
        DefaultCard = "Card-Python";
        allCards = document.querySelectorAll('.card-proyects');
    }
    if (isFirstTime) {
        allCards.forEach(card => {
            if (card.id !== DefaultCard) {
                card.classList.remove('visible');
                card.classList.add('Not-visible');
            };

        });
    } else {
        allCards.forEach(card => {
            if (card.classList.contains('section-fade-out')) {
                card.classList.remove('section-fade-out');
            }
            if (card.classList.contains('section-fade-in')) {
                card.classList.remove('section-fade-in');
            }
            card.classList.remove('visible');
            card.classList.add('Not-visible');
        });
    }

}

function ChangeState(Element, State, Context) {
    if (Context === 'Menu') {
        Element.classList.toggle('l-active', State);
        Element.classList.toggle('l-inactive', !State);
    } else if (Context === 'Sub-Menu') {
        Element.classList.toggle('sl-active', State);
        Element.classList.toggle('sl-inactive', !State);
    }
}

function Clearlabels(isFirstTime, option) {
    let Defaultlabel;
    let alllabels;
    if (option === 'Menu') {
        Defaultlabel = "label-aboutme";
        alllabels = document.querySelectorAll('.Menu-Option');
    }
    else {
        Defaultlabel = "option-python";
        alllabels = document.querySelectorAll('.submenu-option');
    }
    if (isFirstTime) {
        alllabels.forEach(label => {
            if (label.id !== Defaultlabel) {
                ChangeState(label, false, option);
            }
            else {
                ChangeState(label, true, option);
            }
        });
    } else {
        alllabels.forEach(label => {
            ChangeState(label, false, option);
        });
    }

}

function resetClasses(element, classes) {
    element.className = '';
    classes.forEach(cls => element.classList.add(cls));
}

function toggleVisibility(id, label) {
    const fadeDuration = 150;  // Duración de la animación en milisegundos (ajusta según tus necesidades)
    let bgStars = document.getElementById('Background');
    let Icon = document.getElementById('Icon');
    let CurrentSection = document.getElementById(MenucurrentCardId);
    currentsectionbg = CurrentSection.id;
    if (RewardOpen) CloseAward();
    resetClasses(Icon, ['icon-logo-Default', 'icon-language']);
    resetClasses(bgStars, ['bg', 'stars']);
    Unloadbg();
    SetDetailsColor(label);
    if (MenucurrentCardId !== id) {
        MenucurrentCardId = id;
    }
    if (CurrentSection && CurrentSection.classList.contains('section-fade-in')) {
        CurrentSection.classList.remove('section-fade-in');
    }
    if (CurrentSection) {
        CurrentSection.classList.add('section-fade-out');
    }
    let menuOptions = document.querySelectorAll('.Menu-Option');
    // Añadir la clase de salto a todas las opciones del menú, excepto la clickeada
    menuOptions.forEach(function (option, index) {
        if (option.id !== label) {
            option.style.setProperty('--index-option', index + 1); // Establecer el índice
            option.classList.add('jump');
        }
    });
    // Quitar la clase de salto después de la animación
    setTimeout(function () {
        menuOptions.forEach(function (option) {
            option.classList.remove('jump');
        });
    }, 1500);
    setTimeout(() => {
        ClearCards(false, 'Menu');
        Clearlabels(false, 'Menu');
        if (CurrentSection) {
            CurrentSection.classList.add('Not-visible');
            CurrentSection.classList.remove('visible');
        }
        const element = document.getElementById(id);
        const namelbl = document.getElementById(label);
        element.classList.remove('Not-visible');
        element.classList.add('visible');
        element.classList.add('section-fade-in');
        if (id === "Projects-Card") {
            changeBg('Python');
        }
        ChangeState(namelbl, true, 'Menu');
    }, fadeDuration);
}

function SetDetailsColor(name) {
    switch (name) {
        case 'label-aboutme':
            SetColors('#dc143c');
            break;
        case 'label-skills':
            SetColors('#2C7EF8');
            break;
        case 'label-projects':
            SetColors('#20b2aa');
            break;
        case 'label-contact':
            SetColors('#7b68ee');
            break;
        case 'label-Extra':
            SetColors('#D4AC0D');
            break;
        default:
            SetColors('#ffffff');
    };
}

function SetColors(color) {
    document.documentElement.style.setProperty('--primary-color', color);
}

function selectCardSubmenu(id, label, language) {
    const fadeDuration = 150;
    let currentSubCard = document.getElementById(SbMenucurrentCardId);
    currentbg = currentSubCard.id;
    const subcard = document.getElementById(id);
    const NameLbl = document.getElementById(label);
    if (SbMenucurrentCardId !== id) {
        SbMenucurrentCardId = id;
    }
    if (currentSubCard && currentSubCard.classList.contains('section-fade-in')) {
        currentSubCard.classList.remove('section-fade-in');
    }
    if (currentSubCard) {
        currentSubCard.classList.add('section-fade-out');
    }
    setTimeout(() => {
        Clearlabels(false, 'Sub-Menu');
        ClearCards(false, 'Sub-Menu');
        if (currentSubCard) {
            currentSubCard.classList.add('Not-visible');
            currentSubCard.classList.remove('visible');
        }
        subcard.classList.remove('Not-visible');
        subcard.classList.add('visible');
        subcard.classList.add('section-fade-in');
        ChangeState(NameLbl, true, 'Sub-Menu');
        changeBg(language);
    }, fadeDuration);
}

function LoadProjects() {
    let PythonSection = document.getElementById('Python');
    let WebSection = document.getElementById('Web');
    let JavaSection = document.getElementById('Java');
    let AndroidSection = document.getElementById('Android');
    const categories = Object.keys(ProyectsList.proyects);
    categories.forEach(category => {
        switch (category) {
            case 'python':
                addProjectsToSection(PythonSection, ProyectsList.proyects[category]);
                break;
            case 'Web':
                addProjectsToSection(WebSection, ProyectsList.proyects[category]);
                break;
            case 'Java':
                addProjectsToSection(JavaSection, ProyectsList.proyects[category]);
                break;
            case 'Android':
                addProjectsToSection(AndroidSection, ProyectsList.proyects[category]);
                break;
        }
    });

}
function addProjectsToSection(section, projects) {
    if (!section) {
        console.error('Sección no definida');
        return;
    }
    if (!projects) {
        console.error('proyectos no definidos');
        return;
    }
    let proyectos = document.createElement('div');
    proyectos.classList.add('proyects');
    let currentLine;
    projects.forEach((project, index) => {
        if (index % 4 === 0) {
            currentLine = document.createElement('div');
            currentLine.classList.add('proyect-line');
            proyectos.appendChild(currentLine);
        }

        let card = createProjectCard(project, section);
        if (currentLine) {
            currentLine.appendChild(card);
        }
    });

    section.appendChild(proyectos);
}

function createProjectCard(project, language) {
    let Tarjeta = document.createElement('div');
    Tarjeta.classList.add('Proyect-card');
    Tarjeta.style.backgroundImage = `url(${project.Images.Card})`;
    Tarjeta.innerHTML = `
        <p>${project.Name}</p>
        <button class="cssbuttons-io" onclick="viewProject('${project.id}')">
            <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                        fill="currentColor"></path>
                </svg>
                Ver más
            </span>
        </button>
    `;
    return Tarjeta;
}

function viewProject(projectId) {
    const project = findProjectById(projectId);
    if (project) {
        FlipBox(project);
    } else {
        console.error('Project not found.');
    }
}

function findProjectById(projectId) {
    for (const category in ProyectsList.proyects) {
        for (const project of ProyectsList.proyects[category]) {
            if (project.id === projectId) {
                return project;
            }
        }
    }
    return null;
}

function FlipBox(project) {
    let box = document.getElementById('BoxContainer');
    let fronside = document.getElementById('front');
    let backside = document.getElementById('back');
    box.classList.add('flip');
    box.classList.remove('unflip');
    fronside.classList.remove('Content');
    fronside.classList.add('hidden');
    backside.classList.remove('hidden');
    chargeProject(project);
}

function chargeProject(project) {
    let Container = document.getElementById('content-project-item');
    let Header = document.getElementById('header-project');
    let Content = document.createElement('div');
    Header.innerHTML = `<h1>${project.id}</h1>
                        <button class="rollback-button exit" onclick="unflip('${project}')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 6L18 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>`;
    Content.innerHTML = `<div class="tittle-container">
                            <div class="Tittle-project">
                                <img class="icon-project" src="${project.Images.Card}" alt="MDN"/>
                                <div>
                                    <h2>${project.Name}</h2>
                                    <a class="button-repository"  href="${project.url}" target="_blank">ver repositorio</a>
                                </div>
                            </div>
                            </div>
                            <div class="carruselContainer">
                                <h3>capturas de pantalla</h3>
                                <div id="images-proyect" class="carrusel">
                                    
                                </div>
                            </div>
                            <div class="Info">
                                <div>
                                    <h3>Detalles</h3>
                                    <p>${project.Details}</p>
                                </div>
                                <div>
                                    <h3>Detalles Tecnicos</h3>
                                    <p>${project.Doc}</p>
                                </div>
                            </div>`;
    Container.style.backgroundColor = project['bg-color'];
    document.documentElement.style.setProperty('--scrollbar-track-color', project['bg-color']);
    document.documentElement.style.setProperty('--scrollbar-bar-color', project['Scroll-bar-color']);
    document.documentElement.style.setProperty('--scrollbar-bar-color-hover', project['Scroll-bar-color-hover']);
    document.documentElement.style.setProperty('--color-header', project['header-color']);
    document.documentElement.style.setProperty('--Img-w', project['img-width']);
    document.documentElement.style.setProperty('--Img-h', project['img-height']);
    document.documentElement.style.setProperty('--bg-h', "540px");
    document.documentElement.style.setProperty('--bg-w', "840px");
    Container.appendChild(Header);
    Container.appendChild(Content);
    let carrusel = document.getElementById('images-proyect');
    chargeImages(carrusel, project);
    addedContent = Content;
}

function chargeImages(container, project) {
    container.innerHTML = '';
    project.Images.usos.forEach((usoImage, index) => {
        if (usoImage) { // Verificar si la imagen existe
            const imgDiv = document.createElement('div');
            imgDiv.className = 'Card-Use';
            const imgElement = document.createElement('img');
            let BottonExpand = document.createElement('div');
            BottonExpand.innerHTML = `<button class="Expand-button" onclick="ExpandImage('${usoImage}')">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="expand"><path fill="none" d="M0 0h24v24H0Z"></path><path fill="#525863" d="M21.6 4.2v6.3a.9.9 0 1 1-1.8 0V5.9l-9.051 9.048a1.202 1.202 0 0 1-1.7-1.7L18.1 4.2h-4.6a.9.9 0 0 1 0-1.8h6.3a1.805 1.805 0 0 1 1.8 1.8Zm-.9 10.5a.9.9 0 0 0-.9.9v4.2H4.2V4.2h4.2a.9.9 0 1 0 0-1.8H4.2a1.805 1.805 0 0 0-1.8 1.8v15.6a1.805 1.805 0 0 0 1.8 1.8h15.6a1.805 1.805 0 0 0 1.8-1.8v-4.2a.9.9 0 0 0-.9-.9Z"></path></svg>
                                        </button>`;
            imgElement.id = index;
            imgElement.className = 'image-use';
            imgElement.src = usoImage;
            imgElement.alt = `Uso Image ${index + 1}`;
            imgDiv.appendChild(imgElement);
            imgDiv.appendChild(BottonExpand);
            container.appendChild(imgDiv);
        }
    });
}

function ExpandImage(route) {
    isOpenImage = true;
    let contentContainer = document.createElement('div');
    let ImageExpanded = document.createElement('div');
    let btnNext = document.createElement('div');
    ImageExpanded.id = 'imagenc';
    contentContainer.className = 'miimagen';
    let imagenExpandedsrc = document.createElement('img');
    let parent = document.getElementById('content-project-item');
    let back = document.getElementById('back');
    back.classList.add('no-scroll');
    let scrollY = back.scrollTop;
    scrollY = scrollY + 20;
    document.documentElement.style.setProperty('--moved', scrollY + 'px');
    let Bottonminimize = document.createElement('div');
    Bottonminimize.innerHTML = `<button class="Expand-button" onclick="Minimize()">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                        </button>`;
    btnNext.innerHTML = `<svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
                            </path>
                        </svg>`;
    imagenExpandedsrc.src = route;
    ImageExpanded.className = 'Container-Expanded-image';
    imagenExpandedsrc.className = 'Content-Expanded-image-content';
    ImageExpanded.appendChild(imagenExpandedsrc);
    ImageExpanded.appendChild(Bottonminimize);
    ImageExpanded.appendChild(btnNext);
    contentContainer.appendChild(ImageExpanded);
    parent.appendChild(contentContainer);
    setTimeout(() => {
        ImageExpanded.classList.add('visible');
    }, 100);
}

function Minimize() {
    isOpenImage = false;
    let parent = document.querySelectorAll('.miimagen');
    let back = document.getElementById('back');
    back.classList.remove('no-scroll');
    let ImageExpanded = document.getElementById('imagenc');
    if (ImageExpanded) {
        ImageExpanded.classList.remove('visible');
        // Eliminar todos los elementos con clase '.miimagen' después de otro retraso
        setTimeout(() => {
            parent.forEach(cosa => {
                cosa.remove();
            });
        }, 1600); // Espera adicional después de quitar la clase 'visible'
        // Espera inicial antes de quitar la clase 'visible'
    } else {
        parent.forEach(cosa => {
            cosa.remove();
        });
    }
}

function unflip() {
    if (!isOpenImage) {
        let box = document.getElementById('BoxContainer');
        let fronside = document.getElementById('front');
        let backside = document.getElementById('back');
        box.classList.remove('flip');
        box.classList.add('unflip');
        fronside.classList.add('Content');
        fronside.classList.remove('hidden');
        backside.classList.add('hidden');
        if (addedContent) {
            addedContent.remove();
            addedContent = null;
        }
        document.documentElement.style.setProperty('--bg-h', "395px");
        document.documentElement.style.setProperty('--bg-w', "690px");
    }
    else {
        Minimize();
        unflip();
    }
}

function changeBg(language) {
    const bgStars = document.getElementById('Background');
    let Icon = document.getElementById('Icon');
    let ClassIcon = 'icon-logo-' + language;
    while (Icon.classList.length > 0) {
        Icon.classList.remove(Icon.classList.item(0));
    }
    while (bgStars.classList.length > 0) {
        bgStars.classList.remove(bgStars.classList.item(0));
    }
    Unloadbg();
    loadbg(language);
    Icon.classList.add('icon-language');
    Icon.classList.add(ClassIcon);
}

function loadbg(topic) {
    const bgStars = document.getElementById('Background');
    switch (topic) {
        case 'Python':
            Loadbg();
            break;
        case 'Web':
            Loadbgweb();
            break;
        case 'Java':
            LoadbgJava();
            break;
        case 'Android':
            LoadbAndroid();
            break;
        default:
            bgStars.classList.add('bg');
            bgStars.classList.add(language);
    };
}

function CreateAlert(Color, Msg, position, ColorTxt, context) {
    let bg = document.getElementById('alert');
    document.documentElement.style.setProperty('--position-x', position);
    document.documentElement.style.setProperty('--bg-alert', Color);
    document.documentElement.style.setProperty('--text-alert', ColorTxt);
    if (context === 'mensaje' || context === 'texto') {
        bg.innerHTML = `<div class="alert">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    <strong>${context}: ${Msg}</strong></div>`;
    } else {
        bg.innerHTML = `<div class="alert">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    <strong>${context}: ${Msg}</strong> ha sido copiado al portapapeles.</div>`;
    }
}

function copyToClipboard(texto) {
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    if (texto === SecretCode) {
        CreateAlert('green', texto, 'auto', 'white', 'codigo');
    }
    else if (texto === 'jair.tapia.dev@outlook.com') {
        CreateAlert('#fece00', texto, '30%', '#010101', 'correo');
    }
    else {
        CreateAlert('red', texto, 'auto', '#fff', 'texto');
    }
}

function TryCode() {
    let colorvalid = '#09b917';
    let colorinvalid = '#aa0c0c';
    let bgcolorvalid = '#c4e0c6c7';
    let bgcolorinvalid = '#eeadadc7';
    const CodigoField = document.getElementById('Codigo');
    let Award = document.getElementById('CardAward');
    let codigoTxt = CodigoField.value;
    if (codigoTxt.toLowerCase() === SecretCode.toLowerCase()) {
        if (!Rewarded) {
            if (RewardOpen) { CloseAward() };
            if (firstTry) {
                firstTry = false;
                CreateAlert('#fece00', 'el minijuego aun no esta listo pero aqui hay una cancion.', 'auto', '#010101', 'mensaje');
            }
            document.documentElement.style.setProperty('--fieldcolor', colorvalid);
            document.documentElement.style.setProperty('--fieldbgcolor', bgcolorvalid);
            getAward();

        } else {
            if (RewardOpen) { CloseAward() };
            CreateAlert('red', 'ya no hay mas canciones para ti 😥', 'auto', '#fff', 'mensaje');
        }
    } else {
        document.documentElement.style.setProperty('--fieldcolor', colorinvalid);
        document.documentElement.style.setProperty('--fieldbgcolor', bgcolorinvalid);
    }

}

function getAward() {
    Rewarded = true;
    RewardOpen = true;
    let ContainerS = document.createElement('div');
    let ContentS = document.createElement('div');
    buttonExit.innerHTML = `<button class="rollback-button exit" onclick="CloseAward()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 6L18 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>`;
    buttontryAgain.innerHTML = `<button class="button-play tryagain" onclick="changeSong()">
                                        cambiar cancion
                                </button>`;
    ContentS.id = 'Song';
    let song;
    let box = document.getElementById('BoxContainer');
    song = GetRandomSong();
    SetSongContent(ContentS, song);
    ContainerS.className = 'ContainerSong';
    ContainerS.id = 'CardAward';
    box.appendChild(ContainerS);
    SetSong(ContentS, buttonExit, buttontryAgain);
    setTimeout(() => {
        ContainerS.classList.add('visible');
    }, 100);
}
function SetSong(contentS, Exit, GetNew) {
    SetContentCardSong(contentS);
    SetContentCardSong(Exit);
    SetContentCardSong(GetNew);
}

function SetContentCardSong(content) {
    let ContainerS = document.getElementById('CardAward');
    ContainerS.appendChild(content);
}

function changeSong() {
    let song;
    let ContentS = document.getElementById('Song');
    ContentS.innerHTML = '';
    song = GetRandomSong();
    SetSongContent(ContentS, song);
    SetSong(ContentS, buttonExit, buttontryAgain);
}

function CloseAward() {
    RewardOpen = false;
    let Parent = document.getElementById('BoxContainer');
    let Award = document.getElementById('CardAward');
    if (Award !== null) {
        Award.classList.remove('visible');
        setTimeout(() => {
            if (Award) Parent.removeChild(Award);
        }, 1600);
    }
}

function TryAgain() {
    Rewarded = false;
    CloseAward();
}
function GetRandomSong() {
    let index = Math.floor(Math.random() * SongList.List.length);
    return SongList.List[index];
}

function SetSongContent(ContentSong, Song) {
    ContentSong.innerHTML = `<p>${Song.nombre}</p>
                            <a href="${Song.url}" target="_blank">
                                <img class="songimg" src="${Song.img}" alt="caratula"/>
                                <img class="songcode" src="${Song.code}" alt="code"/>
                            </a>`;
}
function getCode() {
    return SecretCode;
}

document.addEventListener('DOMContentLoaded', (event) => {
    SecretCode = generarCodigoAleatorio(8);
    ClearCards(true, 'Menu');
    Clearlabels(true, 'Menu');
    Clearlabels(true, 'Sub-Menu');
    ClearCards(true, 'Sub-Menu');
    SetColors('#F82C2C');
    LoadProjects();
    document.getElementById('Codigo').addEventListener('input', function () {
        document.documentElement.style.setProperty('--fieldcolor', '#111');
        document.documentElement.style.setProperty('--fieldbgcolor', '#f1f1f1');
    });
    document.documentElement.style.setProperty('--fieldcolor', '#111');
    document.documentElement.style.setProperty('--fieldbgcolor', '#f1f1f1');
});


