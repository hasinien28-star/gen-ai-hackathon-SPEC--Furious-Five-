
document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
document.getElementById(page).classList.remove('hidden');
}


function analyzeStyle() {
document.getElementById('analysisResult').innerText =
'You have a clean style. Try neutral colors and fitted outfits.';
}


async function generateOutfit() {
const occasion = document.getElementById('occasion').value;
const style = document.getElementById('style').value;


const res = await fetch('http://127.0.0.1:5000/api/outfit', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ occasion, style })
});


const data = await res.json();
document.getElementById('outfitResult').innerText = data.suggestion;
}


async function addWardrobe() {
const item = document.getElementById('clothInput').value;


await fetch('http://127.0.0.1:5000/api/wardrobe', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ item })
});


loadWardrobe();
}


async function loadWardrobe() {
const res = await fetch('http://127.0.0.1:5000/api/wardrobe');
const data = await res.json();


const list = document.getElementById('wardrobeList');
list.innerHTML = '';


data.wardrobe.forEach(i => {
const li = document.createElement('li');
li.textContent = i;
list.appendChild(li);
});
}


window.onload = loadWardrobe;

