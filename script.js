window.onload = function () {

  document.querySelector('.button').addEventListener('click', function() {
    var charName = document.querySelector('.person_search').value;
    var api = "https://swapi.dev/api/";
    var url = api + "people/?search=" + charName; 

    if(charName.length > 0) {
      var request = new XMLHttpRequest();

      request.addEventListener("load", function () {
      
      var response = JSON.parse(request.response); 
      console.log(response);
 
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
      
      var listItem = document.createElement('li');
      var listItemText = document.createTextNode(response.results[0].name);  
      listItem.appendChild(listItemText);
      document.querySelector('.search_result').appendChild(listItem);

      listItem.addEventListener('click', function() {
        document.querySelector('#name').innerHTML = response.results[0].name;
        document.querySelector('#height').innerHTML = response.results[0].height;
        document.querySelector('#mass').innerHTML = response.results[0].mass;
        document.querySelector('#birth_year').innerHTML = response.results[0].birth_year;
        document.querySelector('#films_count').innerHTML = response.results[0].films.length;
      })
      
      });
      charName = "";
      request.open("get", url);
      request.send();
      document.querySelector('.person_search').value = '';
    }
    else {
      alert('Вы ничего не ввели!');
    }
  }) 
};
