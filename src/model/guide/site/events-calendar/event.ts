import { EVENT_LIST } from './eventList';

export const getEventById = (id: number) => {
  const eventItem = EVENT_LIST.find((item: { id: number }) => item.id === id);
  return eventItem ? eventItem.items : ' Event not found';
};

export const EVENTS = [
  {
    id: 1,
    title: 'Sunday',
    events: [getEventById(7), getEventById(8), getEventById(9)],
  },
  {
    id: 2,
    title: 'Monday',
    events: [getEventById(2)],
  },
  {
    id: 3,
    title: 'Tuesday',
    events: [
      getEventById(1),
      getEventById(2),
      getEventById(3),
      getEventById(4),
    ],
  },
  {
    id: 4,
    title: 'Wednesday',
    events: [getEventById(2), getEventById(5), getEventById(6)],
  },
  {
    id: 5,
    title: 'Thursday',
    events: [getEventById(2), getEventById(3), getEventById(4)],
  },
  {
    id: 6,
    title: 'Friday',
    events: [getEventById(10)],
  },
  {
    id: 7,
    title: 'Saturday',
    events: [getEventById(2), getEventById(3), getEventById(4)],
  },
];
