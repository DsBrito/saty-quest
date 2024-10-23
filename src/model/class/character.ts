import { HISTORY } from './characterHistory';
import { LINKS } from './characterLinks';
import { COMBO } from './characterCombo';
import { SKILLS } from './characterSkills';
import { DESCRIPTION } from './characterDescription';
import { VIDEO } from './characterVideo';

export const getHistoryById = (id: number) => {
  const historyItem = HISTORY.find((item) => item?.id == id);
  return historyItem ? historyItem.history : 'History not found';
};

export const getLinkById = (id: number) => {
  const linkItem = LINKS.find((item) => item?.id == id);
  return linkItem ? linkItem : 'Link not found';
};

export const getComboById = (id: number) => {
  const comboItem = COMBO.find((item) => item?.id == id);
  return comboItem ? comboItem : 'Combo not found';
};

export const getSkillById = (id: number) => {
  const skillItem = SKILLS.find((item) => item?.id == id);
  return skillItem ? skillItem : 'Skill not found';
};

export const getDescriptionById = (id: number) => {
  const descriptionItem = DESCRIPTION.find((item) => item?.id == id);
  return descriptionItem ? descriptionItem : 'DescriptionItem not found';
};

export const getVideoById = (id: number) => {
  const videoItem = VIDEO.find((item) => item?.id == id);
  return videoItem ? videoItem : 'videoItem not found';
};

