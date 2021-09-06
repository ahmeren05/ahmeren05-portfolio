var isSafari =!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

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
var imgs = document.querySelectorAll('img');
var i;
for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragstart', (e) => e.preventDefault())
}

var body = document.querySelector("body") 


//skills container progress
var zaman1check = zaman2check = zaman3check = 0;
var skillscontainer = document.querySelector(".skills-container")
const numb = document.querySelectorAll(".timer");
let counter1 = 0,counter2 = 0, counter3 = 0;
var skillsasides = document.querySelectorAll(".skills-container>aside aside")


//blog text animation
var blogs = document.querySelectorAll(".blog")

// to up button
var toupbutton = document.querySelector(".top")


function scrollFunction() {
  var windoww = window.innerWidth
  var windowh = window.innerHeight

  //navigation circle animation
  if(windoww>=1000 && windowh>=500){
    if (document.documentElement.scrollTop>40 ||document.body.scrollTop>40){
      document.querySelector(".nav-list-div").style.transform = "translateX(0)";
      document.querySelector(".nav-list-div2").style.transform = "translateY(-100px)";
      document.querySelector(".nav-list-div").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
    }
    else if(document.documentElement.scrollTop<=40 || document.body.scrollTop<=40){ 
      document.querySelector(".nav-list-div").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div").style.transform = "translateX(150px)";
      document.querySelector(".nav-list-div2").style.transform = "translateY(0px)";  
    }
  }else if((windoww<1000) || (windoww>1000 && windowh<500)){
    if (document.documentElement.scrollTop>40 ||document.body.scrollTop>40){
      document.querySelector(".nav-list-div").style.transform = "translateY(0)";
      document.querySelector(".nav-list-div2").style.transform = "translateY(-100px)";
      document.querySelector(".nav-list-div").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
    }
    else if(document.documentElement.scrollTop<=40 || document.body.scrollTop<=40){ 
      document.querySelector(".nav-list-div").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
      document.querySelector(".nav-list-div").style.transform = "translateY(-150px)";
      document.querySelector(".nav-list-div2").style.transform = "translateY(0px)";  
    }
  }else{
    document.querySelector(".nav-list-div2").style.transition = "transform 0.5s"
    document.querySelector(".nav-list-div2").style.transform = "translateY(0px)";  
  }

  // to up button animation
  if (document.documentElement.scrollTop > 40) {
    toupbutton.style.transform = "translateX(0px)";
  }if(document.documentElement.scrollTop<=40){
    toupbutton.style.transform = "translateX(100px)";
  }


  //skills container progress
  //html progress
  if (document.body.scrollTop + windowh > skillsasides[0].offsetTop + ((skillsasides[0].offsetHeight)*2/3 +skillscontainer.offsetTop) || document.documentElement.scrollTop + windowh > skillsasides[0].offsetTop + ((skillsasides[0].offsetHeight)*2/3) +skillscontainer.offsetTop){
    document.querySelector(".htmlskillsleft").style.animationName="percent50";
    document.querySelector(".htmlskillsright").style.animationName="percent80";
    if (zaman1check == 0 || zaman1check == 1) {  
      zaman1check++;
    }
    if (zaman1check==1 && isSafari == false) {
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
  //css progress
  if (document.body.scrollTop + windowh > skillsasides[1].offsetTop + ((skillsasides[1].offsetHeight)*2/3 + skillscontainer.offsetTop) || document.documentElement.scrollTop + windowh > skillsasides[1].offsetTop + ((skillsasides[1].offsetHeight)*2/3 + skillscontainer.offsetTop)){
    document.querySelector(".cssskillsleft").style.animationName="percent50";
    document.querySelector(".cssskillsright").style.animationName="percent70";
    if (zaman2check == 0 || zaman2check == 1) {
      zaman2check++;
    }
    if (zaman2check==1 && isSafari == false) {
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
  //javascript progress
  if (document.body.scrollTop + windowh > skillsasides[2].offsetTop + ((skillsasides[2].offsetHeight)*2/3 + skillscontainer.offsetTop) || document.documentElement.scrollTop + windowh > skillsasides[2].offsetTop + ((skillsasides[2].offsetHeight)*2/3 + skillscontainer.offsetTop)){
    document.querySelector(".jsskillsright").style.animationName="percent40";
    if (zaman3check == 0 || zaman3check == 1) {
      zaman3check++;
    }
    if (zaman3check==1 && isSafari == false) {
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

  //blog text animation
  for (let index = 0; index < blogs.length; index++) {
    if (document.body.scrollTop + windowh > blogs[index].offsetTop + ((blogs[index].offsetHeight)*2/3) || document.documentElement.scrollTop + windowh > blogs[index].offsetTop + ((blogs[index].offsetHeight)*2/3)){
      blogs[index].style.animationName="blogdrop";
    }
  }

  
  //navigation circles background change
  var pageyoffestenbüyükler = []
  var articles = document.querySelectorAll("body>article")
  for (let index = 0; index < articles.length; index++) {
    if (window.pageYOffset>=(articles[index].offsetTop)-window.innerHeight * 1/3) {
      pageyoffestenbüyükler.push(articles[index])
    }
  }
  var boyanacaktop = pageyoffestenbüyükler.length -1;  
  console.log("işlem yapılacak: " + boyanacaktop)
  var navlistli = document.querySelectorAll(".nav-list-li")
  for (let index = 0; index < navlistli.length; index++) {
    navlistli[index].style.backgroundColor = "white";
    if (index==boyanacaktop) {
      navlistli[boyanacaktop].style.backgroundColor = "#185982"
    }
  }
}
window.addEventListener("scroll", () => { 
  scrollFunction();
});
window.addEventListener("load", () => { 
  scrollFunction();
});



var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});