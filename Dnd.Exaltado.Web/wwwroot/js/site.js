const GetJson = function () {
    var multiz = "";
    var OldObj = "";
    var OldGrid = "";
    var GridFirstProp = "";

    $('input').each(function (index) {
        if (index > 0) {
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

            if (name !== undefined) {

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
                    else if (inputType !== "text" && inputType !== "date"){
                        multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
                    } else {
                        multiz = multiz + '"' + name + '"' + ' : ' + '"' + value + '",';
                    }

                }

            }

            else {

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
            }
        }
    });

    var json = '{' + multiz + '}';

    return json;
};

const AddRow = function (table) {

    var $mytable = $(table).find("tbody");
    $last_row = $mytable.find("tr:last");
    $new_row = $last_row.clone().find('input').val(null).end();
    $last_row.after($new_row);

};