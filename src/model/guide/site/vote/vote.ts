import { REWARDS } from './rewardItems';

export const getRewardById = (id: number) => {
  const rewardItem = REWARDS.find((item: { id: number }) => item.id === id);
  return rewardItem ? rewardItem.items : ' Reward not found';
};

export const VOTE_REWARDS = [
  {
    id: 1,
    title: 'Tier 1 Rewards. You will get a random reward from list.',
    reward: [getRewardById(1)],
  },
  {
    id: 2,
    title: 'Tier 2 Rewards. You will get all rewards from list.',
    reward: [getRewardById(2)],
  },
  {
    id: 3,
    title: 'Tier 3 Rewards. You will get a random reward from list.',
    reward: [getRewardById(3), getRewardById(4)],
  },
  {
    id: 4,
    title:
      'Tier 4 Rewards. You will get the current month reward (Pet, Mount or Wings).',
    reward: [
      getRewardById(5),
      getRewardById(6),
      getRewardById(7),
      getRewardById(8),
    ],
  },
  {
    id: 5,
    title: 'Tier 5 Rewards. You will get all rewards from list.',
    reward: [
      getRewardById(9),
      getRewardById(10),
      getRewardById(11),
      getRewardById(12),
    ],
  },
];
