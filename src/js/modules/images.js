const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText =  `
        justify-content: center;
        align-items: center;
        display: none;
    `;

    bigImage.style.cssText = `
        max-width: 600px;
        max-height: 600px;
    `;
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (e.target && target.classList.contains('preview')) {
            document.body.style.overflow = 'hidden';
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;