

function LoadbAndroid() {
    console.log('encontraste el codigo felicidades: '+SecretCode);
    let color = "#007BFF";
    document.documentElement.style.setProperty('--scrollbar-bar-color', color);
    let bg = document.getElementById('Background');
    let alert = document.createElement('div');
    alert.id = 'alert';
    bg.classList.add('bg');
    bg.classList.add('Android');
    bg.innerHTML = `<div class="box">
                        <div class="group">

                        </div>
                    </div>`;

    const group = document.querySelector('.group');
    for (let i = 1; i < 20; i++) {
        let containerId = `IconContainer${i}`
        const container = document.createElement('div');
        container.classList.add('iconContainer');
        container.id = containerId;
        group.appendChild(container);
        loadIcons(containerId);
    }
    bg.appendChild(alert);
}

function loadIcons(containerid) {
    let iconContainer = document.getElementById(containerid);
    const languageIcons = [
        'fa-html5',
        'fa-css3-alt',
        'fa-js',
        'fa-php',
        'fa-python',
        'fa-java',
        'fa-node-js',
        'fa-react',
        'fa-angular',
        'fa-vuejs',
        'fa-swift',
        'fa-git',
        'fa-github',
        'fa-linux',
        'fa-docker',
    ];
    for (let i = 0; i < 50; i++) {
        const icon = document.createElement('i');
        icon.className = "fab " + randomIcon(languageIcons)+" icon";
        iconContainer.appendChild(icon);
    }
}

function randomIcon(values) {
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}