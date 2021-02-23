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

    const mode = localStorage.getItem('mode');

    if(mode === "dark-mode") {
        let glow = document.createElement('div');
        glow.classList.add('glow');
        homeImage.append(glow);
        return;
    }
}

const createScript = () => {

    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDbO9pfjS0smzM5w5efGWpMiRt2mAW3f_4&callback=initMap';
    script.async = true;

    return script;

}

const settingMapProps = (options) => {

    let map = new google.maps.Map(document.querySelector('.home__map'),options);
    
    let icon = {
        url: "./assets/pin-box.png",
        origin: new google.maps.Point(0,0), 
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


const setGoogleMap = () => {

    let script = createScript();

    window.initMap = function() {

        let options = {
            zoom: 16,
            center: {lat:44.847204674119475, lng:20.372941569249047}
        };

        settingMapProps(options);
    }

    document.head.appendChild(script);

}

const settingGoogleMapAfterReload = () => {

    if(document.documentElement.hasAttribute("dark-mode")) {
        setGoogleMapDarkMode();
    } else {
        setGoogleMap();
    };

}

const setGoogleMapDarkMode = () => {

    let script = createScript();

    window.initMap = function() {

        let options = {
            zoom: 16,
            center: {lat:44.847204674119475, lng:20.372941569249047},
            styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#263c3f" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#38414e" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#212a37" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9ca5b3" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#746855" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#1f2835" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#f3d19c" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#2f3948" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
            ],
        };
    
        settingMapProps(options);

    }

    document.head.appendChild(script);
}


setImage();
settingGoogleMapAfterReload();
