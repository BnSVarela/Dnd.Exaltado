const GetJson = function () {
    var multiz = "";
    var count = 0;

    $('input').each(function (index) {
        if (index > 0) {
            var valu = $(this).val();
            var name = $(this).attr("id");
            var parent = $(this).parent().parent().attr("id");

            if (name !== undefined) {

                if (parent !== undefined) {
                    if (!multiz.includes(parent)) {
                        multiz = multiz + '"' + parent + '" : [{';
                        count = 1;
                    }

                    multiz = multiz + '"' + name + '"' + ' : ' + '"' + valu + '",';
                }
                else {
                    if (count === 1) {
                        multiz = multiz.replace(/,\s*$/, "");
                        multiz = multiz + '}],';
                        count = 0;
                    }

                    multiz = multiz + '"' + name + '"' + ' : ' + '"' + valu + '",';
                }

            }
            else {
                if (count === 1) {
                    multiz = multiz.replace(/,\s*$/, "");
                    multiz = multiz + '}],';
                    count = 0;
                }

                multiz = multiz.replace(/,\s*$/, "");
            }
        }
    });

    var json = '{' + multiz + '}';

    return json;
};  


