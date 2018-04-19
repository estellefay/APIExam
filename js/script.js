// Generer aleatoirement des biere de differente teneur en aclool

$(document).ready(function() {
    // Afficher la première page de bière 
    $('#a').on('click', function() {

        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers/random", function(response) {

            
        });
    });
    $('#b').on('click', function() { 
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?abv_lt=6", function(response) { 
            
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('beerInfo');
            let containerDiv2 = document.createElement('div');
            containerDiv2.classList.add('beerInfo2');
            let elementName = document.createElement('h2');  
            elementName.classList.add('beerName');      
            let elementTagline = document.createElement('h4');
            elementTagline.classList.add('beerTagline');
            let elementDescription = document.createElement('p');
            elementDescription.classList.add('beerDescription');
            let elementAlcool = document.createElement('h3')
            elementAlcool.classList.add('beerAlcool')
            let imageBeer = document.createElement('img');
            imageBeer.classList.add('beerImg');

            if (response[0].image_url == undefined) {
                console.log('pas image');
              } else { 
                imageBeer.src = response[0].image_url; // ajouter une image à la variable
            }
            elementName.innerHTML = response[0].name;
            elementTagline.innerHTML = response[0].tagline;
            elementDescription.innerHTML = response[0].description;
            elementAlcool.innerHTML = response[0].abv;
        

            containerDiv2.append(elementName);
            containerDiv2.append(elementTagline);
            containerDiv2.append(elementDescription);
            containerDiv2.append(elementAlcool)
            containerDiv.append(containerDiv2);
            containerDiv.append(imageBeer);
            

            $('#resultList').append(containerDiv);
      })            
    })

    $('#c').on('click', function() { 
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?abv_lt=10&abv_gt=6", function(response) { 
            
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('beerInfo');
            let containerDiv2 = document.createElement('div');
            containerDiv2.classList.add('beerInfo2');
            let elementName = document.createElement('h2');  
            elementName.classList.add('beerName');      
            let elementTagline = document.createElement('h4');
            elementTagline.classList.add('beerTagline');
            let elementDescription = document.createElement('p');
            elementDescription.classList.add('beerDescription');
            let elementAlcool = document.createElement('h3')
            elementAlcool.classList.add('beerAlcool')
            let imageBeer = document.createElement('img');
            imageBeer.classList.add('beerImg');

            if (response[0].image_url == undefined) {
                console.log('pas image');
              } else { 
                imageBeer.src = response[0].image_url; // ajouter une image à la variable
            }
            elementName.innerHTML = response[0].name;
            elementTagline.innerHTML = response[0].tagline;
            elementDescription.innerHTML = response[0].description;
            elementAlcool.innerHTML = response[0].abv;
        

            containerDiv2.append(elementName);
            containerDiv2.append(elementTagline);
            containerDiv2.append(elementDescription);
            containerDiv2.append(elementAlcool)
            containerDiv.append(containerDiv2);
            containerDiv.append(imageBeer);
            

            $('#resultList').append(containerDiv);
      })            
    })
    $('#d').on('click', function() { 
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?abv_gt=10", function(response) { 
            
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('beerInfo');
            let containerDiv2 = document.createElement('div');
            containerDiv2.classList.add('beerInfo2');
            let elementName = document.createElement('h2');  
            elementName.classList.add('beerName');      
            let elementTagline = document.createElement('h4');
            elementTagline.classList.add('beerTagline');
            let elementDescription = document.createElement('p');
            elementDescription.classList.add('beerDescription');
            let elementAlcool = document.createElement('h3')
            elementAlcool.classList.add('beerAlcool')
            let imageBeer = document.createElement('img');
            imageBeer.classList.add('beerImg');

            if (response[0].image_url == undefined) {
                console.log('pas image');
              } else { 
                imageBeer.src = response[0].image_url; // ajouter une image à la variable
            }
            elementName.innerHTML = response[0].name;
            elementTagline.innerHTML = response[0].tagline;
            elementDescription.innerHTML = response[0].description;
            elementAlcool.innerHTML = response[0].abv;
        

            containerDiv2.append(elementName);
            containerDiv2.append(elementTagline);
            containerDiv2.append(elementDescription);
            containerDiv2.append(elementAlcool)
            containerDiv.append(containerDiv2);
            containerDiv.append(imageBeer);
            

            $('#resultList').append(containerDiv);
      })            
    })
});


/* let list = document.createElement('ul')

for (let i = 0; i < response.length; i++) {
  let listElement = document.createElement('li');
  listElement.classList.add('noneDecoration')
  listElement.innerHTML = response[i].name;
  list.append(listElement);     
};   */

//https://api.punkapi.com/v2/beers?abv_lt=6&abv_gt=7 gérée les ajout de parametre 