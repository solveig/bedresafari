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
  "infoTxt"            : "Konsulent tjenester, event og ting jeg ønsker å formidle." ,
};
var main_sv= 
{ "speak"               : "sv",
	"logoTxt"            : "BedreSafari",
	"logo"                : "/bilder/logo.gif" ,
	"logo2"               : "/bilder/solveig1.gif" ,
  "logo2Title"          : "Solveig Løvhaug",
  "infoTxt"            : "Konsulttjänster, event och annat jag vill förmedla." ,
};
var main_en       = 
{ "speak"               : "en",
	"logoTxt"            : "BedreSafari",
	"logo"                : "/bilder/logo.gif" ,
	"logo2"               : "/bilder/solveig1.gif" ,
  "logo2Title"          : "Solveig Løvhaug",
 "infoTxt"            : "Consulting services, event and things I want to convay.",
 };

var GALLERI_no       = 
{ "speak"                : "no",
	"logoTxt"            : "GALLERI",
  "infoTxt"            : "Spirituelle malerier"       
};
var GALLERI_en       = 
{ "speak"                : "en",
	"logoTxt"            : "GALLERY",
  "infoTxt"            : "Spiritual paintings"       
};
var bedreBar = 7;
var BEDREDATA_no       = 
{ "speak"               : "no",
	"logoTxt"            : "BedreData",
  "infoTxt"            : "Dataprogram laget av Solveig.",
    "ref"               : ["#IT","#X3DOM", "#MongoDB", "#HTML", "#XML", "#Language", "#Database"],
  "head"                : ["IT-konsulenttjenester", "X3DOM", "MongoDB","HTML5,CSS3,Javascript,Node", "SGML,XML,XSLT,XSD,SVG", "Fortran,C,C++,PHP,EriPascal", "PL/SQL,Oracle,Sybase,Sybase IQ"],
  "idHead"              : ["IT", "X3DOM", "MongoDB", "HTML", "XML", "Language", "Database"],
  "body"                : [
  '<p>IT-konsulenttjenester helst innen X3DOM og MongoDB.</p>'+
  '<p>Har jobbet med egne prosjekt siden 2014 (MongoDB, Node.js, Javascript , HTML, CSS, X3DOM).</p>'+
   '<p>5 år med Fortran for Lindorff og Soliditet. Kreditt informasjon.</p>  '+
  '<p>Jobbet for oljeindustrien Statoil/Hydro med PL/SQL.</p>'+
  '<p>Jobbet for energibransjen med PL/SQL, C, C ++, Sybase.</p>'+
  '<p>For mer informasjon se min <a href="https://no.linkedin.com/in/solveiglovhaug" target="_blank" >LinkedIn profil</a> eller be om min CV.</p>'+
  '<p>Jeg er pensjonist og klar for mindre oppgaver.</p)',
  
  
  '<p>X3DOM - 3D grafikk (X3D)</p>'+
  '<p>Integrerer 3D inn i HTML5 uten plugins. Resultatet ska se likt ut på de fleste device og browsere.</p>'+
	'<p><br><a  href="http://www.lydsafari.no/ork/" target="_blank" >'+
  '<figure><img id= "ork" width="141px" height="200px" src="/bilder/ork2.gif"   alt="Animasjon i X3DOM"/><figcaptain>En liten animasjon jeg har laget med X3DOM. </figcaptain></figure></a></p>'+
  '<p><br><a href="http://www.x3dom.org/">Les mer om X3DOM</a></p>',
	  
 
	  '<p>MongoDB er en NoSql database , den er OpenSource.Jeg bruker den sammen med Node.js, JSON og Javascript.BIG DATA.<a href="https://www.mongodb.com/">Les mer mongodb.com</a></p>'+
	  '<p>Jeg har brukt MongoDB siden 2013 i små private prosjekter. Har tatt kurs i MongoDB og bestått.</p>'+
	  '<p><a href="http://www.x3dom.org/"><img id= "img1" width="459px" height="200px" src="/bilder/mongodb.gif"   alt="MongoDB kurs"/> </a></p>',
	  
	  '<p>HTML og CSS har jeg brukt i mange år. Javascript og Node.js siden 2013.</p>'+
	  '<p>Denne hjemmesiden er en "Single Page Website". Det fins kun en html fil, et javascript og en CSS fil. I tillegg har jeg brukt SSI-enabled HTML.</p>'+
	  '<p>Jeg tok nylig et kurs i HTML5 og Javascript. Kursene anbefales. <img id= "img2" width="570px" height="220px" src="/bilder/bagdeHtml.gif"   alt="HTML5 og Javascript kurs"/></p>',
    
    '<h3>er en del av "The World Wide Web Consortium (W3C)" standarden.</h3>'+
    
    '<p>Jeg begynte å jobbe med data i 1980 og siden jeg har jobbet i mange forskjellige firmaer både som ansatt og konsulent, har jeg erfaring med mange programmering  språk. </p>'+
    '<p>Fortran startet jeg med og avsluttet jeg min yrkeskarriere  før jeg ble pensjonist. </p>'+
    '<p>EriPascal er et sanntids system som jeg kunne veldig godt og jeg syns det var morsomt. Jeg måtte holde tunga rett i munn når jeg lagde "symbolsk debugger" for Eri-Pascal kompilatoren". Men jeg fikk samvittighetsproblem med å jobbe med produktene. Derfor sier jeg i dag nei til alle jobber innen forsvaret.</p>'+
    '<p>En morsom C jobb var å endre på en ftp-driver og en annen var å decode Huffman-tabell fra et fax-program.</p><p>For OMX Technology jobbet jeg bl.a. med BusinessObjects, C og C++.</p>',

    '<p>HTML og XML bygger på SGML. I 1990 fikk jeg en konsulent jobb om å bli SGML ekspert. En jobb jeg gjorde var å lage en DTD (Document Type Definition ) for den tekst-editoren som Ericcson Radar brukte.</p>'+
    '<p>Senere har jeg brukt XML, XSLT, XSD og SVG i mange prosjekt. HTML er også en del av W3C.</p>'+
    '<p<br><a href=">https://www.w3.org/">Les mer om W3C</a></p>',
    
      
    '<p>For meg var database en gang noe negativt, alt for "høy-nivå". jeg likte å kode i assembler og C. </p>'+
    '<p>Så fikk jeg en konsulent jobb å optimere et C program og fant ut at den bese løsningen var å bruke PL/SQL. Jeg ble imponert over hvor mye mindre kode og hvor mye sikrere kode jeg får ved å bruke database.</p>'+
    '<p>Siden har jeg jobbet med mange prosjekt med PL/SQL og Oracle, Sybase og C++ og Pl/SQL, Oracle og BussinessObjects. Jeg har også jobbet med Sybase IQ som er en datavarehus-database. Jeg ble imponert over hvor fort det gikk.</p>' 
]       
};
var BEDREDATA_en       = 
{ "speak"                : "no",
	"logoTxt"            : "DATA",
	"infoTxt"            : "Computer program created by Solveig.",       
   "ref"               : ["#IT", "#X3DOM", "#MongoDB", "#HTML", "#XML", "#Language", "#Database"],
  "head"                : ["IT consultancy", "X3DOM", "MongoDB","HTML5,CSS3,Javascript,Node", "SGML,XML,XSLT,XSD,SVG", "Fortran,C,C++,PHP,EriPascal", "PL/SQL,Oracle,Sybase,Sybase IQ"],
  "idHead"              : ["IT", "X3DOM", "MongoDB", "HTML", "XML", "Language", "Database"],
  "body"                : [
 '<p>IT consultancy preferably within X3DOM and MongoDB</p>'+
  '<p>Having worked with MongoDB, Node.js, JavaScript, HTML, CSS and X3DOM since 2014.</p>'+
   '<p>5 years with Fortran for Lindorff and Soliditet. Credit information.</p>  '+
  '<p>Worked for oil industry Statoil / Hydro with PL/SQL.</p>'+
  '<p>Worked for the energy industry with PL/SQL, C, C ++, Sybase.</p>'+
  '<p>For more information see my <a target="_blank" href="https://no.linkedin.com/in/solveiglovhaug"> LinkedIn profile</a> or request my resume.</p>'+
  '<p>I am retired and ready for smaller tasks.</p)',
   
  '<p>X3DOM - 3D Graphics (X3D)</p>'+
  '<p>Integrates 3D into HTML5 without plugins. The result shall be identical on most device and browsers.</p>'+
	'<p><br><a  href="http://www.lydsafari.no/ork/" target="_blank" >'+
  '<figure><img id= "ork" width="141px" height="200px" src="/bilder/ork2.gif"   alt="Animaation in X3DOM"/><figcaptain> A small animation I made with X3DOM </figcaptain></figure></a></p>'+
  '<p><br><a href="http://www.x3dom.org/">More info X3DOM.</a></p>',
	  
 
	'<p> MongoDB is a NoSQL database, it is OpenSource.I using it with Node.js, JSON and Javascript.BIG DATA. <a href="https://www.mongodb.com/">More info MongoDB</a> </ p> '+
  '<p> I have been using MongoDB since 2013 in small private projects. Has taken courses in MongoDB and passed. </p> '+
  '<p><a href="http://www.x3dom.org/"><img id= "img1" width="459px" height="200px" src="/bilder/mongodb.gif"   alt="MongoDB kurs"/> </a></p>',
	
  '<p> HTML and CSS I have used for years. JavaScript and Node.js since 2013. </p> '+
  '<p> This website is a "Single Page Website". There is only one html file, javascript and CSS file. In addition, I used SSI-enabled HTML. </p> '+
  '<p> I recently took a course in HTML5 and JavaScript. The courses are recommended. <img id = "img2" width="570px" height="220px" src = "/bilder/bagdeHtml.gif" alt = "HTML5 and JavaScript courses" /> </p> ',
    
  '<h3> is part of "The World Wide Web Consortium (W3C)" standard. </h3>' +
    
  '<p> I started working with data in 1980 and since I have worked in many different companies both as an employee and consultant, I have experience in many programming languages. </p> '+
  '<p> Fortran I started and ended my career before I retired. </p> '+
  '<p> EriPascal is a real-time system that I could very well and I thought it was funny. I had to hold my tongue right in the mouth when I made "symbolic debugger" for Eri-Pascal compiler. "But I got conscience problem with working with the products. Therefore I say today rejection of all jobs in the defense. </p> '+
  '<p> A funny C job was to change an ftp driver and another was to decode the Huffman table from a fax application. </p> <p> For OMX Technology, I worked among others with Business Objects, C and C ++. </p> ',

  '<p> HTML and XML are based on SGML. In 1990 I got a consulting job to become SGML expert. A job I did was to create a DTD (Document Type Definition) for the text editor as Ericcson Radar used. </p> '+
  '<p> Later I used XML, XSLT, XSD and SVG for many projects. HTML is also part of the W3C. </p> '+
  '<p <br> <a href="> https://www.w3.org/">More info W3C.</a> </p>',   
      
  '<p> For me database once something negative, all for "high-level". I liked to code in assembler and C. </p> '+
  '<p> So I got a consultant to optimize a C program and found that it defeats the solution was to use Pl/SQL. I was impressed with how much less code and how much safer code I get using the database. </p> '+
  '<p> Since I have worked with many projects with PL / SQL and Oracle, Sybase and C ++ and Pl / SQL, Oracle and BussinessObjects. I have also worked with Sybase IQ as a data warehouse database. I was impressed with how fast it went.</p> '
  ]
};
var BEDREDATA_sv       = 
{ "speak"                : "no",
	"logoTxt"            : "DATA",
  "infoTxt"            : "Computer program created by Solveig." ,      
   "ref"               : ["#IT","#X3DOM", "#MongoDB", "#HTML", "#XML", "#Language", "#Database"],
  "head"                : ["IT consultancy", "X3DOM", "MongoDB","HTML5, CSS3, Javascript og Node.js", "SGML, XML, XSLT, XSD, SVG", "Fortran, C, C++, PHP, EriPascal", "PL/SQL, Oracle, Sybase, Sybase IQ"],
  "idHead"              : ["IT", "X3DOM", "MongoDB", "HTML", "XML", "Language", "Database"],
  "body"                : [
   ]
 };
 
