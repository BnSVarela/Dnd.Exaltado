$(function () {

    $(document).on('click', '#btn-search-player', function (e) {
        e.preventDefault();
        SearchPlayers();
    });    

    $(document).on('submit', '#PlayersInsert', function (e) {
        e.preventDefault();
        PlayerInsert();
    });  

    $(document).on('click', '#btn-insert-player', function (e) {
        e.preventDefault();
        InsertPlayersPartialView();
    });  

    $(document).on('click', '#btn-view-player', function (e) {
        e.preventDefault();
        ViewPlayersPartialView();
    });  

    const InsertPlayersPartialView = function () {

        var url = "Players/InsertPlayersPartialView";

        $.get(url, function (data) {
            jQuery.noConflict();
            $('#PlayersInsertDiv').html(data);
            $('#PlayersInsert').modal('show');
        });
    };     

    const ViewPlayersPartialView = function () {

        var url = "Players/ViewPlayersPartialView/1";

        $.get(url, function (data) {
            jQuery.noConflict();
            $('#PlayersViewDiv').html(data);
            $('#PlayersView').modal('show');
            $('input', '#PlayersView').attr('readonly',true);
        });
    };     



    const SearchPlayers = function () {

        var url = "Players/SearchPlayers";

        $.get(url, function (data) {
            $('#partial-players').html(data);

            var table = $('#tabela-players').DataTable();

            var columnids = [];

            table.columns().every(function (index) {
                if (this.header().innerHTML.startsWith("_")) {
                    var columnid = {};

                    columnid = index;
                    columnids.push(columnid);
                }
            });

            table.destroy();

            $('#tabela-players').DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "columnDefs": [
                    { "targets": columnids, "visible": false }
                ]
            });


        });
    };  

    const PlayerInsert = function () {

        var json = GetJson();

        console.log(json);

        $.ajax({
            url: "Players/InsertPlayers",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#PlayersInsertClose').click();
                }


            }
        });
    };

  
});
