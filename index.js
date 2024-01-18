let cart = document.getElementById("cart");
let plantCard = document.querySelectorAll(".plantCard");
let seedCard = document.querySelectorAll(".seedCard");
let medicanCard = document.querySelectorAll(".medicanCard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a class="empty" href="">Cart is Empty</a>'

})

plantCard.forEach(function(card){
    card.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Indoor Plants</h1>
        <h2>Upto 50% Off Buy Now..</h2>
        <p><b>Air purification</b>: Plants can help improve indoor air quality by removing pollutants and increasing oxygen levels.</p>
        <p><b>Aesthetic enhancement</b>: They add natural beauty and a sense of tranquility to indoor spaces, enhancing the overall ambiance</p>
        <p><b>Stress reduction</b>: Being around plants has been shown to reduce stress levels and promote a sense of well-being.</p>
        <p><b>Connection to nature</b>: Even in urban settings, plants provide a connection to nature, which can have a positive impact on mental health.</p>
        <a href="">Shop Now</a>
        </div>
        `
        console.log(card);
        document.querySelector("body").appendChild(div)
    })
})

seedCard.forEach(function(card){
    card.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Good Quality Seeds</h1>
        <h2>Your Seed Source for a Flourishing Garden!</h2>
        <p><b>Starting point</b>: Seeds are the starting point of plant life, containing the genetic information needed for growth</p>
        <p><b>Variety</b>: There is a vast variety of seeds available, offering different plants, flowers, and vegetables.</p>
        <p><b>Sustainability</b>: Seeds are essential for agricultural sustainability, allowing for the continuation of plant species and food production.</p>
        <p><b>Regeneration</b>: Seeds have the ability to regenerate, ensuring the survival of plant species across generations.</p>
        <a href="">Shop Now</a>
        </div>
        `
        console.log(card);
        document.querySelector("body").appendChild(div)
    })
})

medicanCard.forEach(function(card){
    card.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Best Fertilizer</h1>
        <h2>Cultivating Healthier, Greener Tomorrows!</h2>
        <p><b>Nutrient boost</b>: Fertilizers provide essential nutrients like nitrogen, phosphorus, and potassium to support plant growth.</p>
        <p><b>Soil enrichment</b>: They enrich the soil with vital elements, improving its fertility and structure.</p>
        <p><b>Healthy growth</b>: Proper fertilization promotes healthy plant growth, leading to stronger roots and more abundant foliage.</p>
        <p><b>Increased yield</b>: Fertilized plants often produce higher yields of flowers, fruits, or vegetables due to improved nutrition.</p>
        <a href="">Shop Now</a>
        </div>
        `
        console.log(card);
        document.querySelector("body").appendChild(div)
    })
})

