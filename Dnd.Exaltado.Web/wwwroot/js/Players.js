﻿$(function () {

    $(document).on('click', '#btn-search-player', function (e) {
        e.preventDefault();
        SearchPlayers();
    });    

    $(document).on('submit', '#PlayersInsert', function (e) {
        e.preventDefault();
        PlayerInsert();
    });  


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

        $.ajax({
            url: "Players/InsertPlayers",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            data: json,
            success: function (data) {
                if (data) {
                    debugger;
                }


            }
        });
    };

  
});
