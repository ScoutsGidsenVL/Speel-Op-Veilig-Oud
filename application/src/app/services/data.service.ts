import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private chapters;

  constructor() { 
    this.chapters = [
        {
            "title": "Vuur",
            "url": "vuur",
            "subchapters": [
                {
                    "title": "",
                    "content": [
                        {
                            "title": "Wet over vuur",
                            "type": "wet",
                            "list": [
                                {
                                    "item": "In <b>Vlaanderen en Wallonië mag je een kampvuur maken als je 25 meter afstand houdt van bossen en wouden en 100 meter van huizen, heiden, boomgaarden,</b> … Elke gemeente kan nog extra regels opleggen in het politiereglement. De wetgeving kan ook veranderen door het weer (bv. code rood)."
                                },
                                {
                                    "item": "In Vlaanderen moet je afspraken maken met de eigenaar van de kampgrond. In Wallonië heb je toestemming nodig van de boseigenaar."
                                },
                                
                                {
                                    "item": "Wie een <b>brand veroorzaakt door onvoldoende voorzorgsmaatregelen</b> te nemen, <b>pleegt</b> een <b>strafbaar</b> feit. Het gebruik van brandversnellers is bijvoorbeeld strafbaar. Je mag ook geen vuur maken op of naast de openbare weg. De rook kan het verkeer hinderen of onveilig maken door het zicht te belemmeren."
                                },
                                {
                                    "item": "Afval verbranden in open lucht is verboden. Je mag enkel stoken met droog, onbewerkt hout."
                                }
                                ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over vuur",
                            "type": "regel",
                            "list": [
                                {
                                    "item": "Kapoenen, zeehondjes, kabouters en (zee)welpen mogen enkel bij een kampvuur zitten onder toezicht."
                                },
                                {
                                    "item":"Jonggidsen, jongverkenners, scheepsmakkers, gidsen, (zee)verkenners, jins en loodsen mogen zelf vuur maken. De leiding zorgt mee voor veilige omstandigheden."
                                },
                                {
                                    "item": "Spelen met brandende voorwerpen is niet toegestaan. Ook vuurspuwen is een verboden activiteit. Wandelen met fakkels mag.",
                                    "why": "De brandstoffen kunnen giftig en kankerverwekkend zijn en er is een verhoogd risico op brandwonden."
                                },
                                {
                                    "item": "Spring nooit over een vuur. Loop nooit over hete kolen.",
                                    "why": "Je kan ernstige brandwonden oplopen."
                                },
                                {
                                    "item": "Gebruik nooit gas-, hout- of kolenkachels in slaapvertrekken.",
                                    "why": "Een CO-vergiftiging kan dodelijk zijn."

                                }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over vuur",
                            "type": "richtlijn",
                            "list": [
                                {
                                    "item": "Maak een vaste kampvuurplaats.",
                                    "why": "Eén vuurplaats veilig inrichten is veiliger dan meerdere omdat het duidelijk is voor leden: daar mag je vuur maken en nergens anders."
                                },
                                {
                                    "item": "Hou het vuur beperkt. Blus en/of evacueer bij het minste vermoeden van brand.",
                                    "why": "Hoge vlammen geven geen langdurige warmte en zijn moeilijk te controleren."
                                },
                                {
                                    "item": "Hou minstens twee meter rondom vrij van brandbare voorwerpen;",
                                    "why": "Zo kan het vuur zich niet verspreiden."
                                },
                                {
                                    "item": "Maak tafelvuren zo hoog dat de kleinste gebruiker de inhoud van de pot kan zien zonder opstapje.",
                                    "why": "Zo kunnen die ook aan de inhoud van de pot zonder zich te verbranden."
                                },
                                {
                                    "item": "Voorzie binnen handbereik voldoende blusmateriaal."
                                },
                                {
                                    "item": "Frituur nooit op open vuur.",
                                    "why": "Heet frituurvet is snel ontvlambaar."
                                },
                                {
                                    "item": "Hou fleece en andere synthetische kledij weg van het vuur",
                                    "why": "Synthetische stoffen smelten en kunnen ernstige brandwonden veroorzaken."
                                },
                                {
                                    "item": "Laat brandend of uitdovend vuur of vuurresten nooit onbewaakt achter",
                                    "why": "Het vuur kan opnieuw opflakkeren."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over vuur",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Maak geen vuur op rotsachtige grond.",
                                    "why": "Er kunnen stukjes vanaf springen, vooral als de rots of stenen nat zijn."
                                },
                                {
                                    "item": "Maak duidelijke afspraken over wie kookt en stookt. Waar staat het water? Waar ligt het blusdeken?",
                                    "why" : "Bij brand gaat vaak kostbare tijd verloren door paniek en onduidelijkheid."
                                }, 
                                {
                                    "item": "Draag dicht schoeisel als je met vuur bezig bent en voorzie voldoende ovenwanten om iets van het vuur te halen.",
                                    "why": "Zo voorkom je brandwonden."
                                }, 
                                {
                                    "item": "Let op voor gensters.",
                                    "why": "Die kunnen gaten in kledij branden en brandwonden veroorzaken."
                                }, 
                                {
                                    "item": "Bouw tafelvuren zo dat sjorringen niet kunnen doorbranden.",
                                    "why": "Zo voorkom je dat het vuur, met potten en pannen en al omkantelt."
                                }, 
                                {
                                    "item": "Vlam in de pan? Blus het door er een vochtige (geen natte) doek over te leggen.",
                                    "why": "Zo krijgt het vuur geen zuurstof meer. Gooi nooit water op brandend vet! Dat doet het uiteenspatten en veroorzaakt een steekvlam."
                                }, 
                                {
                                    "item": "Een vuur is pas uitgedoofd als je de resten met de blote hand kan aanraken.",
                                    "why": "Binnenin een tak kan nog vuur smeulen dat je niet kan zien, enkel voelen."
                                }, 
                                {
                                    "item": "Vermijd bij bliksem vlaktes en alles dat boven de omgeving uitsteekt (torens, masten, bomen, hoogtes, tenten). Ga zo snel mogelijk uit het water. Schuil in gebouwen of auto’s. Niet mogelijk? Ga gehurkt zitten en maak je zo klein mogelijk. ",
                                    "why": "Bliksem zoekt het hoogste punt. Ook op water ben je als zwemmer het hoogste punt en loop je gevaar. Boten zijn meestal voorzien van een bliksemafleider"
                                }
                        ]
                }
                    ],
                    "questions": {
                        "title": "Vuur",
                        "icon": "vuur",
                        "content": [
                            {
                                "question": "Mogen leden vuur maken?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen"
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja, de leiding zorgt ervoor dat het in gecontroleerde omstandigheden gebeurt."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Ja, de leiding zorgt ervoor dat het in gecontroleerde omstandigheden gebeurt."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Ja"
                                    }
                                ]
                            },
                            {
                                "question": "Mogen leden op vuur koken?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen. Kabouters en welpen mogen begeleid door leiding wel een woudloperskeuken doen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja, maar begeleid door leiding of foeriers."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Ja"
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Ja"
                                    }
                                ]
                            }
                        ]
                    }
                    
                }
            ],
            "moreInfo": {
                "title": "Meer weten over vuur?",
                "list": [
                    {
                        "title": "Over vuur maken en blussen",
                        "links": [
                            {
                                "description": "Het Buitenboek, te koop in Hopper Winkel"
                            }
                        ]
                    },
                    {
                        "title": "Over kleurcodes brandgevaar en lokale politiereglementen",
                        "links": [
                            {
                                "title": "www.natuurenbos.be/waarschuwingen",
                                "url": "https://www.natuurenbos.be/waarschuwingen"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "title": "Water",
            "url": "water",
            "subchapters": [
                {
                    "title": "",
                    "content": [
                        {
                            "title": "Wet over water",
                            "type": "wet",
                            "list":[
                                {
                                    "item": "<b>In Vlaanderen is het verboden om te zwemmen in bevaarbare waterwegen.</b> Zwemmen in beken en sloten wordt ten zeerste afgeraden omdat de veiligheid niet gegarandeerd kan worden."
                                },
                                { 
                                    "item": "<b>In Vlaanderen mag je met een zelfgebouwd vlot varen op de 'onbevaarbare waterlopen'</b>: beekjes en riviertjes waarop geen scheepvaart mogelijk is."
                                },
                                {
                                    "item": "<b>In Wallonië mag je enkel zwemmen en varen met een vlot in aangewezen badzones.</b>"
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over water",
                            "type":"regel",
                            "list": [
                                {
                                    "item" : "Zwem enkel in erkende zwemwateren en aangewezen badzones."
                                },
                                {
                                    "item" : "Ken de zwemcapaciteit van elk van je leden.",
                                    "why" : "Wie kan goed zwemmen, wie nog maar net? Hoe lang? Met of zonder bandjes?"
                                },
                                {
                                    "item" : "Hou altijd met voldoende mensen in en naast het water toezicht.",
                                    "why" : "Vanop de kant heb je een beter overzicht. En zo kan er iemand hulp halen als dat nodig is."
                                },
                                {
                                    "item" : "Stap alleen op het ijs als dat officieel is toegelaten door burgemeester en brandweer.",
                                    "why" : "Zij hebben de nodige expertise om de dikte van het ijs te meten en de situatie in te schatten."
                                }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over water",
                            "type": "richtlijn",
                            "list": [
                                {
                                    "item" : "Spring nooit zomaar in onbekend water.",
                                    "why" : "Je kan niet inschatten wat zich onder het wateroppervlakte bevindt, zowel qua stroming, temperatuur als eventueel afval."
                                },
                                {
                                    "item" : "Tel de leden regelmatig."
                                },
                                {
                                    "item" : "Bouw nooit een (tenten)kamp op oevers of in een droogstaande rivierbedding.",
                                    "why" : "Die staan bij zwaar regenweer soms razendsnel onder water."
                                },
                                {
                                    "item" : "Draag altijd een zwemvest op een vlot, in een kajak of kano.",
                                    "why" : "Ook als je kan zwemmen. Wie uit  een kajak of kano valt, kan zich kwetsen of gedesoriënteerd geraken."
                                }
                            ]
                        }
                    ]
                }
            ],
            "moreInfo": {
                "title": "Meer weten over water?",
                "list": [
                    {
                        "title": "Erkende zwemwateren in Vlaanderen",
                        "links": [{
                                "title": "kwaliteitzwemwater.be",
                                "url": "http:\\www.kwaliteitzwemwater.be"
                            }
                        ]
                    },
                    {
                        "title": "Aangewezen badzones in Wallonië",
                        "links": [
                            {
                                "title": "environnement.wallonie.be/baignade",
                                "url": "http:\\environnement.wallonie.be/baignade"
                            }
                        ]
                    },
                    {
                        "title": "Voor vlotten gelden dezelfde regels als voor kano’s en kajaks",
                        "links": [
                            {
                                "title": "visurius.be/kano ",
                                "url": "http:\\www.visurius.be/kano"
                            },
                            {
                                "title": "kayak.environnement.wallonie.be",
                                "url": "http:\\kayak.environnement.wallonie.be",
                                "description": "kajakzones"
                            }
                        ]
                    },
                    {
                        "title": "Zeescouting",
                        "links": [
                            {
                                "description": "Voor zeescouting gelden specifieke richtlijnen die je vindt in het handboek ‘Nautische vaardigheden’"
                            }
                        ]
                    },

                    {
                        "title": "Betekenis signalisatie",
                        "links": [
                            {
                                "title": "ikwv.be",
                                "url": "http:\\www.ikwv.be"
                            }
                        ]
                    },
                    {
                        "title": " Zwemvesten uitlenen",
                        "links": [
                            {
                                "title": "sport.vlaanderen",
                                "url": "http:\\www.sport.vlaanderen",
                                "description": "zoek op ‘uitleendiensten’"
                            },
                            {

                                "description": "Via jeugddiensten "
                            }
                        ]
                    },
                    {
                        "title": "Schaatsvijvers",
                        "links": [
                            {
                                "title": "natuurenbos.be/schaatsen",
                                "url": "http:\\www.natuurenbos.be/schaatsen"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "title": "Hoogte",
            "url": "hoogte",
            "subchapters": [
                {
                    "title": "",
                    "content": [
                        {
                            "title": "Wet over hoogte",
                            "type": "wet",
                            "list": [
                                {
                                    "item" : "Er is geen specifieke wetgeving over hoogte die van toepassing is op jeugdbewegingen. Hier geldt dus het principe van de goede huisvader en organisatieplicht."
                                }
                            ]
                    }, {
                            "title": "Regels Scouts en Gidsen Vlaanderen over hoogte",
                            "type": "regel",
                            "list": [
                                {
                                    "item": "Beveilig bij elke hoogteactiviteit (ook bijvoorbeeld een toren sjorren) elke individuele deelnemer met het nodige degelijk materiaal zoals klimtouw en helm."
                                },
                                {
                                    "item": "Begeleid activiteiten in de hoogte altijd met minstens twee leid(st)ers.",
                                    "why": "Vanuit de hoogte heb je een ander perspectief. Eén persoon kan leiding en instructies geven van op de grond. De ander begeleidt in de hoogte."
                                },
                                {
                                    "item": "Organiseer gespecialiseerde activiteiten enkel onder leiding van mensen met een erkende vergunning/opleiding."
                                },
                                {
                                    "item": "Elke kabelbaanactiviteit moet begeleid worden door minstens twee begeleid(st)ers waarvan er minstens één de vorming ‘kabelbanen’ volgde bij ploeg Technieken van Scouts en Gidsen Vlaanderen. Leiding van Scouts en Gidsen Vlaanderen mag enkel een tijdelijke kabelbaan aangekocht in een Hopper-winkel opzetten. Laat een kabelbaan nooit onbewaakt achter.",
                                    "why":  "Laat je ze onbewaakt achter, dan bestaat de kans dat mensen zonder kennis van zake de kabelbaan gebruiken."
                                },
                                {
                                    "item": "Alle deathrides (meer dan 12° hellingsgraad), ook die onder begeleiding van specialisten, zijn verboden. Check dat dus als je een touwenparcours boekt.",
                                    "why": "Deathrides zijn niet verzekerd, het risico op zwaar letsel is te groot."
                                }
                        ]
                    }, {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over vuur",
                            "type": "richtlijn",
                            "list": [
                                {
                                    "item": "Neem elk signaal van hoogtevrees ernstig.",
                                    "why": "Schrik en onzekerheid kunnen mensen onhandig of impulsief maken."
                                },
                                {
                                    "item": "Hou altijd toezicht op spontaan klimwerk, bijvoorbeeld in bomen. Zoek samen een gezonde klimboom en maak goede afspraken.",
                                    "why": "Door er op voorhand bij stil te staan, beseffen kinderen dat ze zelf terug naar beneden moeten klimmen en geef je hen het vertrouwen dat ze zelf mee risico’s kunnen inschatten."
                                },
                                {
                                    "item": "Twijfel je aan de kwaliteit van het materiaal of de deskundigheid van de begeleiding van een gespecialiseerde activiteit? Neem dan geen risico en stop de activiteit.",
                                    "why" : "Onvoldoende onderhouden materiaal verhoogt het risico op ongevallen."
                                },
                                {
                                    "item": "Span nooit touwen over een rijweg, pad of rivier. Iemand die met snelheid tegen het touw rijdt of vaart kan zich er ernstig aan kwetsen.",
                                    "why" : "Iemand die met snelheid tegen het touw rijdt of vaart kan er zich ernstig aan kwetsen."
                                }
                        ]

                    }, {
                            "title": "Suggesties over hoogte",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Gooi nooit materiaal omhoog of vanuit een constructie naar omlaag."
                                },
                                {
                                    "item": "Span touwen met katrollen of spanband nooit op met behulp van voertuigen of mechanische lieren (tirefort).",
                                    "why": "De krachten die je daardoor ontwikkelt, kan je enkel inschatten na een degelijke technische opleiding."
                                }
                            ]
                        }
                    ]
                }   
            ],
            "moreInfo": {
                "title": "Meer weten over hoogte?",
                "list": [
                    {
                        "title": "Over bergsport",
                        "links": [{
                                "title": "klimenbergsportfederatie.be",
                                "url": "http:\\www.klimenbergsportfederatie.be"
                            }
                        ]
                    },
                    {
                        "title": "Over speleologie",
                        "links": [
                            {
                                "title": "www.speleovvs.be",
                                "url": "http:\\www.speleovvs.be"
                            }
                        ]
                    },
                    {
                        "title": "Over kabelbanen",
                        "links": [
                            {
                                "title": "technieken@scoutsengidsenvlaanderen.be",
                                "url": "mailto:technieken@scoutsengidsenvlaanderen.be"
                        }

                        ]
                    },
                    {
                        "title": "Brochure Grote sjorconstructies",
                        "links": [
                            {
                                "title": "www.scoutsengidsenvlaanderen.be/grote-sjorconstructies",
                                "url": "http:\\www.scoutsengidsenvlaanderen.be/grote-sjorconstructies"
                            }
                        ]
                    }
                ]
            }


    },
        {
            "title": "Materiaal",
            "url": "materiaal",
            "subchapters": [
                {
                    "title": "",
                    "content": [{
                        "title": "Wet over materiaal",
                        "type": "wet",
                        "list": [
                            {
                                "item" : "De meeste materialen moeten aan wettelijke normen voldoen, waarmee moet de fabrikant rekening houden. Als goede huisvader <b>ben je verplicht om het materiaal goed te onderhouden en om er voor te zorgen dat iedereen weet hoe hij of zij het moet gebruiken.</b>"
                            },
                            {
                                "item" : "<b>Volg altijd de veiligheidsvoorschriften en zorg dat je leden dat ook doen.</b> Zo vermijd je ongevallen."
                            },
                            {
                                "item" : "Voor speeltuigen, trampolines, schommels, klimrekken, springkastelen, kabelbanen of glijbanen bestaan strenge veiligheidsnormen. Zowel als ze vast als tijdelijk op je terrein staan."
                            }
                        ] 
                    }, {
                        "title": "Regels Scouts en Gidsen Vlaanderen over materiaal",
                        "type": "regel",
                        "list": [
                            {
                                "item" : "Vanaf jonggidsen/jongverkenners/scheepsmakkers mogen leden bijlen, zakmessen en zagen gebruiken. Bij jonggidsen/jongverkenners/scheepsmakkers gebeurt dat altijd begeleid door leiding."   
                            },
                            {
                                "item" : "Leden mogen enkel helpen bij verfraaiing en onderhoud aan het lokaal. Niet bij verbouwingen.",
                                "why" : "Om veilig te kunnen verbouwen, heb je gespecialiseerd materiaal en kennis nodig."
                            },
                            {
                                "item" : "Controleer gasslangen altijd voor gebruik op (haar)scheurtjes. Twijfel je? Vervang ze. Vervang gasslangen sowieso om de 2 jaar, de productiedatum staat er op.",
                                "why" : "In een gasslang kunnen haarscheurtjes ontstaan waardoor ze kan beginnen lekken. Ook als je ze nog nooit gebruikt hebt, vervang je ze best na 2 jaar."
                            }
                        ]
                    }, {
                        "title": "Richtlijnen Scouts en Gidsen Vlaanderen over materiaal",
                        "type": "richtlijn",
                        "list": [
                            {
                                "item": "Gebruik enkel kwalitatief materiaal dat je kan kopen bij gespecialiseerde handelaars.",
                                "why": "Dat materiaal wordt getest en voldoet aan alle nodige veiligheidsnormen."
                            },
                            {
                                "item": "Controleer de gasleidingen van bekkens altijd op defecten of slechte aansluitingen. Gebruik daarvoor nooit een lucifer of aansteker.",
                                "why" : "Omdat je nooit kan inschatten hoeveel gas er al vrijkwam, is er risico op brandgevaar. Gebruik zeepsop om lekken op te sporen."
                            },
                            {
                                "item": "Respecteer de vervaldata op gasleidingen.",
                                "why" : ""
                            },
                            {
                                "item": "Hou bij het houthakken voldoende ruimte en draag stevige, dichte schoenen.",
                                "why": "Een bijlkop kan altijd loskomen en wegvliegen. Er kunnen ook stukjes hout in iemands oog springen."
                            },
                            {
                                "item": "Plan voor het kamp oefeningen in het hakken. Maak van een introductiecursus ‘Hamer, Bijl & Zaag’ een vast item in de takwerking van jonggidsen, jongverkenners en scheepsmakkers.",
                                "why" : "Veel leden hebben nog nooit een bijl gebruikt. En op kamp is er (te) veel afleiding terwijl concentratie nodig is."
                            }
                        ]

                    }, {
                        "title": "Suggesties over materiaal",
                        "type": "suggestie",
                        "list": [
                            {
                                "item" : "Zagen is sneller en veiliger dan hakken."
                            },
                            {
                                "item" : "Zorg dat stelen van bijlen, zagen en messen stevig en veerkrachtig zijn en niet loszitten.",
                                "why" : "Zo voorkom je dat je jezelf of iemand anders verwondt door iets dat onverwachts loskomt of wegvliegt."
                            },
                            {
                                "item" : "Zorg dat bijlen voldoende scherp zijn.",
                                "why" : "Een scherpe bijl hakt trefzekerder en schampt minder snel af."
                            },
                            {
                                "item" : "Laat materiaal nooit rondslingeren.",
                                "why" : "Je kan erop trappen en je eraan kwetsen, het gaat kapot of het kan gevonden worden door leden die er nog niet mee kunnen omgaan."
                            },
                            {
                                "item" : "Sjor met polyproptouw. Dat is het veiligst.",
                                "why" : "Polypropyleen rot niet en wordt niet wak. Je kan het daardoor veel langer (her)gebruiken."
                            },
                            {
                                "item" : "Zet je tent niet onder bomen.",
                                "why" : "Door storm of rukwinden kunnen takken afvallen of bomen omvallen."
                            },
                            {
                                "item" : "Maak spantouwen en piketten zichtbaar.",
                                "why" : "Zo kan je er niet over struikelen."
                            }
                        ]
                    }],
                    "questions": {
                        "title": "Materiaal",
                        "icon": "materiaal",
                        "content": [
                            {
                                "question": "Mogen leden houthakken en hout zagen?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen"
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen"
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja, als ze op de hoogte zijn van de basisregels over veiligheid en als de leiding de activiteit begeleidt en zorgt voor een veilige situatie."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Ja, als ze op de hoogte zijn van de basisregels over veiligheid"
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Ja, als ze op de hoogte zijn van de basisregels over veiligheid"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            "moreInfo": {
                "title": "Meer weten over materiaal?",
                "list": [
                    {
                        "title": "Over speelterreinen en wetgeving",
                        "links": [{
                                "title": "scoutsengidsenvlaanderen.be/speeltoestellen",
                                "url": "http:\\scoutsengidsenvlaanderen.be/speeltoestellen"
                            }
                        ]
                    },
                    {
                        "title": "Over veilig gebruik en onderhoud van materiaal",
                        "links": [
                            {
                                "title": "scoutsengidsenvlaanderen.be/technieken-databank",
                                "url": "http:\\scoutsengidsenvlaanderen.be/technieken-databank",
                                "description": "en het Buitenboek, te koop in Hopper Winkel"
                            }
                        ]
                    }
                ]
            }
    },
        {
            "title": "Verkeer",
            "url": "verkeer",
            "subchapters": [ 
                {
                    "title": "Voetgangers",
                    "content": [
                        {
                            "title": "Wet over voetgangers",
                            "type": "wet",
                            "list": [
                                {
                                    "title": "Waar stappen?",
                                    "items": [
                                        {
                                            "item": "<b>Wandel altijd op het voetpad.</b>"
                                        },
                                        {
                                            "item": "Geen voetpad? Loop op <b>de begaanbare gelijkgrondse bermen.</b>"
                                        },
                                        {
                                            "item": "Ook geen gelijkgrondse berm? Dan mag je stappen op het <b>fietspad</b> (verleen wel voorrang aan fietsers)."
                                        },
                                        {
                                            "item": "Kan dat ook niet? Dan mag je op de rijbaan wandelen. Stap altijd zo links mogelijk en achter elkaar.",
                                            "why": "Zo zie je het verkeer aankomen."
                                        }
                                     ]
                                },
                                {
                                    "title": "Waar oversteken?",
                                    "items": [
                                        {
                                            "item": "Gebruik altijd een oversteekplaats als die er is (verplicht te gebruiken als die zich op minder dan 30 meter bevindt)."
                                        },
                                        {
                                            "item": "Op kruispunten zonder verkeerslichten kan de begeleid(st) er een overstekende groep signaleren aan het aankomende verkeer. Dat kan met het verkeersbord C3."
                                        },
                                        {
                                            "item": "Aanwijzingen met het bord C3 mogen niet in strijd zijn met verkeerstekens of verkeersregels. Je mag het C3-bordje niet gebruiken om het verkeer te doen stoppen. Je mag het enkel gebruiken om je overstekende groep extra te benadrukken."
                                        },
                                        {
                                            "item": "Als het voetgangerslicht op rood springt tijdens het oversteken, dan mag enkel de groep die al op het zebrapad is, verder lopen. Wie nog op de stoep staat, moet wachten tot het groen wordt."
                                        },
                                        {
                                            "item": "<b>Zijn er geen zebrapaden? Zorg dat je oversteekt op een veilige en zichtbare plaats </b>(niet in een bocht of op een helling)."
                                        } 
                                    ]
                                },
                                {
                                    "title": "Altijd zichtbaar",
                                    "items": [
                                        { 
                                            "item": "Volgens de wet moet je <b>altijd goed zichtbaar zijn in het verkeer.</b>"
                                        },
                                        {
                                            "item": "Groepen vanaf vijf personen moeten verplicht een rood licht rechts vooraan en wit licht rechts achteraan dragen als je minder dan 200 meter ver kan zien.",
                                            "why": "Zo geef je je wandelrichting aan"
                                        },
                                        {
                                            "item" : "Is de groep lang? Dan is het verplicht om op de flanken bijkomende witte lichten te voorzien die in alle richtingen zichtbaar zijn."
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over voetgangers",
                            "type": "regel",
                            "list": [
                                {
                                    "item": "Begeleid kapoenen, zeehondjes, (zee)welpen en kabouters altijd op de openbare weg.",
                                    "why": "Ze zijn snel afgeleid en kunnen verkeer moeilijk inschatten."
                                },
                                {
                                    "item": "Bij beperkte zichtbaarheid dragen alle leden en leiding die tijdens activiteiten op de weg komen fluohesjes."
                                },
                                {
                                    "item": "Loop nooit langs of over sporen.",
                                    "why": "Zelfs al lijkt een spoor niet in gebruik, er kan nog een toeristen- of goederentrein passeren. Bovendien schat zo goed als iedereen de snelheid en de kracht van een trein verkeerd in."
                                },
                                {
                                    "title": "Leden mogen nooit liften. Leid(st)ers mogen liften als ze aan alle onderstaande voorwaarden voldoen:",
                                    "items": [
                                        {
                                            "item": "minstens per twee;"
                                        },
                                        {
                                            "item": "evenwichtig verdeeld (zowel onervaren als ervaren leiding, assertief en voorzichtig);"
                                        },
                                        {
                                            "item": "elkaar op de hoogte houden van plaats, route of gebruikte functie (via sms of app);"
                                        },
                                        {
                                            "item": "nuchter;"
                                        },
                                        {
                                            "item": "minstens één iemand meerderjarig;"
                                        },
                                        {
                                            "item": "volgens de wegcode. Op op- en afritten is het verboden te liften."
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over voetgangers",
                            "type": "richtlijn",
                            "list": [
                                        {
                                            "item": "Draag altijd fluohesjes als je met een groep op de openbare weg komt. Ook bij goede zichtbaarheid.",
                                            "why": "Zo ben je van ver duidelijk te herkennen als groep."
                                        },
                                        {
                                            "item" : "Informeer je leden over de verkeersregels en afspraken. Ook bij een dorps- of stadsspel.",
                                            "why": "Je bent op de openbare weg en daaraan zijn risico’s verbonden."
                                        },
                                        {
                                            "item" :"Activiteiten in een gebergte of afgelegen gebieden vereisen voorbereiding. Volg het advies van een erkend deskundige en zorg dat je actuele informatie hebt.",
                                            "why": "(Weers)omstandigheden in het gebergte zijn onvoorspelbaar, deskundigheid is nodig."
                                        }
                            ]
                        },
                        {
                            "title": "Suggesties over voetgangers",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Pas de lengte van je tocht aan de leeftijd van je leden aan. Een goed gemiddelde tot veertien jaar is: het aantal kilometers van de tocht = de leeftijd van de leden.",
                                    "why": "Op trage wegen rijdt weinig tot geen gemotoriseerd verkeer. Het is er bovendien leuker en mooier wandelen."
                                },
                                {
                                    "item": "Stippel je reisweg op voorhand uit en kies zoveel mogelijk voor ‘trage wegen’.",
                                    "why": "In een groep waar de vermoeidheid toeslaat, geraken trage en vermoeide stappers achterop."
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "dropping",
                    "description": "Dropping is mensen achterlaten op een voor hen onbekende plaats, zonder begeleiding, met als opdracht op eigen houtje de weg te vinden. De wet en regels voor voetgangers gelden ook bij dropping. Zorg dat de deelnemers ze kennen.",
                    "content": [
                        {
                            "title": "Wet over dropping",
                            "type": "wet",
                            "list": [
                                {
                                    "item": "Overschrijd het maximum aantal zitplaatsen in de auto niet. <b>Per gordel één persoon is de regel, ook voor kinderen.</b>"
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over dropping",
                            "type": "regel",
                            "list": [
                                    {
                                        "item": "Avond- en nachtdroppings zijn activiteiten voor gidsen, (zee)verkenners, jins, loodsen en leiding."
                                    },
                                    {
                                        "item": "Het einduur van een dropping voor scheepsmakkers, jonggidsen en jongverkenners is 22 uur.",
                                        "why": "Veel ongevallen gebeuren na 22u."
                                    },
                                    {
                                        "item": "Tijdens weekendnachten zijn avond- en nachtdroppingen langs verharde openbare wegen verboden.",
                                        "why": "De kans op ongevallen tijdens weekendnachten is groter. "
                                    },
                                    {
                                        "item": "De deelnemers zijn minimum per twee en blijven samen."
                                    },
                                    {
                                        "item": "Blinddoek deelnemers nooit in de auto.",
                                        "why": "Je moet kunnen anticiperen op wat er gebeurt en je eigen veiligheid kunnen inschatten. Anders kan je in paniek geraken."
                                    },
                                    {
                                        "item": "Je blijft verantwoordelijk voor de leden van je groep, ook al zijn ze op tocht. Zorg dat je weet waar je leden zich bevinden, voorzie voldoende controle."
                                    }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over dropping",
                            "type": "richtlijn",
                            "list": [
                                    { 
                                        "item": "Zorg dat iedereen een fluohesje draagt. Controleer tijdens de dropping of ze het ook dragen.",
                                        "why": "Met een fluohesje aan ben je zichtbaar op 150 meter, anders maar op 20 meter."
                                    },
                                    {
                                        "item": "Geef leden een contactnummer van leiding en het nummer van de hulpdiensten mee voor in geval van nood."
                                    }
                            ]
                        },
                        {
                            "title": "Suggesties over dropping",
                            "type": "suggestie",
                            "list": [
                                    {
                                        "item": "Kies voornamelijk onverharde wegen.",
                                        "why": "Daar rijdt minder gemotoriseerd verkeer."
                                    },
                                    {
                                        "item" : "Maak kleine groepjes van minstens twee, hoogstens zeven personen.",
                                        "why": "In grote groepen is het moeilijker om afspraken te maken en samen te blijven."
                                    }
                            ]
                            
                        }
                    ],
                    "questions": {
                        "title": "Dropping",
                        "icon": "verkeer",
                        "content": [
                            {
                                "question": "Mogen leden zonder leiding overdag op tocht?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen"
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen"
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja, als er voldoende controle en de route veilig en verkend is. Leiding en leden kunnen elkaar bereiken."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Ja, als er voldoende controle is en leiding en leden elkaar kunnen bereiken."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Ja, als er voldoende controle is en leiding en leden elkaar kunnen bereiken."
                                    }
                                ]
                                
                            },
                            {
                                "question": "Mogen leden zonder leiding ‘s avonds op tocht?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen"
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen"
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja, tot 22 uur. Als er voldoende controle is en leiding en leden elkaar kunnen bereiken. Voorzie fluohesjes. Tijdens weekends zijn avonddroppingen langs verharde openbare wegen verboden."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Ja, als er voldoende controle is en leiding en leden elkaar kunnen bereiken. Voorzie fluohesjes. Tijdens weekendnachten zijn avond- en nachtdroppingen langs verharde openbare wegen verboden."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Ja, als er voldoende controle is en leiding en leden elkaar kunnen bereiken. Voorzie fluohesjes. Tijdens weekendnachten zijn avond- en nachtdroppingen langs verharde openbare wegen verboden."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "title": "Twee- en driedaagse",
                    "questions": {
                        "title": "Twee- en driedaagse",
                        "icon": "verkeer",
                        "content": [
                            {
                                "question": "Mogen leden zonder leiding op twee- of driedaagse?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                       "answer": "Neen."
                                    },
                                    {
                                       "group": "kabouters-welpen",
                                       "answer": "Neen."
                                    },
                                    {
                                        "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja, tweedaagse mag als het voorbereid wordt zoals een dropping."
                                    },
                                    {
                                        "group": "gidsen-verkenners",
                                        "answer": "Ja, driedaagse mag als het voorbereid wordt zoals een dropping."
                                    },
                                    {
                                        "group": "jins-loodsen",
                                        "answer": "Ja, driedaagse mag als het voorbereid wordt zoals een dropping."
                                    }
                                ]
                            },
                            {
                                "question": "Mogen leden op twee- of driedaagse zelf een slaapplaats zoeken?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                       "answer": "Neen."
                                    },
                                    {
                                       "group": "kabouters-welpen",
                                       "answer": "Neen."
                                    },
                                    {
                                        "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen, de leiding zorgt voor een slaapplaats en slaapt ter plaatse."
                                    },
                                    {
                                        "group": "gidsen-verkenners",
                                        "answer": "Ja, de leiding gaat ter plaatse controleren."
                                    },
                                    {
                                        "group": "jins-loodsen",
                                        "answer": "Ja."
                                    }
                                ]
                            },
                            {
                                "question": "Mogen leden op twee- of driedaagse zonder leiding slapen?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                       "answer": "Neen."
                                    },
                                    {
                                       "group": "kabouters-welpen",
                                       "answer": "Neen."
                                    },
                                    {
                                        "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen, leiding moet onmiddellijk bereikbaar zijn bij problemen en ’s nachts toezicht houden."
                                    },
                                    {
                                        "group": "gidsen-verkenners",
                                        "answer": "Ja, als leiding en leden elkaar kunnen bereiken."
                                    },
                                    {
                                        "group": "jins-loodsen",
                                        "answer": "Ja, als leiding en leden elkaar kunnen bereiken."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "title": "Fietsers",
                    "bschrijving": "De verplichte uitrusting van een fiets is: een bel (hoorbaar tot 20m), twee goed functionerende remmen en reflectoren. Als het donker is of bij verminderde zichtbaarheid moeten fiets of fietser vooraan een wit (knipper)licht en achteraan een rood (knipper)licht dragen.",
                    "content": [
                        {
                            "title": "Wet over fietsers",
                            "type": "wet",
                            "description": "De wet onderscheidt bij fietsers drie soorten groepen.",
                            "list": [
                                {
                                    "title": "Fiets je met <b>minder dan vijftien</b> fietsers? Dan volg je de regels voor de individuele fietser.",
                                    "itmes": [
                                        {
                                            "item" : "<b>Fiets altijd op het fietspad.</b> Op een fietspad mag je met zoveel personen naast elkaar fietsen als de breedte toelaat. Let op: andere weggebruikers mogen daarbij niet gehinderd worden."
                                        },
                                        {
                                            "item" : "Is er geen fietspad? Dan mag je fietsen op parkeerzones en gelijkgrondse bermen aan de rechterkant."
                                        },
                                        {
                                            "item" : "Bij gebrek aan andere oplossingen rij je rechts op de rijbaan. Je mag per twee naast elkaar rijden zolang kruisen mogelijk is."
                                        },
                                        {
                                            "item" : "Buiten de bebouwde kom moeten fietsers achter elkaar rijden als achterkomend verkeer nadert."
                                        }
                                    ]
                                },
                                {
                                    "title": "Fiets je in een groep van <b>vijftien tot vijftig fietsers?</b>",
                                    "items": [
                                        
                                        {
                                            "item":"Neem bij voorkeur het fietspad."
                                        },
                                        {
                                            "item": "Fietsen mag altijd met maximum twee naast elkaar rechts op de rijbaan. Je mag nooit meer dan de helft van de rijbaan innemen en in geen geval meer dan een rijstrook."
                                        }
                                    ]
                                },
                                {
                                    "title": "Voor groepen van meer dan 50 fietsers geldt een aparte wetgeving. Fiets zoveel mogelijk in kleinere groepen. Wetgeving op www.veiligopstap.be"
                                }

                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over fietsers",
                            "type": "regel",
                            "list": [
                                
                                        {
                                            "item" : "Fiets niet met kapoenen en zeehondjes op de openbare weg.",
                                            "why" : ". Pas vanaf 10 jaar kunnen kinderen reageren op risico’s, koers houden op de fiets, achterom kijken en richting aangeven zonder te slingeren. Vanaf twaalf jaar kunnen ze een ingewikkelde verkeerssituatie met meerdere auto’s beoordelen, en pas een jaar later kunnen ze langzaam fietsen zonder te slingeren. Het vermogen om je aandacht ergens bij te houden en informatie te verwerken, ontwikkelt zich nog verder tot de leeftijd van vijftien jaar."
                                        },
                                        {
                                            "item" : "Bij beperkte zichtbaarheid dragen alle leden en leid(st)ers fluohesjes als ze de weg op gaan."
                                        }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over fietsers",
                            "type": "richtlijn",
                            "list": [
                                
                                {
                                    "item": "Met kabouters en (zee)welpen kan je een fietsactiviteit op het scoutsterrein doen. We raden af om met hen op de openbare weg te fietsen",
                                    "why": "Pas vanaf 10 jaar kunnen kinderen reageren op risico’s, koers houden op de fiets, achterom kijken en richting aangeven zonder te slingeren. Vanaf twaalf jaar kunnen ze een ingewikkelde verkeerssituatie met meerdere auto’s beoordelen, en pas een jaar later kunnen ze langzaam fietsen zonder te slingeren. Het vermogen om je aandacht ergens bij te houden en informatie te verwerken, ontwikkelt zich nog verder tot de leeftijd van vijftien jaar."
                                },
                                {
                                    "item": "Fiets altijd op één lijn, ook al mag je in bepaalde gebieden met twee naast elkaar fietsen.",
                                    "why": "Zo is er minder afleiding."
                                },
                                {
                                    "item": "Vermijd een versnipperde groep.",
                                    "why": "Het verhoogt het risico en het werkt demotiverend voor de achterblijvers."
                                },
                                {
                                    "item": "Een fietser draagt het best een fietshelm.",
                                    "why": "Dit verkleint de kans op hoofdletstels bij een (onge)val."
                                },
                                {
                                    "item": "Controleer voor een fietsactiviteit altijd of de fietsen van je leden wettelijk in orde zijn.",
                                    "why": "Fietsen met een fiets die niet in orde is, vergroot de kans op een ongeval."
                                },
                                {
                                    "item" : "Draag altijd fluohesjes als je met een groep op de openbare weg komt. Ook bij goede zichtbaarheid."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over fietsers",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Bevestig bagage altijd op een juiste manier. Gebruik liever fietstassen dan een overvolle rugzak.",
                                    "why": "Een over- of verkeerd geladen fiets is minder wendbaar en kan je uit je evenwicht brengen. Dat is gevaarlijk voor de fietser zelf en andere weggebruikers."
                                },
                                {
                                    "item" : "Stippel op voorhand je reisweg uit. Zoek een route met zo weinig mogelijk risico’s.",
                                    "why": "De weg zoeken, leidt je aandacht af. En je komt gemakkelijk op een (on)veiliger stuk weg terecht."
                                },
                                {
                                    "item": "Geef duidelijke instructies bij het begin van de tocht. Vraag correct gedrag en voldoende concentratie. Wijs ook op mogelijke gevaren tijdens de tocht."
                                }
                            ]
                        }
                    ],
                    "questions": {
                        "title": "Fietsers",
                        "icon": "verkeer",
                        "type": "regel",
                        "content": [
                            {
                                "question": "Mogen leden fietsen op de openbare weg?",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                       "answer": "Neen."
                                    },
                                    {
                                       "group": "kabouters-welpen",
                                       "answer": "Wij raden het af"
                                    },
                                    {
                                        "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Ja."
                                    },
                                    {
                                        "group": "gidsen-verkenners",
                                        "answer": "Ja."
                                    },
                                    {
                                        "group": "jins-loodsen",
                                        "answer": "Ja."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "title": "Auto's",
                    "content": [
                        { 
                            "title": "Wet over auto’s",
                            "type": "wet",
                            "list": [
                                        {
                                            "item" : "Kinderen kleiner dan 1,35 meter mogen enkel vervoerd worden met de wagen in een geschikt <b>kinderbeveiligingssysteem</b>. Sporadisch vervoer over een korte afstand van andermans kinderen ouder dan 3 jaar mag wel, als kinderen achterin zitten en een gordel dragen."
                                        },
                                        {
                                            "item" : "Kinderen mogen, ongeacht hun leeftijd, voorin op de passagiersstoel zitten, op voorwaarde dat ze vastgemaakt worden zoals de wet het voorschrijft."
                                        },
                                        {
                                            "item" : "Per gordel één persoon, ook voor kinderen."
                                        }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over auto’s",
                            "type": "regel",
                            "list": [
                                {
                                    "item" : "Wie een auto bestuurt, heeft geen druppel alcohol gedronken. Zorg dat er altijd iemand van de leidingsploeg onverwacht met de auto de weg op kan."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over auto’s",
                            "type": "suggestie",
                            "list": [
                                
                                {
                                    "item": "Pauzeer tijdens een langere autorit minstens elke twee uur of wissel van chauffeur.",
                                    "why": "Vermoeidheid maakt je minder alert en aandachtig. Een vermoeide chauffeur is een gevaar op de weg."
                                },
                                {
                                    "item": "Wees je er van bewust dat een voertuig dat je niet gewend bent anders draait en remt. Let ook extra op met zwaar beladen wagens.",
                                    "why": "Hoe zwaarder de lading, hoe langer de remafstand."
                                }
                            ]
                        }
                    ]
                }
            ],
            "moreInfo": {
                "title": "Meer weten over verkeer?",
                "list": [
                    {
                        "title": "Verkeersinformatie specifiek voor jeugdbewegingen vind je op ",
                        "links": [{
                                "title": "veiligopstap.be",
                                "url": "https://veiligopstap.be"
                            }
                        ]
                    },

                    {
                        "title": "Informatie over je veilig bewegen in het verkeer in Vlaanderen vind je bij de Vlaamse Stichting Verkeerskunde",
                        "links": [{
                                "title": "veiligverkeer.be",
                                "url": "http:\\veiligverkeer.be"
                        }
                        ]
                    },

                    {
                        "title": "Rustige wandelwegen vind je op",
                        "links": [
                            {
                                "title": "tragewegen.be",
                                "url": "http:\\tragewegen.be"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "title": "Drugs, tabak en alcohol",
            "url": "drugs-tabak-en-alcohol",
            "subchapters": [
                {
                    "title": "Drugs",
                    "content": [
                        {
                            "title": "Wet over drugs",
                            "type": "wet",
                            "list": [
                                {
                                    "item": "De wet maakt een onderscheid tussen cannabis en andere illegale drugs, maar het zijn <b>allemaal verboden producten</b>. Bezit, aankoop, verkoop en uitdelen zijn strafbaar. Als leden betrapt worden op het gebruik van illegale middelen, kan de leiding strafrechtelijk aansprakelijk gesteld worden."
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over drugs",
                            "type": "regel",
                            "list": [
                                {
                                    "item": "Maak met je groep afspraken voor leiding en leden over drugsgebruik. Onderstaande regels zijn een minimum.",
                                    "why": "Maak duidelijk dat drugs geen plaats hebben binnen scouting. Zo creëer je geen verwarring over de grenzen."
                                },
                                {
                                    "item": "Het gebruik en bezit van illegale middelen (ook cannabis) is verboden in of rond de infrastructuur van de groep. Het is verboden om onder invloed te zijn van die middelen tijdens activiteiten."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over drugs",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Herbekijk jullie alcohol-, rook- en drugsbeleid jaarlijks.Onderteken het als leiding. Gebruik de BAR."
                                },
                                {
                                    "item": "Sociale druk kan er voor zorgen dat mensen tabak, alcohol of drugs gebruiken om erbij te horen. Grijp op tijd in."
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "Tabak",
                    "content": [
                        {
                            "title": "Wet over tabak",
                            "type": "wet",
                            "list": [
                                {
                                    "item": "<b>Het is verboden om te roken in scouts- en gidsenlokalen</b>, ook op plaatsen waar enkel leiding komt. Dat geldt voor alle rookwaren: sigaretten, sigaren, e-sigaretten en waterpijpen.",
                                    "why": "Scoutslokalen zijn namelijk openbare plaatsen"
                                },
                                {
                                    "item": "Je bent verplicht om <b>aan elke ingang van het lokaal een rookverbodsteken te hangen.</b> En in het lokaal mag niets wijzen op de mogelijkheid tot roken. Propere asbakken in het lokaal bijvoorbeeld zijn verboden en strafbaar."
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over tabak",
                            "type": "regel",
                            "list": [
                                {
                                    "item": "Maak met je groep afspraken voor leiding en leden over roken voor, tijdens en na de activiteiten. Onderstaande regel is een minimum."
                                },
                                {
                                    "item": "Tot en met jonggidsen, jongverkenners en scheepsmakkers mogen leden niet roken. En er mag ook in hun buurt niet gerookt worden.",
                                    "why": "Je hebt als leiding een voorbeeldfunctie. Bovendien is meeroken slecht voor de gezondheid."
                                }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over tabak",
                            "type": "richtlijn",
                            "list": [
                                {
                                    "item": "Rook niet in het bijzijn van niet-rokers.",
                                    "why": "Meeroken is slecht voor de gezondheid."
                                },
                                {
                                    "item": "Richt tijdens occasionele activiteiten zoals een bezoekdag of een groepsfeest een afgebakende rokerszone in die uit het zicht ligt van niet-rokers."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over tabak",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Herbekijk jullie alcohol-, rook- en drugsbeleid jaarlijks.Onderteken het als leiding. Gebruik de BAR."
                                },
                                {
                                    "item": "Sociale druk kan er voor zorgen dat mensen tabak, alcohol of drugs gebruiken om erbij te horen. Grijp op tijd in."
                                }
                            ]
                        }
                    ],
                    "questions": {
                        "title": "Tabak",
                        "icon": "drugs-tabak-en-alcohol",
                        "content": [
                            {
                                "question": "Mogen leden en leiding een sigaret roken?",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen"
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Enkel met duidelijke afspraken. Als er jongere leden aanwezig zijn, gedraagt iedereen zich volgens de regels die voor de jongste aanwezigen gelden."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Enkel met duidelijke afspraken. Als er jongere leden aanwezig zijn, gedraagt iedereen zich volgens de regels die voor de jongste aanwezigen gelden."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Enkel met duidelijke afspraken. Als er jongere leden aanwezig zijn, gedraagt iedereen zich volgens de regels die voor de jongste aanwezigen gelden."
                                    },
                                    {
                                        "group": "leiding",
                                        "answer": "Heeft altijd een voorbeeldfunctie en gedraagt zich in aanwezigheid van leden volgens de regels die voor de jongste aanwezigen gelden."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "title": "Alcohol",
                    "content": [
                        {
                            "title": "Wet over alcohol",
                            "type": "wet",
                            "list": [
                                {
                                    "item": "Openbare dronkenschap is strafbaar."
                                },
                                {
                                    "item": "<b>Het is verboden om alcohol te verkopen, te schenken of aan te bieden aan iedereen die jonger is dan zestien jaar.</b> Met alcohol bedoelt men alle alcoholhoudende dranken van meer dan 0.5% vol. zoals bier en wijn."
                                },
                                {
                                    "item": "<b>Sterke drank mag je niet verkopen, schenken of aanbieden aan -18-jarigen.</b> Dat geldt ook voor alcopops zoals breezers of cocktails met een beetje sterke drank in."
                                },
                                {
                                    "item": "De wet verbiedt ook het opdienen van alcoholische dranken aan iemand die zichtbaar dronken is, iemand opzettelijk tot dronkenschap brengen, of uitdagingen tot drinken voorstellen of aanvaarden."
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over alcohol",
                            "type": "regel",
                            "list": [
                                {
                                    "item": "Maak met je groep afspraken voor leiding en leden over alcoholgebruik voor, tijdens en na de activiteiten. Onderstaande regels zijn een minimum."
                                },
                                {
                                    "item": "Tot en met jonggidsen/jongverkenners/scheepsmakkers mogen leden geen alcohol drinken. Ook gidsen en (zee) verkenners jonger dan 16 jaar mogen nooit alcohol nuttigen; jins/loodsen jonger dan 18 jaar geen sterke drank."
                                },
                                {
                                    "item": "Als je alcohol aanbiedt, voorzie dan ook altijd een volwaardig niet-alcoholisch alternatief.",
                                    "why": "Zo spoor je mensen aan om niet per se alcohol te drinken. En ook voor de BOB is het fijn om genoeg keuze te hebben."
                                },
                                {
                                    "item": "Elke leid(st)er is op elk moment verantwoordelijk voor de leden die hem of haar zijn toevertrouwd. Dat geldt dus ook als de leden met iets anders bezig zijn of slapen."
                                },
                                {
                                    "item": "Tijdens activiteiten, op weekend of op kamp drinken altijd minimum twee leid(st)ers per tak geen druppel alcohol. Ook de rest van de leiding moet altijd handelingsbekwaam zijn, zelfs als de leden niet in de buurt zijn.",
                                    "why": "Als er iets gebeurt, moeten kinderen bij hun leiding terechtkunnen. Zo blijft het emotioneel veilig."
                                }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over tabak",
                            "type": "richtlijn",
                            "list": [
                                {
                                    "item": "Tijdens de activiteiten respecteert de leiding dezelfde regels over alcohol als de leden van haar tak."
                                },
                                {
                                    "item": "Schenk geen alcohol in gidsen- en (zee)verkennertakken waar zowel leden jonger als ouder dan 16 jaar zijn.",
                                    "why": "Zo creëer je geen kloof tussen – en +-16-jarigen."
                                },
                                {
                                    "item": "Schenk geen sterke drank in jin-/loods-takken waar zowel leden jonger als ouder dan 18 jaar zijn.",
                                    "why": "Zo creëer je geen kloof tussen – en +- 18-jarigen."
                                },
                                {
                                    "item": "Zorg er bij evenementen voor dat de leeftijd gecontroleerdwordt bij het schenken van alcohol, bijvoorbeeld met een systeem met bandjes."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over alcohol",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Herbekijk jullie alcohol-, rook- en drugsbeleid jaarlijks. Onderteken het als leiding. Gebruik de BAR.",
                                    "why": "Zo benadruk je het belang van zo’n beleid en de rol van alle leid(st)ers daarin. Door dit elk jaar opnieuw te bekrachtigen, zit dit vers in het geheugen van de leiding."
                                },
                                {
                                    "item": "Sociale druk kan er voor zorgen dat mensen tabak, alcohol of drugs gebruiken om erbij te horen. Grijp op tijd in."
                                }
                            ]
                        }
                    ],
                    "questions": {
                        "title": "Alcohol",
                        "icon": "drugs-tabak-en-alcohol",
                        "content": [
                            {
                                "question": "Mogen leden en leiding alcohol drinken?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen"
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen"
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Het is bij wet verboden om jongeren onder 16 jaar alcohol te geven. We raden af om in gidsen/ (zee)verkennertakken met zowel leden jonger als ouder dan 16 jaar alcohol te serveren. Het is bij wet verboden om sterke drank te serveren aan -18-jarigen. Bij jin-/loods-takken met zowel leden jonger als ouder dan 18 jaar raden we af om sterke drank te serveren."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Het is bij wet verboden om jongeren onder 16 jaar alcohol te geven. We raden af om in gidsen/ (zee)verkennertakken met zowel leden jonger als ouder dan 16 jaar alcohol te serveren. Het is bij wet verboden om sterke drank te serveren aan -18-jarigen. Bij jin-/loods-takken met zowel leden jonger als ouder dan 18 jaar raden we af om sterke drank te serveren."
                                    },
                                    {
                                        "group": "leiding",
                                        "answer": "Tijdens activiteiten gelden de alcoholregels zoals opgesteld voor de tak. Bij meerdaagse activiteiten drinken ‘s avonds minstens twee leid(st)ers geen alcohol. Alle leiding is handelingsbekwaam, ook al slapen de leden."
                                    }
                                ]
                            }
                        ]
                    }
                }

            ],
            "moreInfo": {
                "title": "Meer weten over tabak, alcohol en drugs?",
                "list": [{
                        "title": "Over fuiven",
                        "links": [
                            {
                                "title": "qualitynights.be ",
                                "url": "http://www.qualitynights.be "
                        }
                    ]
                    },

                    {
                        "title": "Over drugs",
                        "links": [{
                                "title": "druglijn.be",
                                "url": "htpp://www.druglijn.be"
                            },
                            {
                                "title": "078 15 10 20 ",
                                "url": "https://bel 078 15 10 20"
                            }
                        ]
                    },

                    {
                        "title": "Over drugs in de jeugdbeweging",
                        "links": [{
                                "title": "drugsinbeweging.be ",
                                "url": "https://www.drugsinbeweging.be/"
                        }
                    ]
                    },

                    {
                        "title": "Vereniging voor alcohol- en andere drugproblemen (VAD)",
                        "links": [{
                                "title": "vad@vad.be",
                                "url": "mailto:vad@vad.be"
                        }, {
                                "title": "vad.be",
                                "url": "http://www.vad.be"
                        }
                        ]
                    },

                    {
                        "title": "Over zelf een alcoholbeleid opstellen",
                        "links": [
                            {
                                "title": "scoutsengidsenvlaanderen.be/bar",
                                "url": "http://scoutsengidsenvlaanderen.be/bar"
                            }
                        ]
                    }
                ]
            }
    },
        {
            "title": "Welzijn",
            "url": "welzijn",
            "subchapters": [
                {
                    "title": "",
                    "content": [
                        {
                            "title": "Wet over welzijn",
                            "type": "wet",
                            "list": [
                                {
                                    "item": "De wetgeving over het welzijn van kinderen en minderjarigen is uitgebreid en er zijn geen specifieke regels voor het jeugdwerk. Het Internationaal Verdrag Inzake de Rechten van het Kind is wel belangrijk voor ons. Zo heeft een kind bijvoorbeeld recht op anders zijn, een eigen mening, privacy en bescherming tegen geweld." 
                                },
                                {
                                    "item": "<b>Vanaf 16 jaar is seksueel contact wettelijk toegestaan.</b> Vanaf 14 jaar kan je toestemming geven tot seksueel contact als het leeftijdsverschil maximaal 5 jaar is en er geen machtsrelatie is. Seks met iemand jonger dan 14 jaar wordt beschouwd als verkrachting. Seksueel misbruik is verboden. Er is sprake van seksueel misbruik, als iemand “een beleving van seksualiteit opdringt aan een ander en iemand onder druk zet en gebruikt omwille van de eigen genotsbeleving”."
                                },
                                {
                                    "item": "<b>Enkel ouders en artsen mogen vrij verkrijgbare medicatie geven aan minderjarigen.</b> Ouders kunnen die toestemming overdragen, bijvoorbeeld via de individuele steekkaart. Voor medicatie op voorschrift is een schriftelijke verklaring van een arts noodzakelijk."
                                }
                            ]
                        },
                        {
                            "title": "Regels Scouts en Gidsen Vlaanderen over welzijn",
                            "type": "regel",
                            "list": [
                                {
                                    "item":  "Leden zijn minstens 6 jaar vóór 1 januari van het lopende scoutsjaar of zitten in het eerste leerjaar. Takleiding is minstens 18 jaar of bereikt die leeftijd in de loop van het scoutsjaar. Groepsleiding is minimum 21 jaar."
                                },
                                {
                                    "item": "Op elk kamp is minstens één 21-jarige aanwezig."
                                },
                                {
                                    "item": "Realistische schrikaanjagende activiteiten, zoals een ontvoering, waarbij kinderen niet kunnen inschatten of iets waar is, zijn bij Scouts en Gidsen Vlaanderen verboden.",
                                    "why": "Dit soort activiteiten kan traumatisch zijn, ook op lange termijn. Bovendien kunnen mensen heel impulsief reageren als ze denken dat ze in gevaar zijn."
                                },
                                {
                                    "item": "Machtsmisbruik, vernedering en pesterijen maken geen deel uit van onze werking. Heb oog voor signalen en grijp in bij meldingen die er op kunnen wijzen dat persoonlijke grenzen worden of werden overschreden.",
                                    "why": "Pesterijen kunnen ingrijpende en langdurige gevolgen hebben op iemands zelfbeeld."
                                }
                            ]
                        },
                        {
                            "title": "Richtlijnen Scouts en Gidsen Vlaanderen over welzijn",
                            "type": "ichtlijn",
                            "list": [
                                {
                                    "item": "Zorg voor spannende en uitdagende activiteiten zonder dat leden werkelijk bang worden. Kinderen moeten neen kunnen zeggen en die keuze moet gerespecteerd worden, ook bij rituelen die al lang meegaan.",
                                    "why": "Sommige ervaringen liggen heel dicht bij traumatische / schokkende gebeurtenissen die kinderen meegemaakt hebben."
                                },
                                {
                                    "item": "Heb oog voor groepsdruk. Geef het goede voorbeeld en grijp in waar nodig"
                                },
                                {
                                    "item": "Wat het aantal dagen op kamp betreft, volg de richtlijn per tak."
                                },
                                {
                                    "item": "Wees attent voor symptomen van ziekte, voorzie een goed ingerichte ziekenruimte die niet te ver ligt van de rest van de groep en aarzel nooit om een dokter te raadplegen."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over slapen",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Vermoeidheid brengt risico’s met zich mee. Kinderen onderde 12 jaar hebben gemiddeld 9 tot 10 uur slaap nodig, oudere leden ongeveer 8 uur. Gun je leden voldoende recuperatietijd na nachtactiviteiten en tochten."
                                },
                                {
                                    "item": "Kies je voor een kampuur? Zorg er dan voor dat het niet meer dan 1 uur verschilt met het gewone uur.",
                                    "why": "Anders geraakt het bioritme van je leden verstoord."
                                },
                                {
                                    "item": "Leden mogen gemengd slapen, maar niets moet. Forceer niets. Vraag aan de leden wat ze ervan denken."
                                }
                            ]
                        },
                        {
                            "title": "Suggesties over seksualiteit",
                            "type": "suggestie",
                            "description": "Twijfel je of een bepaalde situatie gepast is? Deze zes criteria helpen je een inschatting te maken. Alle criteria zijn oké? Experimenteer gerust verder. Als dat niet het geval is, grijp je als leiding in.",
                            "list": [
                                {
                                    "item": "<b>Toestemming:</b> iedereen is akkoord en voelt zich prettig."
                                },
                                {
                                    "item": "<b>Vrijwilligheid:</b> geen vorm van druk."
                                },
                                {
                                    "item": "<b>Gelijkwaardigheid:</b> er is evenwicht op vlak van leeftijd en macht."
                                },
                                {
                                    "item": "<b>Ontwikkeling:</b> het gedrag past bij de leeftijd."
                                },
                                {
                                    "item": "<b>Context:</b> het gedrag past bij de omstandigheden."
                                },
                                {
                                    "item": "<b>Zelfrespect:</b> de situatie berokkent geen fysieke of emotionele schade."
                                }
                            ]

                        },
                        {
                            "title": "Suggesties over hygiëne ",
                            "type": "suggestie",
                            "list": [
                                {
                                    "item": "Gebruik enkel leidingwater of geattesteerd drinkwater om te drinken en koken. Ontsmet bidons en waterslangen chemisch. Informeer je bij de apotheker."
                                },
                                {
                                    "item": "Zorg dat iedereen zijn handen wast met zeep voor het koken en eten.",
                                    "why": "Met je handen verspreid je gemakkelijk virussen en bacteriën, omdat je er veel mee aanraakt (toilet, vuilnis(bak), rauw vlees)."
                                },
                                {
                                    "item": "Bewaar bereide gerechten, zuivel, vlees en vis afgesloten en onder de 7°C. Leg het na aankoop zo snel mogelijk in de koelkast.",
                                    "why": "Bacteriën en schimmels groeien tussen 7°C en 65°C"
                                },
                                {
                                    "item": "Bak vis en vlees, zeker kip en varkensvlees, door en door gaar."
                                },
                                {
                                    "item": "Maak toiletten elke dag schoon. Voorzie genoeg toiletten, toiletpapier en wasplaatsen.",
                                    "why": "Kinderen raken de bril vaak aan met hun handen. Vieze toiletten schrikken kinderen af waardoor ze misschien niet naar het toilet durven gaan."
                                },
                                {
                                    "item": "Controleer dagelijks op teken.",
                                    "why": "Teken kunnen de ziekte van Lyme verspreiden."
                                }
                            ]
                        }
                        ],
                    "questions": {
                        "title": "Welzijn",
                        "icon": "welzijn",
                        "content": [
                            {
                                "question": "Wat is de ideale verhouding tussen het aantal leden en het aantal leiding?",
                                "type": "normal",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "1 leid(st)er per 5 leden."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Minimum 2 per tak."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "1 leid(st)er per 6 leden. Minimum 2 per tak."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "1 leid(st)er per 6 leden. Minimum 2 per tak."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "1 leid(st)er per 6 leden. Minimum 2 per tak."
                                    },
                                    {
                                        "group": "akabe",
                                        "answer": "1 leid(st)er per 3 leden. Minimum 2 per tak."
                                    },
                                    {
                                        "group": "open-kamp",
                                        "answer": "1 leid(st)er per 3 leden. Minimum 2 per tak."
                                    }
                                ]
                            },
                            {
                                "question": "Hoelang mag een kamp duren?",
                                "type": "normal",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Maximum 6 dagen."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Maximum 10 dagen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Maximum 12 dagen."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Maximum 14 dagen."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Maximum 14 dagen."
                                    }
                                ]
                            },
                            {
                                "question": "Welke leden mogen op tentenkamp?",
                                "type": "normal",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Ja, het tentenkamp moet opgesteld zijn voor de leden aankomen en er moeten echte wc’s zijn, geen HUDO’s. De leden moeten ook binnen kunnen spelen."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "ja."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "ja."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "ja."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "ja."
                                    }
                                ]
                            },
                            {
                                "question": "Mag je een leefweek organiseren?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "ja."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "ja."
                                    }
                                ]
                                
                            },
                            {
                                "question": "Mag je leden als straf naar huis sturen?",
                                "type": "normal",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen. Uitzonderlijk kan dat in zeer extreme omstandigheden en in onderling overleg met degene die je straft. Informeer altijd zijn of haar ouders over de beslissing."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen. Uitzonderlijk kan dat in zeer extreme omstandigheden en in onderling overleg met degene die je straft. Informeer altijd zijn of haar ouders over de beslissing."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen. Uitzonderlijk kan dat in zeer extreme omstandigheden en in onderling overleg met degene die je straft. Informeer altijd zijn of haar ouders over de beslissing."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Neen. Uitzonderlijk kan dat in zeer extreme omstandigheden en in onderling overleg met degene die je straft. Informeer altijd zijn of haar ouders over de beslissing."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Neen. Uitzonderlijk kan dat in zeer extreme omstandigheden en in onderling overleg met degene die je straft. Informeer altijd zijn of haar ouders over de beslissing."
                                    }
                                ]
                                
                            },
                            {
                                "question": "Mag je met je leden in het donker spelen?",
                                "type": "normal",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Ja, om aan het donker te wennen. Een spel spelen waardoor leden schrik krijgen, mag niet. De leiding is er altijd bij. Verplicht nooit iemand om hieraan deel te nemen."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Ja, om aan het donker te wennen. Een spel spelen waardoor leden schrik krijgen, mag niet. De leiding is er altijd bij. Verplicht nooit iemand om hieraan deel te nemen."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Spannende en uitdagende activiteiten kunnen. Een spel spelen waardoor leden schrik krijgen, mag niet. Verplicht nooit iemand om hieraan deel te nemen."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Spannende en uitdagende activiteiten kunnen. Een spel spelen waardoor leden schrik krijgen, mag niet. Verplicht nooit iemand om hieraan deel te nemen."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Spannende en uitdagende activiteiten kunnen. Een spel spelen waardoor leden schrik krijgen, mag niet. Verplicht nooit iemand om hieraan deel te nemen."
                                    }
                                ]
                                
                            },
                            {
                                "question": "Mag je met leden een realistische schrikaanjagende activiteit doen?",
                                "type": "regel",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Neen, een realistische schrikaanjagende activiteit is verboden."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen, een realistische schrikaanjagende activiteit is verboden."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen, een realistische schrikaanjagende activiteit is verboden."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Neen, een realistische schrikaanjagende activiteit is verboden."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Neen, een realistische schrikaanjagende activiteit is verboden."
                                    }
                                ]
                                
                            },
                            {
                                "question": "Moet leiding in dezelfde ruimte slapen als de leden?",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Ja, minstens één leid(st)er moet in dezelfde slaapruimte slapen. Zo ben je er snel bij als iemand heimwee heeft of naar het toilet moet."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Neen, maar leiding moet binnen gehoorsafstand liggen en de leden moeten zonder schrik bij de leiding kunnen geraken. Laat bijvoorbeeld het licht branden in de gang."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Neen. De leiding slaapt wel op hetzelfde terrein/lokaal."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Neen."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Neen."
                                    }
                                ]
                                
                            },
                            {
                                "question": "Hoeveel uren slaap hebben leden per nacht nodig?",
                                "answers": [
                                    {
                                       "group": "kapoenen-zeehondjes",
                                        "answer": "Ongeveer 10 uur. De leiding bepaalt het slaapuur."
                                    },{
                                       "group": "kabouters-welpen",
                                        "answer": "Gemiddeld 8 tot 9 uur. De leiding bepaalt het slaapuur."
                                    },{
                                       "group": "jonggidsen-verkenners-scheepsmakkers",
                                        "answer": "Gemiddeld 8 tot 9 uur. De leiding bepaalt het slaapuur."
                                    },{
                                       "group": "gidsen-verkenners",
                                        "answer": "Gemiddeld 8 uur. Leden en leiding spreken samen af hoe laat de leden gaan slapen."
                                    },{
                                       "group": "jins-loodsen",
                                        "answer": "Gemiddeld 8 uur. Leden en leiding spreken samen af hoe laat de leden gaan slapen."
                                    }
                                ]
                                
                            }
                            
                        ]
                    } 
                }
            ],
            "moreInfo": {
                "title": "Meer weten over welzijn?",
                "list": [{
                        "title": "Over andere risico’s",
                        "links": [{
                                "title": "info@scoutsengidsenvlaanderen.be",
                                "url": "mailto:info@scoutsengidsenvlaanderen.be"
                        },
                            {
                                "title": "scoutsengidsenvlaanderen.be/goed-in-je-vel",
                                "url": "http://scoutsengidsenvlaanderen.be/goed-in-je-vel"
                        },
                            {
                                "title": "in de basiswerken van Scouts en Gidsen Vlaanderen: ",
                                "description": "Takboekjes, Buitenboek, Kampvisum en in Eerste Hulp voor jeugdleiders. Allemaal te verkrijgen in Hopper Winkel."
                        }
                    ]
                    },

                    {
                        "title": "Over lichamelijkheid en seksualiteit",
                        "links": [{
                                "title": "seksuelevorming.be ",
                                "url": "htpp://www.seksuelevorming.be",
                                "description": "zoek op (N)iets mis mee"
                        }
                        ]
                    },

                    {
                        "title": "Over welzijn",
                        "links": [{
                                "title": "watwat.be",
                                "url": "https://www.watwat.be/"
                        }, {
                                "title": "awel.be ",
                                "url": "https://www.awel.be"
                        }, {
                                "title": "bel 102",
                                "url": "https://bel 102"
                        }
                    ]
                    },

                    {
                        "title": "Bij vermoeden van misbruik of mishandeling",
                        "links": [{
                                "title": "kindermishandeling.be",
                                "url": "http://www.kindermishandeling.be"
                        }
                        ]
                    },

                    {
                        "title": "Over voedselveiligheid",
                        "links": [{
                                "title": "kokenopkamp.be/voedselveiligheid",
                                "url": "http://www.kokenopkamp.be/voedselveiligheid"
                        },
                            {
                                "title": "scoutsengidsenvlaanderen.be/voedselveiligheid",
                                "url": "http://scoutsengidsenvlaanderen.be/voedselveiligheid",
                                "description": "brochure Bederf je kamp niet, zoek op ‘bederf’"
                        }
                        ]
                    }
                ]
            }
        }
    ];
    
    
  }
  getAllChapters() {
    return this.chapters;
  }
  getchapterBytitle(title) {
    return this.chapters.find(t => t.url == title);
  }
  
  getAllQuestions() {
    let questions = new Array();
    for (let chapter of this.chapters) {
        for (let subChapter of chapter.subchapters) {
            if (subChapter.questions != undefined) {
                questions.push(subChapter.questions);
            }
        }
    }
    return questions;
  }
}
