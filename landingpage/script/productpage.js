console.log(productArray)
displayFirstGlider(productArray)



function displayFirstGlider(productArray) {
    productArray.map(function(ele, ind) {
        var div1 = document.createElement("div")
        div1.setAttribute("class", "product-page-child-container")
        var div2 = document.createElement("div")
        div2.setAttribute("class", "product-page-addto-wishlist")
        var i = document.createElement("i")
        i.setAttribute("class", "fa-regular fa-heart fa-2xl")
        var div3 = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        var div4 = document.createElement("div")
        var img = document.createElement("img")
        img.setAttribute("src", ele.img_url)
        div4.setAttribute("class", "productpage-img")
        var div5 = document.createElement("div")
        var p4 = document.createElement("p")
        p4.setAttribute("id", "productpage-product-name")
        var p5 = document.createElement("p")
        p5.setAttribute("id", "productpage-product-category")
        var p6 = document.createElement("p")
        p6.setAttribute("id", "productpage-product-price")
        var div6 = document.createElement("div")
        var i1 = document.createElement("i")
        i1.setAttribute("class", "fa-solid fa-star fa-2xs")

        var i2 = document.createElement("i")
        i2.setAttribute("class", "fa-solid fa-star fa-2xs")

        var i3 = document.createElement("i")
        i3.setAttribute("class", "fa-solid fa-star fa-2xs")

        var i4 = document.createElement("i")
        i4.setAttribute("class", "fa-solid fa-star fa-2xs")

        var i5 = document.createElement("i")
        i5.setAttribute("class", "fa-regular fa-star-half-stroke fa-2xs")

        button = document.createElement("button")
        button.setAttribute("class", "quick-view")
        if (ind % 7 == 0 || ind % 11 == 0) {
            p1.innerText = "EXCLUSIVE"
        }
        if (ind % 4 == 0 || ind % 11 == 0)
            p2.innerText = "CONSCIOUS BEAUTY"
        if (i % 2 == 0) {
            p1.innerText = "EXCLUSIVE"
        }
        if (i % 2 != 0) {
            p1.innerText = "LIMITED EDITION"
        }
        p4.innerText = ele.name
        p5.innerText = ele.category
        p6.innerText = "$" + ele.price
        button.innerText = "QUICK VIEW"
        div3.append(p1, p2)
        div2.append(i, div3)
        div4.append(img)
        div5.append(p4, p5, p6)
        div6.append(i1, i2, i3, i4, i5)
        div1.append(div2, div4, div5, div6)
        console.log(div1)
        if (ind != 0)
            document.querySelector(".product-page-container").append(div1)


    })

}


document.querySelector(".productpage-img").addEventListener("mouseover", showQuickView)

function showQuickView() {
    console.log("hii")
    document.querySelector(".quick-view").style.display = "block"
}


// document.querySelector("body").addEventListener("mouseover", hideQuickView)

// function hideQuickView() {
//     console.log("hii")
//     document.querySelector(".quick-view").style.display = "none"
// }



//go to product details page
// function gotoDetails(ele, ind) {
//     var p = []
//     p.push(ele);
//     console.log(p)
//     localStorage.setItem("product", JSON.stringify(p))
// }

// BRAND FILTER DATE ENTRY

var brandArray = ["111SLKIN",
    "AUGUSTINUS BADER",
    "FRESH",
    "HARIMAX",
    "HIGHERDOSE",
    "TOM FARD",
    "HIGHERDOSE",
    "AFRICAN BOTANICS",
    "BOBBI BROWN",
    "M-61",
    "DRYBAR",
    "DUNE",
    "SLIP",
    "OGEE",
    "SUGUSTNUS BADER",
    "ORIBE"
]

brandArray.map(function(ele, ind) {
    console.log("hii")
    var div = document.createElement("div")

    var i = document.createElement("input")
    i.setAttribute("type", "checkbox")
    i.setAttribute("value", ele.toUpperCase())
    var p = document.createElement("p")
    p.innerText = ele.toUpperCase()
    div.append(i, p)

    document.querySelector(".brand-names").append(div)

})

document.querySelector(".brand-tag").addEventListener("click", showBrandDate)
let n = 1;

function showBrandDate() {
    if (n == 1) {
        document.querySelector(".brand-names").style.display = "flex"
        document.querySelector(".plus").style.display = "none"
        document.querySelector(".minus").style.display = "flex"
        n = 2;
    } else {
        document.querySelector(".brand-names").style.display = "none"
        document.querySelector(".plus").style.display = "flex"
        document.querySelector(".minus").style.display = "none"
        n = 1;
    }
}


// CATEGORY FILTER DATE ENTRY


productArray.map(function(ele, ind) {
    console.log("hii")
    var div = document.createElement("div")

    var i = document.createElement("input")
    i.setAttribute("type", "checkbox")
    i.setAttribute("value", ele.category.toUpperCase())
    var p = document.createElement("p")
    p.innerText = ele.category.toUpperCase()
    div.append(i, p)

    document.querySelector(".category-names").append(div)

})

document.querySelector(".category-tag").addEventListener("click", showCategoryData)
let o = 1;

function showCategoryData() {
    if (o == 1) {
        document.querySelector(".category-names").style.display = "flex"
        document.querySelector(".plus1").style.display = "none"
        document.querySelector(".minus1").style.display = "flex"
        o = 2;
    } else {
        document.querySelector(".category-names").style.display = "none"
        document.querySelector(".plus1").style.display = "flex"
        document.querySelector(".minus1").style.display = "none"
        o = 1;
    }
}


document.querySelector(".Price-tag").addEventListener("click", showPriceDate)
let p = 1;

function showPriceDate() {
    if (p == 1) {
        document.querySelector(".price-range").style.display = "flex"
        document.querySelector(".plus2").style.display = "none"
        document.querySelector(".minus2").style.display = "flex"
        p = 2;

    } else {
        document.querySelector(".price-range").style.display = "none"
        document.querySelector(".plus2").style.display = "flex"
        document.querySelector(".minus2").style.display = "none"
        p = 1;
    }
}
console.log("hii")
document.getElementById("select").addEventListener("change", showFeaturedProduct)

function showFeaturedProduct() {
    var featured = document.getElementById("select")
    console.log(featured)
}


// productArray.filter(function(ele, ind) {

// })