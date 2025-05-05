function onClickOutside (e) {
    
    const modalList = document.querySelectorAll('div.teadal:not(.hide)');

    for (const modal of modalList) {
        if (!modal.querySelector('.modal-content').contains(e.target)) {
            modal.classList.add('hide')

            
        }
    }

    const descriptionList = document.querySelectorAll('div.modality:not(.hide)');

    for (const model of descriptionList) {
        if (!model.querySelector('.modal-content-description').contains(e.target)) {
            model.classList.add('hide')

            document.removeEventListener('click', onClickOutside)
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const descriptionModalButtonList = document.querySelectorAll('.description-button');

    for (const modalButton of descriptionModalButtonList) {
        modalButton.addEventListener('click', e => {
            const targetModalId = e.target.getAttribute('data-target');
            document.getElementById(targetModalId).classList.toggle('hide');

            e.stopImmediatePropagation();

            document.addEventListener('click', (e) => onClickOutside(e))
        });
    }

    const identityModalButtonList = document.querySelectorAll('.identity-modal-button');

    for (const modelButton of identityModalButtonList) {
        modelButton.addEventListener('click', e => {
            const targetModalId = e.target.getAttribute('data-modal-target');
            document.getElementById(targetModalId).classList.toggle('hide');

            e.stopImmediatePropagation();

            document.addEventListener('click', (e) => onClickOutside(e))
        });
    }
});