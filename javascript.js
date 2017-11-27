
function getWiki(){
    var search=$('#search').val();

    function setWiki(data){
        //挪动布局
        $('.g-content').css({
            'top':'10%'
        });

        //取得所需数据
        var result=data.query.search;
        var html='';

        //生成元素
        for (var i = 0; i < result.length; i++) {
            html+="<div class='u-wiki'><a class='a-wiki' target='_blank' href='https://en.wikipedia.org/?curid="+result[i].pageid+"'><h2>"+result[i].title+"</h2>"+result[i].snippet+"</a>"+"</div>";
        }

        $('.g-wiki').html(html);
    }

    $.ajax({
        type:'get',
        dataType:'jsonp',
        url:'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+encodeURIComponent(search)+'&utf8=&format=json',
        success:setWiki
    });

}

$(document).ready(function(){
    $('#search').on('keyup',getWiki);
});