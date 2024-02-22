const modalOpenBtn = document.querySelector('[data-modal="open"]'),
      modalCloseBtn = document.querySelector('[data-modal="close"]'),
      modal = document.querySelector('.modal');

    modalOpenBtn.addEventListener('click', openModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', openModalByScroll)

const modalTimer = setTimeout(openModal, 5000);

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('close');

    toggleBodyOverflow();
    clearInterval(modalTimer);
}

function closeModal() {
    modal.classList.add('close');
    modal.classList.remove('show');
    toggleBodyOverflow();
}

function openModalByScroll() {
    const offsetY = window.pageYOffset;
    const height = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (offsetY + height >= scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', openModalByScroll);
    }
}

function handleModalClick(e) {
    const target = e.target;

    if (target === modal && target.classList.contains('show')) {
        closeModal();
    }
}

function handleKeyDown(e) {
    const code = e.code;

    if (code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
}

function toggleBodyOverflow() {
    document.body.style.overflow = (document.body.style.overflow === '') ? 'hidden' : '';
    const scrollBarWidth = getScrollBarWidth();
    document.documentElement.style.paddingRight = (document.body.style.overflow === 'hidden') ? scrollBarWidth + 'px' : '';
}

function getScrollBarWidth() {
    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);

    const scrollBarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollBarWidth;
}