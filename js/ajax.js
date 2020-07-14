// 封装jQuery的ajax
// 请求方式、请求地址、携带参数、响应内容
var baseURL = 'http://47.100.164.178:8099'
function myAjax(url,method,param,successHandle,errorHandle){
  $.ajax({
    url:baseURL + url,
    method:method,
    data:param,
    success:successHandle,
    error:errorHandle
  })
}