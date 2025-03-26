// script.js

/* Imports */
import { addItem, getItems } from './db.js';
import { initMap, updateMap } from './mapview.js';

/* Render Items Function */
async function renderItems(filter = "all", searchQuery = "") {
    const itemsList = document.getElementById("items-list");
    const feedbackElement = document.getElementById("search-feedback");

    if (!itemsList) {
        console.error("Items list element not found!");
        return;
    }
    itemsList.innerHTML = "";

    if (feedbackElement) {
        console.log("Feedback element found:", feedbackElement); // Debug log
        feedbackElement.innerHTML = "";
    } else {
        console.warn("Search feedback element not found!");
    }

    try {
        const items = await getItems();
        console.log("Fetched items:", items);

        const keywordRegex = new RegExp(searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        const filteredItems = items.filter(item => 
            (filter === "all" || item.status === filter) &&
            (
                (item.title ? keywordRegex.test(item.title) : false) || 
                (item.description ? keywordRegex.test(item.description) : false)
            )
        );
        console.log("Filtered items:", filteredItems);

        // Display the number of matched items
        if (feedbackElement) {
            if (filteredItems.length === 0) {
                feedbackElement.innerHTML = "0 items matched";
            } else {
                feedbackElement.innerHTML = `${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'} matched`;
            }
            console.log("Feedback message set to:", feedbackElement.innerHTML); // Debug log
        }

        if (filteredItems.length === 0) {
            itemsList.innerHTML = "<p class='no-items'>No items found</p>";
            await updateMap([]); // Update map with no items
            return;
        }

        filteredItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item-card");
            
            const titleParts = item.title.split(' - ');
            const displayTitle = titleParts[0] || "Untitled Item";
            const displayDate = titleParts[1] || "Date unknown";
            
            itemElement.innerHTML = `
                <div class="card-body">
                    <div class="card-header">
                        <h4 class="card-title">${displayTitle}</h4>
                        <small class="timestamp">${displayDate}</small>
                    </div>
                    <span class="status-badge ${item.status === 'found' ? 'status-found' : item.status === 'lost' ? 'status-lost' : ''}">${item.status ? item.status.toUpperCase() : 'UNKNOWN'}</span>
                    <p class="card-text">${item.description || "No description provided."}</p>
                    <div class="item-details">
                        <p><strong>Location:</strong> ${item.location_desc || "Not specified"}</p>
                        <p data-contact-info><strong>Contact:</strong> ${item.contact_info || "Not provided"}</p>
                    </div>
                    ${item.image_link ? `
                    <div class="card-image">
                        <img src="${item.image_link}" alt="${displayTitle}" class="item-image">
                    </div>` : ''}
                </div>
            `;
            itemsList.appendChild(itemElement);
        });

        // Update the map with the filtered items
        await updateMap(filteredItems);
    } catch (error) {
        console.error("Error fetching items:", error);
        itemsList.innerHTML = `
            <div class="alert alert-danger">
                Error loading items. Please refresh the page.
                ${error.message ? `<div class="error-detail">${error.message}</div>` : ''}
            </div>
        `;
        if (feedbackElement) {
            feedbackElement.innerHTML = "Error loading items.";
        }
        await updateMap([]); // Update map with no items
    }
}

