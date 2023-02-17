const mainContainer = document.querySelector(".mainContainer");

const imagesMainSection = document.createElement("section");
imagesMainSection.classList.add("imagesMainSection");
imagesMainSection.innerHTML = `
<div class="imgPrincipalContainer">
    <img class="mobileImgBtnPrev" src="./images/icon-previous.svg"/>
    <img src="./images/image-product-1.jpg" alt="" class="principal">
    <img class="mobileImgBtnNext" src="./images/icon-next.svg"/>
</div>
<div class="imgThumContainer">
    <img class="thumbnail" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail" data-full="./images/image-product-1.jpg"/>
    <img class="thumbnail" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail" data-full="./images/image-product-2.jpg"/>
    <img class="thumbnail" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail" data-full="./images/image-product-3.jpg"/>
    <img class="thumbnail" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail" data-full="./images/image-product-4.jpg"/>
</div> `;

mainContainer.appendChild(imagesMainSection);

const principal = document.querySelector(".principal");
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
<div class="modal-content">
    <svg class="closeIcon "width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
    <div class="modalPrincipalContainer">
        <div class="modalImgsContainer">
            <img class="iconPrevious"  src="./images/icon-previous.svg" class="iconPrevious" alt="iconPrevious"/>
            <img src="./images/image-product-1.jpg" alt="" class="modalprincipal">
            <img class="iconNext" src="./images/icon-next.svg" alt="iconNext"/>
        </div>
    </div>
    <div class="modalImgThumContainer">
        <img class="imgThum" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail"/>
        <img class="imgThum" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail"/>
        <img class="imgThum" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail"/>
        <img class="imgThum" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail"/>
    </div> 
</div>`;
mainContainer.appendChild(modal);

const closeIcon = document.querySelector(".closeIcon");
const iconPrevious = document.querySelector(".iconPrevious");
const iconNext = document.querySelector(".iconNext");

imagesMainSection.addEventListener("click", (event) => {

    const width = window.innerWidth

    if (event.target.classList.contains("principal") && width>750) {
        modal.classList.add("modalDisplay");
        modal.classList.remove("modal");
        cartContainer.classList.add("cartContainerDisplayNone");
    }
    closeIcon.addEventListener("click", (e) => {
        modal.classList.remove("modalDisplay");
        modal.classList.add("modal");
    });
});

const productMainContainer = document.createElement("section");
productMainContainer.classList.add("productMaiContainer");

productMainContainer.innerHTML = `<div class="productDetailsContainer">
<p class="company">Sneaker Company</p>
<h1 class="productTitle">Fall Limited Edition Sneakers</h1>
<p class="productDescription">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
<div class="PriceContainer">
    <div class="discountContainer">
        <h2 class="price">$<span class="priceNumber">125.00</span></h2>
        <p class="discount">50%</p>
    </div>
    <p class="regularPrice">$250.00</p>
</div>
<div class="addToCartContainer">
    <div class="addContainer">
        <img class="icon-minus" src="./images/icon-minus.svg"/>
        <input class="addtoCartQty type="number" value="0"></input>
        <img class="icon-plus" src="./images/icon-plus.svg"/>
    </div>
    <button class="addtoCartBtn">
    <svg class="addtoCartIcon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg>
        <p class="addtoCartP">Add to cart</p>
    </button>
