'use strict';

//? Closure pour isoler le code
(() => {

    //! Définition des classes
    class Animal {

        // Propriétés
        #nom;
        #poids;
        #taille;
        #sexe;
        #age;
        #dateArrive;
        #probaMort;
        #estVivant;

        //#region Events
        #mortEvent;

        setMortEventListener(callback) {
            this.#mortEvent = callback;
        }
        #raiseMortEvent() {
            if(!this.#mortEvent || typeof(this.#mortEvent) !== 'function') return;
            this.#mortEvent(this);
        }
        //#endregion

        /**
         * Constructeur de la classe "Animal"
         * @param {string} nom 
         * @param {number} poids 
         * @param {number} taille 
         * @param {string} sexe 
         * @param {number} age 
         * @param {boolean} probaMort 
         */
        constructor(nom, poids, taille, sexe, age, probaMort) {
            this.#nom = nom;
            this.#poids = poids;
            this.#taille = taille;
            this.#sexe = sexe;
            this.#age = age;
            this.#probaMort = probaMort;
            this.#estVivant = true;
            this.#dateArrive = null;
        }

        //#region Encapsulation
        get nom() {
            return this.#nom;
        }
        set nom(value) {
            this.#nom = value;
        }

        get poids() {
            return this.#poids;
        }
        set poids(value) {
            this.#poids = value;
        }

        get taille() {
            return this.#taille;
        }
        set taille(value) {
            this.#taille = value;
        }

        get sexe() {
            return this.#sexe;
        }
        set sexe(value) {
            this.#sexe = value;
        }

        get age() {
            return this.#age;
        }
        set age(value) {
            this.#age = value;
        }

        get ageHumain() {
            throw new Error('Not implemented');
        }

        get dateArrive() {
            return this.#dateArrive;
        }
        set dateArrive(value) {
            this.#dateArrive = value;
        }

        get estVivant() {
            return this.#estVivant;
        }
        //#endregion

        // Méthodes
        /**
         * @return {string} Le crie de l'animal 
         */
        crier() {
            throw new Error('Not implemented');
        }

        passerNuit() {
            if (!this.#estVivant) {
                throw new Error(this.nom + ' est mort');
            }

            const rng = (Math.floor(Math.random() * 1000)) / 10;
            if (rng < this.#probaMort) {
                this.#estVivant = false;
                this.#raiseMortEvent();
            }
        }

        toString() {
            return `${this.nom} [${this.sexe}]`
                + `\nAge : ${this.age} ans (Equivalent à ${this.ageHumain} ans)`
                + `\nTaille : ${this.taille}`
                + `\nPoids : ${this.poids}`;
        }
    }

    class Chat extends Animal {

        // Propriétés
        #caractere;
        #poilLong;
        #griffeCoupe;

        /**
         * Constructeur de la classe "Chat"
         * @param {string} nom 
         * @param {number} poids 
         * @param {number} taille 
         * @param {string} sexe 
         * @param {number} age 
         * @param {string} caractere 
         * @param {boolean} poilLong 
         * @param {boolean} griffeCoupe 
         */
        constructor(nom, poids, taille, sexe, age, caractere, poilLong, griffeCoupe) {
            super(nom, poids, taille, sexe, age, 0.5);

            this.caractere = caractere;
            this.#poilLong = poilLong;
            this.#griffeCoupe = griffeCoupe;
        }

        //#region Encapsulation
        get ageHumain() {
            return this.age * 4.2;
        }

        get caractere() {
            return this.#caractere;
        }
        set caractere(value) {
            this.#caractere = value;
        }

        get poilLong() {
            return this.#poilLong;
        }
        set poilLong(value) {
            this.#poilLong = value;
        }

        get griffeCoupe() {
            return this.#griffeCoupe;
        }
        set griffeCoupe(value) {
            this.#griffeCoupe = value;
        }
        //#endregion

        // Méthodes
        crier() {
            return "Miaou !";
        }

        toString() {
            return super.toString()
                + `\nCaractere : ${this.caractere}`
                + `\nPoils long  : ${this.poilLong ? 'Oui' : 'Non'}`
                + `\nGriffre coupé : ${this.griffeCoupe ? 'Oui' : 'Non'}`;
        }
    }

    class Chien extends Animal {

        //Propriétés
        #couleurCollier;
        #race;
        #estDresse;

        /**
         * Constructeur de la classe "Chien"
         * @param {string} nom 
         * @param {number} poids 
         * @param {number} taille 
         * @param {string} sexe 
         * @param {number} age 
         * @param {string} couleurCollier 
         * @param {string} race 
         * @param {boolean} estDresse 
         */
        constructor(nom, poids, taille, sexe, age, couleurCollier, race, estDresse) {
            super(nom, poids, taille, sexe, age, 1);
            this.#couleurCollier = couleurCollier;
            this.#race = race;
            this.#estDresse = estDresse;
        }

        //#region Encapsulation
        get ageHumain() {
            return this.age * 7;
        }

        get couleurCollier() {
            return this.#couleurCollier;
        }
        set couleurCollier(value) {
            this.#couleurCollier = value;
        }

        get race() {
            return this.#race;
        }
        set race(value) {
            this.#race = value;
        }

        get estDresse() {
            return this.#estDresse;
        }
        set estDresse(value) {
            this.#estDresse = value;
        }
        //#endregion

        // Méthodes
        crier() {
            return "Wouf !";
        }

        toString() {
            return super.toString()
                + `\nRace : ${this.race}`
                + `\nCouleur collier  : ${this.couleurCollier}`
                + `\nDresser : ${this.estDresse ? 'Oui' : 'Non'}`;
        }
    }

    class Oiseau extends Animal {

        //Propriétés
        #couleur;
        #habitat;

        /**
         * Constructeur de la classe "Oiseau"
         * @param {string} nom 
         * @param {number} poids 
         * @param {number} taille 
         * @param {string} sexe 
         * @param {number} age 
         * @param {string} couleur 
         * @param {string} habitat 
         */
        constructor(nom, poids, taille, sexe, age, couleur, habitat) {
            super(nom, poids, taille, sexe, age, 3);
            this.#couleur = couleur;
            this.#habitat = habitat;
        }

        //#region Encapsulation
        get ageHumain() {
            return this.age * 11.1;
        }

        get couleur() {
            return this.#couleur;
        }
        set couleur(value) {
            this.#couleur = value;
        }

        get habitat() {
            return this.#habitat;
        }
        set habitat(value) {
            this.#habitat = value;
        }
        //#endregion

        // Méthodes
        crier() {
            const chant = "Cui cui! ";
            const nbChant = Math.ceil(Math.random() * 5);
            return chant.repeat(nbChant);
        }

        toString() {
            return super.toString()
                + `\nCouleur : ${this.couleur}`
                + `\nHabitat  : ${this.habitat}`;
        }
    }

    class Animalerie {

        //! Propriétés
        /** Liste des animaux @type {Animal[]} */
        #animaux;
        /** Date du jour à l'animalerie @type {Date} */
        #today;

        //#region Events
        #infoEventListener;

        setInfoEventListener(callback) {
            this.#infoEventListener = callback;
        }
        #raiseInfoEvent(message) {
            this.#infoEventListener(message);
        }
        //#endregion

        /**
         * Constructeur de la classe "Animalerie"
         */
        constructor() {
            this.#animaux = [];
            this.#today = new Date(2025, 0, 1);
        }

        //#region Encapsulation
        get animaux() {
            return [...this.#animaux];
        }

        get today() {
            return new Date(this.#today);
        }
        //#endregion

        //! Méthodes

        /**
         * Méthode pour ajouter un animal à l'animalerie
         * @param {Chat|Chien|Oiseau} animal 
         */
        ajouterAnimal(animal) {
            if (!animal.estVivant) {
                throw new Error('L\'animal est mouru !');
            }

            animal.dateArrive = this.today;
            this.#animaux.push(animal);

            animal.setMortEventListener((a) => {
                this.#raiseInfoEvent(`${this.today.toLocaleDateString()} : ${a.nom} est mouru!`);
            });
            this.#raiseInfoEvent(`${this.today.toLocaleDateString()} : ${animal.nom} est arrivé dans l'animalerie.`);
        }

        /**
         * Méthode pour passer la nuit
         */
        passerNuit() {
            // Avancer la date
            this.#today.setDate(this.#today.getDate() + 1);

            // Test de survie des animaux
            for (const animal of this.#animaux.filter(a => a.estVivant)) {
                animal.passerNuit();
            }
        }

        /**
         * Méthode pour obtenir le nombre d'animaux
         * @returns {{chat: number,chien: number,oiseau: number }}
         */
        obtenirNombreAnimaux() {
            const nbAnimaux = {
                chat: 0,
                chien: 0,
                oiseau: 0
            };

            for (const animal of this.#animaux.filter(a => a.estVivant)) {
                if (animal instanceof Chat) {
                    nbAnimaux.chat++;
                }
                else if (animal instanceof Chien) {
                    nbAnimaux.chien++;
                }
                else if (animal instanceof Oiseau) {
                    nbAnimaux.oiseau++;
                }
            }

            return nbAnimaux;
        }
    }

    //! Récuperation des éléments du DOM
    const DOM = {
        btnNextDay: document.getElementById('btn-next-day'),
        btnDisplayList: document.getElementById('btn-list'),
        displayResume: document.getElementById('display-resume'),
        displayEvent: document.getElementById('display-event'),
        displayAnimaux: document.getElementById('display-animal-list'),
        formAddAnimal: document.getElementById('animal-form'),
    };

    //! Application
    const animalerie = new Animalerie();

    function refreshResume() {
        DOM.displayResume.innerHTML = '';
        const animalStats = animalerie.obtenirNombreAnimaux();

        const infoJour = document.createElement('p');
        infoJour.textContent = `Nous sommes le ${animalerie.today.toLocaleDateString()}`;

        const nbChat = document.createElement('p');
        nbChat.textContent = `Nombre de chat : ${animalStats.chat}`;
        const nbChien = document.createElement('p');
        nbChien.textContent = `Nombre de chien : ${animalStats.chien}`;
        const nbOiseau = document.createElement('p');
        nbOiseau.textContent = `Nombre d'oiseau : ${animalStats.oiseau}`;

        DOM.displayResume.append(infoJour, nbChat, nbChien, nbOiseau);
    }
    refreshResume();

    animalerie.setInfoEventListener((message) => {
        const notif = document.createElement('p');
        notif.textContent = message;
        DOM.displayEvent.append(notif);
    })

    //? Traitement du formulaire
    DOM.formAddAnimal.addEventListener('submit', (e) => {
        // Annulation de l'event "submit"
        e.preventDefault();

        // Récuperation du type d'animal à créer
        const animalSelected = DOM.formAddAnimal['animal-type'].value;

        // Récuperation des éléments commun
        const nom = DOM.formAddAnimal['nom'].value;
        const poids = DOM.formAddAnimal['poids'].valueAsNumber;
        const taille = DOM.formAddAnimal['taille'].value;
        const sexe = DOM.formAddAnimal['sexe'].value;
        const age = DOM.formAddAnimal['age'].valueAsNumber;

        // Création de l'animal
        let animal = null;
        if (animalSelected === 'Chat') {
            const caractere = DOM.formAddAnimal['chat-caractere'].value;
            const poilLong = DOM.formAddAnimal['chat-poils'].checked;
            const griffreCoupe = DOM.formAddAnimal['chat-griffe'].checked;

            animal = new Chat(nom, poids, taille, sexe, age, caractere, poilLong, griffreCoupe);
        }
        else if (animalSelected === 'Chien') {
            const collier = DOM.formAddAnimal['chien-collier'].value;
            const race = DOM.formAddAnimal['chien-race'].value;
            const estDresse = DOM.formAddAnimal['chien-dresse'].checked;

            animal = new Chien(nom, poids, taille, sexe, age, collier, race, estDresse);
        }
        else if (animalSelected === 'Oiseau') {
            const couleur = DOM.formAddAnimal['oiseau-couleur'].value;
            const habitat = DOM.formAddAnimal['oiseau-habitat'].value;

            animal = new Oiseau(nom, poids, taille, sexe, age, couleur, habitat);
        }
        else {
            throw new Error('Animal not supported');
        }

        // Ajout de l'animal dans l'animalerie
        animalerie.ajouterAnimal(animal);

        // Reset du formulaire
        DOM.formAddAnimal.reset();
    });

    //? Afficher la liste des animaux
    function createAnimalElement(animal) {
        const listItem = document.createElement('li');

        const itemInfo = document.createElement('p');
        itemInfo.textContent = `${animal.nom} [${animal.sexe} / ${animal.age} ans]`;
        const itemDesc = document.createElement('p');
        itemDesc.textContent = `Poids : ${animal.poids} / Taille : ${animal.taille}`;
        listItem.append(itemInfo, itemDesc);

        if (animal instanceof Chat) {
            const infoChat = document.createElement('p');
            infoChat.textContent = `${animal.caractere} avec des poils ${animal.poilLong ? 'long' : 'court'}`;
            listItem.append(infoChat);
        }
        if (animal instanceof Chien) {
            const infoChien1 = document.createElement('p');
            infoChien1.textContent = `${animal.race} avec un collier ${animal.couleurCollier}`;
            const infoChien2 = document.createElement('p');
            infoChien2.textContent = `Est dressé : ${animal.estDresse ? 'oui' : 'non'}`;
            listItem.append(infoChien1, infoChien2);
        }
        if (animal instanceof Oiseau) {
            const infoOiseau = document.createElement('p');
            infoOiseau.textContent = `Couleur : ${animal.couleur} / Habitat : ${animal.habitat}`;
            listItem.append(infoOiseau);
        }

        return listItem;
    }

    DOM.btnDisplayList.addEventListener('click', () => {
        // Effacer la liste actuel
        DOM.displayAnimaux.innerHTML = '';

        // Ajouter les animaux de l'animalerie
        for (const animal of animalerie.animaux.filter(a => a.estVivant)) {
            DOM.displayAnimaux.append(createAnimalElement(animal));
        }
    });

    //? Simulation de l'animalerie
    DOM.btnNextDay.addEventListener('click', () => {
        animalerie.passerNuit();
        refreshResume();
    });

})();