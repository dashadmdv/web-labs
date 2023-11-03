const table = document.getElementById('table');
const transposeButton = document.getElementById('transpose');
const addRowButton = document.getElementById('addRow');
const addColumnButton = document.getElementById('addColumn');
restricted = false;

function createTable(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');
            cell.textContent = Math.floor(Math.random() * 100);
            cell.addEventListener('click', toggleCellSelection);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

let maxSelections = [];

// Функция для обработки нажатия кнопки "Apply restrictions".
document.getElementById('updateMaxSelection').addEventListener('click', function () {
    const maxSelectionInput = document.getElementById('maxSelection');
    const newValue = parseInt(maxSelectionInput.value);
    if (!isNaN(newValue) && newValue >= 0) {
        restricted = true;
//        cells = table.getElementsByTagName('td');
//        for (cell of cells) {
//            cell.classList.remove('selected', 'selected-even', 'selected-odd');
//            cell.addEventListener('click', toggleCellSelection);
//        }
        maxSelections = Array.from({ length: table.rows.length }, () => newValue);

    } else {
        alert('Please enter a valid non-negative number for max selection.');
    }
});

// Функция для обработки клика по ячейке
function toggleCellSelection(event) {
    const cell = event.target;
    const isSelected = cell.classList.contains('selected');
    const rowIndex = cell.parentElement.rowIndex;

    if (isSelected) {
        // Если ячейка уже выделена, снимается выделение
        cell.classList.remove('selected', 'selected-even', 'selected-odd');
    } else {
        // Если ячейка не выделена, проверка ограничений
        if (canSelectCell(cell, rowIndex)) {
            cell.classList.add('selected');
            if (parseInt(cell.textContent) % 2 === 0) {
                    cell.classList.add('selected-even');
            } else {
                cell.classList.add('selected-odd');
            }
            }
        }
}


// Функция для проверки, можно ли выделить данную ячейку
function canSelectCell(cell, rowIndex) {
    if (!restricted) {
        return true;
    }
    if (rowIndex < 0 || rowIndex >= maxSelections.length) {
        return false; // Ограничение не определено для этого ряда
    }

    const maxSelection = maxSelections[rowIndex];
    const selectedCells = Array.from(cell.parentElement.cells).filter(
        (cell) => cell.classList.contains('selected')
    );

    if (selectedCells.length >= maxSelection) {
        return false; // Превышено максимальное количество выделенных ячеек
    }

    // Проверка, что соседние ячейки не выбраны
    const cellIndex = cell.cellIndex;
    const leftCell = cellIndex > 0 ? cell.parentElement.cells[cellIndex - 1] : null;
    const rightCell =
        cellIndex < cell.parentElement.cells.length - 1
            ? cell.parentElement.cells[cellIndex + 1]
            : null;

    return (
        !(
            (leftCell && leftCell.classList.contains('selected')) ||
            (rightCell && rightCell.classList.contains('selected'))
        ) && selectedCells.length < maxSelection
    );
}

// Обновление события click для ячеек
const cells = table.getElementsByTagName('td');
for (const cell of cells) {
    cell.addEventListener('click', toggleCellSelection);
}


function transposeTable() {
    const rows = Array.from(table.rows);
    const numRows = rows.length;
    const numCols = rows[0].cells.length;
    const newTable = new Array(numCols).fill(null).map(() => []);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            newTable[j][i] = rows[i].cells[j].textContent;
        }
    }

    // Удаление пустых строк и столбцов
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

    for (let i = 0; i < numCols; i++) {
        const newRow = table.insertRow(i);
        for (let j = 0; j < numRows; j++) {
            const cell = newRow.insertCell(j);
            cell.textContent = newTable[i][j];
            cell.addEventListener('click', toggleCellSelection);
        }
    }
}

function addRow() {
    const newRow = document.createElement('tr');
    const cols = table.rows[0].cells.length;
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 100);
        cell.addEventListener('click', toggleCellSelection);
        newRow.appendChild(cell);
    }
    table.appendChild(newRow);
}

function addColumn() {
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 100);
        cell.addEventListener('click', toggleCellSelection);
        rows[i].appendChild(cell);
    }
}

transposeButton.addEventListener('click', transposeTable);
addRowButton.addEventListener('click', addRow);
addColumnButton.addEventListener('click', addColumn);

createTable(5);