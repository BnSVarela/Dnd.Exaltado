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
        var id = $(this).attr('value');
        InsertPlayersPartialView(id);
    });  

    $(document).on('click', '#btn-view-player', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');        
        ViewPlayersPartialView(id);
    });  

    $(document).on('click', '#btn-delete-player', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        DeletePlayer(id);
    }); 

    $(document).on('click', '#btn-edit-player', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        EditPlayersPartialView(id);
    });  
    
    $(document).on('submit', '#PlayersEdit', function (e) {
        e.preventDefault();
        PlayerEdit();
    });  
    
    const InsertPlayersPartialView = function (id) {
        var Div = "#DivId_" + id;

        var url = "Players/InsertPlayerPartialView";

        $.get(url, function (data) {
            jQuery.noConflict();
            $('#PlayersInsertDiv').html(data);
            $('#PlayersInsert').modal('show');
            $(Div, '#PlayersInsert').hide();
        });
    };     

    const EditPlayersPartialView = function (id) {
        var Div = "#DivId_" + id;

        var url = "Players/EditPlayerPartialView/" + id;

        $.get(url, function (data) {
            jQuery.noConflict();
            $('#PlayersEditDiv').html(data);
            $('#PlayersEdit').modal('show');
            $(Div, '#PlayersEdit').hide();
        });
    };     

    const ViewPlayersPartialView = function (id) {      
        var Div = "#DivId_" + id;

        var url = "Players/ViewPlayerPartialView/" + id;

        $.get(url, function (data) {
            jQuery.noConflict();
            $('#PlayersViewDiv').html(data);
            $('#PlayersView').modal('show');
            $('input', '#PlayersView').attr('readonly', true);
            $(Div, '#PlayersView').hide();
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
            url: "Players/InsertPlayer",
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

    const PlayerEdit = function () {

        var json = GetJson();
        
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
                }


            }
        });
    };

  
});
