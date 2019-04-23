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
                            "type": "wet",
                            "tekst": "In Vlaanderen en Wallonië mag je een kampvuur maken als je 25 meter afstand houdt van bossen en wouden en 100 meter van huizen, heiden, boomgaarden, …. Elke gemeente kan nog extra regels opleggen in het politiereglement. De wetgeving kan ook veranderen door het weer (bv. code rood). <br><br>In Vlaanderen moet je afspraken maken met de eigenaar van de kampgrond. In Wallonië heb je toestemming nodig van de boseigenaar.<br><br>Wie een brand veroorzaakt door onvoldoende voorzorgsmaatregelen te nemen, pleegt een strafbaar feit. Het gebruik van brandversnellers is bijvoorbeeld strafbaar. Je mag ook geen vuur maken op of naast de openbare weg. De rook kan het verkeer hinderen of onveilig maken door het zicht te belemmeren. <br><br>Afval verbranden in open lucht is verboden. Je mag enkel stoken met droog, onbewerkt hout."
                },
                        {
                            "titel": "Regels Scouts en Gidsen Vlaanderen over vuur",
                            "type": "regel",
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
                            "type": "richtlijn",
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
                            "type": "suggestie",
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
                    ],
                    "vragen": {
                        "titel": "Vragen en antwoorden per tak over vuur",
                        "inhoud": [
                            {
                                "vraag": "Mogen leden vuur maken?",
                                "antwoorden": [
                                    {
                                       "tak": "kapoenen-zeehondjes",
                                        "antwoord": "Neen"
                                    },{
                                       "tak": "kabouters-welpen",
                                        "antwoord": "Neen"
                                    },{
                                       "tak": "jonggidsen-verkenners-scheepsmakkers",
                                        "antwoord": "Ja, de leiding zorgt ervoor dat het in gecontroleerde omstandigheden gebeurt."
                                    },{
                                       "tak": "gidsen-verkenners",
                                        "antwoord": "Ja, de leiding zorgt ervoor dat het in gecontroleerde omstandigheden gebeurt."
                                    },{
                                       "tak": "jins-loodsen",
                                        "antwoord": "Ja"
                                    }
                                ]
                            },
                            {
                                "vraag": "Mogen leden op vuur koken?",
                                "antwoorden": [
                                    {
                                       "tak": "kapoenen-zeehondjes",
                                        "antwoord": "Neen"
                                    },{
                                       "tak": "kabouters-welpen",
                                        "antwoord": "Neen. Kabouters en welpen mogen begeleid door leiding wel een woudloperskeuken doen."
                                    },{
                                       "tak": "jonggidsen-verkenners-scheepsmakkers",
                                        "antwoord": "Ja, maar begeleid door leiding of foeriers."
                                    },{
                                       "tak": "gidsen-verkenners",
                                        "antwoord": "Ja"
                                    },{
                                       "tak": "jins-loodsen",
                                        "antwoord": "Ja"
                                    }
                                ]
                            }
                        ]
                    }
                    
            }
            ],
            "meerInfo": {
                "titel": "Meer weten over water?",
                "lijst": [
                    {
                        "titel": "Erkende zwemwateren in Vlaanderen",
                        "links": [{
                                "titel": "www.kwaliteitzwemwater.be",
                                "url": "http:\\www.kwaliteitzwemwater.be"
                            }
                        ]
                    },
                    {
                        "titel": "Aangewezen badzones in Wallonië",
                        "links": [
                            {
                                "titel": "environnement.wallonie.be/baignade",
                                "url": "http:\\environnement.wallonie.be/baignade"
                            }
                        ]
                    },
                    {
                        "titel": "Over kabelbanen",
                        "links": [
                            {
                                "titel": "technieken@scoutsengidsenvlaanderen.be",
                                "url": "mailto:technieken@scoutsengidsenvlaanderen.be"
                        }

                        ]
                    },
                    {
                        "titel": "Voor vlotten gelden dezelfde regels als voor kano’s en kajaks",
                        "links": [
                            {
                                "titel": "www.visurius.be/kano ",
                                "url": "http:\\www.visurius.be/kano"
                            },
                            {
                                "titel": "kayak.environnement.wallonie.be",
                                "url": "http:\\kayak.environnement.wallonie.be"
                            }
                        ]
                    },
                    {
                        "titel": "Zeescouting",
                        "links": [
                            {
                                "beschrijving": "Voor zeescouting gelden specifieke richtlijnen die je vindt in het handboek ‘Nautische vaardigheden’"
                            }
                        ]
                    },

                    {
                        "titel": "Betekenis signalisatie",
                        "links": [
                            {
                                "titel": "www.ikwv.be",
                                "url": "http:\\www.ikwv.be"
                            }
                        ]
                    },
                    {
                        "titel": " Zwemvesten uitlenen",
                        "links": [
                            {
                                "titel": "Over vuur maken en blussen",
                                "beschrijving": "het Buitenboek, te koop in Hopper Winkel"
                            }
                        ]
                    },


                    {
                        "titel": "Over kleurcodes brandgevaar en lokale politiereglementen",
                        "links": [
                            {
                                "titel": "www.natuurenbos.be/waarschuwingen",
                                "url": "http://www.natuurenbos.be/waarschuwingen"
                            }
                        ]
                    }
                ]
            }
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
                            "type": "wet",
                            "tekst": "In Vlaanderen is het verboden om te zwemmen in bevaarbare waterwegen. Zwemmen in beken en sloten wordt ten zeerste afgeraden omdat de veiligheid niet gegarandeerd kan worden. <br><br>In Vlaanderen mag je met een zelfgebouwd vlot varen op de 'onbevaarbare waterlopen': beekjes en riviertjes waarop geen scheepvaart mogelijk is.<br><br>In Wallonië mag je enkel zwemmen en varen met een vlot in aangewezen badzones."
                        },
                        {
                            "titel": "Regels Scouts en Gidsen Vlaanderen over water",
                            "type":"regel",
                            "lijst": [
                            "Zwem enkel in erkende zwemwateren en aangewezen badzones. Je herkent ze in Vlaanderen aan dit symbool:",
                            "Ken de zwemcapaciteit van elk van je leden.",
                            "Hou altijd met voldoende mensen in en naast het water toezicht.",
                            "Stap alleen op het ijs als dat officieel is toegelaten door burgemeester en brandweer."
                        ]
                },
                        {
                            "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over water",
                            "type": "richtlijn",
                            "lijst": [
                            "Spring nooit zomaar in onbekend water.",
                            "Tel de leden regelmatig.",
                            "Bouw nooit een (tenten)kamp op oevers of in een droogstaande rivierbedding. ",
                            "Draag altijd een zwemvest op een vlot, in een kajak of kano. "
                        ]
                }
                ]
            }
            ],
            "meerInfo": {
                "titel": "Meer weten over water?",
                "lijst": [
                    {
                        "titel": "Erkende zwemwateren in Vlaanderen",
                        "links": [{
                                "titel": "www.kwaliteitzwemwater.be",
                                "url": "http:\\www.kwaliteitzwemwater.be"
                            }
                        ]
                    },
                    {
                        "titel": "Aangewezen badzones in Wallonië",
                        "links": [
                            {
                                "titel": "environnement.wallonie.be/baignade",
                                "url": "http:\\environnement.wallonie.be/baignade"
                            }
                        ]
                    },
                    {
                        "titel": "Over kabelbanen",
                        "links": [
                            {
                                "titel": "technieken@scoutsengidsenvlaanderen.be",
                                "url": "mailto:technieken@scoutsengidsenvlaanderen.be"
                        }

                        ]
                    },
                    {
                        "titel": "Voor vlotten gelden dezelfde regels als voor kano’s en kajaks",
                        "links": [
                            {
                                "titel": "www.visurius.be/kano ",
                                "url": "http:\\www.visurius.be/kano"
                            },
                            {
                                "titel": "kayak.environnement.wallonie.be",
                                "url": "http:\\kayak.environnement.wallonie.be"
                            }
                        ]
                    },
                    {
                        "titel": "Zeescouting",
                        "links": [
                            {
                                "beschrijving": "Voor zeescouting gelden specifieke richtlijnen die je vindt in het handboek ‘Nautische vaardigheden’"
                            }
                        ]
                    },

                    {
                        "titel": "Betekenis signalisatie",
                        "links": [
                            {
                                "titel": "www.ikwv.be",
                                "url": "http:\\www.ikwv.be"
                            }
                        ]
                    },
                    {
                        "titel": " Zwemvesten uitlenen",
                        "links": [
                            {
                                "titel": "www.sport.vlaanderen",
                                "url": "http:\\www.sport.vlaanderen",
                                "beschrijving": "zoek op ‘uitleendiensten’"
                            },
                            {

                                "beschrijving": "Via jeugddiensten "
                            }
                        ]
                    },


                    {
                        "titel": "Schaatsvijvers",
                        "links": [
                            {
                                "titel": "www.natuurenbos.be/schaatsen",
                                "url": "http:\\www.natuurenbos.be/schaatsen"
                            }
                        ]
                    }
                ]
            }


    },
        {
            "titel": "Hoogte",
            "url": "hoogte",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud": [{
                            "type": "wet",
                            "titel": "Wet over hoogte",
                            "tekst": "Er is geen specifieke wetgeving over hoogte die van toepassing is op jeugdbewegingen. Hier geldt dus het principe van de goede huisvader en organisatieplicht. Daarover vind je meer op pagina X. "
                    }, {
                            "titel": "Regels Scouts en Gidsen Vlaanderen over hoogte",
                            "type": "regel",
                            "lijst": [
                            "Beveilig bij elke hoogteactiviteit (ook bijvoorbeeld een toren sjorren) elke individuele deelnemer met het nodige degelijk materiaal zoals klimtouw en helm.",
                            "Begeleid activiteiten in de hoogte altijd met minstens twee leid(st)ers. ",
                            "Organiseer gespecialiseerde activiteiten enkel onder leiding van mensen met een erkende vergunning/opleiding.",
                            "Elke kabelbaanactiviteit moet begeleid worden door minstens twee begeleid(st)ers waarvan er minstens één de vorming ‘kabelbanen’ volgde bij ploeg Technieken van Scouts en Gidsen Vlaanderen. Leiding van Scouts en Gidsen Vlaanderen mag enkel een tijdelijke kabelbaan aangekocht in een Hopper-winkel opzetten. Laat een kabelbaan nooit onbewaakt achter.",
                            "Alle deathrides (meer dan 12° hellingsgraad), ook die onder begeleiding van specialisten, zijn verboden. Check dat dus als je een touwenparcours boekt."
                        ]
                    }, {
                            "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over vuur",
                            "type": "richtlijn",
                            "lijst": [
                            "Neem elk signaal van hoogtevrees ernstig. ",
                            "Hou altijd toezicht op spontaan klimwerk, bijvoorbeeld in bomen. Zoek samen een gezonde klimboom en maak goede afspraken.",
                            "Twijfel je aan de kwaliteit van het materiaal of de deskundigheid van de begeleiding van een gespecialiseerde activiteit? Neem dan geen risico en stop de activiteit.",
                            "Span nooit touwen over een rijweg, pad of rivier. Iemand die met snelheid tegen het touw rijdt of vaart kan zich er ernstig aan kwetsen."
                        ]

                    }, {
                            "titel": "Suggesties over hoogte",
                            "type": "suggestie",
                            "lijst": [
                            "Gooi nooit materiaal omhoog of vanuit een constructie naar omlaag.",
                            "Span touwen met katrollen of spanband nooit op met behulp van voertuigen of mechanische lieren (tirefort)."
                        ]
                    }
                    ]
            }
            ],
            "meerInfo": {
                "titel": "Meer weten over hoogte?",
                "lijst": [
                    {
                        "titel": "Over bergsport",
                        "links": [{
                                "titel": "www.klimenbergsportfederatie.be",
                                "url": "http:\\www.klimenbergsportfederatie.be"
                            }
                        ]
                    },
                    {
                        "titel": "Over speleologie",
                        "links": [
                            {
                                "titel": "www.speleovvs.be",
                                "url": "http:\\www.speleovvs.be"
                            }
                        ]
                    },
                    {
                        "titel": "Over kabelbanen",
                        "links": [
                            {
                                "titel": "technieken@scoutsengidsenvlaanderen.be",
                                "url": "mailto:technieken@scoutsengidsenvlaanderen.be"
                        }

                        ]
                    },
                    {
                        "titel": "Brochure Grote sjorconstructies",
                        "links": [
                            {
                                "titel": "www.scoutsengidsenvlaanderen.be/grote-sjorconstructies",
                                "url": "http:\\www.scoutsengidsenvlaanderen.be/grote-sjorconstructies"
                            }
                        ]
                    }
                ]
            }


    },
        {
            "titel": "Materiaal",
            "url": "materiaal",
            "subthemas": [
                {
                    "titel": "",
                    "inhoud": [{
                        "titel": "Wet over materiaal",
                        "type": "wet",
                        "tekst": "De meeste materialen moeten aan wettelijke normen voldoen, waarmee moet de fabrikant rekening houden. Als goede huisvader ben je verplicht om het materiaal goed te onderhouden en om er voor te zorgen dat iedereen weet hoe hij of zij het moet gebruiken. <br><br>Volg altijd de veiligheidsvoorschriften en zorg dat je leden dat ook doen. Zo vermijd je ongevallen. <br><br>Voor speeltuigen, trampolines, schommels, klimrekken, springkastelen, kabelbanen of glijbanen bestaan strenge veiligheidsnormen. Zowel als ze vast als tijdelijk op je terrein staan."
                    }, {
                        "titel": "Regels Scouts en Gidsen Vlaanderen over materiaal",
                        "type": "regel",
                        "lijst": [
                            "Vanaf jonggidsen/jongverkenners/scheepsmakkers mogen leden bijlen, zakmessen en zagen gebruiken. Bij jonggidsen/jongverkenners/scheepsmakkers gebeurt dat altijd begeleid door leiding.",
                            "Leden mogen enkel helpen bij verfraaiing en onderhoud aan het lokaal. Niet bij verbouwingen."
                        ]
                    }, {
                        "titel": "Richtlijnen Scouts en Gidsen Vlaanderen over materiaal",
                        "type": "richtlijn",
                        "lijst": [
                            "Gebruik enkel kwalitatief materiaal dat je kan kopen bij gespecialiseerde handelaars.",
                            "Controleer de gasleidingen van bekkens altijd op defecten of slechte aansluitingen. Gebruik daarvoor nooit een lucifer of aansteker.",
                            "Respecteer de vervaldata op gasleidingen. ",
                            "Hou bij het houthakken voldoende ruimte en draag stevige, dichte schoenen. ",
                            "Plan voor het kamp oefeningen in het hakken. Maak van een introductiecursus ‘Hamer, Bijl & Zaag’ een vast item in de takwerking van jonggidsen, jongverkenners en scheepsmakkers. "
                        ]

                    }, {
                        "titel": "Suggesties over materiaal",
                        "type": "suggestie",
                        "lijst": [
                        "Zagen is sneller en veiliger dan hakken.",
                        "Zorg dat stelen van bijlen, zagen en messen stevig en veerkrachtig zijn en niet loszitten. ",
                        "Zorg dat bijlen voldoende scherp zijn.",
                        "Laat materiaal nooit rondslingeren. ",
                        "Sjor met polyproptouw. Dat is het veiligst.",
                        "Zet je tent niet onder bomen.",
                        "Maak spantouwen en piketten zichtbaar."
                    ]
                    }],
                    "vragen": {
                        "titel": "Vragen en antwoorden per tak over materiaal",
                        "inhoud": [
                            {
                                "vraag": "Mogen leden houthakken en hout zagen?",
                                "antwoorden": [
                                    {
                                       "tak": "kapoenen-zeehondjes",
                                        "antwoord": "Neen"
                                    },{
                                       "tak": "kabouters-welpen",
                                        "antwoord": "Neen"
                                    },{
                                       "tak": "jonggidsen-verkenners-scheepsmakkers",
                                        "antwoord": "Ja, als ze op de hoogte zijn van de basisregels over veiligheid en als de leiding de activiteit begeleidt en zorgt voor een veilige situatie."
                                    },{
                                       "tak": "gidsen-verkenners",
                                        "antwoord": "Ja, als ze op de hoogte zijn van de basisregels over veiligheid"
                                    },{
                                       "tak": "jins-loodsen",
                                        "antwoord": "Ja, als ze op de hoogte zijn van de basisregels over veiligheid"
                                    }
                                ]
                            },
                            {
                                "vraag": "Mogen leden op vuur koken?",
                                "antwoorden": [
                                    {
                                       "tak": "kapoenen-zeehondjes",
                                        "antwoord": "Neen"
                                    },{
                                       "tak": "kabouters-welpen",
                                        "antwoord": "Neen. Kabouters en welpen mogen begeleid door leiding wel een woudloperskeuken doen."
                                    },{
                                       "tak": "jonggidsen-verkenners-scheepsmakkers",
                                        "antwoord": "Ja, maar begeleid door leiding of foeriers."
                                    },{
                                       "tak": "gidsen-verkenners",
                                        "antwoord": "Ja"
                                    },{
                                       "tak": "jins-loodsen",
                                        "antwoord": "Ja"
                                    }
                                ]
                            }
                        ]
                    }
            }
            ],
            "meerInfo": {
                "titel": "Meer weten over materiaal?",
                "lijst": [
                    {
                        "titel": "Over speelterreinen en wetgeving",
                        "links": [{
                                "titel": "www.scoutsengidsenvlaanderen.be",
                                "url": "http:\\scoutsengidsenvlaanderen.be",
                                "beschrijving": "zoek op ‘speeltoestellen’"
                        }
                    ]
                    },


                    {
                        "titel": "Over veilig gebruik en onderhoud van materiaal",
                        "links": [
                            {
                                "beschrijving": "het Buitenboek, te koop in Hopper Winkel en www.scoutsengidsenvlaanderen.be/technieken-databank"
                            }
                        ]
                    }
                ]
            },
    },
        {
            "titel": "Verkeer",
            "url": "verkeer",
            "subthemas": [ ],

            "meerInfo": {
                "titel": "Meer weten over verkeer?",
                "lijst": [
                    {
                        "titel": "Verkeersinformatie specifiek voor jeugdbewegingen vind je op ",
                        "links": [{
                                "titel": "www.veiligopstap.be",
                                "url": "https://www.veiligopstap.be"
                        }
                    ]
                    },

                    {
                        "titel": "Informatie over je veilig bewegen in het verkeer in Vlaanderen vind je bij de Vlaamse Stichting Verkeerskunde",
                        "links": [{
                                "titel": "www.veiligverkeer.be",
                                "url": "http:\\www.veiligverkeer.be"
                        }
                        ]
                    },

                    {
                        "titel": "Rustige wandelwegen vind je op",
                        "links": [
                            {
                                "titel": "www.tragewegen.be",
                                "url": "http:\\www.tragewegen.be"
                            }
                        ]
                    }
                ]
            }

    },
        {
            "titel": "Drugs, tabak en alcohol",
            "url": "drugs-tabak-en-alcohol",
            "subthemas": [ ],
            "meerInfo": {
                "titel": "Meer weten over tabak, alcohol en drugs?",
                "lijst": [{
                        "titel": "Over fuiven",
                        "links": [
                            {
                                "titel": "www.qualitynights.be ",
                                "url": "http:\\www.qualitynights.be "
                        }
                    ]
                    },

                    {
                        "titel": "Over drugs",
                        "links": [{
                                "titel": "www.druglijn.be",
                                "url": "htpp:\\www.druglijn.be"
                            },
                            {
                                "titel": "078 15 10 20 ",
                                "url": "https://bel 078 15 10 20"
                            }
                        ]
                    },

                    {
                        "titel": "Over drugs in de jeugdbeweging",
                        "links": [{
                                "titel": "www.drugsinbeweging.be ",
                                "url": "https://www.drugsinbeweging.be/"
                        }
                    ]
                    },

                    {
                        "titel": "Vereniging voor alcohol- en andere drugproblemen (VAD)",
                        "links": [{
                                "titel": "vad@vad.be",
                                "url": "mailto:vad@vad.be"
                        }, {
                                "titel": "www.vad.be",
                                "url": "http:\\www.vad.be"
                        }
                        ]
                    },

                    {
                        "titel": "Over zelf een alcoholbeleid opstellen",
                        "links": [
                            {
                                "titel": "www.scoutsengidsenvlaanderen.be",
                                "url": "http:\\scoutsengidsenvlaanderen.be",
                                "beschrijving": "zoek op BAR"
                            }
                        ]
                    }
                ]
            }
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
                            "type": "wet",
                            "tekst": "De wetgeving over het welzijn van kinderen en minderjarigen is uitgebreid en er zijn geen specifieke regels voor het jeugdwerk. Het Internationaal Verdrag Inzake de Rechten van het Kind is wel belangrijk voor ons. Zo heeft een kind bijvoorbeeld recht op anders zijn, een eigen mening, privacy en bescherming tegen geweld.<br><br>Vanaf 16 jaar is seksueel contact wettelijk toegestaan. Vanaf 14 jaar kan je toestemming geven tot seksueel contact als het leeftijdsverschil maximaal 5 jaar is en er geen machtsrelatie is. Seks met iemand jonger dan 14 jaar wordt beschouwd als verkrachting. Seksueel misbruik is verboden. Er is sprake van seksueel misbruik, als iemand “een beleving van seksualiteit opdringt aan een ander en iemand onder druk zet en gebruikt omwille van de eigen genotsbeleving”.<br><br>Enkel ouders en artsen mogen vrij verkrijgbare medicatie geven aan minderjarigen. Ouders kunnen die toestemming overdragen, bijvoorbeeld via de individuele steekkaart. Voor medicatie op voorschrift is een schriftelijke verklaring van een arts noodzakelijk."
                        },
                        {
                            "titel": "Regels Scouts en Gidsen Vlaanderen over welzijn",
                            "type": "regel",
                            "lijst": [
                            "Leden zijn minstens 6 jaar vóór 1 januari van het lopende scoutsjaar of zitten in het eerste leerjaar. Takleiding is minstens 18 jaar of bereikt die leeftijd in de loop van het scoutsjaar. Groepsleiding is minimum 21 jaar.",
                            "Op elk kamp is minstens één 21-jarige aanwezig. ",
                            "Realistische schrikaanjagende activiteiten, zoals een ontvoering, waarbij kinderen niet kunnen inschatten of iets waar is, zijn bij Scouts en Gidsen Vlaanderen verboden.",
                            "Machtsmisbruik, vernedering en pesterijen maken geen deel uit van onze werking. Heb oog voor signalen en grijp in bij meldingen die er op kunnen wijzen dat persoonlijke grenzen worden of werden overschreden."
                            ]

                        },
                        {
                            "titel": "Suggesties over slapen",
                            "type": "suggestie",
                            "lijst": [
                                "Zorg voor spannende en uitdagende activiteiten zonder dat leden werkelijk bang worden. Kinderen moeten neen kunnen zeggen en die keuze moet gerespecteerd worden, ook bij rituelen die al lang meegaan. ",
                                "Heb oog voor groepsdruk. Geef het goede voorbeeld en grijp in waar nodig. ",
                                "Wat het aantal dagen op kamp betreft, volg de richtlijn per tak. ",
                                "Wees attent voor symptomen van ziekte, voorzie een goed ingerichte ziekenruimte die niet te ver ligt van de rest van de groep en aarzel nooit om een dokter te raadplegen."
                            ]
                        },
                        {
                            "titel": "Suggesties over seksualiteit",
                            "beschrijving": "Twijfel je of een bepaalde situatie gepast is? Deze zes criteria helpen je een inschatting te maken",
                            "lijst": [
                                "Toestemming: iedereen is akkoord en voelt zich prettig.",
                                "Vrijwilligheid: geen vorm van druk.",
                                "Gelijkwaardigheid: er is evenwicht op vlak van leeftijd en macht.",
                                "Ontwikkeling: het gedrag past bij de leeftijd.",
                                "Context: het gedrag past bij de omstandigheden.",
                                "Zelfrespect: de situatie berokkent geen fysieke of emotionele schade.",
                                "Alle criteria zijn oké? Experimenteer gerust verder. Als dat niet het geval is, grijp je als leiding in."
                            ]

                        },
                        {
                            "titel": "Suggesties over hygiëne ",
                            "lijst": [
                                    "Gebruik enkel leidingwater of geattesteerd drinkwater om te drinken en koken. Ontsmet bidons en waterslangen chemisch. Informeer je bij de apotheker.",
                                    "Zorg dat iedereen zijn handen wast met zeep voor het koken en eten.",
                                    "Bewaar bereide gerechten, zuivel, vlees en vis afgesloten en onder de 7°C. Leg het na aankoop zo snel mogelijk in de koelkast.",
                                    "Bak vis en vlees, zeker kip en varkensvlees, door en door gaar.",
                                    "Maak toiletten elke dag schoon. Voorzie genoeg toiletten, toiletpapier en wasplaatsen.",
                                    "Controleer dagelijks op teken. "
                            ]
                        }
                    ]
                }
            ],
            "meerInfo": {
                "titel": "Meer weten over welzijn?",
                "lijst": [{
                        "titel": "Over andere risico’s",
                        "links": [{
                                "titel": "info@scoutsengidsenvlaanderen.be",
                                "url": "mailto:info@scoutsengidsenvlaanderen.be"
                        },
                            {
                                "titel": "www.scoutsengidsenvlaanderen.be",
                                "url": "http:\\scoutsengidsenvlaanderen.be"
                        },
                            {
                                "titel": "in de basiswerken van Scouts en Gidsen Vlaanderen: ",
                                "beschrijving": "Takboekjes, Buitenboek, Kampvisum en in Eerste Hulp voor jeugdleiders. Allemaal te verkrijgen in Hopper Winkel."
                        }
                    ]
                    },

                    {
                        "titel": "Over lichamelijkheid en seksualiteit",
                        "links": [{
                                "titel": "www.seksuelevorming.be ",
                                "url": "htpp:\\www.seksuelevorming.be",
                                "beschrijving": "zoek op (N)iets mis mee"
                        }
                        ]
                    },

                    {
                        "titel": "Over welzijn",
                        "links": [{
                                "titel": "www.watwat.be",
                                "url": "https://www.watwat.be/"
                        }, {
                                "titel": "www.awel.be ",
                                "url": "https://www.awel.be"
                        }, {
                                "titel": "bel 102",
                                "url": "https://bel 102"
                        }
                    ]
                    },

                    {
                        "titel": "Bij vermoeden van misbruik of mishandeling",
                        "links": [{
                                "titel": "www.kindermishandeling.be",
                                "url": "http:\\www.kindermishandeling.be"
                        }
                        ]
                    },

                    {
                        "titel": "Over voedselveiligheid",
                        "links": [{
                                "titel": "www.kokenopkamp.be/voedselveiligheid",
                                "url": "http:\\www.kokenopkamp.be/voedselveiligheid"
                        },
                            {
                                "titel": "www.scoutsengidsenvlaanderen.be",
                                "url": "http:\\scoutsengidsenvlaanderen.be",
                                "beschrijving": "brochure Bederf je kamp niet, zoek op ‘bederf’"
                        }
                        ]
                    }
                ]
            }
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
  haalAlleVragenOp(){
      let vragen = new Array();      
        for (let thema of this.themas) {
            for (let subThema of thema.subthemas) {
                console.log(subThema);
                if (subThema.vragen != undefined) {
                    console.log(subThema);
                    vragen.push(subThema.vragen);
                }
                
            }
        }
      return vragen;
  }
}
