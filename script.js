document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.sliderwrapper');
    const sliderItems = document.querySelectorAll('.slideritem');
    const leftArrow = document.querySelector('.leftarrow');
    const rightArrow = document.querySelector('.rightarrow');
    const menuItems = document.querySelectorAll('.menuitem');
    const buyButtons = document.querySelectorAll('.buybutton');
    let currentIndex = 0;
    let currentCategory = 'tshirts'; // Default category
    let currentItem = sliderItems[0]; // Default current item
    const totalItems = sliderItems.length;

    const updateSliderPosition = () => {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
    };

    const updateSliderItems = (category) => {
        sliderItems.forEach(item => {
            item.classList.remove('active');
            if (item.classList.contains(category)) {
                item.classList.add('active');
            }
        });
        currentIndex = 0;
        updateSliderPosition();
        currentItem = document.querySelector(`.slideritem.${category}`);
        updateProductSectionFromSliderItem(currentItem);
    };

    rightArrow.addEventListener('click', () => {
        const activeItems = document.querySelectorAll(`.slideritem.${currentCategory}`);
        if (currentIndex < activeItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        currentItem = activeItems[currentIndex];
        updateSliderPosition();
        updateProductSectionFromSliderItem(currentItem);
    });

    leftArrow.addEventListener('click', () => {
        const activeItems = document.querySelectorAll(`.slideritem.${currentCategory}`);
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = activeItems.length - 1;
        }
        currentItem = activeItems[currentIndex];
        updateSliderPosition();
        updateProductSectionFromSliderItem(currentItem);
    });

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            currentCategory = e.target.getAttribute('data-category');
            updateSliderItems(currentCategory);
        });
    });

    const updateProductSection = (title, price, imgSrc) => {
        const productTitle = document.querySelector('.producttitle');
        const productPrice = document.querySelector('.productprice');
        const productImg = document.querySelector('.productimg');

        productTitle.innerHTML = title;
        productPrice.innerHTML = price;
        productImg.src = imgSrc;
    };

    const updateProductSectionFromSliderItem = (sliderItem) => {
        const title = sliderItem.querySelector('.slidertitle').innerHTML.replace(/<br>/g, ' ');
        const price = sliderItem.querySelector('.sliderprice').innerHTML;
        const imgSrc = sliderItem.querySelector('.sliderimg').src;

        updateProductSection(title, price, imgSrc);
    };

    buyButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const sliderItem = sliderItems[index];
            const title = sliderItem.querySelector('.slidertitle').innerHTML.replace(/<br>/g, ' ');
            const price = sliderItem.querySelector('.sliderprice').innerHTML;
            const imgSrc = sliderItem.querySelector('.sliderimg').src;

            updateProductSection(title, price, imgSrc);

            // Scroll to the product section
            document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
        });
    });

    updateSliderItems(currentCategory);
});

const currentProductSizes = document.querySelectorAll(".size");
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });