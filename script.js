var main =document.createElement('div');
main.setAttribute('class','container p-3 my-3 bg-secondary');
document.body.append(main);

var heading =document.createElement('H1');
heading.setAttribute('class','Bootstrap heading');
heading.innerHTML = 'Search Movies';
main.appendChild(heading);

var input =document.createElement('input');
input.setAttribute('class','form-control ');
input.setAttribute('id','input1');
input.setAttribute('type','search')
input.setAttribute('name','search')
input.setAttribute('placeholder','Enter movie name...');
heading.appendChild(input);

var btn=document.createElement("button")
btn.setAttribute('class','btn btn-success');
btn.setAttribute('type','button');
btn.setAttribute('id','button');
btn.innerText="Search"
heading.appendChild(btn);

var div1 = document.createElement('div');
div1.setAttribute('class','row p-6');
main.appendChild(div1);

var img  = document.createElement("IMG");
img.setAttribute('class','img-fluid p-3');
img.setAttribute('id','poster');
div1.appendChild(img);

var div12 = document.createElement('div');
div12.setAttribute('class','p-3 mb-2 text-white');
div12.setAttribute('id','details');
div1.appendChild(div12);

var btn = document.getElementById('button');

    btn.addEventListener("click",()=>{
    var name=document.getElementById("input1");
    title=name.value;
    console.log(title);
    var url=`https://www.omdbapi.com/?t=${title}&apikey=b4073afc`
    async function search(){
        try{

            var omdbAPI=await fetch(url);
            var data=await omdbAPI.json();
            console.log(data);
            //console.log(data.Poster);
            
            var image=document.getElementById('poster');
            image.src=data.Poster;

            var movieDetails=document.getElementById("details");
            movieDetails.innerHTML=`<div font size="xx-large"><b>${data.Title}</b></div><br>
                        <b>IMDB Ratings:  </b> ${JSON.stringify(data.Ratings[0].Value).replace(/\"/g, "")}<br>
                        <b>Actors:&nbsp</b>${data.Actors}<br> 
                        <b>Director:&nbsp </b>${data.Director}<br>
                        <b>Production:&nbsp </b>${data.Production}<br>
                        <b>Year:&nbsp </b>${data.Year}<br>
                        <b>Genre:&nbsp</b>${data.Genre}<br>
                        <b>Runtime:&nbsp</b>${data.Runtime}<br>
                        <b>BoxOffice:&nbsp</b>${data.BoxOffice}<br> `;

        }catch(err){
               alert(err);  
        }
    }
    search();
    
})
