var womensData = [
    {
      image_url:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/merlt/merlt30028188ee/merlt30028188ee_1648056262628_2-0._SH20_QL90_UY365_.jpg",
      name: "SWF",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/pdeni/pdeni4100415d91/pdeni4100415d91_q1_2-0._SH20_QL90_UY365_.jpg",
      name: "ba&sh",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/toryb/toryb494321df7f/toryb494321df7f_1648138456337_2-0._SH20_QL90_UY365_.jpg",
      name:  "3.1 Philip  Lim",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rachc/rachc2153810c4d/rachc2153810c4d_1648151754458_2-0._SH20_QL90_UY365_.jpg",
      name: "Andersson Bell",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        " https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mouss/mouss30185102c9/mouss30185102c9_1647111193834_2-0._SH20_QL90_UY365_PGshopbop-ex-sticker-3_UY365_.jpg",
      name: "Madewell",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "Rachel Comey",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/leviv/leviv206351a059/leviv206351a059_q1_2-0._SH20_QL90_UY365_.jpg",
      name: "Ramy Brook",
      price: 1099,
      strikedoffprice: 1249,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",
      name: "UNISEX REEBOK ",
      price: 1249,
      strikedoffprice: 1489,
    },
    {
      image_url:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/nthre/nthre302581d186/nthre302581d186_1648067707177_2-0._SH20_QL90_UY365_.jpg",
      name: "Self Portrait",
      price: 1459,
      strikedoffprice: 1235,
    },
    {
      image_url:
        " https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/nlota/nlota2113012631/nlota2113012631_1648067898606_2-0._SH20_QL90_UY365_.jpg",
      name: "Lele Sadoughi",
      price: 849,
      strikedoffprice: 2599,
    },
    {
      image_url:
        " https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/tspor/tspor303711cd76/tspor303711cd76_1648057129131_2-0._SH20_QL90_UY365_.jpg",
      name: "MARA HOFFMAN",
      price: 1550,
      strikedoffprice: 2599,
    },
    {
      image_url:
        " https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ststa/ststa30104102c9/ststa30104102c9_1648070042868_2-0._SH20_QL90_UY365_.jpg",
      name: "Caterina Bertini",
      price: 1399,
      strikedoffprice: 6599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
      name: "UNISEX REEBOK ",
      price: 949,
      strikedoffprice: 1899,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
      name: "MONROW",
      price: 1549,
      strikedoffprice: 1799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
      name: "LAGENCE",
      price: 1249,
      strikedoffprice: 1749,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name: "RE/DONE",
      price: 699,
      strikedoffprice: 1245,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
      name: "Cara Cara",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
      name: "Self Portarit",
      price: 749,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
      name: "Triarchy",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",
      name: "A.L.C",
      price: 1099,
      strikedoffprice: 1249,
    },
    
  ];

  
  var CATDATA = JSON.parse(localStorage.getItem("cart")) || [];
  womensData.map(function (elem) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      addtoCart(elem);
    });

    box.append(img, name, price, btn);

    document.querySelector("#container").append(box);
  });

  function addtoCart(elem) {
    console.log(elem);
    CATDATA.push(elem);
    localStorage.setItem("cart", JSON.stringify(CATDATA));
    alert("item added to cart");
    window.location="./cart.html"
  }