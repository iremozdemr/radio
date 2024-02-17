document.getElementById('right').addEventListener('click', function() {
    document.getElementById('earth').style.display = 'none';
    document.getElementById('jupiter').style.display = 'inline-block';
});

document.getElementById('left').addEventListener('click', function() {
    document.getElementById('jupiter').style.display = 'none';
    document.getElementById('earth').style.display = 'inline-block';
});