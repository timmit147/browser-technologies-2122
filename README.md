# Studenten poll
Als eindopdracht heb ik een poll gemaakt met een admin pagina waarbij de leraar de vragen kan toevoegen en online zetten. De studenten kunnen de vragen beandwoorden en zien direct de uitkomst. De poll is gecodeerd in HTML, CSS en JS, serverside gerenderd met Node en als template engine EJS.

- Live demo student: https://studenten-poll.herokuapp.com/
- De student kan vragen beandwoorden en het recultaat inzien.
 
 
* Live demo leraar: https://studenten-poll.herokuapp.com/admin
* De leraar kan de vragen maken live zetten en verwijderen.

## Gekozen User Story

> Ik wil tijdens een college aan studenten een poll kunnen voorleggen met vragen en antwoorden, en de resultaten meteen laten zien.

### Vereisten
- Admin-pagina's
	-	Nieuwe vraag en antwoord maken
	-	Per vraag mogelijkheid om te publiceren of nog even achter te houden
	-	Per vraag mogelijkheid antwoorden in te zien en te publiceren of nog even achter te houden
	-	Volgorde vragen bepalen
- Gebruikerspagina's
	-	Gegevens gebruiker (naam)
	-	Vragen zien en beantwoorden
	-	Antwoorden zien, met goede datavisualisatie
- Push: als de admin een vraag en antwoorden publiceert, moeten de gebruikers die nu zijn ingelogd een melding zien en in staat zijn de vraag direct te beantwoorden. (Bedenk zelf op welke manier dit precies gebeurt. Ook: mogen ze meteen nadat ze geantwoord hebben een overzicht van de gegevens antwoorden zien? Zo nee, wanneer dan wel?)

### Basis functionaliteit
Leraar: vraag toevoegen en verwijderen

Student: vraag bekijken en beandwoorden

### Feature list
* Vraag verwijderen
* Pagina automatich herladen toevoegen voor aparaten dat javascript ondersteunt.
* Resultaat in diagram
* Kleuren
* Fonts

Waar ik zelf over zat te twijfelen was het oneindig kunnen stemmen in de poll een feature was. Uiteindelijk wil de leraar niet dat de studenten oneindig kunnen stemmen en is het daarom niet een feature maar is het een vereisten.

## Probleem 1 (table)

Ik dacht dat wanneer je css niet werkt je met een table nog steeds elementen kan positioneren. Wat fout is aan het gebruik van een table is dat dit in mijn voorbeeld niet sematich correct is, de reden is dat ik een svg wil plaatsen in mijn de table en dat is niet correct. De oplossing om elementen te positioneren is dat ik dit met css ga doen omdat dit niet mogelijk is met html.

## Breakdown schets

Ik heb een breakdown schets gemaakt van de code zonder css styling of javascript. De website is nu functioneel en betrouwbaar te gebruiken op verschillenden aparaten. Met deze basis kan ik extra features toevoegen zoals css of javascript.

<img src="https://user-images.githubusercontent.com/29665951/161231683-3e176dd2-881d-47de-aa24-ee5441c7c3b5.png"  width="500px">
<img src="https://user-images.githubusercontent.com/29665951/161231676-078712f8-ec5e-4954-9e03-aed1fb49fb2a.png"  width="500px">
<img src="https://user-images.githubusercontent.com/29665951/161231682-9843fa07-2747-46e1-bee6-0b3b846c4203.png"  width="500px">
<img src="https://user-images.githubusercontent.com/29665951/161231685-b281506f-9d17-47c4-950a-056776ea95ac.png"  width="500px">
<img src="https://user-images.githubusercontent.com/29665951/161231687-fcbf2ca1-9502-4a1b-bdf2-5374ea9dbc69.png"  width="500px">

## Wireflow

<img src="https://user-images.githubusercontent.com/29665951/161238219-50795cc6-942f-4c85-92b5-d57736f1c879.png"  width="1500px">

## SVG supported
Ik heb gekeken of SVG op alle browsers gebruikt kan worden en dit is op een aantal browsers na het geval. Ik heb ook een fallback gemaakt wanneer dit niet het geval is door het aantal stemmen te tonen naast de keuze.

<img src="https://user-images.githubusercontent.com/29665951/161738041-1bbf7163-6c2d-494f-a11e-e6e02bc44df5.png"   width="200px">


<img src="https://user-images.githubusercontent.com/29665951/161737535-a3ae73db-53fc-4c9b-8e95-bf1734c4c359.png"   width="1500px">

## Formaction supported 
Ik gebruik formaction om verschillende buttons in mijn form verschillende acties te geven. Dit word niet ondersteund door oudere browsers uit 2010. De oplossing hier voor is om verschillende formulieren te maken. Bij elk formulier kan je een extra variable mee geven zodat de server kan onderscheiden welke knop gedrukt is op de pagina.

