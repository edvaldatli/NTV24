let number = parseInt(localStorage.getItem('number')) || 0;
let limit = parseInt(localStorage.getItem('limit')) || 35;

$(function () {

    $('#numberContainer').text(number);
    $('#limitInput').val(limit);

    const updateDisplayNumber = newNumber => {
        $('#numberContainer').text(newNumber);
        localStorage.setItem('number', newNumber)
    }

    const checkKaboom = () => {
        if (number >= limit || number <= (limit * -1)) {
            $('#kaboom').addClass('opacity-100')
        } else {
            $('#kaboom').removeClass('opacity-100');
        }
    }

    $('#limitInput').on('input', () => {
        limit = $('#limitInput').val();
        checkKaboom();
        localStorage.setItem('limit', limit);
    })

    $('#btn-increment').on('click', () => {
        number = number + 5;
        checkKaboom();
        updateDisplayNumber(number)
    })

    $('#btn-decrement').on('click', () => {
        number = number - 5;
        checkKaboom()
        updateDisplayNumber(number);
    })
});