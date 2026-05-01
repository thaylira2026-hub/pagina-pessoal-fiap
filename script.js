function toggleMenu() {
    const nav = document.querySelector('.navbar nav');
    const menuBtn = document.querySelector('.menu-toggle');
    
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        menuBtn.innerHTML = "✕"; 
    } else {
        menuBtn.innerHTML = "☰"; 
    }
}

function toggleAccordion(elementoClicado) {
    const card = elementoClicado.parentElement;
    const conteudo = card.querySelector('.accordion-content');

    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

window.onscroll = function() {
    const btnTopo = document.getElementById('btn-topo');
    if (btnTopo) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    }
}

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}