var lydBar = 9;
// halden arbeiderblad http://www.ha-halden.no/nyheter/taleror-for-sjelen-din/s/1-2906373-7407300
// Ylvis 
var LYDSAFARI_no       = 
{ "speak"           : "no",
	"logoTxt"        : "LYDSAFARI",
  "infoTxt"        : "Formidle naturens gjemte frekvenser.",
  "ref"             : ["#Lydsafari", "#6Sans","#Personlig", "#Gruppe", "#Gjenstand", "#Plass", "#Kirke", "#Foredrag", "#Pris"],
  "head"            : ["Lydsafari", "Din 6. sans","Personlig lydreise", "Gruppe lydreise", "Lyd på gjenstand", "Lyd på plasser", "Undersøk kirkens hemmeligheter", "Foredrag", "Pris og tilgjengelighet"],
  "idHead"            : ["Lydsafari",  "6Sans","Personlig", "Gruppe", "Gjenstand", "Plass", "Kirke",  "Foredrag", "Pris"],
  "body"            : [
  '<p>Solveig har over 20 års erfaring med å sanse og formidle naturens gjemte frekvenser, energier fra folk, ting og plasser gjennom lyder. Det er selve opplevelsen som er viktig. Bare å være i det. Noen ganger skjer det lydhealing.</p>'+
  '<h3>Prøv noe nytt og spennende!</h3>'+
   '<h4>Lydreise</h4><p>person, gruppe, gjenstand, plass</p>'+
   '<h4>Event</h4><p>Test din 6. sans.</p>Undersøk kirkens hemmeligheter.<p>'+
   '<h4>Foredrag, kurs, workshop.</h4>'+
   '<p><a class="ha" href="http://www.ha-halden.no/nyheter/article7407300.ece" target="_blank" >Les om LydSafari i Halden Arbeiderblad</a></p>',
   
   '<h3><span style="color:#feb06c"> EVENT</span> </h3>'+
   '<h4>Lær hvordan man kan.</h4>'+
   '<p>Ta lyd av gjenstander og ta lyd av plasser.</p>'+
   '<p>Kjenne aura med hånda eller finne gjemte gjenstander.</p>'+
    '<h4>Oppleve</h4>'+
    '<p>Kroppen beveger seg av seg selv og tårene renner.</p>'+
    '<p>Du føler frysninger eller varme.</p>'+ 
    '<h4>Ta selv lyden til</h4>'+
    '<p>Gjenstand, tegning, maleri - høres det ut som en melodi.</p>'+
    '<p>Er lyden harmonisk, skurrende, skummel eller er det setninger som blir sagt.</p><p><br><br><br></p>',         
   
   '<p>Bli med på en eventyrlig lydreise i ditt indre univers.</p>'+
   '<p>Tonevariasjonene fra ditt indre danner tilsammen lydbildet av deg.</p>'+
   '<a  class="ylvis" href="https://www.youtube.com/watch?v=x2T7W-2wA_A&feature=youtu.be&t=7m14s" target="_blank" >'+
	 '<img class= "inside"width="16vw"  src="/bilder/ylvis.gif"   alt="Fra Norges Herligste og Energidama"/>Et lite eksempel på lydreise med Bård i Ylvis.'+
	 '<p><a class="ha" href="http://www.ha-halden.no/nyheter/article7407300.ece" target="_blank" >Et lenger eksempel i denne artikkelen.</a></p>',
      
    '<p>Dette passer for jubilant, utdrikningslag, kjærester, famile og venner.</p>'+
   '<p>Tar lyd på gruppa som helhet og på enkelt personene og gjenstander som har betydning for personen eller forholdet.</p>',
   
   '<p>Tar lyd på gjenstanden.Det kan være et smykke,bilde, gjenstand, tegning, maleri eller et klesplagg.</p>',
    
   '<p>Tar lyd på plasser som personen tenker på eller som vi besøker.</p>',	
       
    '<h3>Besøk en kirke. <span style="color:#feb06c"> EVENT</span></h3>'+ 
   '<h4>Salmesanger</h4><p>I kirker fins det usynlige energiveier(12) rundt alteret som høres ut som salmesanger. Folk som er følsomme, kan gå med ønskekvist eller bruke pendel vil kunne kjenne dem. Sangene er forskjellig fra kirke til kirke.</p>'+
   '<h4>Folkesanger og dans</h4><p>Kultplassene eller horg har også usynlige energiveier(7). Kirker ble bygd i nærheten av horg. Ofte finner jeg horg i kirken. Lyden minner om folkesanger og kroppen min begynner å danse automatisk.</p>'+   	
   '<p>Kirken har blitt bygd med gammel kunnskap om jordenergier osv av frimurer ol. Kildematrialet om dette fins i Oslo Universitet arkiver sa Sverre Dag Mogstad. Han er forfatter av "Frimureri : mysterier, fellesskap, personlighetsdannelse.</p>'+
   '<h4>Undersøk din kirke</h4><p>Skaff tillatelse til bruk av kirken og send bud på meg. Her tar jeg ingen betaling utenom dekning av reiseutgifter.</p>',
 
   '<p>Send bud på meg og jeg vil elske å holde foredrag, event, kurs i "å ta lyd" eller workshop rundt dette.</p>'+   	
   '<p>Kan koble foredrag i forhold til interesser som oppdragsgiveren har</p>',
   
    '<p>Prisene avhenger av type oppdrag. Send en e-post med spørsmål. Er det vedledighet kan jeg gjøre det gratis, med få dekka eventuelle reisekostnader.</p>'+
   '<p>Klikk på kontakt knappen nederst for mer kontaktinformasjon.</p>'         

   ]        
};
var LYDSAFARI_sv       = 
{ "speak"           : "no",
	"logoTxt"        : "LYDSAFARI",
  "infoTxt"        : "Förmedla naturen glömde frekvenser.",
  "ref"             : ["#Lydsafari", "#6Sans","#Personlig", "#Gruppe", "#Gjenstand", "#Plass", "#Kirke", "#Foredrag", "#Pris"],
  "head"            : ["Lydsafari", "Din 6. sinne","Personlig lydreise", "Grupp lydreise", "Ljud på föremål", "Ljud på platser", "Undersök kyrk hemligheter", "Presentationer", "Pris och tillgänglighet"],
  "idHead"            : ["Lydsafari",  "6Sans","Personlig", "Gruppe", "Gjenstand", "Plass", "Kirke",  "Foredrag", "Pris"],
  "body"            : [
  '<p>Solveig har över 20 års erfarenhet av känsla och förmedlar naturens dolda frekvenser, energier människor, saker och platser genom ljud. Det är själva upplevelsen som är viktig. Bara att vara där. Ibland händer det att ljud läka, ljud healing.</p>'+
  '<h3>Prova något nytt och spännande! </h3>'+
   '<h4>Lydreise</h4><p>person, grupp,föremål, utrymme</p>'+
   '<h4>Händelse</h4><p>Test din 6. sinne.</p>Undersök kyrk hemligheter.<p>'+
   '<h4>Presentationer, kurs, workshop.</h4>'+
   '<p><a class="ha" href="http://www.ha-halden.no/nyheter/article7407300.ece" target="_blank"> Läs om LydSafari Halden Arbeiderblad.</a><br></p>',
   
   '<h3><span style="color:#feb06c"> EVENT</span></h3>'+
   '<h4>Lär dig att. </h4>'+
   '<p>Ta ljud av föremål och ta ljud av utrymme.</p>'+
       '<p>Känna aura med händer eller hitta gömda föremål.</p>'+
    
    '<h4>Upptäck</h4>'+
      '<p><td>Kroppen rör sig av sig själv-</td> och tårar rinnande.</p>'+
      '<p>Känna frossa eller värme.</p>'+
    '<h4>Ta även ljudet av</h4>'+
     '<p>föremål, teckning, målning. Hva hørs? Spelas en melodi.</p>'+
      '<p>Är ljud harmonisk, raspiga, skumma eller låter det som fraser</p><p><br><br><br></p>',
   
   '<p>Gå med i en äventyrlig lydreise av din inre universum.</p>'+
   '<p>Tone varianter av din inre bildar tillsammans ljudbild av dig.</p>'+
   '<a  class="ylvis" href="https://www.youtube.com/watch?v=x2T7W-2wA_A&feature=youtu.be&t=7m14s" target="_blank" >'+
	 '<img class= "inside"  width="16vw"  src="/bilder/ylvis.gif"   alt="Från Norges Herligste og Energidama"/>Ett litet exempel på lydreise med Bard i Ylvis.'+
	 '<p><a class="ha" href="http://www.ha-halden.no/nyheter/article7407300.ece" target="_blank" >Ett ytterligare exempel i den här artikeln.</a></p>',
      
    '<p>Detta är lämpligt för jublande, familj och vänner. </p>'+
   '<p>Med ljudet av gruppen som helhet och på enskilda personer och objekt av betydelse för den person eller förhållandet. </p>',
   
   '<p>Med ljud på gjenstanden.Det kan vara en juvel, bild, objekt, teckning, målning eller ett klädesplagg.</p>',
    
   '<p>Med ljud på platser som personen tänker på eller som vi besökte.</p>',	
       
    '<h3>Besök en kyrka.  <span style="color:#feb06c"> EVENT</span></h3>'+ 
   '<h4>Psalm Songs </h4><p>I kyrkorna finns osynliga energi vägar (12) runt altaret som låter som psalmsånger. Människor som är känsliga, du går med slagruta eller använda shuttle kommer att kunna känna igen dem. Låtarna skiljer sig från kyrkan till kyrkan.</p>'+
   '<h4>visor och dans </h4><p>Hgrgr har också osynliga energi vägar (7). Kyrkor byggdes nära hgrgr. Ofta finner jag hgrgr kyrka. Ljudet påminner om folkvisor och min kropp börjar dansa automatiskt. </p>'+   	
   '<p>Kyrkan har byggts med gammal kunskap om jordens energi, etc. av frimurarnas ol. Källmaterial för detta återfinns i Oslo universitet arkiv sade Sverre Dag Mogstad. Han är författare till "frimureri:. Mysterier, gemenskap, teckenbildning</p>'+
   '<h4>Undersök din kyrka </h4><p>Få tillstånd att använda kyrkan och fråga mig att komma. Jobb i kyrkor er gratis, men få betalat för resekostnader. </p>',
 
   '<p>Skicka för mig och jag skulle älska att föreläsa, händelse, kurs i" ta ljud "eller verkstad runt detta.</p>'+   	
   '<p>Kan ansluta samtal i förhållande till de intressen.</p>',
   
    '<p> Priserna beror på vilken typ av uppdrag. Skicka ett e-postmeddelande med frågor. Är det vedledighet jag kan göra det gratis, men få betalat för resekostnader.</p>'+
   '<p>Klikk på kontakt knappen nederst for mer kontaktinformasjon.</p>'         

   ]        
};
var LYDSAFARI_en       = 
{ "speak"                : "en",
	"logoTxt"            : "LYDSAFARI",
  "infoTxt"            : "Convey nature forgot frequencies.",
   "ref"             : ["#Lydsafari", "#6Sans","#Personlig", "#Gruppe", "#Gjenstand", "#Plass", "#Kirke", "#Foredrag", "#Pris"],
  "head"            : ["Lydsafari", "Your 6th Sense","Personal sound",  "Group sound", "Sound on subject", "Sound on sites", "Examine church secrets", "Speeches", "Pricing and  availability"],
  "idHead"            : ["Lydsafari",  "6Sans","Personlig",  "Gruppe", "Gjenstand", "Plass", "Kirke",  "Foredrag", "Pris"],
  "body"            : [
  "<p>Solveig has over 20 years experience of sense and convey nature's hidden frequencies, energies of people, things and places through sounds. It is the experience itself that is important. Just being in there. Sometimes it happens sound healing.</p>"+
  '<h3>Try something new and exciting! </h3>'+
   '<h4>SoundSafari</h4><p>person, group, object, location</p>'+
   '<h4>Event</h4><p>Test your 6th sense.</p>Examine church secrets.<p>'+
   '<h4>Speeches, courses, workshops</h4>'+
   '<p><a class="ha" href="http://www.ha-halden.no/nyheter/article7407300.ece" target="_blank" >Read about LydSafari in Halden Arbeiderblad details </a></p>',
   
   '<h3>colspan="2">Learn how to.<span style="color:#feb06c"> EVENT</span> </h3>'+
      '<h4>Learn how to.</h4>'+
      '<p>Take sound from objects -</td> or take sound from locations.</p>'+
       '<tp><td>Feel aura with your hands or find hidden objects.</p>'+
    '<h4>Experience</h4>'+
      '<p>Body moves by itself and tears flowing.</p>'+
      '<p>Feel chills or heating</p>'+ 
    '<h4>By yourself take sound from</h4>'+
       '<p>Object, drawing, paining or do you hear a meody.</p>'+
      '<p>Is the sound harmonic, jarring, scary or do you hear senteces.</p><p><br><br><br></p>',
   
   '<p>Join an adventurous SoundSafari of your inner universe.</p>'+
   '<pTone variations of your inner together form the soundscape of you.</p>'+
   '<a  class="ylvis" href="https://www.youtube.com/watch?v=x2T7W-2wA_A&feature=youtu.be&t=7m14s" target="_blank" >'+
	 '<img class= "inside"  width="16vw" src="/bilder/ylvis.gif"   alt="From Norges Herligste and Energidama"/>A small example of SoundSafari with Bård in Ylvis.'+
	 '<p><a class="ha" href="http://www.ha-halden.no/nyheter/article7407300.ece" target="_blank" >A further example in this article..</a></p>',
    
 
    '<p>This is suitable for jubilant, bachelor parties, couple family and friends.</p>'+
    '<p>Taking sound of the group as a whole and on individuals and objects of significance for the person or the relationship. </p>',
   
   '<p>Taking sound of the object. It may be a jewel, image, object, drawing, painting or a piece of clothing.</p>',
    
   '<p>Taking sound in places like the person thinking of or that we visit </p>',	
       
      '<h3>Visit a church.<span style="color:#feb06c"> EVENT</span></h3>'+ 
   '<h4>Psalm Songs</h4><p>In the churches there are invisible energy pathways (12) around the altar that sounds like hymn songs. People who are sensitive, dowsing people or use shuttle will be able to recognize them. The songs are different from church to church. </p>'+
   '<h4>Folk Songs and dance </h4><p>Hgrgr also have invisible energy pathways (7). Churches were built near hgrgr. Often I find hgrgr in church. The sound is as folk songs and my body starts to dance automatically. </p>'+   	
   '<p>The church has been built with old knowledge about earth energies, etc. by Masonic ol. Source material for this is found in Oslo University archives said Sverre Dag Mogstad. He is the author of "Freemasonry: mysteries, community, character formation.</p>'+
   '<h4>Examine your church</h4><p>Obtain permission to use the church and send for me. I do not take money for this other than payment of travel expenses.</p>',

   '<p> Send for me and I would love to speech, lecture, event, course in "taking sound" or workshop around this. </p>'+   	
   '<p>Can connect talks in relation to the interests of the contracting entity.</p>',
   
   '<p>Prices depend on the assignment type. Send an email with questions. Is that charity can I do it for free, with getting showered any travel costs.</p>'+
   '<p>Click the contact button at the bottom for more contact information. </p>'         
   ]
};


