// /* <!-- ***************Notification************************ -->  */


const menuItem=document.querySelectorAll('.menu-item');

// /* <!-- ***************Meassage************************ -->  */

const Meassaagenoti=document.querySelector("#message");
const messages=document.querySelector('.messages');

const message=messages.querySelectorAll('.message');
const messagesearch=document.querySelector('#message-search');

 // /* <!-- ***************Theme************************ -->  */

 const theme=document.querySelector("#theme");
 const thememodel=document.querySelector('.customize-theme')


 // /* <!-- ***************Font size************************ -->  */
 const fontsize=document.querySelectorAll(".choose-size span");
 var root=document.querySelector(":root");


// /* <!-- ************** Primary Color************************ -->  */
const choosecolor=document.querySelectorAll(".choose-color span");

const bg1=document.querySelector(".bg-1");
const bg2=document.querySelector(".bg-2");
const bg3=document.querySelector(".bg-3");


// /* <!-- ************** Primary Color************************ -->  */


const ChangeActiveItem =()=>
{
    menuItem.forEach(item=>
        {
            item.classList.remove('active')
        })
}

menuItem.forEach(item => 
    {
        item.addEventListener('click', () =>
        {
        ChangeActiveItem();
            item.classList.add('active');

            if(item.id !="Notification")
            {
                document.querySelector(".Notification-Popup").style.display="none";
            }

            else
            {
                document.querySelector(".Notification-Popup").style.display="block";

            }

        })
    })


// /* <!-- ***************Meassaage************************ -->  */

Meassaagenoti.addEventListener('click', () =>
{
    messages.style.boxShadow="0 0 1rem var(--color-primary)";
    setTimeout(() => {
        messages.style.boxShadow="none";
    }, 2000);
})



// /* <!-- ***************Meassaage Search************************ -->  */



const searchMessage = () =>
{
    const val=messagesearch.value.toLowerCase();

    message.forEach(chat =>
        {
            let name=chat.querySelectorAll("h5").textContent.toLowerCase();

            if(name.indexOf(val) != -1)
            {
                                                                  ///not run
                chat.style.display="flex";

            }
            else
            {
                chat.style.display="none";
            }
        })
}


messagesearch.addEventListener("keyup",searchMessage);




// /* <!-- ***************Theme custimazztion************************ -->  */

const opethemeModel = () =>
{
     thememodel.style.display="grid"
}

const closetheme = (e) =>
{
    if(e.target.classList.contains("customize-theme"))
    {
        thememodel.style.display="none"
    }

}

thememodel.addEventListener('click' , closetheme)

theme.addEventListener('click',opethemeModel);




// /* <!-- ***************Font size************************ -->  */

const removeactive = () =>
{
    fontsize.forEach(size =>
        {
            size.classList.remove("active");
        })
}
fontsize.forEach(size =>
    {
       
        size.addEventListener('click' , () =>
        {   
            removeactive();
             let fontsize;
             size.classList.toggle("active")

        if(size.classList.contains("font-size-1"))
        {
           fontsize="5px"; 
           root.style.setProperty('--sticky-top-left',"5.4rem");
           root.style.setProperty('--sticky-top-right',"5.4rem");
        }

        else if(size.classList.contains("font-size-2"))
        {
            fontsize="13px";
            root.style.setProperty('--sticky-top-left',"5.4rem");
            root.style.setProperty('--sticky-top-right',"-7rem");
        }
        else if(size.classList.contains("font-size-3"))
        {
            fontsize="16px";
            root.style.setProperty('--sticky-top-left',"-2rem");
            root.style.setProperty('--sticky-top-right',"-17rem");
        }
        else if(size.classList.contains("font-size-4"))
        {
            fontsize="18px";
            root.style.setProperty('--sticky-top-left',"-5rem");
            root.style.setProperty('--sticky-top-right',"-25rem");
        }
        else if(size.classList.contains("font-size-5"))
        {
            fontsize="20px";
            root.style.setProperty('--sticky-top-left',"-12rem");
            root.style.setProperty('--sticky-top-right',"-35rem");
        }

        document.querySelector("html").style.fontSize=fontsize;

        })
    })



