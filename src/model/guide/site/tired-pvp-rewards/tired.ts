import { REWARDS } from './rewardItems';

export const getRewardById = (id: number) => {
  const rewardItem = REWARDS.find((item: { id: number }) => item.id === id);
  return rewardItem ? rewardItem.items : ' Reward not found';
};

export const TIRED_PVP_REWARDS = [
  {
    id: 1,
    title:
      'Tier 1 Rewards (10000 Kills). You will get a random reward from list.',
    reward: [getRewardById(1), getRewardById(2), getRewardById(3)],
  },
  {
    id: 2,
    title: 'Tier 2 Rewards (20000 Kills). You will get all rewards from list.',
    reward: [getRewardById(1), getRewardById(4), getRewardById(5)],
  },
  {
    id: 3,
    title:
      'Tier 3 Rewards (35000 Kills). You will get a random reward from list.',
    reward: [
      getRewardById(1),
      getRewardById(6),
      getRewardById(7),
      getRewardById(8),
      getRewardById(9),
    ],
  },
  {
    id: 4,
    title:
      'Tier 4 Rewards (50000 Kills). You will get the current month reward (Pet, Mount or Wings).',
    reward: [getRewardById(10), getRewardById(11), getRewardById(12)],
  },
  {
    id: 5,
    title: 'Tier 5 Rewards (65000 Kills). You will get all rewards from list.',
    reward: [getRewardById(13)],
  },
];
