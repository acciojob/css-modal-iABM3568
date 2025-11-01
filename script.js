//your JS code here. If required.
 // Get elements
        const openModalBtn = document.getElementById('openModal');
        const modal = document.getElementById('myModal');
        const closeModalBtn = document.querySelector('.close-modal');

        // Open modal when button is clicked
        openModalBtn.addEventListener('click', function() {
            modal.classList.add('active');
        });

        // Close modal when close button is clicked
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