var EMF_no       = 
{ "speak"                : "no",
	"logoTxt"            : "EMF",
  "infoTxt"            : "Elektromagnetisk stråling."       
};
var EMF_en       = 
{ "speak"                : "en",
	"logoTxt"            : "EMF",
  "infoTxt"            : "Electromagnetic radiation."       
};


var BERGYL_no       = 
{ "speak"                : "no",
	"logoTxt"            : "BERGYL",
  "infoTxt"            : "Tankens byggestein?"       
};
var BERGYL_en       = 
{ "speak"                : "en",
	"logoTxt"            : "BERGYL",
  "infoTxt"            : "Thought Basic building block?"       
};

var NBH_no       = 
{ "speak"                : "no",
	"logoTxt"            : "NBH",
  "infoTxt"            : "Ny blå himmel."       
};
var NBH_en       = 
{ "speak"                : "en",
	"logoTxt"            : "NBH",
 "infoTxt"            : "New blue heaven."       
};

var SI_no       = 
{ "speak"                : "no",
	"logoTxt"            : "SI",
  "infoTxt"            : "Spirituelle og åndlige temaer."       
};
var SI_en       = 
{ "speak"                : "en",
	"logoTxt"            : "NATUR",
  "infoTxt"            : "Spiritual themes."       
};
var NATUR_no       = 
{ "speak"                : "no",
	"logoTxt"            : "NATUR",
  "infoTxt"            : "Naturen, dyr, trær, stener..."       
};
var NATUR_en       = 
{ "speak"                : "no",
	"logoTxt"            : "NATURE",
  "infoTxt"            : "Nature, animals, trees, stones..."       
};

    //"LYDSAFARI","BEDREDATA","EMF","BERGYL","NBH","SI","NATUR" color: #feb06c;

