url = 'https://makeup-api.herokuapp.com/api/v1/products.json'
var form_check = document.querySelector('.search')
form_check.addEventListener('submit',(e)=>{
    e.preventDefault()
    var search = document.ruerySelector('[placeholder="Enter the value"]')
    var search_value = search.search_value
    api(1,search_value)
})

async function api(){
v = fetch(url)
try{
out = await v
Prom = out.json()
out1 = await Prom
console.log(out1);


//var parent = document.querySelector('.parent')
//dparent.insertAdjacentElement('beforebegin',img)
for(let i of out1){
    var image_ele = document.createElement('img')
    image_ele.setAttribute('src',i)
    console.log(i);
    parent.append(image_ele)
}
}catch{
    console.log('there is an error');
    console.log(url);
}
    
}

api()