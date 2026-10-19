// Modal Control
const modal = document.getElementById('enquiryModal');
const videoModal = document.getElementById('videoModal');

function openModal() {
    modal.style.display = 'flex';
}
function closeModal() {
    modal.style.display = 'none';
}
function openVideoModal() {
    videoModal.style.display = 'flex';
}
function closeVideoModal() {
    videoModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) closeModal();
    if (event.target == videoModal) closeVideoModal();
}

// FAQ Accordion
function toggleFaq(element) {
    const item = element.parentElement;
    item.classList.toggle('active');
}

// Dynamic Fee Calculator Logic
function calculateFee() {
    const gradeVal = parseInt(document.getElementById('calcGrade').value) || 53000;
    const optTransport = document.getElementById('optTransport').checked ? 12000 : 0;
    const optActivity = document.getElementById('optActivity').checked ? 6000 : 0;
    
    const total = gradeVal + optTransport + optActivity;
    document.getElementById('totalFeeDisplay').innerText = `Rs. ${total.toLocaleString()}`;
}

// Advanced Form Validation & Success Toast
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('parentName').value.trim();
    const email = document.getElementById('parentEmail').value.trim();
    const phone = document.getElementById('parentPhone').value.trim();
    const grade = document.getElementById('parentGrade').value;

    let isValid = true;

    // Clear errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('gradeError').innerText = '';

    if (name === '') {
        document.getElementById('nameError').innerText = 'Please enter your name';
        isValid = false;
    }
    if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        isValid = false;
    }
    if (phone === '' || phone.length < 10) {
        document.getElementById('phoneError').innerText = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }
    if (grade === '') {
        document.getElementById('gradeError').innerText = 'Please select a grade';
        isValid = false;
    }

    if (isValid) {
        closeModal();
        showToast();
        document.getElementById('enquiryForm').reset();
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.className = 'toast show';
    setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
}

// Scroll Reveal Animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const observerOptions = {
        root: null,
        threshold: 0.15
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});