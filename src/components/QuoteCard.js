import React from 'react';

import './QuoteCard.css';


function QuoteCard() {
    return (
        <figure class="QuoteCard">
            <img
                src="https://images.immediate.co.uk/production/volatile/sites/3/2016/03/Simpsons_g2013_R1_marge-04bf0d1.jpg?quality=90&resize=768,574"
                alt="Nelson Muntz"></img>        
            <figcaption>
                <blockquote>
                    Shoplifting is a victimless crime, like punching someone in the dark. 
                </blockquote>        
                <cite>Marge Simpson</cite>
            </figcaption>
        </figure>
    );                              
}

export default QuoteCard;
