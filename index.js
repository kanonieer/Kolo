var btnEl = document.querySelector('#btn');
var input = document.querySelector('#input');
var list = document.querySelector('#list');
var count = document.querySelector('#count')
var checked = document.querySelector('#checked');
var marka = document.querySelector('#marka');

var countEl = 0, countElChecked = 0, countAvailable = 0;

function available(all, checked){
    return all - checked;
}
count.textContent = countEl;
checked.textContent = available(countEl,countElChecked);

btnEl.addEventListener('click',function(){
    if(input.value != ""){
     var newEl = document.createElement('li');
     var divModelEl = document.createElement('div');
        var divMarkaEl = document.createElement('div');
        var divEl = document.createElement('div');
     var span = document.createElement('span');
     var btnRemove = document.createElement('button');
     var checkbox = document.createElement('input');

     var obj = {
         model:"",
         marka:""
     };

     // Przycisk Usuń
     btnRemove.innerHTML = "Usuń";
     btnRemove.addEventListener('click', function(){
         list.removeChild(btnRemove.parentNode);
         countEl--;
         count.textContent = countEl;
         checked.textContent = available(countEl,countElChecked);
     });

     // checkbox
     checkbox.type = "checkbox";
     checkbox.addEventListener('click',function(){
         if(checkbox.checked){
             countElChecked++;
             checked.textContent = available(countEl,countElChecked);
             btnRemove.disabled = true;
         }else{
             countElChecked--;
             checked.textContent = available(countEl,countElChecked);;
             btnRemove.disabled = false;
         }
     });

     obj.model = input.value;
     obj.marka = marka.value;

     // dodanie modelu
     divModelEl.textContent = obj.model;
     newEl.appendChild(divModelEl);

     //dodanie marki
     divMarkaEl.textContent = obj.marka;
     newEl.appendChild(divMarkaEl);

     //dodanei checkboxa
     span.textContent = 'Wypożyczony:';
     divEl.appendChild(span);
     divEl.appendChild(checkbox);
     newEl.appendChild(divEl);

     //dodanie przycisku "Usuń"
     newEl.appendChild(btnRemove);

     countEl++;
     count.textContent = countEl;
     checked.textContent = available(countEl,countElChecked);

     list.appendChild(newEl);
    }
});