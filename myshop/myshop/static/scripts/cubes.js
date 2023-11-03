const cubes = {
    red: [],
    yellow: [],
    blue: [],
    green: []
};

function addCube() {
    const color = document.getElementById("color").value;
    const size = parseFloat(document.getElementById("size").value);

    if (size > 0) {
        cubes[color].push(size);

        const cubesList = document.getElementById("cubesList");
        const listItem = document.createElement("li");
        listItem.textContent = `${color} кубик размером ${size} см`;
        cubesList.appendChild(listItem);

        updateResults();
    }
}

function updateResults() {
    const results = document.getElementById("results");
    results.innerHTML = "<br>";

    for (const color in cubes) {
        if (cubes[color].length > 0) {
            const count = cubes[color].length;
            const volume = cubes[color].reduce((total, size) => total + Math.pow(size, 3), 0);

            results.innerHTML += `Цвет: ${color}, Количество: ${count}, Суммарный объем: ${volume.toFixed(2)} см³<br>`;
        }
    }
}

document.getElementById("cubesForm").addEventListener("submit", function (e) {
    e.preventDefault();
    addCube();
});
