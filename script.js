const baseDatos = {
    bloc1: [
        { id: "XYsWJGhOsfY", titulo: "Le Petit Chaperon Rouge", ensenanza: "Écouter les conseils de nos parents nous garde en sécurité." },
        { id: "Q1F4XVCsR7g", titulo: "Les Trois Petits Cochons", ensenanza: "Le travail acharné et la patience portent toujours leurs fruits." },
        { id: "i54XP3zLtdM", titulo: "Hansel et Gretel", ensenanza: "L'union familiale nous aide à surmonter les difficultés." },
        { id: "zfBrVHsMK3c", titulo: "Le lièvre et la Tortue", ensenanza: "La persévérance gagne toujours sur la vitesse." },
        { id: "8W7YwgDJF5Y", titulo: "Le loup et Les 7 cheveaux", ensenanza: "La prudence est notre meilleure protection contre les inconnus." },
        { id: "KwuTUbg7du0", titulo: "Boucle d'Or et Les Trois Ours", ensenanza: "Il faut toujours respecter l'espace et les objets des autres." },
        { id: "tvtFkPTEmGY", titulo: "Le Bonhomme en pain d'épices", ensenanza: "L'humilité est plus précieuse que l'orgueil." },
        { id: "HOjI59MW3ug", titulo: "Loulou, le loup gourmand", ensenanza: "C'est bien d'être différent ; la gentillesse ouvre toutes les portes." },
        { id: "Vvm9CU6jAKk", titulo: "Les Musiciens de Brême", ensenanza: "Unis, nous sommes capables de surmonter n'importe quel obstacle." },
        { id: "kv-A5XmKkiA", titulo: "Le chat et la souris", ensenanza: "L'honnêteté est le fondement d'une véritable amitié." }
    ],
    bloc2: [
        { id: "I3WsuGk9MZ0", titulo: "La Cigale et la Fourmi", ensenanza: "Travailler aujourd'hui nous prépare pour demain." },
        { id: "QxtEHWPUV3s", titulo: "Le Corbeau et le Renard", ensenanza: "Il ne faut pas croire tout ce que disent ceux qui cherchent à nous flatter." },
        { id: "BS-8_7VX0po", titulo: "Le petit Elfe Fermier", ensenanza: "Avec créativité et effort, rien n'est impossible." },
        { id: "VpqUbs_TX_E", titulo: "Le Petit Poucet", ensenanza: "L'intelligence et le courage sont nos meilleurs outils." },
        { id: "kEJhGYcNATg", titulo: "Le Bossu de Notre-Dame", ensenanza: "La vraie beauté se trouve toujours dans le cœur." },
        { id: "nhMzRBZqyVA", titulo: "La Princesse au petit pois", ensenanza: "Être authentique et sensible est une grande vertu." },
        { id: "3CXWoYP_hwY", titulo: "Jack et le Haricot magique", ensenanza: "Face aux problèmes, l'ingéniosité est notre meilleure alliée." },
        { id: "Fzzyna8KRRI", titulo: "Le Lion et la Souris", ensenanza: "Aucun acte de gentillesse n'est trop petit." },
        { id: "_Jyhn_T5B8Y", titulo: "Pourquoi les corbeaux sont noirs", ensenanza: "La vraie beauté vient de notre courage et de notre bonté." },
        { id: "0q0PBx3lLJg", titulo: "Le Pêcheur et le Petit Poisson d'or", ensenanza: "Apprécier ce que nous avons apporte plus de paix que l'ambition." }
    ],
    bloc3: [
        { id: "gO1fQZuqnH4", titulo: "Les habits neufs de l'Empereur", ensenanza: "La vérité est précieuse ; n'ayez pas peur de la dire." },
        { id: "h4c7N6tsjh0", titulo: "Le Stoïque Soldat de Plomb", ensenanza: "Rester brave face à l'adversité définit notre caractère." },
        { id: "bUBOoC3HIGA", titulo: "Peau d'Âne", ensenanza: "La vraie noblesse est dans le cœur, pas dans les apparences." },
        { id: "RzKzyKHuufI", titulo: "Aladdin et la Lampe Merveilleuse", ensenanza: "Notre intelligence vaut bien plus que les trésors matériels." },
        { id: "iVYzEa6dNps", titulo: "La Petite Sirène", ensenanza: "L'amour vrai implique de savoir être généreux." },
        { id: "x6RUO1xAisw", titulo: "La Belle au Bois Dormant", ensenanza: "Avec patience et espoir, tout sortilège peut être vaincu." },
        { id: "waZepY4oTH4", titulo: "Le Chat Botté", ensenanza: "L'astuce et la créativité sont clés pour réussir." },
        { id: "cqAxUHOoJoM", titulo: "Pinocchio", ensenanza: "L'honnêteté nous permet de grandir entourés d'amour." },
        { id: "X57Xitpw4Fw", titulo: "Le Vilain Petit Canard", ensenanza: "Chacun a une valeur unique, ne laisse personne te faire douter." },
        { id: "4faPUelc6Ck", titulo: "La Reine des Neiges", ensenanza: "L'amour et la solidarité peuvent tout débloquer." }
    ],
    bloc4: [
        { id: "c_jVVxlq5uo", titulo: "Blanche-Neige et les sept nains", ensenanza: "La bonté attire les amitiés les plus sincères." },
        { id: "SeR3W5c7las", titulo: "La Petite Sirène", ensenanza: "Le sacrifice par amour est un acte très noble." },
        { id: "Nyuo1tE9VfQ", titulo: "Lady Winter", ensenanza: "La nature mérite tout notre respect et notre soin." },
        { id: "C2Fw09cwCiM", titulo: "La jeune fille paresseuse", ensenanza: "Le travail quotidien est le chemin vers la réussite." },
        { id: "PszGJkR0yXc", titulo: "La reine Grognonne", ensenanza: "La joie partagée vaut mieux que le pouvoir égoïste." },
        { id: "Qzk7Edlkyyw", titulo: "Raiponce", ensenanza: "La patience nous permet de réaliser nos rêves." },
        { id: "qPIdA90MG6I", titulo: "La Reine des Neiges", ensenanza: "Pardonner nous rend plus forts et plus heureux." },
        { id: "9FsBFatRXC8", titulo: "Les Chaussons Rouges", ensenanza: "Valorisons ce que nous avons avant de désirer le superflu." },
        { id: "MPBw4ynvd-U", titulo: "Cendrillon", ensenanza: "Gardez un cœur noble, même dans les moments difficiles." },
        { id: "o6J_LPaBcRc", titulo: "Le Garçon Paresseux", ensenanza: "Bien utiliser son temps est la meilleure décision." }
    ]
};

function cargarBloque(bloque) {
    const video = baseDatos[bloque][0];
    document.getElementById('youtube-player').src = `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
    document.getElementById('titulo-historia').innerText = video.titulo;
    document.getElementById('ensenanza-texto').innerText = video.ensenanza;
}