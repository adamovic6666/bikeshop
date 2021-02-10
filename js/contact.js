const inputFields = Array.from(document.querySelectorAll('.form__input'));
const formLabels = Array.from(document.querySelectorAll('.form__label'));
const mediaQuery = window.matchMedia('(min-width: 768px)');

inputFields.forEach((inputEl, i) => {
    inputEl.addEventListener('change', () => {
        if(inputEl.value) {
            let label = formLabels.filter((_, index) => {
                return index === i;
            });
            label[0].style.transform = "translateY(-1rem)";
        };
    });
});

function initMap() {

    let options = {
        zoom: 16,
        center: {lat:44.847204674119475, lng:20.372941569249047}
    }

    let map = new google.maps.Map(document.querySelector('.contact__map'),options);

    let icon = {
        url: "./assets/pin-box.png",
        origin: new google.maps.Point(0,0), 
        //anchor: new google.maps.Point(0,0) 
    };

    if(mediaQuery.matches) {
        icon.scaledSize = new google.maps.Size(130, 90);
        icon.anchor = new google.maps.Point(10, 90);
    } else {
        icon.scaledSize = new google.maps.Size(90, 60);
        icon.anchor = new google.maps.Point(0, 60);
    }

    let marker = new google.maps.Marker({
        position: {lat:44.847204674119475, lng:20.372941569249047},
        map: map,
        icon: icon
    })

}

