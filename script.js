function showContent(section) {
    const display = document.getElementById('main-content');
    
    if (section === 'inicio') {
        display.innerHTML = `
            <h1>¡Bienvenido a Pueblo Pelícano!</h1>
            <div class="section-flex">
                <p>Stardew Valley es un RPG de vida campestre abierto. Heredaste la vieja parcela agrícola de tu abuelo. Armado con herramientas de segunda mano y unas pocas monedas, te dispones a comenzar tu nueva vida.</p>
                <img src="abuelo.png" class="game-img" alt="abuelo.png">
            </div>
        `;
    } else if (section === 'cultivos') {
        display.innerHTML = `
            <h1>Cultivos de Temporada</h1>
            <p>Cada estación ofrece diferentes semillas. ¡Asegúrate de regarlas todos los días!</p>
            <div class="card-container">
                <div class="card"><b>Primavera:</b> Chirivía, Coliflor, Patatas, Guisantes, Cerezas</div>
                <div class="card"><b>Verano:</b> Melón, Arandanos, Aji picante, Maiz, Naranjas</div>
                <div class="card"><b>Otoño:</b> Calabaza, Ñame, Maiz, Berenjenas, Manzanas</div>
                <div class="card"><b>Invierno:</b> Fruta Milenaria</div>
            </div>
        `;
    } else if (section === 'aldeanos') {
        // Lista completa de todos los aldeanos según tu descripción original
        const listaAldeanos = [
            { nombre: "Lewis", desc: "Maduro y polvo de Marnie", img: "lewis.jpg" },
            { nombre: "Robin", desc: "Mi vieja", img: "robin.png" },
            { nombre: "Pierre", desc: "Tacaño que no da fiao", img: "pierre.png" },
            { nombre: "Linus", desc: "nose", img: "linus.png" },
            { nombre: "Harvey", desc: "Marido de mi laif", img: "harvey.jpg" },
            { nombre: "Sam", desc: "Goku sin power", img: "sam.png" },
            { nombre: "Rasmodeus", desc: "Mi chacal", img: "rasmodeus.png" },
            { nombre: "Alex", desc: "Gymbro y Fitness", img: "alex.png" },
            { nombre: "Abigail", desc: "Tocada del coco", img: "abigail.png" },
            { nombre: "Emily", desc: "Hace viajes astrales", img: "emily.png" },
            { nombre: "Shane", desc: "Loco y Guapote", img: "shane.png" },
            { nombre: "Penny", desc: "Pick me y pene", img: "penny.png" },
            { nombre: "Demetrius", desc: "negro sin derechos", img: "demetrius.png" },
            { nombre: "Evelyn", desc: "Abuelita dime tu", img: "evelyn.png" },
            { nombre: "Marnie", desc: "Polvo de Lewis", img: "marnie.png" },
            { nombre: "Caroline", desc: "Señora de incienzos", img: "caroline.png" },
            { nombre: "Leah", desc: "Artista Hippie", img: "leah.jpg" },
            { nombre: "El Enano", desc: "como lo dice su nombre", img: "elenano.png" },
            { nombre: "Vincent", desc: "Mi otro marido cuando el sea grande", img: "vincent.png" },
            { nombre: "Kent", desc: "Trauma de guerra", img: "kent.png" },
            { nombre: "Leo", desc: "Sin papás", img: "leo.png" },
            { nombre: "Elliott", desc: "Romantico y Migajero", img: "elliot.png" },
            { nombre: "Maru", desc: "Nerd castrosa", img: "maru.png" },
            { nombre: "Gus", desc: "Cocina perico", img: "gus.png" },
            { nombre: "Jas", desc: "Niña sifrina", img: "jas.png" },
            { nombre: "Jodi", desc: "Mama awebonia", img: "jodi.png" },
            { nombre: "Krobus", desc: "Todo lo que esta bien en esta vida oe", img: "krobus.png" },
            { nombre: "Sebastian", desc: "Emo informatico", img: "sebastian.jpg" },
            { nombre: "Pam", desc: "Vieja loca y alcoholica", img: "pam.png" },
            { nombre: "Willy", desc: "Vende Sardina", img: "willy.png" },
            { nombre: "Clint", desc: "Minero de Rubius", img: "clint.png" },
            { nombre: "George", desc: "Viejo cojo", img: "george.png" },
            { nombre: "Haley", desc: "Cuñada y cuaima", img: "haley.png" }
        ];

        let htmlAldeanos = `<h1>Conoce a tus Vecinos</h1><div class="card-container">`;
        
        listaAldeanos.forEach(p => {
            htmlAldeanos += `
                <div class="card">
                    <img src="img/${p.img}" alt="${p.nombre}" class="char-img">
                    <span class="char-name">${p.nombre}</span>
                    <span class="char-desc">(${p.desc})</span>
                </div>
            `;
        });

        htmlAldeanos += `</div>`;
        display.innerHTML = htmlAldeanos;
    }
}

// Manejo de efectos visuales en botones
document.querySelectorAll('.btn-menu').forEach(button => {
    button.addEventListener('mousedown', () => button.classList.add('active-click'));
    button.addEventListener('mouseup', () => button.classList.remove('active-click'));
});