// /* <!-- ***************Primary Color************************ -->  */

const ChangeActiveItem1 = () =>
{
    choosecolor.forEach(colorPicker =>
        {
            colorPicker.classList.remove("active");
        })
}

choosecolor.forEach(color =>
    {
        
        color.addEventListener('click' , () =>
        {   
            ChangeActiveItem1();
            if(color.classList.contains("color-1"))
            {
                primaryHue=252

            }

            else if(color.classList.contains("color-2"))
            {

                primaryHue=52;
            }
            else if(color.classList.contains("color-3"))
            {

                primaryHue=352;
            }
            else if(color.classList.contains("color-4"))
            {

                primaryHue=152;
            }
            else if(color.classList.contains("color-5"))
            {

                primaryHue=202;
            }

            color.classList.add("active");

            root.style.setProperty("--primary-color-hue",primaryHue);

        })
    })


// /* <!-- ***************Background Color************************ -->  */


let lightcolorlightness,whitecolorlightness,darkcolorlightness;

const changeBG = () =>
{ 
    root.style.setProperty("--light-color-lightness",lightcolorlightness);
    root.style.setProperty("--white-color-lightness", whitecolorlightness);
    root.style.setProperty("--dark-color-lightness",darkcolorlightness);

}


bg3.addEventListener("click" , () =>
{
       darkcolorlightness= "95%";
       lightcolorlightness="10%";
      whitecolorlightness="0%";

      bg2.classList.remove("active");
      bg1.classList.remove("active");
      bg3.classList.add("avctive");
      changeBG();
});

bg1.addEventListener("click" , () =>
 { 
     bg2.classList.remove("active");
    bg1.classList.add("active");
    bg3.classList.remove("avctive");
   window.location.reload();
});

bg2.addEventListener("click" , () =>
{
       darkcolorlightness= "95%";
       lightcolorlightness="15%";
      whitecolorlightness="20%";

      bg2.classList.add("active");
      bg1.classList.remove("active");
      bg3.classList.remove("avctive");
      changeBG();
});


let Accpt1=document.getElementById('Accpt1');
let Accpt2=document.getElementById('Accpt2');
let Accpt3=document.getElementById('Accpt3');
let Accpt4=document.getElementById('Accpt4');
let Accpt5=document.getElementById('Accpt5');
let Reject1=document.getElementById('Reject1');
let Reject2=document.getElementById('Reject2');
let Reject3=document.getElementById('Reject3');
let Reject4=document.getElementById('Reject4');
let Reject5=document.getElementById('Reject5');


let req1=document.getElementById('friend1');
let req2=document.getElementById('friend2');
let req3=document.getElementById('friend3');
let req4=document.getElementById('friend4');
let req5=document.getElementById('friend5');

Accpt1.onclick = function()
{
    
 
    Reject1.style.display="none";
    Accpt1.innerHTML="You are now friend";
}

Accpt2.onclick = function()
{
    
    Reject2.style.display="none";
    Accpt2.innerHTML="You are now friend";;


}

Accpt3.onclick = function()
{
    Reject3.style.display="none";
    Accpt3.innerHTML="You are now friend";
   

}

Accpt4.onclick = function()
{
    Reject4.style.display="none";
    Accpt4.innerHTML="You are now friend";

}

Accpt5.onclick = function()
{
   
    Reject5.style.display="none";
    Accpt5.innerHTML="You are now friend";

}



Reject1.onclick =function()
{
    Accpt1.style.display="none";
    Reject1.innerHTML="Decline";

}


Reject2.onclick =function()
{
    Accpt2.style.display="none";
    Reject2.innerHTML="Decline";
    
}



Reject3.onclick =function()
{
    Accpt3.style.display="none";
    Reject3.innerHTML="Decline";
    
}



Reject4.onclick =function()
{
    Accpt4.style.display="none";
    Reject4.innerHTML="Decline";
    
}


Reject5.onclick =function()
{
    Accpt5.style.display="none";
    Reject5.innerHTML="Decline";
    
}