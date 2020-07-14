$(function(){
  console.log(1111)
  $('.right-content').load('./pages/home.html')
  $(".left-nav li:contains('首页')").css({
    backgroundColor:'rgb(240,242,245)',
    color:'#333'
  })
  $('.left-nav li').click(function(){
    var text = $(this).text();
    if (text == '首页'){
      console.log(1);
      $('.right-content').load('./pages/home.html')
    }else if (text == '栏目管理'){
      $('.right-content').load('./pages/category.html')
    }else if (text == '文章管理'){
      $('.right-content').load('./pages/article.html')
    }else if (text == '用户管理'){
      $('.right-content').load('./pages/user.html')
    }else if (text == '评论管理'){
      $('.right-content').load('./pages/comment.html')
    }else{
      return
    }
    $(this).css({
      backgroundColor:'rgb(240,242,245)',
      color:'#333'
    })
    $(this).siblings().css({
      backgroundColor:'rgb(48,65,86)',
      color:'#ccc'
    })
  })
});