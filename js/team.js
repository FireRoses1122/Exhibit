function onClickOutside (e) {
    e.stopImmediatePropagation();
    const modalList = document.querySelectorAll('div.teadal:not(.hide)');
    console.log('teadal', e.target)
    for (const modalID of modalList) {
        if (!modalID.querySelector('.modal-content').contains(e.target)) {
            modalID.classList.add('hide')

            modalID.removeEventListener('click', onClickOutside)
        }
    }
}

function descriptionClickOutside (e) {
    e.stopImmediatePropagation();
    const descriptionList = document.querySelectorAll('div.modality:not(.hide)');
    console.log('modality', e.target)
    for (const modal of descriptionList) {
        if (!modal.querySelector('.modal-content-description').contains(e.target)) {
            modal.classList.add('hide')

            modal.removeEventListener('click', descriptionClickOutside)
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const descriptionModalButtonList = document.querySelectorAll('.description-button');

    for (const modalButton of descriptionModalButtonList) {
        modalButton.addEventListener('click', e => {
            const targetModalId = e.target.getAttribute('data-target');
            const targetModal = document.getElementById(targetModalId)
            targetModal.classList.toggle('hide');

            e.stopImmediatePropagation();
            
            targetModal.addEventListener('click', (e) => descriptionClickOutside(e))
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