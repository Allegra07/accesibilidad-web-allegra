

document.addEventListener('DOMContentLoaded', () => {
    const btnAccesible = document.querySelector('.btn-accesible');
    const modal = document.getElementById('modal-accesible');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const toggleBtn = document.getElementById('toggle');
    const panel = document.querySelector('.accesibilidad-panel');
    const tarjetas =document.querySelectorAll('.tarjeta.seleccionable');

    if (btnAccesible && modal && cerrarModal) {

    btnAccesible.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //Cerrar modal

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';

        }
    });

    //Cerrar accesible

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';

        }
    });

} else {
    console.error('No se encontró un error')
}

if (toggleBtn && panel) {
    panel.classList.add('closed');

    toggleBtn.addEventListener('click', () => {

        panel.classList.toggle('open');
        panel.classList.toggle('closed');
    });

        /*
        if (panel.classList.contains('closed')) {
            panel.classList.remove('closed');
            panel.classList.add('open');
        } else {
            panel.classList.remove('open');
            panel.classList.add('closed');*/

        }


        tarjetas.forEach(tarjeta => {
            const selector = tarjeta.querySelector('.selector');
            if (selector) {
                selector.addEventListener('click', (event) => {
                    event.stopPropagation();
                    tarjeta.classList.toggle('seleccionada');
                    const isSelected = tarjeta.classList.contains('seleccionada');
                    selector.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

            });
        }

    });

    /* Animación perfil Dislexia */

    const dislexiaBtn = document.getElementById('toggle-dislexia');

    dislexiaBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dislexia');
    });


    /* Animación perfil Visión Baja */

    document.getElementById("toggle-vision").addEventListener("click", function () {
        document.documentElement.classList.toggle("vision-baja");
      });




});
    
    


  