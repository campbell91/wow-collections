// integer values are associated Blizzard API faction ID

const Factions = {
    Alliance = {
        'Ironforge':                                47,
        'Gnomeregan':                               54,
        'Darnassus':                                69,
        'Stormwind':                                72,
        'Exodar':                                   930,
        'Tushui Pandaren':                          1353,
        'The League of Arathor':                    509,
        'Stormpike Guard':                          730,
        'Silverwing Sentinels':                     890,
        'Bizmo\'s Brawlpub (Season 1)':             1419,
        'Bizmo\'s Brawlpub (Season 2)':             1691,
        'Bizmo\'s Brawlpub (Season 3)':             2011,
        'Bizmo\'s Brawlpub':                        2371,
    },

    Horde = {
        'Undercity':                                68,
        'Orgrimmar':                                76,
        'Thunder Bluff':                            81,
        'Darkspear Trolls':                         530,
        'Silvermoon City':                          911,
        'Huojin Pandaren':                          1352,
        'The Defilers':                             510,
        'Frostwolf Clan':                           729,
        'Warsong Outriders':                        889,
        'Brawl\'gar Arena (Season 1)':              1374,
        'Brawl\'gar Arena (Season 2)':              1690,
        'Brawl\'gar Arena (Season 3)':              2010,
        'Brawl\'gar Arena':                         2372,     
    },

    Vanilla = {
        neutral: {
            'Argent Dawn':                          529,
            'Bloodsail Buccaneers':                 87,
            'Darkmoon Faire':                       909,
            'Hydraxian Waterlords':                 749,
            'Cenarion Circle':                      609,
            'Thorium Brotherhood':                  59,
            'Brood of Nozdormu':                    910,
            'Timbermaw Hold':                       576,
            'Steamwheedle Cartel':                  169,
            'Syndicate':                            70,
            'Booty Bay':                            21,
            'Gadgetzan':                            369,
            'Ratchet':                              470,
            'Everlook':                             577
        },
        alliance: {
            'Wintersaber Trainers':                 589,
        },
        horde: {

        }
    },

    BC = {
        neutral: {
            'Netherwing':                           1015,
            'Cenarion Expedition':                  942,
            'The Consortium':                       933,
            'Sha\'tari Skyguard':                   1031,
            'The Aldor':                            932,
            'The Scale of the Sands':               990,
            'The Scryers':                          934,
            'Ashtongue Deathsworn':                 1012,
            'Keepers of Time':                      989,
            'Shattered Sun Offensive':              1077,
            'The Sha\'tar':                         935,
            'Ogri\'la':                             1038,
            'Sporeggar':                            970,
            'Lower City':                           1011,
            'The Violet Eye':                       967,
            'Shattrath City':                       936,        
        },
        alliance: {
            'Kurenai':                              978,
            'Honor Hold':                           946,
        },
        horde: {
            'The Mag\'har':                         941,
            'Thrallmar':                            947,
            'Tranquillien':                         922,
        }
    },

    WotLK = {
        neutral: {
            'The Sons of Hodir':                    1119,
            'The Ashen Verdict':                    1156,
            'Knights of the Ebon Blade':            1098,
            'Argent Crusade':                       1106,
            'Kirin Tor':                            1090,
            'The Kalu\'ak':                         1073,
            'The Oracles':                          1105,
            'The Wyrmrest Accord':                  1091,
            'Frenzyheart Tribe':                    1104,
            'Sholazar Basin':                       1117,
        },
        alliance: {
            'Alliance Vanguard':                    1037,
            'Valiance Expedition':                  1050,
            'Explorer\'s League':                   1068,
            'The Frostborn':                        1126,
            'The Silver Covenant':                  1094,
        },
        horde: {
            'Horde Expedition':                     1052,
            'Warsong Offensive':                    1085,
            'The Taunka':                           1064,
            'The Hand of Vengeance':                1067,
            'The Sunreavers':                       1124,
        }
    },

    Cataclysm = {
        neutral: {
            'Avengers of Hyjal':                    1204,
            'Therazane':                            1171,
            'The Earthen Ring':                     1135,
            'Ramkahen':                             1173,           
            'Guardians of Hyjal':                   1158,
        },
        alliance: {
            'Baradin\'s Wardens':                   1178,
            'Wildhammer Clan':                      471,
        },
        horde: {
            'Dragonmaw Clan':                       1172,
            'Hellscream\'s Reach':                  1178,
        }
    },

    MoP = {
        neutral: {
            'Golden Lotus':                         1269,
            'Shado-Pan':                            1270,
            'Order of the Cloud Serpent':           1271,
            'The August Celestials':                1341,
            'The Klaxxi':                           1337,
            'The Lorewalkers':                      1345,
            'The Black Prince':                     1359,
            'The Tillers':                          1272,
            'The Anglers':                          1302,
            'Emperor Shaohao':                      1492,          
            'Shado-Pan Assault':                    1435,    
            'Shang Xi\'s Academy':                  1216, 
        },
        alliance: {
            'Pearlfin Jinyu':                       1242,
            'Operation: Shieldwall':                1376,           
            'Kirin Tor Offensive':                  1387,
        },
        horde: {
            'Forest Hozen':                         1228,
            'Dominance Offensive':                  1375,
            'Sunreaver Onslaught':                  1388,
        }
    },

    WoD = {
        neutral: {
            'Steamwheedle Preservation Society':    1711,           
            'Order of the Awakened':                1849,
            'Arakkoa Outcasts':                     1515,           
            'The Saberstalkers':                    1850,     
        },
        alliance: {
            'Sha\'tari Defense':                    1710,
            'Council of Exarchs':                   1731,
            'Hand of the Prophet':                  1847,
        },
        horde: {
            'Frostwolf Orcs':                       1445,
            'Laughing Skull Orcs':                  1708,
            'Vol\'jin\'s Headhunters':              1848,
        }
    },

    Legion = {
        neutral: {
            'The Nightfallen':                      1859,
            'Talon\'s Vengeance':                   2018,
            'Court of Farondis':                    1900,
            'Armies of Legionfall':                 2045,
            'Dreamweavers':                         1883,
            'Valarjar':                             1948,
            'Argussian Reach':                      2170,
            'The Wardens':                          1894,
            'Army of the Light':                    2165,
            'Highmountain Tribe':                   1828,
        },
        alliance: {

        },
        horde: {

        }
    },

    BfA = {
        neutral: {
            'Tortollan Seekers':                    2163,
            'Rustbolt Resistance':                  2391,      
            'Champions of Azeroth':                 2164,       
            'Rajani':                               2415,
            'Uldum Accord':                         2417,    
        },
        alliance: {
            'Storm\'s Wake':                        2162,
            'Order of Embers':                      2161,
            'Proudmoore Admiralty':                 2160,
            '7th Legion':                           2159,
            'Honeyback Hive':                       2395,
        },
        horde: {
            'The Unshackled':                       2373,
            'The Honorbound':                       2157,
            'Talanji\'s Expedition':                2156,
            'Zandalari Empire':                     2103,
            'Voldunai':                             2158,
        }
    },

    Shadowlands = {
        neutral: {           
            'The Archivists\' Codex':               2472,           
            'Marasmius':                            2463,
            'Death\'s Advance':                     2470,
            'The Ember Court':                      2445,
            'Court of Night':                       2464,
            'The Avowed':                           2439,
            'Stitchmasters':                        2462,
            'Court of Harvesters':                  2413,
            'The Undying Army':                     2410,
            'The Ascended':                         2407,
            'The Wild Hunt':                        2465,
            'Ve\'nari':                             2432,
        },
        alliance: {

        },
        horde: {

        }
    }
};

export { Factions };