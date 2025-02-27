import { HISTORY } from './bossHistory';
import { DROP } from './bossDrops';

export const getDropById = (id: number) => {
  const dropItem = DROP.find((item) => item.id === id);
  return dropItem ? dropItem.drops : ' Drop not found';
};

export const getHistoryById = (id: number) => {
  const historyItem = HISTORY.find((item) => item.id === id);
  return historyItem ? historyItem.history : 'History not found';
};
export const getDesciptionById = (id: number) => {
  const descriptionItem = HISTORY.find((item) => item.id === id);

  return descriptionItem
    ? descriptionItem.description
    : 'Description not found';
};
export const BOSS = [
  {
    id: 1,
    title: 'Assaultron 9000',
    description: getDesciptionById(1),
    imageUrl: require('../../assets/image/monsters/boss/basic/15/assaultron_9000.png'),
    level: 17,
    respawnMap: 'Proelium Frontier (lV1~15)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '15',
    history: getHistoryById(1),
    mapUrl: require('../../assets/image/map/15/assaultronmap.png'),
    drop: [
      getDropById(1),
      getDropById(6),
      getDropById(61),
      getDropById(63),
      getDropById(46), //pal
      getDropById(47), //perfect link
      getDropById(48), //plw
    ],
  },
  {
    id: 2,
    title: 'Mobile Siege Mech',
    description: getDesciptionById(2),
    imageUrl: require('../../assets/image/monsters/boss/basic/15/mobile_siege_mech.png'),
    level: 17,
    respawnMap: 'Proelium Frontier (lV1~15)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '15',
    history: getHistoryById(2),
    mapUrl: require('../../assets/image/map/15/15bossmap.png'),
    drop: [
      getDropById(1),
      getDropById(8),
      getDropById(62),
      getDropById(64),
      getDropById(46),
      getDropById(47),
      getDropById(48),
    ],
  },
  {
    id: 3,
    title: 'Strategist AI',
    description: getDesciptionById(3),
    imageUrl: require('../../assets/image/monsters/boss/basic/15/strategist_ai.png'),
    mapUrl: require('../../assets/image/map/15/15bossmap.png'),
    level: 17,
    respawnMap: 'Proelium Frontier (lV1~15)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '15',
    history: getHistoryById(3),
    drop: [
      getDropById(1),
      getDropById(10),
      getDropById(46),
      getDropById(47),
      getDropById(48),
    ],
  },
  {
    id: 4,
    title: 'Guardian AI',
    description: getDesciptionById(4),
    imageUrl: require('../../assets/image/monsters/boss/basic/15/guardian_ai.png'),
    level: 17,
    respawnMap: 'Proelium Frontier (lV1~15)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '15',
    history: getHistoryById(4),
    mapUrl: require('../../assets/image/map/15/15bossmap.png'),
    drop: [
      getDropById(1),
      getDropById(7),
      getDropById(46),
      getDropById(47),
      getDropById(48),
    ],
  },
  {
    id: 5,
    title: 'Not a Bot',
    description: getDesciptionById(5),
    imageUrl: require('../../assets/image/monsters/boss/basic/15/not_a_bot.png'),
    mapUrl: require('../../assets/image/map/15/15bossmap.png'),
    level: 17,
    respawnMap: 'Proelium Frontier (lV1~15)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '15',
    history: getHistoryById(5),
    drop: [
      getDropById(1),
      getDropById(9),
      getDropById(46),
      getDropById(47),
      getDropById(48),
    ],
  },
  {
    id: 6,
    title: 'Kalayavan, The Undying',
    description: getDesciptionById(6),
    imageUrl: require('../../assets/image/monsters/boss/basic/30/kalayavan_the_undying.png'),
    level: 17,
    respawnMap: 'Cantabilian (lV20~30)',
    respawnTime: '9:00 ~ 9:20 Hs(s)',
    pvpZone: '30',
    history: getHistoryById(6),
    mapUrl: require('../../assets/image/map/30/kalamap.png'),
    drop: [
      getDropById(1),
      getDropById(14),
      getDropById(15),
      getDropById(16),
      getDropById(17),
      getDropById(23),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(46),
      getDropById(48),
    ],
  },
  {
    id: 7,
    title: 'Raptor Slayer',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/d-water_borderland/raptor_slayer.png'),
    level: 82,
    respawnMap: 'D-Water Borderland (lV31~80)',
    respawnTime: '12:00 ~ 12:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(7),
    mapUrl: require('../../assets/image/map/80/raptormap.png'),
    drop: [
      getDropById(14),
      getDropById(15),
      getDropById(16),
      getDropById(17),
      getDropById(46),
      getDropById(48),
    ],
  },
  {
    id: 8,
    title: 'Luminous Brigand',
    description: getDesciptionById(8),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/d-water_borderland/luminous_brigand.png'),
    level: 82,
    respawnMap: 'D-Water Borderland (lV31~80)',
    respawnTime: '12:00 ~ 12:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(8),
    mapUrl: require('../../assets/image/map/80/luminousmap.png'),
    drop: [getDropById(66), getDropById(46), getDropById(48), getDropById(53)],
  },
  {
    id: 9,
    title: 'Greendieta Seraphim',
    description: getDesciptionById(9),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/caelum_greendieta/greendieta_seraphim.png'),
    level: 84,
    respawnMap: 'Caelum Greendieta (lV31~80)',
    respawnTime: '10:00 ~ 10:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(9),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(27),
      getDropById(28),
      getDropById(29),
      getDropById(30),
      getDropById(44),
      getDropById(46),
      getDropById(48),
    ],
  },
  {
    id: 10,
    title: 'Dios Exiel',
    description: getDesciptionById(10),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/caelum_sacra/dos_exiel.png'),
    level: 84,
    respawnMap: 'Caelum Sacra (lV31~80)',
    respawnTime: '15:00 ~ 15:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(10),
    mapUrl: require('../../assets/image/map/80/diosmap.png'),
    drop: [
      getDropById(27),
      getDropById(28),
      getDropById(29),
      getDropById(30),
      getDropById(40),
      getDropById(46),
      getDropById(48),
    ],
  },
  {
    id: 11,
    title: 'Gaia ',
    description: getDesciptionById(11),
    imageUrl: require('../../assets/image/monsters/boss/event/radom/gaia.png'),
    level: 84,
    respawnMap: 'Radom',
    respawnTime: 'Event ??',
    pvpZone: 'Event',
    history: getHistoryById(11),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(1),
      getDropById(23),
      getDropById(24),
      getDropById(25),
      getDropById(28),
      getDropById(29),
      getDropById(30),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(46),
      getDropById(48),
    ],
  },
  {
    id: 12,
    title: 'Princess Rirumu',
    description: getDesciptionById(12),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/volcano_island/princess_rirumu.png'),
    level: 83,
    respawnMap: 'Volcano Island (lV80)',
    respawnTime: '9:00 ~ 12:00 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(12),
    mapUrl: require('../../assets/image/map/80/rirumumap.png'),
    drop: [
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(45),
      getDropById(46),
      getDropById(48),
    ],
  },
  // {
  //   id: 13,
  //   title: 'Cryptic the Last',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Cryptic_the_Last.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(13),
  //   mapUrl: require('../../assets/image/map/80/criptbackandlastmap.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 14,
  //   title: 'Cryptic Bulldozer',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Cryptic_Bulldozer.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(14),
  //   mapUrl: require('../../assets/image/map/80/cryptbulldozer.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 15,
  //   title: 'Cannibal Hydra',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Cannibal_Hydra.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(15),
  //   mapUrl: require('../../assets/image/map/80/cannibalmap.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 16,
  //   title: 'Cryptic Back',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Cryptic_Back.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(16),
  //   mapUrl: require('../../assets/image/map/80/cannibalmap.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 17,
  //   title: 'Cryptic the Immortal',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Cryptic_the_Immortal.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(17),
  //   mapUrl: require('../../assets/image/map/nomap.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 18,
  //   title: 'Fury Kirihiross',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Fury_Kirihiross.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(18),
  //   mapUrl: require('../../assets/image/map/80/crypt_dungeon.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 19,
  //   title: 'Dlizabeth Eathory',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Dlizabeth_Eathory.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(19),
  //   mapUrl: require('../../assets/image/map/80/crypt_dungeon.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 20,
  //   title: 'Fierce Nantarios',
  //   description: getDesciptionById(7),
  //   imageUrl: require('../../assets/image/boss/80/80_kanosCaver_Fierce_Nantarios.png'),
  //   level: 75,
  //   respawnMap: '??',
  //   respawnTime: '??',
  //   pvpZone: '80',
  //   history: getHistoryById(20),
  //   mapUrl: require('../../assets/image/map/80/crypt_dungeon.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  {
    id: 21,
    title: 'Lumen',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/kanos_illium/lumen.png'),
    level: 82,
    respawnMap: 'Kanos Illium (lV70-80)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(21),
    mapUrl: require('../../assets/image/map/80/lumemmap.png'),
    drop: [
      getDropById(18),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(65),
      getDropById(41),
      getDropById(46),
      getDropById(48),
      getDropById(52),
    ],
  },
  {
    id: 22,
    title: 'Ales',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/kanos_illium/ales.png'),
    level: 82,
    respawnMap: 'Kanos Illium (lV70-80)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(22),
    mapUrl: require('../../assets/image/map/80/alesmap.png'),
    drop: [
      getDropById(18),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(65),
      getDropById(38),
      getDropById(46),
      getDropById(48),
      getDropById(50),
    ],
  },
  {
    id: 23,
    title: 'Dentatus',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/kanos_illium/dentatus.png'),
    level: 82,
    respawnMap: 'Kanos Illium (lV70-80)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(23),
    mapUrl: require('../../assets/image/map/80/dentatusmap.png'),
    drop: [
      getDropById(18),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(65),
      getDropById(39),
      getDropById(46),
      getDropById(48),
      getDropById(51),
    ],
  },
  {
    id: 24,
    title: 'Secreta',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/kanos_illium/secreta.png'),
    level: 82,
    respawnMap: 'Kanos Illium (lV70-80)',
    respawnTime: '17:00 ~ 17:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(24),
    mapUrl: require('../../assets/image/map/80/secretamap.png'),
    drop: [
      getDropById(18),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(65),
      getDropById(43),
      getDropById(46),
      getDropById(48),
      getDropById(55),
    ],
  },
  {
    id: 25,
    title: 'Commander Opal Hammer',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/stable_erde/commander_opal_hammer.png'),
    level: 84,
    respawnMap: 'Stable Erde (lV55-80)',
    respawnTime: '10:00 ~ 10:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(25),
    mapUrl: require('../../assets/image/map/80/opalhammermap.png'),
    drop: [
      getDropById(5),
      getDropById(11),
      getDropById(35),
      getDropById(36),
      getDropById(37),
      getDropById(42),
      getDropById(46),
      getDropById(48),
      getDropById(60),
    ],
  },
  {
    id: 26,
    title: 'Graveyard Teroro',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/locus_graveyard/graveyard_terror.png'),
    level: 85,
    respawnMap: 'Locus Graveyard (lV80)',
    respawnTime: '9:00 ~ 9:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(26),
    mapUrl: require('../../assets/image/map/80/teroromap.png'),
    drop: [
      getDropById(1),
      getDropById(14),
      getDropById(15),
      getDropById(16),
      getDropById(17),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(46),
      getDropById(48),
    ],
  },
  {
    id: 27,
    title: 'Dark Lord',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/locus_graveyard/dark_lord.png'),
    level: 85,
    respawnMap: 'Locus Graveyard (lV80)',
    respawnTime: '8:00 ~ 8:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(27),
    mapUrl: require('../../assets/image/map/80/darklordmap.png'),
    drop: [
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(12),
      getDropById(56),
    ],
  },
  {
    id: 28,
    title: 'Abyssal Eclipser Umbraxis',
    description: getDesciptionById(28),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/dagonspine_enclave/abyssal_eclipser_umbraxis.png'),
    level: 83,
    respawnMap: 'Dragonspine Enclave (lV80)',
    respawnTime: '??',
    pvpZone: '80',
    history: getHistoryById(28),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(1),
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(13),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(47),
      getDropById(57),
      getDropById(58),
      getDropById(59),
    ],
  },
  {
    id: 29,
    title: 'Tempest Guardian Terravane',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/dagonspine_enclave/tempest_guardian_terravane.png'),
    level: 82,
    respawnMap: 'Dragonspine Enclave (lV80)',
    respawnTime: '??',
    pvpZone: '80',
    history: getHistoryById(29),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(1),
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(13),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(57),
      getDropById(58),
      getDropById(59),
    ],
  },
  {
    id: 30,
    title: 'Pestilent Tyrant Nidhogg',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/dagonspine_enclave/pestilent_tyrant_nidhogg.png'),
    level: 82,
    respawnMap: 'Dragonspine Enclave (lV80)',
    respawnTime: '??',
    pvpZone: '80',
    history: getHistoryById(30),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(1),
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(13),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(26),

      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(57),
      getDropById(58),
      getDropById(59),
    ],
  },
  {
    id: 31,
    title: 'Firestorm Warden Pyralis',
    description: getDesciptionById(7),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/dagonspine_enclave/firestorm_warden_pyralis.png'),
    level: 82,
    respawnMap: 'Dragonspine Enclave (lV80)',
    respawnTime: '??',
    pvpZone: '80',
    history: getHistoryById(31),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(1),
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(13),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(47),
      getDropById(57),
      getDropById(58),
      getDropById(59),
    ],
  },
  {
    id: 32,
    title: "Eternity's Vanquisher Stygion",
    description: getDesciptionById(32),
    imageUrl: require('../../assets/image/monsters/boss/basic/80/dagonspine_enclave/eternitys_vanquisher_stygion.png'),
    level: 84,
    respawnMap: 'Dragonspine Enclave (lV80)',
    respawnTime: '??',
    pvpZone: '80',
    history: getHistoryById(32),
    mapUrl: require('../../assets/image/map/nomap.png'),
    drop: [
      getDropById(1),
      getDropById(2),
      getDropById(3),
      getDropById(4),
      getDropById(13),
      getDropById(19),
      getDropById(20),
      getDropById(21),
      getDropById(22),
      getDropById(32),
      getDropById(33),
      getDropById(34),
      getDropById(47),
      getDropById(57),
      getDropById(58),
      getDropById(59),
    ],
  },
  // {
  //   id: 33,
  //   title: 'Cloron Dragon',
  //   description: getDesciptionById(33),
  //   imageUrl: require('../../assets/image/boss/80/80_map1Caver_Cloron_Dragon.png'),
  //   level: 64,
  //   respawnMap: 'Cloron´s Lair (~map1)',
  //   respawnTime: '??',
  //   pvpZone: '??',
  //   history: getHistoryById(33),
  //   mapUrl: require('../../assets/image/map/nomap.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  // {
  //   id: 34,
  //   title: 'Fantasma Dragon',
  //   description: getDesciptionById(34),
  //   imageUrl: require('../../assets/image/boss/80/80_map1Caver_Fantasma_Dragon.png'),
  //   level: 64,
  //   respawnMap: 'Fantasma´s Lair (~map1)',
  //   respawnTime: '??',
  //   pvpZone: '??',
  //   history: getHistoryById(34),
  //   mapUrl: require('../../assets/image/map/nomap.png'),
  //   drop: [getDropById(9), getDropById(46), getDropById(48)],
  // },
  {
    id: 35,
    title: 'Opalus',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/basic/80/canyon_of_greed/opalus.png'),
    level: 85,
    respawnMap: 'Canyon of Greed (LV80)',
    respawnTime: '20:00 ~ 20:20 Hs(s)',
    pvpZone: '80',
    history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/80/opalus.png'),
    drop: [
      getDropById(5),
      getDropById(11),
      getDropById(35),
      getDropById(36),
      getDropById(67),
      getDropById(37),
      getDropById(46),
      getDropById(48),
      getDropById(54),
      getDropById(60),
    ],
  },

  {
    id: 36,
    title: 'Mad Hatter',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/15/mad_hatter.png'),
    level: 17,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 10:00 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 37,
    title: 'Mad Pumpkin',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/15/mad_pumpkin.png'),
    level: 16,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 8:10 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 38,
    title: 'Mad Pumpkin Princess',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/30/mad_pumpkin_princess.png'),
    level: 32,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 8:10 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 39,
    title: 'Crazy Hatter',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/30/crazy_hatter.png'),
    level: 33,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 10:00 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 40,
    title: 'Mad Pumpkin Queen',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/80/mad_pumpkin_queen.png'),
    level: 82,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 8:10 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 41,
    title: 'The Most Ugly Pumpkin',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/80/the_most_ugly_pumpkin.png'),
    level: 83,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 8:10 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },

  {
    id: 42,
    title: 'Evil Hatter',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/80/evil_hatter.png'),
    level: 83,
    respawnMap: 'Halloween',
    respawnTime: '8:00 ~ 10:00 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 43,
    title: "Sewer's Guardian (AOL)",
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/80/aol_sewers_guardian.png'),
    level: 83,
    respawnMap: 'Halloween',
    respawnTime: '9:00 ~ 9:20 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 44,
    title: "Sewer's Guardian (UOF)",
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/halloween/80/uof_sewers_guardian.png'),
    level: 83,
    respawnMap: 'Halloween',
    respawnTime: '9:00 ~ 9:20 Hs(s)',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 45,
    title: 'Vorakron 9000',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/basic/60/vorakron_9000.png'),
    level: 64,
    respawnMap: 'Deserts?',
    respawnTime: '14:00 ~ 14:20 Hs(s)',
    pvpZone: '60',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  //  {
  //   id: 51,
  //   title: 'Wind Guardian',
  //   description: '',
  //   imageUrl: require('../../assets/image/monsters/boss/event/easter/wind_guardian.png'),
  //   level: 83,
  //   respawnMap: 'Easter',
  //   respawnTime: '? ~ ?',
  //   pvpZone: 'Event',
  //   // history: getHistoryById(35),
  //   mapUrl: require('../../assets/image/map/nomap.png'),
  //   // drop: [
  //   //   getDropById(5),
  //   //   getDropById(11),
  //   //   getDropById(35),
  //   //   getDropById(36),
  //   //   getDropById(67),
  //   //   getDropById(37),
  //   //   getDropById(46),
  //   //   getDropById(48),   getDropById(54),
  //   //   getDropById(60),
  //   // ],
  // },

  {
    id: 47,
    title: 'Hermosa Hueva',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/hermosa_hueva.png'),
    level: 84,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [
    //   getDropById(5),
    //   getDropById(11),
    //   getDropById(35),
    //   getDropById(36),
    //   getDropById(67),
    //   getDropById(37),
    //   getDropById(46),
    //   getDropById(48),   getDropById(54),
    //   getDropById(60),
    // ],
  },
  {
    id: 48,
    title: 'Earth Guardian',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/earth_guardian.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [
    //   getDropById(5),
    //   getDropById(11),
    //   getDropById(35),
    //   getDropById(36),
    //   getDropById(67),
    //   getDropById(37),
    //   getDropById(46),
    //   getDropById(48),   getDropById(54),
    //   getDropById(60),
    // ],
  },
  {
    id: 49,
    title: 'Fire Guardian',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/fire_guardian.png'),
    level: 83,
    respawnMap: 'Event',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [
    //   getDropById(5),
    //   getDropById(11),
    //   getDropById(35),
    //   getDropById(36),
    //   getDropById(67),
    //   getDropById(37),
    //   getDropById(46),
    //   getDropById(48),   getDropById(54),
    //   getDropById(60),
    // ],
  },
  {
    id: 50,
    title: 'Water Guardian',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/water_guardian.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [
    //   getDropById(5),
    //   getDropById(11),
    //   getDropById(35),
    //   getDropById(36),
    //   getDropById(67),
    //   getDropById(37),
    //   getDropById(46),
    //   getDropById(48),   getDropById(54),
    //   getDropById(60),
    // ],
  },
  {
    id: 51,
    title: 'Wind Guardian',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/wind_guardian.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [
    //   getDropById(5),
    //   getDropById(11),
    //   getDropById(35),
    //   getDropById(36),
    //   getDropById(67),
    //   getDropById(37),
    //   getDropById(46),
    //   getDropById(48),   getDropById(54),
    //   getDropById(60),
    // ],
  },
  {
    id: 52,
    title: 'Gate Guardian',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/gate_guardian.png'),
    level: 82,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [
    //   getDropById(5),
    //   getDropById(11),
    //   getDropById(35),
    //   getDropById(36),
    //   getDropById(67),
    //   getDropById(37),
    //   getDropById(46),
    //   getDropById(48),   getDropById(54),
    //   getDropById(60),
    // ],
  },
  {
    id: 53,
    title: 'Rock Golem',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/easter/rock_golen.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 54,
    title: 'Rock Golem',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/keeper_of_the_fire.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 54,
    title: 'Rock Golem',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/keeper_of_the_fire.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 54,
    title: 'Rock Golem',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/keeper_of_the_fire.png'),
    level: 83,
    respawnMap: 'Easter',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 54,
    title: 'Keeper of the Fire',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/keeper_of_the_fire.png'),
    level: 83,
    respawnMap: 'Summer',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 55,
    title: 'Leader of the Cult',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/leader_of_the_cult.png'),
    level: 83,
    respawnMap: 'Summer',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 56,
    title: 'Monkey King',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/monkey_king.png'),
    level: 83,
    respawnMap: 'Summer',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 57,
    title: 'Pirate Courier',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/pirate_courier.png'),
    level: 82,
    respawnMap: 'Summer',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 58,
    title: 'Pirate Quartermaster',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/summer/pirate_quartermaster.png'),
    level: 83,
    respawnMap: 'Summer',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 59,
    title: 'The Grinch',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/christmas/the_grinch.png'),
    level: 83,
    respawnMap: 'Christmas',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 60,
    title: 'Boreas',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/christmas/boreas.png'),
    level: 83,
    respawnMap: 'Christmas',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
  {
    id: 61,
    title: 'Morozko',
    description: '',
    imageUrl: require('../../assets/image/monsters/boss/event/christmas/morozko.png'),
    level: 83,
    respawnMap: 'Christmas',
    respawnTime: '? ~ ?',
    pvpZone: 'Event',
    // history: getHistoryById(35),
    mapUrl: require('../../assets/image/map/nomap.png'),
    // drop: [

    // ],
  },
];
