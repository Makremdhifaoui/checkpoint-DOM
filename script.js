function myFunction(x) {
   
    x.classList.toggle("fas fa-heart");
}

function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
        productNumber=parseInt(productNumber)-1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product+'-total');
     productTotal.innerText=productNumber*price;

    //  update calculate
     calculateTotal();
}
// handle calculate 
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 299;
    const caseTotal = getInputValue('case') * 109;
    const subTotal = phoneTotal+caseTotal;
    const tax = subTotal * 0.19;
    const total = subTotal+tax;

    // update on the HTML
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=total;
}

//increasing decreasing Phone number events
document.getElementById('phone-plus').addEventListener('click', function(){
    
    const productInput = document.getElementById('phone-number');
    let productNumber = productInput.value;
    productInput.value=parseInt(productNumber)+1; 
    
   updateProductNumber('phone', 299, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    
    const productInput = document.getElementById('phone-number');
    let productNumber=productInput.value;
    productInput.value = parseInt(productNumber)-1; 
    
   updateProductNumber('phone', 299, false);
})

//increasing decreasing Case number events
document.getElementById('case-plus').addEventListener('click', function(){
     
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value= parseInt(caseNumber)+1; 
    
    updateProductNumber('case', 109, true )
});
document.getElementById('case-minus').addEventListener('click', function(){
     
    const caseInput = document.getElementById('case-number');
    const caseNumber= caseInput.value;
    caseInput.value = parseInt(caseNumber) -1; 
    
    updateProductNumber('case', 109, false);
});
function remove (x){
x.parentElement.remove();
}