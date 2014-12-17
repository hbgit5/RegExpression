$(document).ready(function(){
 
    
    $('#submit').click(changeStuff);

function changeStuff() {
    var RegExpHolder =/^([a-z0-6]*) ([a-z\-\*]+) ([a-z0-9]+)/i
    var change = $(".changer").val();
    var matches_array =change.match(RegExpHolder);
    console.log(matches_array);
    var element_val = matches_array[1];
    var prop_name = matches_array[2];
    var prop_val = matches_array[3];
    
    $(element_val).css(prop_name, prop_val);
}
});