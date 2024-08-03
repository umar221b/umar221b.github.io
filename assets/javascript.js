document.addEventListener('DOMContentLoaded', function () {
    // Load bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('.more-info-tooltip');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
        container: '.about',
        placement: 'bottom',
    }));

    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        // Load masonry galleries
        const galleries = document.querySelectorAll('.gallery');
        const initializedGalleries = [...galleries].map(gallery => new Masonry(gallery, {
            percentPosition: true
        }));
    });
}, false);