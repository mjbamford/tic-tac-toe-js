const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

document.addEventListener('DOMContentLoaded', function() {
    var tds = document.querySelectorAll('td');

    const handler = function(event) {
        event.stopPropagation();
        const id = event.target.id - 1,
              row = Math.floor(id / 3),
              col = id % 3;
        // event.target.textContent = 'x';
    };


    // tds.forEach(function(td) {
    //     td.addEventListener('click', handler);
    // });

    const table = document.querySelector('table');
    table.addEventListener('click', handler);
});