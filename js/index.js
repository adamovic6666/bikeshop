const mediaQuery = window.matchMedia('(min-width: 768px)');

let observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fadeInImage 1s forwards ease-out';
        }
    });
})


document.querySelectorAll('.servicing__image').forEach(image => {
    observer.observe(image)
})

const setImage = () => {

    const maingImg = localStorage.getItem('mainImage');
    console.log(maingImg)
    if(maingImg && maingImg !== "url('assets/bike-b.png')") {
        homeImage.style.backgroundImage = maingImg;
        let glow = document.createElement('div');
        glow.classList.add('glow');
        homeImage.append(glow);
    } else {
        homeImage.style.backgroundImage = "url('assets/bike-w.png')";
        let glow = document.querySelector('.glow');
        glow.remove();
    }

}

function initMap() {

    let options = {
        zoom: 16,
        center: {lat:44.847204674119475, lng:20.372941569249047}
    }

    let map = new google.maps.Map(document.querySelector('.home__map'),options);

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

setImage();
