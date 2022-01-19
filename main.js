// Il codice da degli errori, purtroppo per un problema che ho avuto(l'antivirus mi bloccava il sito dell'api) ho fatto tardi 
//  e non ho fatto in tempo a scrivere ticket, ciao Francesco se lo correggi mi piacerebbe avere del feedback, grazie


// const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';
// axios
// .get(endpoint)
// .then((response) => {
//     console.log.response;
//     const discArray = response;
// })
// .catch((error) => {
//     console.log(error);
// })

const discArray = [{"poster":"https:\/\/www.onstageweb.com\/wp-content\/uploads\/2018\/09\/bon-jovi-new-jersey.jpg","title":"New Jersey","author":"Bon Jovi","genre":"Rock","year":"1988"},{"poster":"https:\/\/img.discogs.com\/vknPDdrqRbT92pNRX0W4I5N91jg=\/fit-in\/300x300\/filters:strip_icc():format(jpeg):mode_rgb():quality(40)\/discogs-images\/R-1246953-1448927086-6590.jpeg.jpg","title":"Live at Wembley 86","author":"Queen","genre":"Pop","year":"1992"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/41JD3CW65HL.jpg","title":"Ten's Summoner's Tales","author":"Sting","genre":"Pop","year":"1993"},{"poster":"https:\/\/cdn2.jazztimes.com\/2018\/05\/SteveGadd-800x723.jpg","title":"Steve Gadd Band","author":"Steve Gadd Band","genre":"Jazz","year":"2018"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/810nSIQOLiL._SY355_.jpg","title":"Brave new World","author":"Iron Maiden","genre":"Metal","year":"2000"},{"poster":"https:\/\/upload.wikimedia.org\/wikipedia\/en\/9\/97\/Eric_Clapton_OMCOMR.jpg","title":"One more car, one more raider","author":"Eric Clapton","genre":"Rock","year":"2002"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51rggtPgmRL.jpg","title":"Made in Japan","author":"Deep Purple","genre":"Rock","year":"1972"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/81r3FVfNG3L._SY355_.jpg","title":"And Justice for All","author":"Metallica","genre":"Metal","year":"1988"},{"poster":"https:\/\/img.discogs.com\/KOBsqQwKiNKH-q927oHMyVdDzSo=\/fit-in\/596x596\/filters:strip_icc():format(jpeg):mode_rgb():quality(90)\/discogs-images\/R-6406665-1418464475-6120.jpeg.jpg","title":"Hard Wired","author":"Dave Weckl","genre":"Jazz","year":"1994"},{"poster":"https:\/\/m.media-amazon.com\/images\/I\/71K9CbNZPsL._SS500_.jpg","title":"Bad","author":"Michael Jacjson","genre":"Pop","year":"1987"}]


for(let i = 0; i < discArray.length; i++){
    let card = document.createElement('div');
    card.className = 'card col-3 mx-4 ';
    document.getElementById('gallery').appendChild(card);
    let img = document.createElement('img');
    img.src = discArray[i].poster;
    card.appendChild(img);
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);
    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = discArray[i].title;
    cardBody.appendChild(cardTitle);
    let cardTextAuthor = document.createElement('p');
    cardTextAuthor.className = 'card-text';
    cardTextAuthor.textContent = 'Author: ' + discArray[i].author;
    cardBody.appendChild(cardTextAuthor);
    let cardTextGenre = document.createElement('p');
    cardTextGenre.className = 'card-text';
    cardTextGenre.textContent = 'Genre: ' + discArray[i].genre;
    cardBody.appendChild(cardTextGenre);
    let cardTextYear = document.createElement('p');
    cardTextYear.className = 'card-text';
    cardTextYear.textContent = 'Year: ' + discArray[i].year;
    cardBody.appendChild(cardTextYear);
}