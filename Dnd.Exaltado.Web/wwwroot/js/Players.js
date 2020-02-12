$(function () {

    $(document).on('click', '#btn-search-player', function (e) {
        SearchPlayers();
    });

    const SearchPlayers = function () {

        var url = "Players/SearchPlayers";

        $.get(url, function (data) {
            $('#partial-players').html(data);

            $('#tabela-players').DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true
            });
        })
            .fail(function () {

            })
            .always(function () {

            });       
    };




});
