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

            const rng = (Math.floor(Math.random * 1000)) / 10;
            if (rng < this.#probaMort) {
                this.#estVivant = false;
            }
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
    }

    class Animalerie {

        //! Propriétés
        /** Liste des animaux @type {Animal[]} */
        #animaux;
        /** Date du jour à l'animalerie @type {Date} */
        #today;

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
        displayEvent: document.getElementById('display-event'),
        displayAnimaux: document.getElementById('display-animal-list'),
        formAddAnimal: document.getElementById('animal-form'),
    };

})();