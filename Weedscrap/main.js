
results = null ;
fetch("http://127.0.0.1:5000/hello")
    .then(res => res.json())
    .then((out) => {
        out=JSON.parse(out);
<<<<<<< HEAD
        
=======
>>>>>>> d5eed40ef4801922d0b6922ac6478fd17f876d08
        console.log('Output: ', out);
        cartdiv= document.getElementsByClassName("table table-hover shadow p-3 mb-5  rounded ");
        cartdiv=cartdiv[0];
                document.getElementById("tr").innerHTML = '<tr><th scope="col"><h3>Nom</h3></th><th scope="col"><h3>type</h3></th><th scope="col"><h3>Prix</h3></th><th scope="col"><h3>Note</h3></th><th scope="col"><h3>lien</h3></th></tr>'


        tr=document.getElementById("tr")      
        for (var i=0;i<out.length;i++){
            console.log(out[i])
            var div= document.createElement("tr");
            var tagnom = document.createElement("td");
            var tagtype = document.createElement("td");
            var tagprix = document.createElement("td");
            var tagnote = document.createElement("td");
            var taglien = document.createElement("td");
            var tagalien = document.createElement("a")
            var nom = document.createTextNode(out[i].nom);
            var type = document.createTextNode(out[i].type);
            var prix = document.createTextNode(out[i].prix);
            var note = document.createTextNode(out[i].rate);
            var lien = document.createTextNode(out[i].lien);
            tagnom.appendChild(nom);
            tagtype.appendChild(type);
            tagprix.appendChild(prix);
            tagnote.appendChild(note);
            tagalien.appendChild(lien);
            tagalien.href=out[i].lien;
            taglien.appendChild(tagalien);
            div.appendChild(tagnom);
            div.appendChild(tagtype);
            div.appendChild(tagprix);
            div.appendChild(tagnote);
            div.appendChild(taglien);
            tr.appendChild(div);


        }
}).catch(err => console.error(err));




