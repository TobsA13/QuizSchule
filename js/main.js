/**
 * Created by tobias.albert on 27.06.2016.
 */


function generate_html(arr, quest_num){
    var ans = [];
    var r = 0;
    for (var i = 4; i >= 1; i--){
        var r =  Math.floor((Math.random() * i) + 1);
            while(typeof ans[r - 1] !== 'undefined'){
                r++;
            }
        ans[r - 1] = arr[i];

    }
    r--;

    var html = '<div class="quest" id="quest_' + quest_num + '"><div class="question">' + (quest_num + 1) + '. ' + arr[0] + '</div>\n';
    for (i = 0; i < 4; i++){
        html += '<div class="answer"><input type="radio" name="quest' + quest_num + '" id="answer_quest' + quest_num +
            '_' + i + '" data-answer="' + ((r == i) ? 'true' : 'false') + '"><label for="answer_quest' + quest_num + '_' + i + '">' + ans[i] + '</label></div>\n'
    }
    $("#game").append(html);
}

function init_page(){
    shuffle(questions);
    for (var i = 0; i < quest_per_page; i++){
        generate_html(questions[i], i);
    }

    var highscore = Cookies.get('highscore');
    if(highscore != undefined){
        $("#highscore_value").html(highscore);
    } else {
        Cookies.set('highscore', '0', { expires: 365 });
        $("#highscore_value").html("0");
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function check_answers(){
    $( ":radio").prop('disabled', true);
    $( "input[data-answer|='true']").parent().css( "background-color", "rgba(50,255,50, 0.3)" );
    $( "input[data-answer|='false']").parent().css( "background-color", "rgba(255,0,0,0.3)" );
    $( "input[data-answer|='true']:checked").parent().parent().children(".question").css( "color", "limegreen" );
    $( "input[data-answer|='true']:not(:checked)").parent().parent().children(".question").css( "color", "red" );

    var right_answers = $( "input[data-answer|='true']:checked").length;
    $("#score_value").html(right_answers + ' / ' + quest_per_page);
    $("#score").show(400);
    var highscore = Cookies.get('highscore');
    if(highscore < right_answers){
        Cookies.set('highscore', right_answers, { expires: 365 });
        $("#highscore_value").html(right_answers);
    }


}

function restart(){
    location.reload();
}

$( document ).ready(function() {
    init_page();
});