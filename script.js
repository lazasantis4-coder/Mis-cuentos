const baseDatos = {
    bloc1: [
        { id: "XYsWJGhOsfY", titulo: "Le Petit Chaperon Rouge", ensenanza: "Écouter les conseils de nos parents nous garde en sécurité." },
        { id: "Q1F4XVCsR7g", titulo: "Les Trois Petits Cochons", ensenanza: "Le travail acharné et la patience portent leurs fruits." },
        { id: "i54XP3zLtdM", titulo: "Hansel et Gretel", ensenanza: "L'union familiale nous aide à surmonter les épreuves." },
        { id: "zfBrVHsMK3c", titulo: "Le Lièvre et la Tortue", ensenanza: "La persévérance gagne toujours sur la vitesse." },
        { id: "8W7YwgDJF5Y", titulo: "Le loup et les 7 chevaux", ensenanza: "La prudence est notre meilleure protection." },
        { id: "KwuTUbg7du0", titulo: "Boucle d'or et les trois ours", ensenanza: "Il faut toujours respecter l'espace des autres." },
        { id: "tvtFkPTEmGY", titulo: "Le bonhomme en pain d'épices", ensenanza: "L'humilité est plus précieuse que l'orgueil." },
        { id: "HOjI59MW3ug", titulo: "Loulou, le loup gourmand", ensenanza: "La gentillesse ouvre toutes les portes." },
        { id: "Vvm9CU6jAKk", titulo: "Les Musiciens de Brême", ensenanza: "Unis, nous sommes plus forts face aux obstacles." },
        { id: "kv-A5XmKkiA", titulo: "Le chat et la souris", ensenanza: "L'honnêteté est le fondement de l'amitié." }
    ],
    bloc2: [
        { id: "I3WsuGk9MZ0", titulo: "La Cigale et la Fourmi", ensenanza: "Travailler aujourd'hui nous prépare pour demain." },
        { id: "QxtEHWPUV3s", titulo: "Le Corbeau et le Renard", ensenanza: "Ne te laisse pas tromper par ceux qui te flattent." },
        { id: "BS-8_7VX0po", titulo: "Le petit Elfe Fermier", ensenanza: "Avec créativité, rien n'est impossible." },
        { id: "VpqUbs_TX_E", titulo: "Le Petit Poucet", ensenanza: "L'intelligence est notre meilleure arme." },
        { id: "kEJhGYcNATg", titulo: "Le Bossu de Notre-Dame", ensenanza: "La vraie beauté réside dans le cœur." },
        { id: "nhMzRBZqyVA", titulo: "La Princesse au petit pois", ensenanza: "La sensibilité est une grande vertu." },
        { id: "3CXWoYP_hwY", titulo: "Jack et le Haricot magique", ensenanza: "L'ingéniosité nous sort des problèmes." },
        { id: "Fzzyna8KRRI", titulo: "Le Lion et la Souris", ensenanza: "Aucun geste de bonté n'est inutile." },
        { id: "_Jyhn_T5B8Y", titulo: "Pourquoi les corbeaux sont noirs", ensenanza: "La beauté vient de notre courage." },
        { id: "0q0PBx3lLJg", titulo: "Le Pêcheur et le Poisson d'or", ensenanza: "La gratitude apporte plus de paix que l'ambition." }
    ],
    bloc3: [
        { id: "gO1fQZuqnH4", titulo: "Les habits neufs de l'Empereur", ensenanza: "Ose dire la vérité, elle est précieuse." },
        { id: "h4c7N6tsjh0", titulo: "Le Soldat de Plomb", ensenanza: "Rester brave définit notre caractère." },
        { id: "bUBOoC3HIGA", titulo: "Peau d'Âne", ensenanza: "La vraie noblesse est dans l'âme, pas dans les vêtements." },
        { id: "RzKzyKHuufI", titulo: "Aladdin et la Lampe Merveilleuse", ensenanza: "Ton esprit vaut mieux que tous les trésors." },
        { id: "iVYzEa6dNps", titulo: "La Petite Sirène", ensenanza: "Aimer, c'est savoir donner sans attendre." },
        { id: "x6RUO1xAisw", titulo: "La Belle au Bois Dormant", ensenanza: "Avec espoir, tout sortilège peut être vaincu." },
        { id: "waZepY4oTH4", titulo: "Le Chat Botté", ensenanza: "L'astuce est la clé de la réussite." },
        { id: "cqAxUHOoJoM", titulo: "Pinocchio", ensenanza: "L'honnêteté te fait grandir entouré d'amour." },
        { id: "X57Xitpw4Fw", titulo: "Le Vilain Petit Canard", ensenanza: "Tu es unique, crois en toi." },
        { id: "4faPUelc6Ck", titulo: "La Reine des Neiges", ensenanza: "L'amour réchauffe les cœurs les plus froids." }
    ],
    bloc4: [
        { id: "c_jVVxlq5uo", titulo: "Blanche-Neige", ensenanza: "La bonté attire les meilleures amitiés." },
        { id: "SeR3W5c7las", titulo: "La Petite Sirène", ensenanza: "Le sacrifice par amour est un acte noble." },
        { id: "Nyuo1tE9VfQ", titulo: "Lady Winter", ensenanza: "La nature mérite tout notre respect." },
        { id: "C2Fw09cwCiM", titulo: "La fille paresseuse et le pain d'or", ensenanza: "Le travail quotidien mène au bonheur." },
        { id: "PszGJkR0yXc", titulo: "La Reine Grognonne", ensenanza: "Partager apporte plus de joie que garder." },
        { id: "Qzk7Edlkyyw", titulo: "Raiponce", ensenanza: "La patience réalise nos rêves." },
        { id: "qPIdA90MG6I", titulo: "La Reine des Neiges", ensenanza: "Pardonner nous rend plus heureux." },
        { id: "9FsBFatRXC8", titulo: "Les Chaussons Rouges", ensenanza: "Apprécie ce que tu as avant d'en vouloir plus." },
        { id: "MPBw4ynvd-U", titulo: "Cendrillon", ensenanza: "Garde ton cœur pur dans l'épreuve." },
        { id: "o6J_LPaBcRc", titulo: "Le Garçon Paresseux", ensenanza: "Le temps est ton trésor le plus précieux." }
    ]
};

function renderizarBloque(nombreBloque) {
    const contenedor = document.getElementById('video-list-container');
    contenedor.innerHTML = '<h2>📖 Tout le ' + nombreBloque + '</h2>';

    document.querySelectorAll('.botones button').forEach(btn => btn.classList.remove('btn-activo'));
    const botonActivo = document.getElementById('btn-' + nombreBloque);
    if (botonActivo) {
        botonActivo.classList.add('btn-activo');
    }

    baseDatos[nombreBloque].forEach((video, index) => {
        const div = document.createElement('div');
        div.className = 'video-item';
        div.innerHTML = `
            <h3>${video.titulo}</h3>
            <iframe src="https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
            <p><strong>Enseignement :</strong> ${video.ensenanza}</p>
        `;
        contenedor.appendChild(div);

        if ((index + 1) % 4 === 0) {
            const adDiv = document.createElement('div');
            adDiv.className = 'adsense-slot';
            adDiv.innerHTML = 'Annonce Interstitielle (Adsterra)';
            contenedor.appendChild(adDiv);
        }
    });
}
function copiarLink() {
    const copyText = document.getElementById("myLink");
    copyText.select();
    document.execCommand("copy");
    alert("Lien copi� !");
}
window.onload = function() { renderizarBloque('bloc1'); };
