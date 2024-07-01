
const position = document.documentElement;

position.addEventListener("mousemove", e => {
    position.style.setProperty('--x', e.clientX + 'px');
})
function Loadbg() {
    let color = "#0077bb";
    let othercolor = "#fec106"
    let bg = document.getElementById('Background');
    let alert = document.createElement('div');
    alert.id = 'alert';
    document.documentElement.style.setProperty('--scrollbar-bar-color', color);
    document.documentElement.style.setProperty('--scrollbar-track-color', othercolor);
    bg.classList.add('bg');
    bg.classList.add('Python');
    bg.innerHTML = `<div class='section-bg'>
                        <div class='text-bg'>
                            <h2 style="--i:0.5">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                </h2>
                            <h2 style="--i:1.5">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                            <h2 style="--i:2.5">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                            <h2 style="--i:0.25">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                            <h2 style="--i:1.25">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                            <h2 style="--i:0.75">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                            <h2 style="--i:4">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>//=${SecretCode}=//</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                            <h2 style="--i:2.80">
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                                <span>Python</span><span>Python</span><span>Python</span><span>Python</span>
                            </h2>
                        </div>
                    </div>`;
    bg.appendChild(alert);
}

function Unloadbg() {
    let bg = document.getElementById('Background');
    let alert = document.createElement('div');
    alert.id = 'alert';
    bg.classList.remove('Python');
    bg.innerHTML = '';
    bg.appendChild(alert);
}