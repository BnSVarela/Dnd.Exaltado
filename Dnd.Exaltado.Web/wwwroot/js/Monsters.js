$(function () {

    $(document).on('click', '#btn-search-monsters', function (e) {
        e.preventDefault();
        SearchMonsters();
    });

    $(document).on('submit', '#MonstersInsert', function (e) {
        e.preventDefault();
        MonstersInsert();
    });

    $(document).on('submit', '#MonstersEdit', function (e) {
        e.preventDefault();
        MonstersEdit();
    });

    $(document).on('click', '#btn-insert-Monsters', function (e) {
        e.preventDefault();
        InsertMonstersPartialView();
    });

    $(document).on('click', '#btn-view', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        ViewMonstersPartialView(id);
    });

    $(document).on('click', '#btn-delete', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        DeleteMonsters(id);
    });

    $(document).on('click', '#btn-edit', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        EditMonstersPartialView(id);
    });



    const InsertMonstersPartialView = function () {
        var url = "Monsters/InsertMonstersPartialView";

        $.get(url, function (data) {
            $('#MonstersInsertDiv').html(data);
            $('#MonstersInsert').modal('show');

            $('button', '#MonstersInsert .custom-grid').click(function () {
                var table = '#' + $(this).attr('id').replace('btn', 'table');
                AddRow(table, '#MonstersInsert .custom-grid');
            });
        });
    };

    const EditMonstersPartialView = function (id) {
        var url = "Monsters/EditMonstersPartialView/" + id;

        $.get(url, function (data) {
            $('#MonstersEditDiv').html(data);
            $('#MonstersEdit').modal('show');

            $('button', '#MonstersEdit .custom-grid').click(function () {
                var table = '#' + $(this).attr('id').replace('btn', 'table');
                AddRow(table, '#MonstersEdit .custom-grid');
            });
        });
    };

    const ViewMonstersPartialView = function (id) {
        var url = "Monsters/ViewMonstersPartialView/" + id;

        $.get(url, function (data) {
            $('#MonstersViewDiv').html(data);
            $('#MonstersView').modal('show');

            $('input', '#MonstersView').attr('readonly', true);
            $('submit', '#MonstersView').hide();
            $('button', '#MonstersView .custom-grid').hide();

        });
    };

    const DeleteMonsters = function (id) {
        var url = "Monsters/DeleteMonsters/" + id;

        $.get(url, function (data) {
            if (data) {
                window.location.reload();
            }
        });
    };


    const SearchMonsters = function () {

        var url = "Monsters/SearchMonsters";

        $.get(url, function (data) {
            $('#partial-monsters').html(data);

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

    const MonstersInsert = function () {

        var json = GetJson("#MonstersInsert");

        console.log(json);

        $.ajax({
            url: "Monsters/InsertMonsters",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#MonstersInsertClose').click();
                    window.location.reload();
                }


            }
        });
    };

    const MonstersEdit = function () {

        var json = GetJson("#MonstersEdit");

        console.log(json);

        $.ajax({
            url: "Monsters/EditMonsters",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#MonstersEditClose').click();
                    window.location.reload();
                }


            }
        });
    };


});