![image](https://user-images.githubusercontent.com/29665951/161739320-b1cfaaf5-580b-4255-8bf4-216f9eebe63d.png)

## Kleuren blind test 
De grafiek gebruikt kleuren en ik heb getest of deze kleuren werken voor kleurenblinden.

### Achromatopsia
<img src="https://user-images.githubusercontent.com/29665951/161241748-5c7c7fe7-0c06-4eea-bd19-5934c1f77cd0.png"  width="250px">

### Protanopia
<img src="https://user-images.githubusercontent.com/29665951/161242296-6d45dfe5-a8a6-4336-9035-eba4ae4ba7f2.png"  width="250px">

### Tritanopia
<img src="https://user-images.githubusercontent.com/29665951/161242479-362d7cdc-16f7-47be-8c49-327864df0392.png"  width="250px">

## Probleem 2 (button)

Een probleem dat ik had was dat de gebruiker bij de poll oneindig kon stemmen en dat is is niet de bedoeling. De oplossing die ik heb gevonden is req.headers['user-agent'] te gebruiken op gebruikers te onderschijden met elkaar. Wanneer je nu vaker de tab opent weet de server dat dit de zelften persoon is die het zelften browser gebruikt.

## Probleem 3 (Tab)
Wanneer ik door de pagina ging taben werkten alles behalven het tabben door de knoppen die ik had gestyled. Ik heb daarom een focus state toegevoegd zodat je weet welke knop je hebt geselecteerd.

![image](https://user-images.githubusercontent.com/29665951/162176233-9d55a6d0-ce71-47d6-9d23-48b320bab477.png)

![image](https://user-images.githubusercontent.com/29665951/162177019-37799d26-ab87-4b99-afa2-48af444f53d3.png)

## Testen toetsenboard mobiel

Op mobiel heb ik gekeken of het toetsenbord niet over tekst heen gaat dat je nog moet lezen en op mijn website is dat niet het geval. 

<img src="https://user-images.githubusercontent.com/29665951/162178393-ac53ab23-b41d-43e8-85fe-1c95ed6585de.png"  width="200px">


## Progressive Enhancement

### Functional 
De student kan de vraag bekijken.
De leraar kan een vraag toevoegen.
### Reliable
De student .
De leraar .
### Usable 
De student ziet direct het recultaat.
De leraar kan verschillenden vragen stellen.
### Pleasurable 


## Browsers Test
### Desktop
Google Chrome: Versie 99.0.4844.84 (Officiële build) (64-bits)

Firefox: Versie 98.0.2 (64-bits)

### Mobiel
Moto g(8) power (XT2041-3)

Nokia Microsoft Lumia 620

## Probleem 4 (svg)
Tijdens het testen op de nokia kreeg ik een probleem dat tekst over de svg heen ging. De oplossing die ik had gevonden was de rect in de svg even hoog maken als de svg.

![image](https://user-images.githubusercontent.com/29665951/162181900-d138922b-3c3e-497c-b851-7817b64c5376.png)


## Eind recultaat

<img src="https://user-images.githubusercontent.com/29665951/161741289-58aeeb28-ac39-403c-ad56-cf02b3b0fb78.png"  width="500px">

<img src="https://user-images.githubusercontent.com/29665951/161741555-67712c50-633b-4336-bc40-37f0c0023cba.png"  width="500px">

<img src="https://user-images.githubusercontent.com/29665951/161741455-534aa0f9-0fd6-4f6d-8978-f6d261c4b009.png"  width="500px">

## Bronnen
* Can I use. . . Support tables for HTML5, CSS3, etc. (z.d.). Can I Use. Geraadpleegd op 7 april 2022, van https://caniuse.com/
* HTML Tables. (z.d.). Table. Geraadpleegd op 7 april 2022, van https://www.w3schools.com/html/html_tables.asp
* How can I access my localhost from my Android device? (2011, 24 januari). Stack Overflow. Geraadpleegd op 7 april 2022, van https://stackoverflow.com/questions/4779963/how-can-i-access-my-localhost-from-my-android-device
* HTTP Methods GET vs POST. (z.d.). What Is HTTP? Geraadpleegd op 7 april 2022, van https://www.w3schools.com/tags/ref_httpmethods.asp
* GeeksforGeeks. (2021, 20 november). How to get Post Data in Node.js ? Geraadpleegd op 7 april 2022, van https://www.geeksforgeeks.org/how-to-get-post-data-in-node-js/

## Opdrachten

Link naar team opdracht https://timmit147.github.io/browser-technologies-2122/teamOpdracht/

Opdracht 1: https://github.com/timmit147/browser-technologies-2122/blob/main/opdracht1/Opdracht%201

Opdracht 2: https://github.com/timmit147/browser-technologies-2122/blob/main/opdracht2/
