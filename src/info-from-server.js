/* eslint-disable */

import dashboard from './images/nav/dashboard.png';
import apps from './images/nav/apps.png';
import components from './images/nav/components.png';
import layout from './images/nav/layout.png';
import forms from './images/nav/forms.png';
import charts from './images/nav/charts.png';
import tables from './images/nav/tables.png';
import calendar from './images/nav/calendar.png';
import maps from './images/nav/maps.png';

import newMessage1 from './images/new-messages/newMessage1.png';
import newMessage2 from './images/new-messages/newMessage2.png';
import newMessage3 from './images/new-messages/newMessage3.png';
import newMessage4 from './images/new-messages/newMessage4.png';

import chatLine1 from './images/chat-line/chat-line-1.png';
import chatLine2 from './images/chat-line/chat-line-2.png';
import chatLine3 from './images/chat-line/chat-line-3.png';
import chatLine4 from './images/chat-line/chat-line-4.png';
import chatLine5 from './images/chat-line/chat-line-5.png';



export const navs = [
  {
    id: 'nav-1',
    title: 'Dashboard',
    img: dashboard,
    links: [],
  },
  {
    id: 'nav-2',
    title: 'Apps',
    img: apps,
    links: ['Mailbox', 'Search', 'To do List'],
  },
  {
    id: 'nav-3',
    title: 'Components',
    img: components,
    links: [],
  },
  {
    id: 'nav-4',
    title: 'Layout',
    img: layout,
    links: [],
  },
  {
    id: 'nav-5',
    title: 'Forms',
    img: forms,
    links: [],
  },
  {
    id: 'nav-6',
    title: 'Charts',
    img: charts,
    links: [],
  },
  {
    id: 'nav-7',
    title: 'Tables',
    img: tables,
    links: [],
  },
  {
    id: 'nav-8',
    title: 'Calendar',
    img: calendar,
    links: [],
  },
  {
    id: 'nav-9',
    title: 'Maps',
    img: maps,
    links: [],
  },
];

export const newMrssages = [
  {
    id: 'newMessage1',
    name: 'Johna Partel',
    lastOnline: '2 hours ago',
    img: newMessage1,
  },
  {
    id: 'newMessage2',
    name: 'John Partel',
    lastOnline: '2 hours ago',
    img: newMessage2,
  },
  {
    id: 'newMessage3',
    name: 'Ivan Partel',
    lastOnline: '4 hours ago',
    img: newMessage3,
  },
  {
    id: 'newMessage4',
    name: 'Andre Boyarskiy',
    lastOnline: '3 hours ago',
    img: newMessage4,
  },
];

export const chatLine = [
  {
    id: 'chatLine1',
    name: 'John Partel',
    message: 'Call Me Later..?',
    img: chatLine1,
    online: false,
  },
  {
    id: 'chatLine2',
    name: 'John Partel',
    message: 'Hello! bro..',
    img: chatLine2,
    online: true,
  },
  {
    id: 'chatLine3',
    name: 'John Partel',
    message: 'Can you help me?',
    img: chatLine3,
    online: true,
  },
  {
    id: 'chatLine4',
    name: 'John Partel',
    message: 'What?',
    img: chatLine4,
    online: false,
  },
  {
    id: 'chatLine5',
    name: 'Jony Partel',
    message: 'Hello!',
    img: chatLine5,
    online: true,
  }
];

export const events = [
  {
    title: 'be reviews meetup',
    number: 29,
    color: 'red',
  },
  {
    title: 'Google meetup',
    number: 25,
    color: 'green',
  },
];