import { HISTORY } from './characterHistory';
import { LINKS } from './characterLinks';

export const getHistoryById = (id: number) => {
  const historyItem = HISTORY.find((item) => item?.id == id);
  return historyItem ? historyItem.history : 'History not found';
};

export const getLinkById = (id: number) => {
  const linkItem = LINKS.find((item) => item?.id == id); // Ignora o primeiro elemento
  return linkItem ? linkItem : 'Link not found';
};

export const CHARACTER = [
  {
    id: 1,
    type: 'human',
    class: 'fight',
    history: getHistoryById(1),
    description:
      'Fighters specialize in physical combat, focusing on dealing large amounts of direct damage to enemies. They wield a variety of melee weapons, including swords, axes, and spears. This class is ideal for players who enjoy being on the front lines of combat, delivering powerful blows and controlling the battlefield.',
    role: 'DPS (Damage Per Second), melee combat.',
    classUrl: require('../../assets/image/class/human/defender/defenderslide.png'),
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    links: [
      {
        linkTitle1: 'Normal Build',
        linkLapis1: getLinkById(1),
      },
    ],
  },
  {
    id: 2,
    type: 'human',
    class: 'defender',
    history: getHistoryById(1),
    description:
      'Defenders are the living shields of the Alliance of Light, specializing in absorbing large amounts of damage and protecting their allies. They have high durability and defensive abilities, making them difficult to take down. They wear heavy armor and shields, and have abilities that make them experts at holding the front line and attracting enemy aggro.',
    role: 'Tank, defense.',
    classUrl: require('../../assets/image/class/human/defender/defenderslide.png'),
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    links: [
      {
        linkTitle1: 'Battle Tank',
        linkLapis1: getLinkById(2),
        linkTitle2: 'True Tank',
        linkLapis2: getLinkById(3),
      },
    ],
  },
  {
    id: 3,
    type: 'human',
    class: 'priest',
    history: getHistoryById(1),
    description:
      'Priests are the human support class, focused on healing and protecting their allies. They have abilities to restore health to party members, remove debuffs, and resurrect fallen comrades. Additionally, they can grant powerful buffs that increase the effectiveness of their allies in combat. Priests are essential for keeping the party alive in tough battles.',
    role: 'Support, healing',
    // classUrl: require('../../assets/image/class/priest.png'),
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 4,
    type: 'elf',
    class: 'ranger',
    history: getHistoryById(2),
    description:
      'Rangers are experts in 1v1 combat and stealth. They can blend in with their surroundings, moving undetected by enemies and attacking by surprise. They primarily use daggers and claws, and are highly agile and accurate. This class is ideal for players who like to strike quickly and escape without being caught.',
    role: 'DPS (Damage per Second), stealth.',
    // classUrl: require('../../assets/image/class/ranger.png'),
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 5,
    type: 'elf',
    class: 'archer',
    history: getHistoryById(2),
    description:
      'Archers are an elite race, capable of striking their enemies from long range with deadly accuracy. They have the ability to deal massive amounts of damage before enemies can get close. They use bows and arrows or crossbows, with abilities that increase critical damage and crowd control. They are perfect for players who prefer to attack from a distance and stay out of direct enemy range.',
    role: 'Ranged DPS, Precision.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 6,
    type: 'elf',
    class: 'mage',
    history: getHistoryById(2),
    description:
      'Mages have a deep connection with the natural elements, using powerful magic to devastate their enemies. They can cast fire, earth, water, and wind spells, dealing massive area damage or focusing on specific targets. Mages also have crowd control abilities such as slow and paralysis. Despite their low physical defense, they make up for it with some of the highest damage output in the game.',
    role: 'Ranged DPS, Crowd control.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 7,
    type: 'nordein',
    class: 'guardian',
    history: getHistoryById(3),
    description:
      'Guardians specialize in absorbing large amounts of damage and protecting their allies. With heavy armor and defensive abilities, they act as the front line in battle, drawing enemy attention and ensuring the party remains safe. Their resilience and ability to absorb damage are crucial in prolonged engagements.',
    role: 'Tank, Defense.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 8,
    type: 'nordein',
    class: 'warrior',
    history: getHistoryById(3),
    description:
      'Warriors are experts in close combat, using a variety of weapons to deal large amounts of physical damage. They are effective in head-on battles, delivering powerful blows and controlling the battlefield with their strength and skill. Ideal for players who prefer to be on the front lines, dealing with the enemy up close.',
    role: 'DPS (Damage Per Second), melee combat.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 9,
    type: 'nordein',
    class: 'oracle',
    history: getHistoryById(3),
    description:
      'Oracles are masters of magic and support, focusing on skills that can heal, remove debuffs, and provide buffs to the party. They use magical abilities to influence the battlefield, restore the health of allies, and help the team overcome challenges. They are essential for keeping the party in fighting condition and improving overall effectiveness in battle.',
    role: 'Support, healing',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 10,
    type: 'vail',
    class: 'assassin',
    history: getHistoryById(4),
    description:
      'Assassins specialize in stealthy, precise attacks in 1v1 combat, focusing on eliminating enemies quickly and efficiently. They use stealth techniques and surprise attack abilities to deal with opponents. They are ideal for players who enjoy a combat style that combines stealth and rapid damage.',
    role: 'DPS (Damage per Second), stealth.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 11,
    type: 'vail',
    class: 'hunter',
    history: getHistoryById(4),
    description:
      'Hunters specialize in ranged combat, utilizing long-range bows and harpoons to attack their enemies. They are effective at dealing damage from afar and are able to keep their enemies at bay while delivering precise strikes. This class is ideal for players who prefer a combat style that involves ranged attack and strategy.',
    role: 'Ranged DPS, Precision.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 12,
    type: 'vail',
    class: 'pagan',
    history: getHistoryById(4),
    description:
      'Pagan have a deep connection with the natural elements, using powerful magic to devastate their enemies. They can cast fire, earth, water, and wind spells, dealing massive area damage or focusing on specific targets. Mages also have crowd control abilities such as slow and paralysis. Despite their low physical defense, they make up for it with some of the highest damage output in the game.',
    role: 'Ranged DPS, Crowd control.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 13,
    type: 'spirit bear',
    class: 'monkey',
    history: getHistoryById(5),
    description:
      "The Monkeys of the Bear Spirit Clan are disciplined warriors, skilled in hand-to-hand combat. Masters of the martial arts, they fight with staves and gloves, representing brute strength and agility. With a powerful body and a focused mind, the Monkeys are formidable tanks, capable of withstanding massive amounts of damage and striking back with devastating blows. Their combat philosophy is based on the harmony between body and spirit, making them pillars of physical strength and determination in Shaiya's wars.",
    role: 'Ranged DPS, Crowd control.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
  {
    id: 14,
    type: 'spirit bear',
    class: 'druid',
    history: getHistoryById(6),
    description:
      'Druids of the Bear Spirit Clan are spiritual guardians deeply connected to nature and the flow of life. They master the manipulation of the elements and possess powerful healing abilities, using the power of earth, wind, and plants to protect their allies. Patient and wise, Druids balance life and death, providing essential support in battle by revitalizing companions and weakening enemies with their natural magics. They are essential to maintaining harmony on the battlefield and in the lands of Shaiya.',
    role: 'Ranged DPS, Crowd control.',
    skillBasic: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
    skillSingle: require('../../assets/image/class/human/fight/skills/Fighter_Single.png'),
    skillBuff: require('../../assets/image/class/human/fight/skills/Fighter_Buff.png'),
    skillRanger: require('../../assets/image/class/human/fight/skills/Fighter_Basic.png'),
  },
];
