const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote(){
    let text = await fetch (endpoint);
    let response = await text.text();
    
    if (text){
        let json_response = JSON.parse (response);

        console.log(json_response['activity']);
    
        displayQuote(json_response['activity']);
    }
}

function displayQuote(x){
    document.getElementById('js-quote-text').textContent = x;
}

getQuote();