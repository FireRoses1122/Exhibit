
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");

    setTimeout(()=>modal.classList.add('modal-visible'))
})

document.addEventListener('click', e => {
    if(modal.contains(e.target)) {
        modal.classList.add('hide')
    }
})
