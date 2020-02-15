const GetJson = function () {
    var multiz = "";
    var count = 0;

    $('input').each(function (index) {
        if (index > 0) {
            var value = $(this).val();
            var chk = $(this).is(":checked");
            var name = $(this).attr("id");
            var inputType = $(this).attr("type");
            var parent = $(this).parent().parent().attr("id");

            if (value === "on")
                value = chk;

            if (value === "")
                value = null;

            if (name !== undefined) {

                if (parent !== undefined) {
                    if (!multiz.includes(parent)) {
                        multiz = multiz + '"' + parent + '" : {'; 
                        count = 1;
                    }

                    if (inputType !== "text" && inputType !== "date") {
                        multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
                    } else {
                        multiz = multiz + '"' + name + '"' + ' : ' + '"' + value + '",';
                    }
                }
                else {
                    if (count === 1) {
                        multiz = multiz.replace(/,\s*$/, "");
                        multiz = multiz + '},';
                        count = 0;
                    }

                    if (inputType !== "text" && inputType !== "date") {
                        multiz = multiz + '"' + name + '"' + ' : ' + value + ',';
                    } else {
                        multiz = multiz + '"' + name + '"' + ' : ' + '"' + value + '",';
                    }
                    
                }

            }
            else {
                if (count === 1) {
                    multiz = multiz.replace(/,\s*$/, "");
                    multiz = multiz + '},';
                    count = 0;
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