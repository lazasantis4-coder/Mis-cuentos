const baseDatos = { /* Mantén tu base de datos tal cual la tienes */ };

function renderizarBloque(nombreBloque) {
    const contenedor = document.getElementById('video-list-container');
    contenedor.innerHTML = ''; 

    baseDatos[nombreBloque].forEach((video, index) => {
        // 1. Crear el contenedor del video
        const div = document.createElement('div');
        div.className = 'video-item';
        // Ocultar controles de YouTube con modestbranding
        div.innerHTML = `
            <h3>${video.titulo}</h3>
            <iframe src="https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
            <p><strong>Enseignement :</strong> ${video.ensenanza}</p>
        `;
        contenedor.appendChild(div);

        // 2. Insertar anuncio cada 4 videos (después de insertar el video)
        if ((index + 1) % 4 === 0) {
            const adDiv = document.createElement('div');
            adDiv.className = 'adsense-slot';
            adDiv.innerHTML = 'Annonce Interstitielle (Adsterra)';
            contenedor.appendChild(adDiv);
        }
    });
}