//checkbox被click時啟動事件聆聽
$("input[type=checkbox]").click(function () {
    var $count = $("input[type=checkbox]:checked").length;
    var $not = $('input[type=checkbox]').not(':checked')

    //click 超過6個時，沒被選取的checkbox加上disabled屬性
    if ($count >= 6) {
        $not.attr("disabled", true);
    } else {

        //6個以下時關閉disabled屬性
        $not.attr("disabled", false);
    }
});

//取得checked的值
$(function () {
    $("#self-button").click(function () {
        $('.result1_6').empty();
        $('[name="num"]:checked').each(function (index, element) {
            $('.result1_6').append(+ $(element).val() + ', ');
        });
    });
});


//電腦選號：不重複6數字
$("#auto-button").click(function () {
    var numbers = $.map(Array(49), function (_, i) { return i + 1; }).sort(function () { return 0.5 - Math.random(); });
    var randomNumbers = numbers.slice(0, 6);
    $(".pcnumber1_6").text(randomNumbers.join(", "));
});

//中獎號碼：不重複6數字
var count = 0;
$("#draw-button").click(function () {
    var numbers = $.map(Array(49), function (_, i) { return i + 1; }).sort(function () { return 0.5 - Math.random(); });
    var randomNumbers = numbers.slice(0, 6);

    $(".lottery1_6").text(randomNumbers.join(", "));
    count++;
    $("#click-count").text(count);
});

//自動對獎：自選號碼 比對 中獎號碼
$("#compare-button1").click(function () {
    var lotteryNumbers = $('.lottery1_6').text().split(', ');
    var resultNumbers = $('.result1_6').map(function () {
        return $(this).text();
    }).get();

    var isMatched = false;
    for (var i = 0; i < lotteryNumbers.length; i++) {
        if (resultNumbers.includes(lotteryNumbers[i])) {
            isMatched = true;
            break;
        }
    }
    if (isMatched) {
        alert('恭喜您，中獎了！中獎號碼：' + lotteryNumbers.join(', '));
    } else {
        alert('很抱歉，您沒有中獎。');
    }
});



//自動對獎：電腦選號 比對 中獎號碼
$("#compare-button2").click(function () {
    var pcNumbers = $(".pcnumber1_6").text().split(", ");
    var lotteryNumbers = $(".lottery1_6").text().split(", ");
    var matchingNumbers = pcNumbers.filter(function (num) {
        return lotteryNumbers.indexOf(num) !== -1;
    });
    if (matchingNumbers.length > 0) {
        alert("恭喜您中獎了！中獎號碼為：" + matchingNumbers.join(", "));
    } else {
        alert("很抱歉，您沒有中獎。");
    }
});