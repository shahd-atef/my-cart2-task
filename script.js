const Add_to_cart = document.querySelectorAll(".plus")
Add_to_cart.forEach(plusbtn => {
    plusbtn.addEventListener("click", function() {
        const currentAmountElement = this.closest(".increment-decrement").querySelector(".content")
        const amountValue = parseInt(currentAmountElement.textContent)
      if(amountValue < 9)
     {
        currentAmountElement.textContent = amountValue + 1
     }
       
    })
})

const Remove_from_cart =document.querySelectorAll(".minus")
Remove_from_cart.forEach(minusbut =>
    {
minusbut.addEventListener("click",function()
{
const currentAmountElement=this.closest(".increment-decrement").querySelector(".content")
const amountValue = parseInt(currentAmountElement.textContent)
if(amountValue > 1)
{
  currentAmountElement.textContent = amountValue - 1
}

})
})
