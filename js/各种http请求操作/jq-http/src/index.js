import $ from "jquery";

import mark from "marked";

$("#ajax").click((e)=>{
    $.ajax(`/ajax.md`,{
        success: mktohtml
    });
})

$("#load").click((e)=>{
    $("#markdown").load(
        '/load.md',
        function(res){
            return mktohtml(res);
        }
    )
})

$("#get").click((e)=>{
    $.get(
        '/get.md',
        mktohtml
    )
})

$("#getjson").click((e)=>{
    $.ajax(`/getJSON.md`,{
        success: mktohtml
    });
})

$("#post").click((e)=>{
    $.getJSON(
        '/package.md',
        mktohtml
    )
})

function mktohtml(res) {
    console.log(res);
    $("#markdown").html(mark(res));
}

$(".list-group>button").click((e)=>{
    $(".list-group-item-info").removeClass("list-group-item-info");
    return e.target.classList.add("list-group-item-info");
})