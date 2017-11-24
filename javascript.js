var search=$('#search').val();

function setWiki(data){
    var result=data.query.search;
    var html='';

    for (var i = 0; i < result.length; i++) {
        html+="<div class='u-wiki'><a class='a-wiki' target='_blank' href='https://en.wikipedia.org/?curid="+result[i].pageid+"'><h2>"+result[i].title+"</h2>"+result[i].snippet+"</a>"+"</div>";
    }

    $('.g-wiki').html(html);
}

$(document).ready(function(){
    $.ajax({
        type:'get',
        dataType:'jsonp',
        url:'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert&utf8=&format=json',
        success:function(data){
            console.log(data);
            setWiki(data);
        }
    });
});