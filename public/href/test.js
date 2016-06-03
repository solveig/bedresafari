function startSafari(fromWhere, language) {
try {
var fromId = fromWhere;
var thisLang = language;
var 	mainBar = 7;

var mainRef = {
  "navBars"             : [ "LYDSAFARI","BEDREDATA","EMF","BERGYL","NBH","SI","NATUR"],
  "navHref"             : [ "startSafari('lydsafari', 'no');",
                            "startSafari('bedredata', 'no');",
                            "startSafari('emf', 'no');",
                            "startSafari('bergyl', 'no');",
                            "startSafari('nbh', 'no');",
                            "startSafari('si', 'no');",
                            "startSafari('natur', 'no');"
                          ]
};
var mainNav_no = {
  "barInfo"             : [ "Event, foredrag, opplevelser og kanskje lydhealing. Undersøke kirkens hemmeligheter. Sanse og formidle naturens skjulte frekvenser.",
  	                        "IT konsulent tjenester. -X3DOM,-MongoDB ",
  	                        "Lavere grenseverdier på elektromagnetisk stråling.",
  	                        "Bergyl er en 3D struktur som en liten nisse viste Solveig. Kan det være tankens byggestein?",
                            "NBH: Ny blå himmel er registrering av flystriper for analyse i geoengineering  i en database.",      
                            "Spirituelle og åndlige temaer.",
                          "Naturen, dyr, trær, stener."],
  "barImg"              : ["/bilder/solLydWeb.gif","/bilder/bedredataLogo2.gif","/bilder/emfLogo2.gif","/bilder/bergylLogo2.gif", "/bilder/sky2.gif","/bilder/siLogo2.gif","/bilder/naturLogo2.gif"],                    
  "version"             : "ver 1.01"
};
var mainNav_sv = {
  "barInfo"             : [ "Händelse, föreläsningar, erfarenheter och ljud läkning, ljud healing. Undersök kyrka hemligheter. Sanse och förmedla naturens dolda frekvenser.",
  	                        "IT-konsulttjänster. -X3DOM, -MongoDB",
  	                        "Lägre gräns av elektromagnetisk strålning.",
  	                        "Bergyl är en 3D-struktur som en liten älva visade Solveig. Kan det vara tanken byggsten?",
                            "NBH:. Ny blå himmel registrering av airstrips för analys i geoengineering i en databas",      
                            "Andliga teman.",
                          "Natur, djur, träd, stenar."],
  "barImg"              : ["/bilder/solLydWeb.gif","/bilder/bedredataLogo2.gif","/bilder/emfLogo2.gif","/bilder/bergylLogo2.gif", "/bilder/sky2.gif","/bilder/siLogo2.gif","/bilder/naturLogo2.gif"],                    
  "version"             : "ver 1.01"
};
var mainNav_en = {
  "barInfo"             : [ "Event, speech and perhaps sound healing. Examine church secrets. Sense and convey nature's hidden frequencies.",
                            "Finished Computer program and consultancy services.", 
                            "Lower limits on electromagnetic radiation.",
                            "Bergyl is a 3D structure like a little elf showed Solveig . Could it be tank building block?",
                            "NBH: New blue sky registration of airstrips for analysis in geoengineering in a database.",
                            "Spiritual themes.",
                            "Nature, animals, trees, stones."],
  "barImg"              : ["/bilder/solLydWeb.gif","/bilder/bedredataLogo2.gif","/bilder/emfLogo2.gif","/bilder/bergylLogo2.gif", "/bilder/sky2.gif","/bilder/siLogo2.gif","/bilder/naturLogo2.gif"],                    
  "version"             : "ver 1.01",
};

var main_no= 
{ "speak"               : "no",
	"logoTxt"            : "BedreSafari",
  "infoTxt"            : "Konsulent tjenester, event, meninger, ønsker og informasjon om Bergyl." ,
};
var main_sv= 
{ "speak"               : "sv",
	"logoTxt"            : "BedreSafari",
	"logo"                : "/bilder/logo.gif" ,
	"logo2"               : "/bilder/solveig1.gif" ,
  "logo2Title"          : "Solveig Løvhaug",
  "infoTxt"            : "Konsulttjänster, event, åsikter, önskemål och information om Bergyl." ,
};
var main_en       = 
{ "speak"               : "en",
	"logoTxt"            : "BedreSafari",
	"logo"                : "/bilder/logo.gif" ,
	"logo2"               : "/bilder/solveig1.gif" ,
  "logo2Title"          : "Solveig Løvhaug",
 "infoTxt"            : "Consulting services, event, opinions, wishes and information Bergyl.",
 };


var emf = function (nav,info,contact,links,me,speakLan) {
siLinkList = "<h1>EMF ... working on...</h1>";   
  document.getElementById('linkList').innerHTML = siLinkList;
     document.getElementById('isFrom').innerHTML ='emf'; 
};
var bergyl = function (nav,info,contact,links,me,speakLan) {
siLinkList = "<h1>Bergyl ... working on...</h1>";   
  document.getElementById('linkList').innerHTML = siLinkList; 
     document.getElementById('isFrom').innerHTML ='bergyl';
};
var nbh = function (nav,info,contact,links,me,speakLan) {
siLinkList = "<h1>NBH ... working on...</h1>";   
  document.getElementById('linkList').innerHTML = siLinkList;
     document.getElementById('isFrom').innerHTML ='nbh'; 
};
var si= function (nav,info,contact,links,me,speakLan) {
	siLinkList = "<h1>SI ... working on...</h1>";   
  document.getElementById('linkList').innerHTML = siLinkList; 
     document.getElementById('isFrom').innerHTML ='si';
};
var natur = function (nav,info,contact,links,me,speakLan) {
	siLinkList = "<h1>Naturen ... working on...</h1>";   
  document.getElementById('linkList').innerHTML = siLinkList; 
     document.getElementById('isFrom').innerHTML ='natur';
};

    //"LYDSAFARI","BEDREDATA","EMF","BERGYL","NBH","SI","NATUR" color: #feb06c;

// Content in BedreSafari.no
var bedresafari = function (nav,info,contact,links,me,speakLan) {
    var siLinkList = '<nav class="navMenu"><ul>';
    for (var i=0;  i <mainBar;i++) {
      siLinkList = siLinkList + '<li class="liMenu"><a  class="mainCont" href="#" onclick="' + mainRef.navHref[i]+' return false;"' +'><h3>'+ mainRef.navBars[i]+'</h3><img class="imgMenu" width="200px" src='+nav.barImg[i]+' alt= "Malt, fotografert, laget av Solveig Løvhaug" /></a><p>'+nav.barInfo[i]+'</p></li>';
    }     
    siLinkList = siLinkList + "</ul></nav>";
    document.getElementById('linkList').innerHTML = siLinkList;     
    document.getElementById('isFrom').innerHTML ='bedresafari';
}; 

// Content in Lydsafari.no with another menu
var  makeContent = function(nav,info,contact,links,me,speakLan,cnt,idx,thisFrom) {
	var siLinkList = "<nav class='linkHead' ><ul class='container'>";
  for (var i=0;  i < cnt;i++) {
    siLinkList = siLinkList + '<li class="flex" ><a class="linkHead" href='+ me.ref[i]+'>'+ me.head[i]+'</a></li>';
  }   
  siLinkList = siLinkList + '</ul></nav>';
  
  siLinkList = siLinkList + '<nav class= "navMenu"><ul>';
  for ( i=0;  i <cnt;i++) {
     if (i=== 0) {  // using variables is the reason
       siLinkList = siLinkList  + '<li class="liContent + liContentMer"><section><header><h2 id="'+ me.idHead[i] + '">' + me.head[i] + '</h2></header>' + '<img class="inside" width="459px" src='+nav.barImg[idx]+' linklisalt= "Solveig Løvhaug ,fototgraf:Anja Lillerud i Halden Arbeiderblad." />' + me.body[i] + '</section></li>';
     } else {	
       siLinkList = siLinkList  + '<li class="liContent"><section><header><h2 id="'+ me.idHead[i] + '">' + me.head[i] + '</h2></header>' + me.body[i] + '</section></li>';
     }
   }   
   siLinkList = siLinkList + '</ul></nav>';
   
   // use 0 as index
  document.getElementById('linkList').innerHTML = siLinkList; 
  document.getElementById('isFrom').innerHTML =thisFrom;
};


// Making menu in header ==
var makeMenu = function (who, isBlog, blogRef,blogTxt) {
 var siMenuList = "";
 var toDo = "document.getElementsByClassName('menuList')[0].classList.toggle('opened'); ";
    for ( i=0;  i <mainBar;i++) {
      if (i == who) {
        siMenuList = siMenuList + '<li><a class = "mainHead choosen" href="#"  onclick="' + toDo + mainRef.navHref[i]+' return false;">'+mainRef.navBars[i]+'</a></li>';   

      } else {
        siMenuList = siMenuList + '<li><a class = "mainHead" href="#"  onclick="' + toDo + mainRef.navHref[i]+' return false;">'+mainRef.navBars[i]+'</a></li>';      
      }
    }     
    document.getElementById('menuList').innerHTML = siMenuList;     
};

var startMe = function (fromWhere, language) {
    var speakLan = language;
    var thisFrom = fromWhere;
    var info;  
    var nav;
    var vis = location.href; 
    var me;
    

    var contact = 'KONTAKT';
    var links   = 'LINKER';
    var isBlog  = 'BLOGG';
   
    //alert("fra" + thisFrom + " lang: " + speakLan + 'location.href='+ vis);
    
               // var infoNo = JSON.parse(main_no); alert('no'+infoNo.logoTxt); var infoEn = JSON.parse(main_en); er alt parsa
  
    switch(speakLan) {
    case "no":
    	info = main_no;
    	nav = mainNav_no;
    	contact = 'KONTAKT';
    	links   = 'LINKER';
    	isBlogg = 'BLOGG';
     
      break;
    case "sv":
    	info = main_sv;
    	nav = mainNav_sv;
    	contact = 'KONTAKT';
    	links   = 'LÄNKAR';
    	isBlogg = 'BLOGG';
     
      break;
    case "en":
      info = main_en;
      nav = mainNav_en;
      contact = 'CONTACT';
      links   = 'LINK';
      isBlog = 'BLOG';
     	 
      break; 
    default:
      alert("Language deafult:" + speakLan);
    }	
    //alert('hei'+info.infoTxt);
    //document.getElementById('headTitle').innerHTML= info.logoTxt;   
    //console.log('test :'+info.logoTxt);
    document.getElementById('logoTxt').innerHTML= info.logoTxt;
    document.getElementById('contactTxt').innerHTML= contact;   
    document.getElementById('contact2Txt').innerHTML= contact;   
    document.getElementById('blogTxt').innerHTML= isBlog;   
    document.getElementById('blog2Txt').innerHTML= isBlog;   
     document.getElementById('infoTxt').innerHTML=info.infoTxt;     
  
    switch(thisFrom) {
    case "bedresafari":
       makeMenu(-1,"blogSisi","lydsafari.no",isBlog); 
       me = '';
       bedresafari(nav,info,contact,links,me,speakLan);
       break;
    case "lydsafari":
      switch(speakLan) {
      case "no":
    	   me = LYDSAFARI_no;
        break;
      case "sv":
         me = LYDSAFARI_sv;
        break;
      case "en":
         me = LYDSAFARI_en;
        break;
      default:
        alert("Lang deafult:" + speakLan);
      }	      
      makeMenu(0,"blogLydSafari","lydsafari.no/lydsafari",isBlog); 
      makeContent(nav,info,contact,links,me,speakLan,lydBar, 0,"lydsafari");
      break;
    case "bedredata": 
       switch(speakLan) {
       case "no":
    	   me = BEDREDATA_no;
         break;
       case "sv":
         me = BEDREDATA_sv;
         break;
       case "en":
         me = BEDREDATA_en;
         break;
       default:
        alert("Lang deafult:" + speakLan);
      }	 
      makeMenu(1,"blogBedredata", "lydsafari.no/bedredata/",isBlog); 
      makeContent(nav,info,contact,links,me,speakLan,bedreBar, 1,"bedredata");  
       break;
    case "emf":
       switch(speakLan) {
       case "no":
    	   me = EMF_no;
         break;
       case "sv":
         me = EMF_sv;
        break;
      case "en":
         me = EMF_en;
         break;
       default:
        alert("Lang deafult:" + speakLan);
       }	 
       makeMenu(2); 
       emf(nav,info,contact,links,me,speakLan);
       break;
    case "bergyl":
       switch(speakLan) {
       case "no":
    	   me = BERGYL_no;
         break;
       case "sv":
         me = BERGYL_sv;
        break;
      case "en":
         me = BERGYL_en;
         break;
       default:
        alert("Lang deafult:" + speakLan);
       }	 
        makeMenu(3); 
       bergyl(nav,info,contact,links,me,speakLan);
       break;
    case "nbh":
        if (speakLan == 'no') {
       	  me = NBH_no;
       	} else {  
       	  me = NBH_en;
        }	
       makeMenu(4);
       nbh(nav,info,contact,links,me,speakLan);
       break;
    case "si":
       switch(speakLan) {
       case "no":
    	   me = SI_no;
         break;
       case "sv":
         me = SI_sv;
        break;
      case "en":
         me = SI_en;
         break;
       default:
        alert("Lang deafult:" + speakLan);
       }	 
       makeMenu(5); 
       si(nav,info,contact,links,me,speakLan);
       break;
    case "natur":
       switch(speakLan) {
       case "no":
    	   me = NATUR_no;
         break;
       case "sv":
         me = NATUR_sv;
        break;
      case "en":
         me = NATUR_en;
         break;
       default:
        alert("Lang deafult:" + speakLan);
       }	 
        makeMenu(6); 
       natur(nav,info,contact,links,me,speakLan);
       break;
     
    default:
    alert("fromId deafult:" + fromId+ " href: " + vis);
    }
   
};
 
 
 startMe(fromId, thisLang);
  var lagMeg = document.getElementById('bedresafari').innerHTML;
  console.log('her er '+ lagMeg);
 //return false;
}
catch(err) {
console.log('err er :'+err.message);
}     

}

function changeContent(isLang ) {
	var isFrom1 = document.getElementById('isFrom').innerHTML;
 	var isLang1 = isLang;
 	//alert("fra changeContent " + isLang1 +' from='+isFrom1);
 	//document.getElementById("oversettList").style.display = "none";
	document.getElementsByClassName('oversettList')[0].classList.toggle('opened');
	startSafari(isFrom1,isLang1);
}  