</div>
</div>`;

mainContainer.appendChild(productMainContainer);

const iconMinus = document.querySelector(".icon-minus");
const iconPlus = document.querySelector(".icon-plus");
const addtoCartQty = document.querySelector(".addtoCartQty");

const handleMinusClick = () => {
  if (addtoCartQty.value > 0) {
    addtoCartQty.value = Number(addtoCartQty.value) - 1;
  }
};
const handlePlusClick = () => {
  addtoCartQty.value = Number(addtoCartQty.value) + 1;
};

iconPlus.addEventListener("click", handlePlusClick);
iconMinus.addEventListener("click", handleMinusClick);
const cartIcon = document.querySelector(".cartIcon");
const cartQty = document.querySelector(".cartQty")
const userContainer = document.querySelector(".userContainer");

const cartContainer = document.createElement("div");
cartContainer.classList.add("cartContainerDisplayNone");
cartContainer.innerHTML = `
                                <div class="titleCartContainer">
                                <h3 class="titleCart">Cart</h3>
                                </div>
                                <div class="productsCartContainer">
                                    <p class="emptyCart">Your Cart is Empty</p>
                                </div>`;

mainContainer.appendChild(cartContainer);

cartIcon.addEventListener("click", () => {
  if (cartContainer.classList.contains("cartContainerDisplayNone")) {
    cartContainer.classList.remove("cartContainerDisplayNone");
    cartContainer.classList.add("cartContainer");
  } else {
    cartContainer.classList.remove("cartContainer");
    cartContainer.classList.add("cartContainerDisplayNone");
  }
});

const addtoCartBtn = document.querySelector(".addtoCartBtn");
const productTitle = document.querySelector(".productTitle").textContent;
const priceNumber = Number(document.querySelector(".priceNumber").textContent);
const productsCartContainer = document.querySelector(".productsCartContainer");
const emptyCart = document.querySelector(".emptyCart");
const productCartInfo = document.createElement("div");
productCartInfo.classList.add("productCartInfo");
const iconDelete = document.createElement("img");
iconDelete.src = "./images/icon-delete.svg";
iconDelete.classList.add("iconDelete");


addtoCartBtn.addEventListener("click", () => {
    if (addtoCartQty.value > 0) {
    if (cartContainer.classList.contains("cartContainerDisplayNone")) {
        cartContainer.classList.remove("cartContainerDisplayNone");
        cartContainer.classList.add("cartContainer");
    }

    emptyCart.style.display = "none";
    cartQtyHeader.textContent = addtoCartQty.value 
    cartQtyHeaderMobile.textContent = addtoCartQty.value 
    cartQtyContainer.style.display ="flex"
    cartQtyContainerMobile.style.display ="flex"

    productCartInfo.innerHTML = 
    `<div class="productCartInfoContainer">
        <img class="imgThumCart" src="./images/image-product-1-thumbnail.jpg"/>
        <div class="cartDescriptionContainer">
        <p class="cartDescriptionProductTitle">${productTitle}</p>
        <p class="priceDetails"><span class="priceNumber">$${priceNumber} x </span><span class="totalPriceCart"> ${
        addtoCartQty.value}</span> $${addtoCartQty.value * Number(priceNumber)}</p>
    </div>
        <div class="iconDeleteContainer"></div>
    </div>
    <button class="checkoutBtn">Checkout</button>`;

    productsCartContainer.appendChild(productCartInfo);
    const iconDeleteContainer = document.querySelector(".iconDeleteContainer");
    iconDeleteContainer.appendChild(iconDelete);

    if (productCartInfo !== null) {
        addtoCartBtn.setAttribute("disabled", "true");
        iconMinus.removeEventListener("click", handleMinusClick);
        iconPlus.removeEventListener("click", handlePlusClick);
        iconPlus.classList.add("iconDisabled");
        iconMinus.classList.add("iconDisabled");
    }
}
});

iconDelete.addEventListener("click", () => {

    productsCartContainer.removeChild(productCartInfo);
    emptyCart.style.display = "block";
    addtoCartBtn.removeAttribute("disabled", "true");
    iconMinus.addEventListener("click", handleMinusClick);
    iconPlus.addEventListener("click", handlePlusClick);
    iconPlus.classList.remove("iconDisabled");
    iconMinus.classList.remove("iconDisabled");
    addtoCartQty.value = 0
    cartQtyContainer.style.display = "none";
    cartQtyContainerMobile.style.display = "none";

});

const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
    const fullImage = thumbnail.dataset.full;
    const mainImage = principal;
    mainImage.src = fullImage;
    });
});

const modalImgsContainer = document.querySelector(".modalImgsContainer");
const modalThumbnails = document.querySelectorAll(".imgThum");

let currentImgIndex = 0;

function updateModalMainImage(index) {
    const imgSrc = modalThumbnails[index].src.replace("-thumbnail", "");
    modalImgsContainer.querySelector(".modalprincipal").src = imgSrc;
}

iconPrevious.addEventListener("click", () => {
    currentImgIndex--;
    if (currentImgIndex < 0) {
        currentImgIndex = modalThumbnails.length - 1;
    }
    updateModalMainImage(currentImgIndex);
});

iconNext.addEventListener("click", () => {
    currentImgIndex++;
    if (currentImgIndex >= modalThumbnails.length) {
        currentImgIndex = 0;
    }
    updateModalMainImage(currentImgIndex);
});

modalThumbnails.forEach((imgThum, index) => {
    imgThum.addEventListener("click", () => {
        currentImgIndex = index;
        updateModalMainImage(currentImgIndex);
    });
});


const mobileImgBtnPrev = document.querySelector(".mobileImgBtnPrev")
const mobileImgBtnNext = document.querySelector(".mobileImgBtnNext")

let imgIndex = 1
mobileImgBtnNext.addEventListener("click", ()=>{
    imgIndex++
    if(imgIndex > 4){
        imgIndex = 1
    }
    principal.src = `./images/image-product-${imgIndex}.jpg`
})

mobileImgBtnPrev.addEventListener("click", ()=>{
    imgIndex--
    if(imgIndex === 0){
        imgIndex = 4
    }
    principal.src = `./images/image-product-${imgIndex}.jpg`
})

const iconMenu = document.querySelector(".iconMenu")
const mobileMenu = document.querySelector(".mobileMenu")

const menuNavContainer = document.createElement("div")
menuNavContainer.classList.add("menuNavContainer")
mainContainer.appendChild(menuNavContainer)
menuNavContainer.innerHTML = `
    <img class="iconCloseNavMobile" src="./images/icon-close.svg"/>
    <nav class="mobileNav">
            <a class="navLink" href="#">Collections</a>
            <a class="navLink" href="#">Men</a>
            <a class="navLink" href="#">Women</a>
            <a class="navLink" href="#">About</a>
            <a class="navLink" href="#">Contact</a>
    </nav>
`

mainContainer.appendChild(menuNavContainer)

iconMenu.addEventListener("click",()=>{
    menuNavContainer.style.display = "block"
})

const iconCloseNavMobile = document.querySelector(".iconCloseNavMobile")

iconCloseNavMobile.addEventListener("click",()=>{
    menuNavContainer.style.display = "none"
})

const cartIconMobile = document.querySelector(".cartIconMobile")
const userContainerMobile = document.querySelector(".userContainerMobile")

cartIconMobile.addEventListener("click", () => {
    if (cartContainer.classList.contains("cartContainerDisplayNone")) {
        cartContainer.classList.remove("cartContainerDisplayNone");
        cartContainer.classList.add("cartContainer");
    } else {
        cartContainer.classList.remove("cartContainer");
        cartContainer.classList.add("cartContainerDisplayNone");
    }
})

const cartQtyHeader = document.querySelector(".cartQtyHeader")
const cartQtyHeaderMobile = document.querySelector(".cartQtyHeaderMobile")
const cartQtyContainer = document.querySelector(".cartQtyContainer")
const cartQtyContainerMobile = document.querySelector(".cartQtyContainerMobile")

cartQtyContainer.style.display ="none"
cartQtyContainerMobile.style.display ="none"
