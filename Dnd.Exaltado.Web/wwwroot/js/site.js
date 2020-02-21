const GetJson = function (modal) {
    var multiz = "";
    var OldObj = "";
    var OldGrid = "";
    var GridFirstProp = "";

    $('input', modal).each(function () {
        var value = $(this).val();
        var chk = $(this).is(":checked");
        var name = $(this).attr("id");
        var inputType = $(this).attr("type");
        var IdObject = $(this).parent().parent().attr("id");

        var IdGrid = $(this).parent().parent().parent().parent().parent().parent().parent().parent().attr("id");

        if (IdGrid !== undefined) {
            if (IdGrid.includes("Div")) {
                IdGrid = undefined;
            }
        }

        if (value === "on")
            value = chk;

        if (value === "")
            value = null;

        if (IdObject !== undefined) {

            if (OldObj !== IdObject && OldObj !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '},';
            }

            if (OldGrid !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '}],';
                OldGrid = "";
            }

            if (GridFirstProp !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '},{';
                GridFirstProp = "";
            }

            if (!multiz.includes(IdObject)) {
                multiz = multiz + '"' + IdObject + '" : {';
                OldObj = IdObject;
            }

            if (value === null) {
                multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
            }
            else if (inputType !== "text" && inputType !== "date") {
                multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
            } else {
                multiz = multiz + '"' + name + '"' + ' : ' + '"' + value + '",';
            }

        }
        else if (IdGrid !== undefined) {

            if (OldObj !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '},';
                OldObj = "";
            }

            if (OldGrid === IdGrid && GridFirstProp === name) {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '},{';
                GridFirstProp = "";

            }

            if (OldGrid !== IdGrid && OldGrid !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '}],';
            }

            if (!multiz.includes(IdGrid)) {
                multiz = multiz + '"' + IdGrid + '" : [{';
                OldGrid = IdGrid;
                GridFirstProp = name;
            }

            if (value === null) {
                multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
            }
            else if (inputType !== "text" && inputType !== "date") {
                multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
            } else {
                multiz = multiz + '"' + name + '"' + ' : ' + '"' + value + '",';
            }

        }
        else {
            if (OldObj !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '},';
                OldObj = "";
            }

            if (GridFirstProp !== "") {
                multiz = multiz.replace(/,\s*$/, "");
                multiz = multiz + '},{';
                GridFirstProp = "";
            }

            if (value === null) {
                multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
            }
            else if (inputType !== "text" && inputType !== "date") {
                multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
            } else {
                multiz = multiz + '"' + name + '"' + ' : ' + '"' + value + '",';
            }

        }
    });

    if (GridFirstProp !== "" && OldGrid === "") {
        multiz = multiz.replace(/,\s*$/, "");
        multiz = multiz + '},';
        GridFirstProp = "";
    }

    if (OldObj !== "") {
        multiz = multiz.replace(/,\s*$/, "");
        multiz = multiz + '},';
        OldObj = "";
    }

    if (OldGrid !== "") {
        multiz = multiz.replace(/,\s*$/, "");
        multiz = multiz + '}],';
        OldGrid = "";
    }

    multiz = multiz.replace(/,\s*$/, "");

    var json = '{' + multiz + '}';

    return json;
};

const AddRow = function (table, modal) {

    var $mytable = $(table, modal).find("tbody");
    $last_row = $mytable.find("tr:last");
    $new_row = $last_row.clone().find('input').val(null).end();
    $last_row.after($new_row);

};

const ShowLoading = function() {
    $('#_LoadingModal').modal('show');
};

const HideLoading = function() {
    $('#_LoadingModal').modal('hide');
};

const Estrutura = function (name) {

    $(document).on('click', '#btn-search-' + name, function (e) {
        e.preventDefault();
        Search();
    });

    $(document).on('submit', '#' + name + 'Insert', function (e) {
        e.preventDefault();
        Insert();
    });

    $(document).on('submit', '#' + name + 'Edit', function (e) {
        e.preventDefault();
        Edit();
    });

    $(document).on('click', '#btn-insert-' + name, function (e) {
        e.preventDefault();
        InsertPartialView();
    });

    $(document).on('click', '#btn-view', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        ViewPartialView(id);
    });

    $(document).on('click', '#btn-edit', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        EditPartialView(id);
    });

    $(document).on('click', '#btn-delete', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        Delete(id);
    });

    const Search = function () {
        ShowLoading();

        var url = name + "/Search";

        $.get(url, function (data) {
            $('#partial-' + name).html(data);

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

        }).always(function () {            
            HideLoading();
        });
    };

    const InsertPartialView = function () {
        ShowLoading();

        var url = name + "/InsertPartialView";

        $.get(url, function (data) {
            $('#' + name + 'InsertDiv').html(data);
            $('#' + name + 'Insert').modal('show');
        }).done(function () {
            $('button', '#' + name + 'Insert .custom-grid').click(function () {
                var table = '#' + $(this).attr('id').replace('btn', 'table');
                AddRow(table, '#' + name + 'Insert .custom-grid');
            });
        }).always(function () {
            HideLoading();
        });  
    };

    const EditPartialView = function (id) {
        ShowLoading();

        var url = name + "/EditPartialView/" + id;

        $.get(url, function (data) {
            $('#' + name + 'EditDiv').html(data);
            $('#' + name + 'Edit').modal('show');
        }).done(function () {
            $('button', '#' + name + 'Edit .custom-grid').click(function () {
                var table = '#' + $(this).attr('id').replace('btn', 'table');
                AddRow(table, '#' + name + 'Edit .custom-grid');
            });
        }).always(function () {
            HideLoading();
        });        
    };

    const ViewPartialView = function (id) {
        ShowLoading();
        var url = name + "/ViewPartialView/" + id;

        $.get(url, function (data) {
            $('#' + name + 'ViewDiv').html(data);
            $('#' + name + 'View').modal('show');
        }).done(function () {
            $('input', '#' + name + 'View').attr('readonly', true);
            $('button', '#' + name + 'View .custom-grid').hide();
        }).always(function () {
            HideLoading();
        });        
    };

    const Delete = function (id) {
        ShowLoading();
        var url = name + "/Delete/" + id;

        $.get(url, function (data) {
            if (data) {
                window.location.reload();
            }
        }).always(function () {
            HideLoading();
        });
    };

    const Insert = function () {
        ShowLoading();
        var json = GetJson("#" + name + "Insert");

        console.log(json);

        $.ajax({
            url: name + "/Insert",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#' + name + 'InsertClose').click();
                    window.location.reload();
                }


            }
        }).always(function () {
            HideLoading();
        });
    };

    const Edit = function () {
        ShowLoading();
        var json = GetJson("#" + name + "Edit");

        console.log(json);

        $.ajax({
            url: name + "/Edit",
            type: "POST",
            contentType: 'application/json',
            accept: 'application/json',
            dataType: "json",
            data: json,
            success: function (data) {
                if (data) {
                    $('#' + name + 'EditClose').click();
                    window.location.reload();
                }


            }
        }).always(function () {
            HideLoading();
        });
    };


};