export const CHARACTER = [
  {
    //1
    id: 1,
    type: 'Human',
    class: 'Fighter',
    role: 'DPS (Damage Per Second), melee combat.',
    icon: require('../../assets/image/class/human/fight/icon/fighter_icon.png'),
    // classUrl: require('../../assets/image/class/human/defender/defenderslide.png'),

    history: getHistoryById(111),
    description: getDescriptionById(1),
    skills: getSkillById(1),
    videos: getVideoById(1),

    combos: {
      combo_1: getComboById(1),
      combo_2: getComboById(11),
      combo_3: getComboById(111),
    },
    links: [
      {
        linkTitle1: 'DPS Build',
        linkLapis1: getLinkById(1),
      },
    ],
  },
  {
    //2
    id: 2,
    type: 'Human',
    class: 'Defender',
    role: 'Tank, defense.',
    icon: require('../../assets/image/class/human/defender/icon/defender_icon.png'),
    videos: getVideoById(4),

    history: getHistoryById(111),
    description: getDescriptionById(2),
    skills: getSkillById(2),
    combos: {
      combo_1: getComboById(2),
      combo_2: getComboById(22),
      combo_3: getComboById(222),
    },
    links: [
      {
        linkTitle1: 'Battle Tank Build',
        linkLapis1: getLinkById(2),
        linkTitle2: 'True Tank Build',
        linkLapis2: getLinkById(22),
      },
    ],
  },
  {
    id: 3,
    type: 'Human',
    class: 'Priest',
    role: 'Support, healing',
    history: getHistoryById(111),
    videos: getVideoById(4),

    description: getDescriptionById(3),
    // classUrl: require('../../assets/image/class/priest.png'),
    skills: getSkillById(3),
    icon: require('../../assets/image/class/human/priest/icon/priest_icon.png'),
    combos: {
      combo_1: '',
      combo_2: '',
    },
    links: [
      {
        linkTitle1: 'Tank Build',
        linkLapis1: getLinkById(3),
        linkTitle2: 'Healer Build',
        linkLapis2: getLinkById(33),
      },
    ],
  },
  {
    id: 4,
    type: 'Elf',
    class: 'Ranger',
    role: 'DPS (Damage per Second), stealth.',
    icon: require('../../assets/image/class/elf/ranger/icon/rager_icon.png'),

    history: getHistoryById(222),
    description: getDescriptionById(4),
    skills: getSkillById(4),
    videos: getVideoById(4),
    combos: {
      combo_1: getComboById(4),
      combo_2: getComboById(44),
    },
    links: [
      {
        linkTitle1: 'Dex Build',
        linkLapis1: getLinkById(4),
        linkTitle2: 'Health and Dex Build',
        linkLapis2: getLinkById(44),
      },
    ],
  },
  {
    id: 5,
    type: 'Elf',
    class: 'Archer',
    role: 'Ranged DPS, Precision.',
    icon: require('../../assets/image/class/elf/archer/icon/archer_icon.png'),

    history: getHistoryById(222),
    videos: getVideoById(4),

    description: getDescriptionById(5),
    skills: getSkillById(5),
    combos: {
      combo_1: getComboById(5),
      combo_2: getComboById(55),
    },
    links: [
      {
        linkTitle1: 'Dex and Luc Build',
        linkLapis1: getLinkById(5),
        linkTitle2: 'Str and Luc Build',
        linkLapis2: getLinkById(55),
      },
    ],
  },
  {
    id: 6,
    type: 'Elf',
    videos: getVideoById(4),

    class: 'Mage',
    role: 'Ranged DPS, Crowd control.',
    icon: require('../../assets/image/class/elf/mage/icon/mage_icon.png'),
    history: getHistoryById(222),
    description: getDescriptionById(6),
    skills: getSkillById(6),
    combos: {
      combo_1: getComboById(6),
      combo_2: getComboById(66),
    },
    links: [
      {
        linkTitle1: 'DPS Build',
        linkLapis1: getLinkById(6),
        linkTitle2: 'HP and DPS Build',
        linkLapis2: getLinkById(66),
      },
    ],
  },
  {
    id: 7,
    type: 'Spirit Bear',
    class: 'Monkey',
    role: 'Ranged DPS, Crowd control.',
    icon: require('../../assets/image/class/spirity/monkey/icon/monkey_icon.png'),
    history: getHistoryById(5),
    description: getDescriptionById(7),
    videos: getVideoById(4),

    skills: getSkillById(7),
    combos: {
      combo_1: '',
      combo_2: '',
    },
    links: [
      {
        linkTitle1: 'DPS Build',
        linkLapis1: getLinkById(1),
      },
    ],
  },
  {
    id: 8,
    type: 'Nordein',
    class: 'Warrior',
    role: 'DPS (Damage Per Second), melee combat.',
    icon: require('../../assets/image/class/nordein/warrior/icon/warrior_icon.png'),
    history: getHistoryById(333),
    description: getDescriptionById(8),
    videos: getVideoById(1),

    skills: getSkillById(8),
    combos: {
      combo_1: getComboById(1),
      combo_2: getComboById(11),
      combo_3: getComboById(111),
    },
    links: [
      {
        linkTitle1: 'DPS Build',
        linkLapis1: getLinkById(1),
      },
    ],
  },
  {
    id: 9,
    type: 'Nordein',
    class: 'Guardian',
    role: 'Tank, Defense.',
    videos: getVideoById(4),

    icon: require('../../assets/image/class/nordein/guardian/icon/guardian_icon.png'),
    history: getHistoryById(333),
    description: getDescriptionById(9),
    skills: getSkillById(9),
    combos: {
      combo_1: getComboById(2),
      combo_2: getComboById(22),
      combo_3: getComboById(222),
    },
    links: [
      {
        linkTitle1: 'Battle Tank Build',
        linkLapis1: getLinkById(2),
        linkTitle2: 'True Tank Build',
        linkLapis2: getLinkById(22),
      },
    ],
  },

  {
    id: 10,
    type: 'Nordein',
    class: 'Oracle',
    role: 'Support, healing',
    videos: getVideoById(4),

    icon: require('../../assets/image/class/nordein/oracle/icon/oracle_icon.png'),
    history: getHistoryById(333),
    description: getDescriptionById(10),
    skills: getSkillById(10),
    links: [
      {
        linkTitle1: 'Tank Build',
        linkLapis1: getLinkById(3),
        linkTitle2: 'Healer Build',
        linkLapis2: getLinkById(33),
      },
    ],
  },
  {
    id: 11,
    type: 'Vail',
    videos: getVideoById(4),

    class: 'Assassin',
    role: 'DPS (Damage per Second), stealth.',
    icon: require('../../assets/image/class/vail/assassin/icon/assassin_icon.png'),
    history: getHistoryById(444),
    description: getDescriptionById(11),
    skills: getSkillById(11),
    combos: {
      combo_1: getComboById(4),
      combo_2: getComboById(44),
    },
    links: [
      {
        linkTitle1: 'Dex Build',
        linkLapis1: getLinkById(4),
        linkTitle2: 'Health and Dex Build',
        linkLapis2: getLinkById(44),
      },
    ],
  },
  {
    id: 12,
    type: 'Vail',
    class: 'Hunter',
    role: 'Ranged DPS, Precision.',
    history: getHistoryById(444),
    description: getDescriptionById(12),
    videos: getVideoById(4),

    skills: getSkillById(12),
    icon: require('../../assets/image/class/vail/hunter/icon/hunter_icon.png'),
    combos: {
      combo_1: getComboById(5),
      combo_2: getComboById(55),
    },
    links: [
      {
        linkTitle1: 'Dex and Luc Build',
        linkLapis1: getLinkById(5),
        linkTitle2: 'Str and Luc Build',
        linkLapis2: getLinkById(55),
      },
    ],
  },
  {
    id: 13,
    type: 'Vail',
    class: 'Pagan',
    videos: getVideoById(4),

    role: 'Ranged DPS, Crowd control.',
    icon: require('../../assets/image/class/vail/pagan/icon/pagan_icon.png'),
    history: getHistoryById(444),
    description: getDescriptionById(13),
    skills: getSkillById(13),
    combos: {
      combo_1: getComboById(6),
      combo_2: getComboById(66),
    },
    links: [
      {
        linkTitle1: 'DPS Build',
        linkLapis1: getLinkById(6),
        linkTitle2: 'HP and DPS Build',
        linkLapis2: getLinkById(66),
      },
    ],
  },

  {
    id: 14,
    type: 'Spirit Bear',
    class: 'Druid',
    role: 'Ranged DPS, Crowd control.',
    icon: require('../../assets/image/class/spirity/druid/icon/druid_icon.png'),

    history: getHistoryById(6),
    description: getDescriptionById(14),
    videos: getVideoById(4),

    skills: getSkillById(14),
    combos: {
      combo_1: '',
      combo_2: '',
    },
    links: [
      {
        linkTitle1: 'DPS Build',
        linkLapis1: getLinkById(1),
      },
    ],
  },
];