/* DOM Loaded Event Listener */
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    // Initialize the map
    initMap();

    /* Element References */
    const reportForm = document.getElementById("report-form");
    const searchBtn = document.getElementById("keyword-search-btn");
    const searchInput = document.getElementById("keyword-search");
    const statusTabs = document.getElementById("statusTabs");
    const reportDateInput = document.getElementById("report-date");
    const itemTitleInput = document.getElementById("item-title");
    const reportModal = document.getElementById("reportModal");
    const reportBtn = document.getElementById("report-btn");
    const reportModalToggle = document.getElementById("report-modal-toggle");
    const reportModalClose = document.getElementById("report-modal-close");
    const reportModalCancel = document.getElementById("report-modal-cancel");
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarNav = document.getElementById("navbarNav");

    // Initial render
    renderItems();

    /* Form Reset Function */
    const resetForm = () => {
        if (reportForm) {
            console.log("Resetting form state");
            reportForm.reset();
            reportForm.classList.remove('was-validated');
            reportForm.querySelectorAll('.form-input, .form-select').forEach(input => {
                input.classList.remove('is-invalid');
                input.setCustomValidity('');
                input.setAttribute('data-pristine', 'true');
            });

            if (reportDateInput) {
                reportDateInput.valueAsDate = new Date();
            }
            if (itemTitleInput) {
                const today = new Date();
                const day = String(today.getDate()).padStart(2, '0');
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const year = today.getFullYear();
                const formattedDate = `${day}/${month}/${year}`;
                itemTitleInput.placeholder = `e.g., Lost Wallet - ${formattedDate}`;
                itemTitleInput.value = '';
            }
        }
    };

    /* Event Listeners */
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener("click", () => {
            console.log("Navbar toggle clicked");
            navbarNav.classList.toggle("show");
        });
    }

    if (reportBtn) {
        reportBtn.addEventListener("click", () => {
            console.log("Report button clicked");
            if (reportModal) {
                resetForm();
                reportModal.classList.add("show");
            }
        });
    }

    if (reportModalToggle) {
        reportModalToggle.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Report modal toggle clicked");
            if (reportModal) {
                resetForm();
                reportModal.classList.add("show");
            }
        });
    }

    if (reportModalClose) {
        reportModalClose.addEventListener("click", () => {
            console.log("Modal close clicked");
            if (reportModal) reportModal.classList.remove("show");
        });
    }

    if (reportModalCancel) {
        reportModalCancel.addEventListener("click", () => {
            console.log("Modal cancel clicked");
            if (reportModal) reportModal.classList.remove("show");
        });
    }

    if (reportModal) {
        reportModal.addEventListener("click", (e) => {
            if (e.target === reportModal) reportModal.classList.remove("show");
        });
    }

    if (reportDateInput && itemTitleInput) {
        const today = new Date();
        reportDateInput.valueAsDate = today;
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        itemTitleInput.placeholder = `e.g., Lost Wallet - ${formattedDate}`;
        
        reportDateInput.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const year = selectedDate.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;
            const currentTitle = itemTitleInput.value.split(' - ')[0] || '';
            itemTitleInput.value = currentTitle ? `${currentTitle} - ${formattedDate}` : '';
            itemTitleInput.placeholder = `e.g., Lost Wallet - ${formattedDate}`;
        });
    }

    if (reportForm) {
        reportForm.querySelectorAll('.form-input, .form-select').forEach(input => {
            input.addEventListener('input', () => {
                input.setAttribute('data-pristine', 'false');
                input.classList.remove('is-invalid');
                input.setCustomValidity('');
            });
        });

        reportForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            if (!reportForm.checkValidity()) {
                event.stopPropagation();
                reportForm.classList.add('was-validated');
                reportForm.querySelectorAll('.form-input, .form-select').forEach(input => {
                    if (!input.validity.valid) {
                        input.classList.add('is-invalid');
                    }
                });
                return;
            }

            const titleValue = itemTitleInput.value.trim();
            if (!titleValue.match(/.+\s-\s\d{2}\/\d{2}\/\d{4}/)) {
                itemTitleInput.classList.add('is-invalid');
                itemTitleInput.setCustomValidity('Invalid format');
                event.stopPropagation();
                reportForm.classList.add('was-validated');
                return;
            } else {
                itemTitleInput.setCustomValidity('');
            }

            const submitBtn = reportForm.querySelector('#submit-btn');
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');

            try {
                const newItem = {
                    title: titleValue,
                    description: document.getElementById("description").value,
                    location_desc: document.getElementById("location-desc").value,
                    image_link: document.getElementById("image-link").value || "",
                    contact_info: document.getElementById("contact-info").value,
                    status: document.getElementById("item-status").value,
                    item_type: document.getElementById("item-type").value,
                    report_date: reportDateInput.value
                };

                await addItem(newItem);
                console.log("Item added:", newItem);
                
                reportForm.reset();
                reportDateInput.valueAsDate = new Date();
                itemTitleInput.placeholder = `e.g., Lost Wallet - ${new Date().toLocaleDateString('en-GB')}`;
                reportForm.classList.remove('was-validated');
                if (reportModal) reportModal.classList.remove("show");
                
                const alert = document.createElement('div');
                alert.className = 'alert alert-success';
                alert.innerHTML = `
                    <strong>Success!</strong> Item reported successfully.
                    <button type="button" class="alert-close">×</button>
                `;
                document.body.appendChild(alert);
                setTimeout(() => alert.remove(), 3000);
                alert.querySelector('.alert-close').addEventListener('click', () => alert.remove());
                
                renderItems();
            } catch (error) {
                console.error("Error reporting item:", error);
                const alert = document.createElement('div');
                alert.className = 'alert alert-danger';
                alert.innerHTML = `
                    <strong>Error!</strong> ${error.message}
                    <button type="button" class="alert-close">×</button>
                `;
                document.body.appendChild(alert);
                setTimeout(() => alert.remove(), 3000);
                alert.querySelector('.alert-close').addEventListener('click', () => alert.remove());
            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }
        });
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value;
            console.log("Search clicked, query:", query);
            renderItems("all", query);
        });

        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                const query = searchInput.value;
                console.log("Search triggered by Enter key, query:", query);
                renderItems("all", query);
            }
        });
    }

    if (statusTabs) {
        statusTabs.addEventListener("click", (event) => {
            const target = event.target.closest('.tab-link');
            if (target && target.dataset.status) {
                console.log("Tab clicked:", target.dataset.status);
                document.querySelectorAll(".tab-link").forEach(link => link.classList.remove("active"));
                target.classList.add("active");
                const query = document.getElementById("keyword-search").value;
                renderItems(target.dataset.status, query);
            }
        });
    }
});