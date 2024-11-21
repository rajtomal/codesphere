


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


// Databases Modal JS--------------------------------------------------------------------------------
// Get elements
const openModalDatabases = document.querySelectorAll('.openModalDatabases');
const closeModalButtonsDatabases = document.querySelectorAll('#closeModalDatabases, #closeModalFooterDatabases');
const modalDatabases = document.getElementById('modalDatabases');
// Function to open the modal
const openModalHandlerDatabases = () => {
  modalDatabases.classList.remove('hidden');
};
// Function to close the modal
const closeModalHandlerDatabases = () => {
  modalDatabases.classList.add('hidden');
};
// Add event listeners
openModalDatabases.forEach(button => button.addEventListener('click', openModalHandlerDatabases));
closeModalButtonsDatabases.forEach(button => button.addEventListener('click', closeModalHandlerDatabases));
// Close modal when clicking outside the modal content
modalDatabases.addEventListener('click', (event) => {
  if (event.target === modalDatabases) {
    closeModalHandlerDatabases();
  }
});



// Docker deployments Modal JS--------------------------------------------------------------------------------
// Get elements
const openModalDocker = document.getElementById('openModalDocker');
const closeModalButtonsDocker = document.querySelectorAll('#closeModalDocker, #closeModalFooterDocker');
const modalDocker = document.getElementById('modalDocker');
// Function to open the modal
const openModalHandlerDocker = () => {
  modalDocker.classList.remove('hidden');
};
// Function to close the modal
const closeModalHandlerDocker = () => {
  modalDocker.classList.add('hidden');
};
// Add event listeners
openModalDocker.addEventListener('click', openModalHandlerDocker);
closeModalButtonsDocker.forEach(button => button.addEventListener('click', closeModalHandlerDocker));
// Close modal when clicking outside the modal content
modalDocker.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalHandlerDocker();
  }
});



// Select all custom select elements
const customSelectToggles = document.querySelectorAll('.custom-select-toggle');
const customSelectMenus = document.querySelectorAll('.custom-select-menu');
const customSelectValues = document.querySelectorAll('.custom-select-value');
const customSelectOptions = document.querySelectorAll('.custom-select-option');

// Add click event to toggle dropdown visibility for each select button
customSelectToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing the dropdown immediately
    // Toggle the menu visibility for the clicked select
    customSelectMenus[index].classList.toggle('hidden');
  });
});

// Handle item selection for each dropdown
customSelectOptions.forEach(option => {
  option.addEventListener('click', (event) => {
    const selectedValue = event.target.getAttribute('data-value');
    // Find the corresponding custom select to update its value
    const parentSelect = event.target.closest('.relative'); // Find the parent .relative div
    const selectValueElement = parentSelect.querySelector('.custom-select-value');
    selectValueElement.textContent = selectedValue; // Update the selected value

    // Hide the dropdown menu
    const menu = parentSelect.querySelector('.custom-select-menu');
    menu.classList.add('hidden');
  });
});

// Close the dropdown when clicking outside
document.addEventListener('click', () => {
  customSelectMenus.forEach(menu => {
    menu.classList.add('hidden');
  });
});

