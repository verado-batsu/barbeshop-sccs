(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		openModalBtnSecond: document.querySelector("[data-modal-open-2]"),
		openModalBtnThird: document.querySelector("[data-modal-open-3]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.openModalBtnSecond.addEventListener("click", toggleModal);
	refs.openModalBtnThird.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
    	refs.modal.classList.toggle("is-hidden");
	}
})();