document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('buscar');
    const sistemas = document.querySelectorAll('.tarjetas, article'); // Seleccionar artículos con la clase 'sistemas'
    const resultadosMensaje = document.createElement('p'); // Contenedor para mensajes

    // Estilo básico para el mensaje
    resultadosMensaje.style.textAlign = 'center';
    resultadosMensaje.style.fontWeight = 'bold';
    resultadosMensaje.style.marginTop = '20px';

    // Agregar mensaje al DOM
    const destacadosSection = document.getElementById('destacados');
    destacadosSection.parentNode.insertBefore(resultadosMensaje, destacadosSection.nextSibling);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        let matches = 0; // Contador de coincidencias

        sistemas.forEach(article => {
            const title = article.querySelector('h4, h5').textContent.toLowerCase();
            if (title.includes(query)) {
                article.style.display = ''; // Muestra el artículo
                matches++;
            } else {
                article.style.display = 'none'; // Oculta el artículo
            }
        });

        // Actualizar el mensaje según el número de coincidencias
        if (matches === 0) {
            resultadosMensaje.textContent = 'No se encontró ningún sistema operativo en esta página.';
        } else if (matches === 1) {
            resultadosMensaje.textContent = `Se encontró ${matches} sistema operativo.`;
        } else {
            resultadosMensaje.textContent = `Se encontraron ${matches} sistemas operativos.`;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let modals = document.querySelectorAll(".modal");

    modals.forEach((modal) => {
        modal.addEventListener("hidden.bs.modal", function () {
            let videos = modal.querySelectorAll("video");
            videos.forEach((video) => {
                video.pause();  // Pausa el video cuando el modal se cierra
                video.currentTime = 0; // Opcional: reinicia el video
            });
        });
    });
});