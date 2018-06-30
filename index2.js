
            let yourAmount = document.querySelector("#yourAmount");
            let fromCurrency = document.querySelector("#fromCurrency");
            let toCurrency = document.querySelector("#toCurrency");
            let ok = document.querySelector('#ok');
      
            let url = 'https://free.currencyconverterapi.com/api/v5/currencies';
      
             fetch( url,{ method : "GET"})
                  .then( function(response){ 
                      return response.json();
                  })
                  .then( function(results){
                      for(let result in results){
                        for(let id in results[result]){
                            let optionA = `
                            <option value="${results[result][id]['id']}">
                               ${results[result][id]['currencyName']} (${results[result][id]['id']})
                            </option>
                            `;
                            let optionB = `
                            <option value="${results[result][id]['id']}">
                               ${results[result][id]['currencyName']} (${results[result][id]['id']})
                            </option>
                            `;
                           fromCurrency.innerHTML += optionA;
                           toCurrency.innerHTML += optionB;
                       }
                     }
                  })
                  .catch( function(error){
                      console.log(error);
                  });
                  
         // convrtion done
         ok.addEventListener("click", convertCurrency);
      
         function convertCurrency(){
              let query = fromCurrency.value + '_' + toCurrency.value;
      
              fetch("https://free.currencyconverterapi.com/api/v5/convert?q=" + query + "&compact=ultra", {method : "GET"})
                .then(response => response.json())
                .then(data => {
                 for(con in data){
                    console.log(data[con]);
                    output.innerHTML = `<input type="text" class="u-full-width" value="${data[con]}">`;
                 }
                })
                .catch(error => console.log(error));
      
           console.log(fromCurrency.value);
           console.log(toCurrency.value);
         }
        
   