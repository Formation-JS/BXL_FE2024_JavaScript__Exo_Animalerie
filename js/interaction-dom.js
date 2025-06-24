'use strict';

//? Closure pour isoler le code
(() => {
    //! Récuperation des éléments du DOM
    const DOM = {
        NAV: {
            dashboard: document.getElementById('btn-dashboard'),
            list: document.getElementById('btn-list'),
            form: document.getElementById('btn-form'),
        },
        VIEW: {
            dashboard: document.getElementById('view-dashboard'),
            list: document.getElementById('view-list'),
            form: document.getElementById('view-form'),
        },
        animalForm: document.getElementById('animal-form'),
        selectAnimalType: document.getElementById('input-animal-type'),
        fields: document.getElementsByClassName('animal-field'),
        fieldChat: document.getElementById('animal-field-chat'),
        fieldChien: document.getElementById('animal-field-chien'),
        fieldOiseau: document.getElementById('animal-field-oiseau'),
    }

    //! Masquer la liste des animaux et le formulaire
    DOM.VIEW.list.classList.add('hidden');
    DOM.VIEW.form.classList.add('hidden');

    //! Comportement de la navigation
    DOM.NAV.dashboard.addEventListener('click', () => {
        DOM.VIEW.dashboard.classList.remove('hidden');
        DOM.VIEW.list.classList.add('hidden');
        DOM.VIEW.form.classList.add('hidden');
    });
    DOM.NAV.list.addEventListener('click', () => {
        DOM.VIEW.dashboard.classList.add('hidden');
        DOM.VIEW.list.classList.remove('hidden');
        DOM.VIEW.form.classList.add('hidden');
    });
    DOM.NAV.form.addEventListener('click', () => {
        DOM.VIEW.dashboard.classList.add('hidden');
        DOM.VIEW.list.classList.add('hidden');
        DOM.VIEW.form.classList.remove('hidden');
    });

    //! Masquer tous les fields liés au type d'animal du formulaire
    function hideAnimalTypeField() {
        for (const field of DOM.fields) {
            field.classList.add('hidden');
            field.setAttribute('disabled', '');
        }
    }
    hideAnimalTypeField();

    //! Afficher les fiels liés au type d'animal via le select
    DOM.selectAnimalType.addEventListener('input', () => {
        hideAnimalTypeField();

        const animalType = DOM.selectAnimalType.value;
        if (animalType === 'Chat') {
            DOM.fieldChat.classList.remove('hidden');
            DOM.fieldChat.removeAttribute('disabled');
        }
        else if (animalType === 'Chien') {
            DOM.fieldChien.classList.remove('hidden');
            DOM.fieldChien.removeAttribute('disabled');
        }
        else if (animalType === 'Oiseau') {
            DOM.fieldOiseau.classList.remove('hidden');
            DOM.fieldOiseau.removeAttribute('disabled');
        }
    });
    DOM.animalForm.addEventListener('reset', () => {
        hideAnimalTypeField();
    })
})();