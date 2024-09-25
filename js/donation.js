
const donationNow=document.getElementById('btn-donation_now');
const inputValueShow=document.getElementById('input-value-show');
const donationNow2=document.getElementById('donation_now2');
const inputValueShow2=document.getElementById('input-value-show2')
const donationNow3=document.getElementById('donation_now3');
const inputValueShow3=document.getElementById('input-value-show3')

donationNow.addEventListener('click',function(){
    const inputValue=inputValueGetElementById('input-field-value');
    const inputValueNumber=parseFloat(inputValue);
    if(isNaN(inputValueNumber)){
        return alert('Invalid Number')
    }
    else if(inputValueNumber<0){
        alert('Invalid Number')
    }
    else{
        const bdtDonationValue=getTextValueById('bdt-donation');
        inputValueShow.innerText=inputValueNumber;
        const donationh1=document.getElementById('donation_h1').innerText;
        const inputValueDicres=bdtDonationValue-inputValueNumber;
       document.getElementById('bdt-donation').innerText=inputValueDicres;
         // set hiestroy part
         const card=document.createElement('card');
         card.innerHTML+=`
            <div class="card bg-base-100 shadow-xl border-2 mb-7">
          <div class="card-body ">
           <h1 class="text-3xl font-bold">${inputValueShow.innerText} ${donationh1}</h1>
           <p class="text-xl font-normal">${Date()}</p>
          </div>
        </div>
         `
          document.getElementById('creat-card').appendChild(card);
    }
    
})
donationNow2.addEventListener('click', function(){
    const inputValue2=inputValueGetElementById('input-field2');
    const inputValueNumber2=parseFloat(inputValue2)
    if(isNaN(inputValueNumber2)){
        return alert('Invalid Number')
    }
    else if(inputValueNumber2<0){
        alert('Invalid Number')
    }
    else{
    const bdtDonationValue=getTextValueById('bdt-donation');
    inputValueShow2.innerText=inputValue2;
    const inputValueDicres2=bdtDonationValue-inputValue2;
    document.getElementById('bdt-donation').innerText=inputValueDicres2;
    const donationh2 =document.getElementById('donation_h2').innerText;
      // set hiestroy part
     const card=document.createElement('card');
     card.innerHTML+=`
        <div class="card bg-base-100 shadow-xl border-2 mb-7">
      <div class="card-body ">
       <h1 class="text-3xl font-bold">${inputValueShow2.innerText}${donationh2}</h1>
       <p class="text-xl font-normal">${Date()}</p>
      </div>
    </div>
     `
      document.getElementById('creat-card').appendChild(card);
    }
})
donationNow3.addEventListener('click', function(){
    const inputValue3=inputValueGetElementById('input-field3');
    const inputValueNumber3=parseFloat(inputValue3)
    if(isNaN(inputValueNumber3)){
        return alert('Invalid Number')
    }
    else if(inputValueNumber3<0){
        alert('Invalid Number')
    }
    else{
        const bdtDonationValue=getTextValueById('bdt-donation');
        inputValueShow3.innerText=inputValue3;
        const inputValueDicres3=bdtDonationValue-inputValue3;
        document.getElementById('bdt-donation').innerText=inputValueDicres3;
        const donationh3=document.getElementById('donation_h3').innerText;
        // set hiestroy part
        const card=document.createElement('card');
        card.innerHTML+=`
           <div class="card bg-base-100 shadow-xl border-2 mb-7">
         <div class="card-body ">
          <h1 class="text-3xl font-bold">${inputValueShow3.innerText} ${donationh3}</h1>
          <p class="text-xl font-normal">${Date()}</p>
         </div>
       </div>
        `
         document.getElementById('creat-card').appendChild(card);
    }

})
