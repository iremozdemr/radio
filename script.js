let currentPlanetIndex = 0; 
//başlangıçta "earth" gezegeni görüntülenir.

const planets = ['earth', 'jupiter', 'mars','mercury','neptune','pluto','saturn','uranus','venus']; // Gezegenlerin sırasını tanımlar.

document.getElementById('right-button').addEventListener('click', function() {
    document.getElementById(planets[currentPlanetIndex]).style.display = 'none'; // Mevcut gezegeni gizle.

    currentPlanetIndex++; // Gezegen dizinini bir artır.

    if (currentPlanetIndex >= planets.length) {
        currentPlanetIndex = 0; // Dizi sona erdiğinde ilk gezegene dön.
    }

    document.getElementById(planets[currentPlanetIndex]).style.display = 'inline-block'; // Yeni gezegeni görüntüle.
});

document.getElementById('left-button').addEventListener('click', function() {
    document.getElementById(planets[currentPlanetIndex]).style.display = 'none'; // Mevcut gezegeni gizle.

    currentPlanetIndex--; // Gezegen dizinini bir azalt.

    if (currentPlanetIndex < 0) {
        currentPlanetIndex = planets.length - 1; // Dizi başladığında son gezegene git.
    }

    document.getElementById(planets[currentPlanetIndex]).style.display = 'inline-block'; // Yeni gezegeni görüntüle.
});

/*
document.getElementById('go-button').addEventListener('click', function() {
    window.location.href = './earth/earthpage.html'; // 'earth' dizinindeki 'index.html' dosyasına yönlendirir
});
*/

document.getElementById('go-button').addEventListener('click', function() {
    //mevcut gezegenin adını al
    const currentPlanet = planets[currentPlanetIndex];

    //gezegenin adına göre uygun sayfaya yönlendir
    window.location.href = `./${currentPlanet}/${currentPlanet}page.html`;
});