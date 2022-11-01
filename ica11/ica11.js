const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    //consolee.log('text click worked')
    let text = await fetch (endpoint);
    let response = await text.text();

    let json_response = JSON.parse (response);
    //console.log(json_response);
   
    console.log(json_response['message']);
    //.then(text => text.text());
    //.then(y => myDisplay(y));
    //console.log(text['message']);

    displayQuote(json_response['message']);
}

function displayQuote(x){
    //const quoteBox = document.querySelector('#js-quote-text');
    
    //quoteBox.innerText(x);
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}

getQuote();