// Content in BedreSafari.no
var bedresafari = function (nav,info,contact,links,me,speakLan) {
    var siLinkList = '<nav class="navMenu"><ul>';
    for (var i=0;  i <mainBar;i++) {
      siLinkList = siLinkList + '<li class="liMenu"><a  class="mainCont" href="#" onclick="' + mainRef.navHref[i]+' return false;"' +'><h3>'+ mainRef.navBars[i]+'</h3><img class="imgMenu" width="26vw" src='+nav.barImg[i]+' alt= "Malt, fotografert, laget av Solveig Løvhaug" /></a><p>'+nav.barInfo[i]+'</p></li>';
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
       siLinkList = siLinkList  + '<li class="liContent + liContentMer"><section><header><h2 id="'+ me.idHead[i] + '">' + me.head[i] + '</h2></header>' + '<img class="inside" width="16vw" src='+nav.barImg[idx]+' linklisalt= "Solveig Løvhaug ,fototgraf:Anja Lillerud i Halden Arbeiderblad." />' + me.body[i] + '</section></li>';
     } else {	
       siLinkList = siLinkList  + '<li class="liContent"><section><header><h2 id="'+ me.idHead[i] + '">' + me.head[i] + '</h2></header>' + me.body[i] + '</section></li>';
     }
   }   
   siLinkList = siLinkList + '</ul></nav>';
   
   // use 0 as index
  document.getElementById('linkList').innerHTML = siLinkList; 
  document.getElementById('isFrom').innerHTML =thisFrom;
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
startSafari("bedresafari","no");


