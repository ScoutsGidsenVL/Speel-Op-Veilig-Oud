import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private themas;

  constructor() { 
    this.themas = [
        {
            "titel": "Vuur",
            "url": "vuur",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud": [{
                            "titel": "Wet over vuur",
                            "tekst": "In Vlaanderen en Wallonië mag je een kampvuur maken als je 25 meter afstand houdt van bossen en wouden en 100 meter van huizen, heiden, boomgaarden, …. Elke gemeente kan nog extra regels opleggen in het politiereglement. De wetgeving kan ook veranderen door het weer (bv. code rood). <br><br>In Vlaanderen moet je afspraken maken met de eigenaar van de kampgrond. In Wallonië heb je toestemming nodig van de boseigenaar.<br><br>Wie een brand veroorzaakt door onvoldoende voorzorgsmaatregelen te nemen, pleegt een strafbaar feit. Het gebruik van brandversnellers is bijvoorbeeld strafbaar. Je mag ook geen vuur maken op of naast de openbare weg. De rook kan het verkeer hinderen of onveilig maken door het zicht te belemmeren. <br><br>Afval verbranden in open lucht is verboden. Je mag enkel stoken met droog, onbewerkt hout."
                },
                        {
                            "titel": "Regels Scouts en Gidsen Vlaanderen over vuur",
                            "lijst": [
                            "Kapoenen, zeehondjes, kabouters en (zee)welpen mogen enkel bij een kampvuur zitten onder toezicht.",
                            "Jonggidsen, jongverkenners, scheepsmakkers, gidsen (zee)verkenners, jins en loodsen mogen zelf vuur maken. De leiding zorgt mee voor veilige omstandigheden.",
                            "Spelen met brandende voorwerpen is niet toegestaan. Ook vuurspuwen is een verboden activiteit. Wandelen met fakkels mag.",
                            "Spring nooit over een vuur. Loop nooit over hete kolen.",
                            "Gebruik nooit gas-, hout- of kolenkachels in slaapvertrekken."
                        ]
                },
                        {
                            "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over vuur",
                            "lijst": [
                            "Maak een vaste kampvuurplaats.",
                            "Hou het vuur beperkt. Blus en/of evacueer bij het minste vermoeden van brand.",
                            "Hou minstens twee meter rondom vrij van brandbare voorwerpen;",
                            "Maak tafelvuren zo hoog dat de kleinste gebruiker de inhoud van de pot kan zien zonder opstapje.",
                            "Voorzie binnen handbereik voldoende blusmateriaal.",
                            "Frituur nooit op open vuur",
                            "Hou fleece en andere synthetische kledij weg van het vuur",
                            "Laat brandend of uitdovend vuur of vuurresten nooit onbewaakt achter"
                        ]

                },
                        {
                            "titel": "Suggesties over vuur",
                            "lijst": [
                            "Maak geen vuur op rotsachtige grond. ",
                            "Maak duidelijke afspraken over wie kookt en stookt. Waar staat het water? Waar ligt het blusdeken?",
                            "Draag dicht schoeisel als je met vuur bezig bent en voorzie voldoende ovenwanten om iets van het vuur te halen.",
                            "Let op voor gensters.",
                            "Bouw tafelvuren zo dat sjorringen niet kunnen doorbranden.",
                            "Vlam in de pan? Blus het door er een vochtige (geen natte) doek over te leggen. ",
                            "Een vuur is pas uitgedoofd als je de resten met de blote hand kan aanraken.",
                            "Vermijd bij bliksem vlaktes en alles dat boven de omgeving uitsteekt (torens, masten, bomen, hoogtes, tenten). Ga zo snel mogelijk uit het water. Schuil in gebouwen of auto’s. Niet mogelijk? Ga gehurkt zitten en maak je zo klein mogelijk. "
                        ]
                }
                ]
            }
            ]
        },
        {
            "titel": "Water",
            "url": "water",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud": [
                        {
                            "titel": "Wet over water",
                            "tekst": "In Vlaanderen is het verboden om te zwemmen in bevaarbare waterwegen. Zwemmen in beken en sloten wordt ten zeerste afgeraden omdat de veiligheid niet gegarandeerd kan worden. <br><br>In Vlaanderen mag je met een zelfgebouwd vlot varen op de 'onbevaarbare waterlopen': beekjes en riviertjes waarop geen scheepvaart mogelijk is.<br><br>In Wallonië mag je enkel zwemmen en varen met een vlot in aangewezen badzones."
                },
                        {
                            "titel": "Regels Scouts en Gidsen Vlaanderen over water",
                            "lijst": [
                            "Zwem enkel in erkende zwemwateren en aangewezen badzones. Je herkent ze in Vlaanderen aan dit symbool:",
                            "Ken de zwemcapaciteit van elk van je leden.",
                            "Hou altijd met voldoende mensen in en naast het water toezicht.",
                            "Stap alleen op het ijs als dat officieel is toegelaten door burgemeester en brandweer."
                        ]
                },
                        {
                            "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over water",
                            "lijst": [
                            "Spring nooit zomaar in onbekend water.",
                            "Tel de leden regelmatig.",
                            "Bouw nooit een (tenten)kamp op oevers of in een droogstaande rivierbedding. ",
                            "Draag altijd een zwemvest op een vlot, in een kajak of kano. "
                        ]
                }
                ]
            }
            ]
    },
        {
            "titel": "Hoogte",
            "url": "hoogte",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud": [{
                        
                        "titel": "Wet over hoogte",
                        "tekst": "Er is geen specifieke wetgeving over hoogte die van toepassing is op jeugdbewegingen. Hier geldt dus het principe van de goede huisvader en organisatieplicht. Daarover vind je meer op pagina X. "
                    },{
                        "titel": "Regels Scouts en Gidsen Vlaanderen over hoogte",
                        "lijst": [
                            "Beveilig bij elke hoogteactiviteit (ook bijvoorbeeld een toren sjorren) elke individuele deelnemer met het nodige degelijk materiaal zoals klimtouw en helm.",
                            "Begeleid activiteiten in de hoogte altijd met minstens twee leid(st)ers. ",
                            "Organiseer gespecialiseerde activiteiten enkel onder leiding van mensen met een erkende vergunning/opleiding.",
                            "Elke kabelbaanactiviteit moet begeleid worden door minstens twee begeleid(st)ers waarvan er minstens één de vorming ‘kabelbanen’ volgde bij ploeg Technieken van Scouts en Gidsen Vlaanderen. Leiding van Scouts en Gidsen Vlaanderen mag enkel een tijdelijke kabelbaan aangekocht in een Hopper-winkel opzetten. Laat een kabelbaan nooit onbewaakt achter.",
                            "Alle deathrides (meer dan 12° hellingsgraad), ook die onder begeleiding van specialisten, zijn verboden. Check dat dus als je een touwenparcours boekt."
                        ]
                    },{
                        "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over vuur",
                        "lijst": [
                            "Neem elk signaal van hoogtevrees ernstig. ",
                            "Hou altijd toezicht op spontaan klimwerk, bijvoorbeeld in bomen. Zoek samen een gezonde klimboom en maak goede afspraken.",
                            "Twijfel je aan de kwaliteit van het materiaal of de deskundigheid van de begeleiding van een gespecialiseerde activiteit? Neem dan geen risico en stop de activiteit.",
                            "Span nooit touwen over een rijweg, pad of rivier. Iemand die met snelheid tegen het touw rijdt of vaart kan zich er ernstig aan kwetsen."
                        ]

                    },{
                        "titel": "Suggesties over hoogte",
                        "lijst": [
                            "Gooi nooit materiaal omhoog of vanuit een constructie naar omlaag.",
                            "Span touwen met katrollen of spanband nooit op met behulp van voertuigen of mechanische lieren (tirefort)."
                        ]
                    }
                    ]
            }
            ]


    },
        {
            "titel": "Materiaal",
            "url": "materiaal",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud":[{
                        "titel": "Wet over materiaal",
                        "tekst": "De meeste materialen moeten aan wettelijke normen voldoen, waarmee moet de fabrikant rekening houden. Als goede huisvader ben je verplicht om het materiaal goed te onderhouden en om er voor te zorgen dat iedereen weet hoe hij of zij het moet gebruiken. <br><br>Volg altijd de veiligheidsvoorschriften en zorg dat je leden dat ook doen. Zo vermijd je ongevallen. <br><br>Voor speeltuigen, trampolines, schommels, klimrekken, springkastelen, kabelbanen of glijbanen bestaan strenge veiligheidsnormen. Zowel als ze vast als tijdelijk op je terrein staan."
                    },{
                        "titel": "Regels Scouts en Gidsen Vlaanderen over materiaal",
                        "lijst": [
                            "Vanaf jonggidsen/jongverkenners/scheepsmakkers mogen leden bijlen, zakmessen en zagen gebruiken. Bij jonggidsen/jongverkenners/scheepsmakkers gebeurt dat altijd begeleid door leiding.",
                            "Leden mogen enkel helpen bij verfraaiing en onderhoud aan het lokaal. Niet bij verbouwingen."
                        ]
                    },{
                        "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over materiaal",
                        "lijst": [
                            "Gebruik enkel kwalitatief materiaal dat je kan kopen bij gespecialiseerde handelaars.",
                            "Controleer de gasleidingen van bekkens altijd op defecten of slechte aansluitingen. Gebruik daarvoor nooit een lucifer of aansteker.",
                            "Respecteer de vervaldata op gasleidingen. ",
                            "Hou bij het houthakken voldoende ruimte en draag stevige, dichte schoenen. ",
                            "Plan voor het kamp oefeningen in het hakken. Maak van een introductiecursus ‘Hamer, Bijl & Zaag’ een vast item in de takwerking van jonggidsen, jongverkenners en scheepsmakkers. "
                        ]

                    },{
                        "titel": "Suggesties over hoogte",
                        "lijst": [
                        "Zagen is sneller en veiliger dan hakken.",
                        "Zorg dat stelen van bijlen, zagen en messen stevig en veerkrachtig zijn en niet loszitten. ",
                        "Zorg dat bijlen voldoende scherp zijn.",
                        "Laat materiaal nooit rondslingeren. ",
                        "Sjor met polyproptouw. Dat is het veiligst.",
                        "Zet je tent niet onder bomen.",
                        "Maak spantouwen en piketten zichtbaar."
                    ]
                    }]
            }
            ]
    },
        {
            "titel": "Verkeer",
            "url": "verkeer",
            
    },
        {
            "titel": "Drugs, tabak en alcohol",
            "url": "drugs-tabak-en-alcohol"
    },
        {
            "titel": "Welzijn",
            "url": "welzijn",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud": [
                        {
                            "titel": "Wet over welzijn",
                            "tekst": "De wetgeving over het welzijn van kinderen en minderjarigen is uitgebreid en er zijn geen specifieke regels voor het jeugdwerk. Het Internationaal Verdrag Inzake de Rechten van het Kind is wel belangrijk voor ons. Zo heeft een kind bijvoorbeeld recht op anders zijn, een eigen mening, privacy en bescherming tegen geweld.<br><br>Vanaf 16 jaar is seksueel contact wettelijk toegestaan. Vanaf 14 jaar kan je toestemming geven tot seksueel contact als het leeftijdsverschil maximaal 5 jaar is en er geen machtsrelatie is. Seks met iemand jonger dan 14 jaar wordt beschouwd als verkrachting. Seksueel misbruik is verboden. Er is sprake van seksueel misbruik, als iemand “een beleving van seksualiteit opdringt aan een ander en iemand onder druk zet en gebruikt omwille van de eigen genotsbeleving”.<br><br>Enkel ouders en artsen mogen vrij verkrijgbare medicatie geven aan minderjarigen. Ouders kunnen die toestemming overdragen, bijvoorbeeld via de individuele steekkaart. Voor medicatie op voorschrift is een schriftelijke verklaring van een arts noodzakelijk."
                    },{
                            "titel": "Regels Scouts en Gidsen Vlaanderen over welzijn",
                            "lijst":[ 
                            "Leden zijn minstens 6 jaar vóór 1 januari van het lopende scoutsjaar of zitten in het eerste leerjaar. Takleiding is minstens 18 jaar of bereikt die leeftijd in de loop van het scoutsjaar. Groepsleiding is minimum 21 jaar.",
                            "Op elk kamp is minstens één 21-jarige aanwezig. ",
                            "Realistische schrikaanjagende activiteiten, zoals een ontvoering, waarbij kinderen niet kunnen inschatten of iets waar is, zijn bij Scouts en Gidsen Vlaanderen verboden.",
                            "Machtsmisbruik, vernedering en pesterijen maken geen deel uit van onze werking. Heb oog voor signalen en grijp in bij meldingen die er op kunnen wijzen dat persoonlijke grenzen worden of werden overschreden."
                            ]

                    }, {
                            "titel": "Suggesties over slapen",
                            "lijst":[ 
                                "Zorg voor spannende en uitdagende activiteiten zonder dat leden werkelijk bang worden. Kinderen moeten neen kunnen zeggen en die keuze moet gerespecteerd worden, ook bij rituelen die al lang meegaan. ",
                                "Heb oog voor groepsdruk. Geef het goede voorbeeld en grijp in waar nodig. ",
                                "Wat het aantal dagen op kamp betreft, volg de richtlijn per tak. ",
                                "Wees attent voor symptomen van ziekte, voorzie een goed ingerichte ziekenruimte die niet te ver ligt van de rest van de groep en aarzel nooit om een dokter te raadplegen."
                            ]

                    }, {
                            "titel": "Suggesties over seksualiteit",
                            "beschrijving": "Twijfel je of een bepaalde situatie gepast is? Deze zes criteria helpen je een inschatting te maken",
                            "lijst":[ 
                                "Toestemming: iedereen is akkoord en voelt zich prettig.",
                                "Vrijwilligheid: geen vorm van druk.",
                                "Gelijkwaardigheid: er is evenwicht op vlak van leeftijd en macht.",
                                "Ontwikkeling: het gedrag past bij de leeftijd.",
                                "Context: het gedrag past bij de omstandigheden.",
                                "Zelfrespect: de situatie berokkent geen fysieke of emotionele schade.",
                                "Alle criteria zijn oké? Experimenteer gerust verder. Als dat niet het geval is, grijp je als leiding in.",
                            ]

                    },  {
                            "titel": "Suggesties over hygiëne ",
                            "lijst":[ 
                                    "Gebruik enkel leidingwater of geattesteerd drinkwater om te drinken en koken. Ontsmet bidons en waterslangen chemisch. Informeer je bij de apotheker.",
                                    "Zorg dat iedereen zijn handen wast met zeep voor het koken en eten.",
                                    "Bewaar bereide gerechten, zuivel, vlees en vis afgesloten en onder de 7°C. Leg het na aankoop zo snel mogelijk in de koelkast.",
                                    "Bak vis en vlees, zeker kip en varkensvlees, door en door gaar.",
                                    "Maak toiletten elke dag schoon. Voorzie genoeg toiletten, toiletpapier en wasplaatsen.",
                                    "Controleer dagelijks op teken. "
                            ]
                    },   
                ]
                }
            
            ]
    }
    ];
  }
  
  haalThemasOp() {
      return this.themas;   
  }
  haalThemaOpMetTitel(titel){
      let thema;
      return this.themas.find(t => t.url == titel);
  }
}
