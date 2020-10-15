window.onload = function () {
  
  var api = "https://swapi.dev/api/";
  var search = document.querySelector('#person_search_input');
  var button = document.querySelector('.button');
     
  var url = api + "people/?search="; 

  var request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    
    
    var response = JSON.parse(request.response); 
    console.log(response);

    var result = response.results;
    console.log(result);
    
    
    if (request.status !== 200) {
      alert(
        "Произошла ошибка при получении ответа от сервера:\n\n" +
          response.message
      );
      return;
      }
    
    if (response.count == 0) {
      alert("К сожалению, данные не получены по запросу: " + url);
      return;
    }

    button.addEventListener('click', function() {
      return search.value;
    })

    for (i = 0; i < result.length; i++) {
      console.log(result[i].name)
      if ((result[i].name).indexOf(search.value) > -1) {
        console.log(result[i].name);
      }
    }
    
  });

  request.open("get", url);
  request.send();
};