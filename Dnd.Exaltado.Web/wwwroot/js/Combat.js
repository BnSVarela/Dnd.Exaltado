$(function () {

    $('#tabela-xyz').DataTable({
        "paging": false,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "scrollY":"37.5vh"
    });


    $(document).on('click', '#go-to-next-turn', function (e) {
        e.preventDefault();

        $('#turn-value').text('8');
    });
});
