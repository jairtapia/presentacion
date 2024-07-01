let Textjava = 'java';

function LoadbgJava() {
    let color = "#e9c804";
    let alert = document.createElement('div');
    alert.id = 'alert';
    document.documentElement.style.setProperty('--scrollbar-bar-color', color);
    let bg = document.getElementById('Background');
    bg.classList.add('bg');
    bg.classList.add('Java');
    bg.innerHTML = `<div class='section-bg-java'>
                        <div class="scroll" style="--d: 25; --y: 200;">
                            <div>
                                <span>Warning Java Projects  here - Java Projects  here - Java Projects  here</span>
                            </div>
                            <div>
                                <span>Warning Java Projects  here - Java Projects  here - Java Projects  here</span>
                            </div>
                        </div>
                        <div class="scroll" style="--d: -25; --y: 400;">
                            <div>
                                <span>Warning Java Projects  here - Java Projects  here - Java Projects  here</span>
                            </div>
                            <div>
                                <span>Warning Java Projects  here - Java Projects  here - Java Projects  here</span>
                            </div>
                        </div>
                        <div class="scroll" style="--d: 15; --y: 500;">
                            <div>
                                <span>Warning Java Projects here - Java Projects  here - Java Projects  here - Java Projects  here - Java Projects  here - //=${SecretCode}=//</span>
                            </div>
                            <div>
                                <span>Warning Java Projects here - Java Projects  here - Java Projects  here - Java Projects  here - Java Projects  here - //=${SecretCode}=//</span>
                            </div>
                        </div>
                        <div class="scroll" style="--d: -5; --y: 50;">
                            <div>
                                <span>Warning Java Projects  here - Java Projects  here - Java Projects  here</span>
                            </div>
                            <div>
                                <span>Warning Java Projects  here - Java Projects  here - Java Projects  here</span>
                            </div>
                        </div>
                    </div>`;
    bg.appendChild(alert);
}