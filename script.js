//blogtext max char
var blogtexts = document.querySelectorAll(".blog-text")
var makschar=300;
for (let i = 0; i < blogtexts.length; i++) {
  var text = blogtexts[i].innerHTML;
  if (text.length>makschar) {
    var newtext = text[0]
    for (let index = 1; index < makschar; index++) {
      newtext+=text[index];
    }
    blogtexts[i].innerHTML=newtext+"..."  
  }
}

//img not dragable and no right click
var imgs = document.querySelectorAll("img");
for (let index = 0; index < imgs.length; index++) {
    imgs[index].oncontextmenu = function (event) {
        event.preventDefault()
        event.stopPropagation()
        return false
    }
}
var zaman1check = zaman2check = zaman3check = 0;
var imgs = document.querySelectorAll('img');
var i;
for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragstart', (e) => e.preventDefault())

}
var articles = document.querySelectorAll("body>article");

var skillscontainer = document.querySelector(".skills-container");
var blogs = document.querySelectorAll(".blog")
const numb = document.querySelectorAll(".timer");
let counter1 = 0,counter2 = 0, counter3 = 0;
var skillsasides = document.querySelectorAll(".skills-container>aside aside")
var toupbutton = document.querySelector(".toupbutton")
function scrollFunction() {
var windoww = window.innerWidth
  var windowh = window.innerHeight
  if(windoww>1000 && windowh>500){
    if (document.documentElement.scrollTop>40){
      document.querySelector(".nav-list-div").style.transform = "translateX(0)";
      document.querySelector(".nav-list-div2").style.transform = "translateY(-100px)";
      document.querySelector(".nav-list-div").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
    }
    else if(document.documentElement.scrollTop<=40){ 
      document.querySelector(".nav-list-div").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div").style.transform = "translateX(150px)";
      document.querySelector(".nav-list-div2").style.transform = "translateY(0px)";  
    }
  }else{
    document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
    document.querySelector(".nav-list-div2").style.transform = "translate(0px)"
  }
  if (document.documentElement.scrollTop > 40) {
    toupbutton.style.transform = "translateX(0px)";
  }if(document.documentElement.scrollTop<=40){
    toupbutton.style.transform = "translateX(100px)";
  }
  if (document.body.scrollTop + windowh > skillsasides[0].offsetTop + ((skillsasides[0].offsetHeight)*2/3 +skillscontainer.offsetTop) || document.documentElement.scrollTop + windowh > skillsasides[0].offsetTop + ((skillsasides[0].offsetHeight)*2/3) +skillscontainer.offsetTop){
    document.querySelector(".htmlskillsleft").style.animationName="percent50";
    document.querySelector(".htmlskillsright").style.animationName="percent80";
    zaman1check++;
    if (zaman1check==1) {
      var zaman1 = setInterval(() => {
        if(counter1 == 80 ){
          clearInterval(zaman1);
        }else{
          counter1+=1;
          numb[0].innerHTML = counter1+"%";    
        }
      }, 12.5);
    }
  }
  if (document.body.scrollTop + windowh > skillsasides[1].offsetTop + ((skillsasides[1].offsetHeight)*2/3 + skillscontainer.offsetTop) || document.documentElement.scrollTop + windowh > skillsasides[1].offsetTop + ((skillsasides[1].offsetHeight)*2/3 + skillscontainer.offsetTop)){
    document.querySelector(".cssskillsleft").style.animationName="percent50";
    document.querySelector(".cssskillsright").style.animationName="percent70";
    zaman2check++;
    if (zaman2check==1) {
      var zaman2 = setInterval(() => {
        if(counter2 == 70 ){
          clearInterval(zaman2);
        }else{
          counter2+=1;
          numb[1].innerHTML = counter2 + "%";    
        }
      }, 14.25);
    }
  }
  if (document.body.scrollTop + windowh > skillsasides[2].offsetTop + ((skillsasides[2].offsetHeight)*2/3 + skillscontainer.offsetTop) || document.documentElement.scrollTop + windowh > skillsasides[2].offsetTop + ((skillsasides[2].offsetHeight)*2/3 + skillscontainer.offsetTop)){
    document.querySelector(".jsskillsright").style.animationName="percent40";
    zaman3check++;
    if (zaman3check==1) {
      var zaman3 = setInterval(() => {
        if(counter3 == 40 ){
          clearInterval(zaman3);
        }else{
          counter3+=1;
          numb[2].innerHTML = counter3+"%";    
        }
      },25);  
    }
  }
  for (let index = 0; index < blogs.length; index++) {
    if (document.body.scrollTop + windowh > blogs[index].offsetTop + ((blogs[index].offsetHeight)*2/3) || document.documentElement.scrollTop + windowh > blogs[index].offsetTop + ((blogs[index].offsetHeight)*2/3)){
      blogs[index].style.animationName="blogdrop";
    }
  }
}
window.addEventListener("scroll", () => { 
  scrollFunction();
});
window.addEventListener("load", () => { 
  scrollFunction();
});

var fnc_scrollto = function(to,id){
  var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
  var articles = document.querySelectorAll("ul#content > li"), i;
  if (to == 'elem') to = articles[id].offsetTop;
  var i = parseInt(window.pageYOffset);
  if ( i != to ) {
      if (!smoothScrollFeature) {
          to = parseInt(to);
          if (i < to) {
              var int = setInterval(function() {
                  if (i > (to-20)) i += 1;
                  else if (i > (to-40)) i += 3;
                  else if (i > (to-80)) i += 8;
                  else if (i > (to-160)) i += 18;
                  else if (i > (to-200)) i += 24;
                  else if (i > (to-300)) i += 40;
                  else i += 60;
                  window.scroll(0, i);
                  if (i >= to) clearInterval(int);
              }, 15);
          }
          else {
              var int = setInterval(function() {
                  if (i < (to+20)) i -= 1;
                  else if (i < (to+40)) i -= 3;
                  else if (i < (to+80)) i -= 8;
                  else if (i < (to+160)) i -= 18;
                  else if (i < (to+200)) i -= 24;
                  else if (i < (to+300)) i -= 40;
                  else i -= 60;
                  window.scroll(0, i);
                  if (i <= to) clearInterval(int);
              }, 15);
          }
      }
      else {
          window.scroll({
              top: to,
              left: 0,
              behavior: 'smooth'
          });
      }
  }
};