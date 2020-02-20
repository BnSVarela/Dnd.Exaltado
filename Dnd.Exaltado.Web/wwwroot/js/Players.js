﻿$(function () {

    $(document).on('click', '#btn-search-player', function (e) {
        e.preventDefault();
        SearchPlayers();
    });

    $(document).on('submit', '#PlayersInsert', function (e) {
        e.preventDefault();
        PlayerInsert();
    });

    $(document).on('submit', '#PlayersEdit', function (e) {
        e.preventDefault();
        PlayerEdit();
    });

    $(document).on('click', '#btn-insert-Players', function (e) {
        e.preventDefault();
        InsertPlayersPartialView();
    });

    $(document).on('click', '#btn-view', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        ViewPlayersPartialView(id);
    });

    $(document).on('click', '#btn-delete', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        DeletePlayer(id);
    });

    $(document).on('click', '#btn-edit', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        EditPlayersPartialView(id);
    });



    const InsertPlayersPartialView = function () {
        var url = "Players/InsertPlayerPartialView";

        $.get(url, function (data) {
            $('#PlayersInsertDiv').html(data);
            $('#PlayersInsert').modal('show');

            $('button', '#PlayersInsert .custom-grid').click(function () {
                var table = '#' + $(this).attr('id').replace('btn', 'table');
                AddRow(table, '#PlayersInsert .custom-grid');
            });
        });
    };

    const EditPlayersPartialView = function (id) {
        var url = "Players/EditPlayerPartialView/" + id;

        $.get(url, function (data) {
            $('#PlayersEditDiv').html(data);
            $('#PlayersEdit').modal('show');

            $('button', '#PlayersEdit .custom-grid').click(function () {
                var table = '#' + $(this).attr('id').replace('btn', 'table');
                AddRow(table, '#PlayersEdit .custom-grid');
            });
        });
    };

    const ViewPlayersPartialView = function (id) {
        var url = "Players/ViewPlayerPartialView/" + id;

        $.get(url, function (data) {
            $('#PlayersViewDiv').html(data);
            $('#PlayersView').modal('show');  
            
            $('input', '#PlayersView').attr('readonly', true);
            $('submit', '#PlayersView').hide();
            $('button', '#PlayersView .custom-grid').hide();
            
        });
    };

    const DeletePlayer = function (id) {
        var url = "Players/DeletePlayer/" + id;

        $.get(url, function (data) {
            if (data) {
                window.location.reload();
            }
        });
    };


    const SearchPlayers = function () {

        var url = "Players/SearchPlayers";

        $.get(url, function (data) {
            $('#partial-players').html(data);

            var table = $('#tabela-grid').DataTable();

            var columnids = [];

            table.columns().every(function (index) {
                if (this.header().innerHTML.startsWith("_")) {
                    var columnid = {};

                    columnid = index;
                    columnids.push(columnid);
                }
            });

            table.destroy();

            $('#tabela-grid').DataTable({
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

        var json = GetJson("#PlayersInsert");

        console.log(json);

        $.ajax({
            url: "Players/InsertPlayer",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#PlayersInsertClose').click();
                    window.location.reload();
                }


            }
        });
    };

    const PlayerEdit = function () {

        var json = GetJson("#PlayersEdit");

        console.log(json);

        $.ajax({
            url: "Players/EditPlayer",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#PlayersEditClose').click();
                    window.location.reload();
                }


            }
        });
    };


});
