


// Select elements------------------------------------------------------------------------
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItems = document.querySelectorAll('#dropdownMenu a');
const dropdownSelected = document.getElementById('dropdownSelected');
// Toggle dropdown visibility
dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});
// Handle item selection
dropdownItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const value = event.target.getAttribute('data-value');
    const text = event.target.textContent;
    // Update the button text
    dropdownSelected.textContent = text;
    // Hide the dropdown
    dropdownMenu.classList.add('hidden');
  });
});
// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.relative')) {
    dropdownMenu.classList.add('hidden');
  }
});



// Modal JS--------------------------------------------------------------------------------
// Get elements
const openModal = document.getElementById('openModal');
const closeModalButtons = document.querySelectorAll('#closeModal, #closeModalFooter');
const modal = document.getElementById('modal');
// Function to open the modal
const openModalHandler = () => {
  modal.classList.remove('hidden');
};
// Function to close the modal
const closeModalHandler = () => {
  modal.classList.add('hidden');
};
// Add event listeners
openModal.addEventListener('click', openModalHandler);
closeModalButtons.forEach(button => button.addEventListener('click', closeModalHandler));
// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalHandler();
  }
});
