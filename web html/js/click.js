$(document).ready(function () {
    var counts = 0;
    var time = 0;
    var firstHit = true;
    var intervalId = undefined;
    $("#setTimeButton").click(function () {
        time = $("#timerInput").val() >= 0 ? Number($("#timerInput").val()) : 0;
        $("#timerSpan").html(time);
        firstHit = true;
        $("#plus").removeClass("disabled");
        $("#minus").removeClass("disabled");
    });
    $(".counts").on('focusout', function () {
        counts = +this.value;
        var counts1 = '';
        if (Math.abs(counts) < 10) {
            counts1 = "0" + Math.abs(counts)
        } else {
            counts1 = Math.abs(counts);
        }
        if (counts < 0) {
            counts1 = "-" + counts1;
        }
        $(".counts").val(counts1);
    });
    $("#plus").click(function () {
        counts += +1;
        var counts1 = '';
        if (Math.abs(counts) < 10) {
            counts1 = "0" + Math.abs(counts)
        } else {
            counts1 = Math.abs(counts);
        }
        if (counts < 0) {
            counts1 = "-" + counts1;
        }
        $(".counts").val(counts1);
        if (firstHit && time > 0) {
            $("#timerInput").prop('disabled', true);
            $("#setTimeButton").prop('disabled', true);
            intervalId = setInterval(function () {
                if (time > 1) {
                    time--;
                    $("#timerSpan").html(time);
                } else {
                    time--;
                    $("#timerSpan").html(time);
                    time = -1;
                    clearInterval(intervalId);
                    intervalId = undefined;
                    $("#timerInput").prop('disabled', false);
                    $("#setTimeButton").prop('disabled', false);
                    $("#plus").addClass("disabled");
                    $("#minus").addClass("disabled");
                }
            }, 1000);
        }
        firstHit = false;
    });

    $("#minus").click(function () {
        counts -= +1;
        var counts1 = '';
        if (Math.abs(counts) < 10) {
            counts1 = "0" + Math.abs(counts)
        } else {
            counts1 = Math.abs(counts);
        }
        if (counts < 0) {
            counts1 = "-" + counts1;
        }
        $(".counts").val(counts1);
        if (firstHit && time > 0) {
            $("#timerInput").prop('disabled', true);
            $("#setTimeButton").prop('disabled', true);
            intervalId = setInterval(function () {
                if (time > 1) {
                    time--;
                    $("#timerSpan").html(time);
                } else {
                    time--;
                    $("#timerSpan").html(time);
                    time = -1;
                    clearInterval(intervalId);
                    intervalId = undefined;
                    $("#timerInput").prop('disabled', false);
                    $("#setTimeButton").prop('disabled', false);
                    $("#plus").addClass("disabled");
                    $("#minus").addClass("disabled");
                }
            }, 1000);
        }
        firstHit = false;
    });

    $(".reset").click(function (e) {
        document.location.reload();
    });
});