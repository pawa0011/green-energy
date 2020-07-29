//Assignment: Content Manipulation Assignment
//Author: Geetanjali Pawase


// Load your images on page-load

    function preloader() {
        
        const imagePath = [

            "./img/solar-energy.jpg",
            "./img/wind-energy.jpg",
            "./img/geothermal-power.jpg"
        ];
        
        const image = [];

        for (let i = 0; i < imagePath.length; i++) {

            image[i] = new Image();
            image[i].src = imagePath[i];
    
    }

// Images ready to be used:
        
    console.log(`Preloaded images:\n\t${image[0].src}\n\t${image[1].src}\n\t${image[2].src}`);
    };    
    
    window.addEventListener("load", preloader);
    
    
/* 
Get all buttons in a NODE LIST of buttons (array like structure) */

    const buttons = document.querySelectorAll('.button');
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const resource = [
        {
            headingContent: "Solar Energy",
            imgUrl: "./img/solar-energy.jpg",
            imgAlt: 'Solar Energy',
            bodyText: "Solar energy has taken the lead in overall green energy sources. There are many advantages of solar energy. Among these are its accessibility to most homeowners and, today, to millions of citizens who don’t own their own homes as well, and its increasing affordability. The cost of purchase and installation continues to fall and providers offer lease-to-buy options while still offering energy below the prices offered by conventional utilities."
        },
        {
            headingContent: "Wind Energy",
            imgUrl: "./img/wind-energy.jpg",
            imgAlt: 'Wind Energy',
            bodyText: "Wind energy is one of the fastest-growing energy sources in the world. The main advantages include an unlimited, free, renewable resource (the wind itself), economic value, maintenance cost, and placement of wind harvesting facilities. First and foremost, wind is an unlimited, free, renewable resource. Wind is a natural occurrence and harvesting the kinetic energy of wind doesn't affect currents or wind cycles in any way."
        },
        {
            headingContent: "Geothermal",
            imgUrl: "./img/geothermal-power.jpg",
            imgAlt: 'Geothermal Power',
            bodyText: "Closed loop geothermal systems like Dandelion’s circulate heat from the ground into your home, so you own your own energy source. That means you’re no longer depending on others for your heating and cooling. No more oil deliveries. No more fear of running out of oil mid-winter. No more anxiety about the gas being turned off when you need it the most. Need we say any more? "
        }
    ];

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    
    const container = document.querySelector('.information');
    
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
    
    function handleSelection(event){
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        for (let button of buttons) {
            
            if(button.hasAttribute('id')) {
                
                button.removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */

        event.target.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 

        if (event.target.innerText === "Solar Energy") {
            container.innerHTML = 
                `<h1>${resource[0].headingContent}</h1>
                <div class="info-section">
                    <img src="${resource[0].imgUrl}" alt="${resource[0].imgAlt}">
                    <p>${resource[0].bodyText}</p>
                </div>`;
        
        }   else if(event.target.innerText === "Wind Energy") {
            container.innerHTML = 
                `<h1>${resource[1].headingContent}</h1>
                <div class="info-section">
                    <img src="${resource[1].imgUrl}" alt="${resource[1].imgAlt}">
                    <p>${resource[1].bodyText}</p>
                </div>`;
            
        }   else if(event.target.innerText === "Geothermal") {
            container.innerHTML = 
                `<h1>${resource[2].headingContent}</h1>
                <div class="info-section">
                    <img src="${resource[2].imgUrl}" alt="${resource[2].imgAlt}">
                    <p>${resource[2].bodyText}</p>
                </div>`;
        }
    
    /* 
    Close your handleSelection function here. */  
    
    }

    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  

    for (let button of buttons) {
        
        button.addEventListener('click', handleSelection);
    }
