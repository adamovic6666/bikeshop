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
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 13
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#144b53"
                        },
                        {
                            "lightness": 14
                        },
                        {
                            "weight": 1.4
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#323541"
                        },
                        {
                            "saturation": "0"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#323541"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#202c3e"
                        },
                        {
                            "lightness": "0"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#323541"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#323541"
                        },
                        {
                            "lightness": 25
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#323541"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#323541"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4c4c53"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#323541"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#021019"
                        }
                    ]
                }
            ]
        };
    
        settingMapProps(options);

    }

    document.head.appendChild(script);
}


setImage();
settingGoogleMapAfterReload();
