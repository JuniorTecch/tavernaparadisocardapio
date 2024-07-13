document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.menu-section');
    const menuItems = document.querySelectorAll('.menu-item');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetID) {
                    section.classList.add('active');
                }
            });
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const itemName = this.dataset.item;
            const whatsappNumber = '71999229069';
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=Gostaria%20de%20mais%20informações%20sobre%20o%20${itemName}`;
            window.open(whatsappURL, '_blank');
        });
    });
});
