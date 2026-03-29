/**
 * Mock Inbox Data
 * 
 * This is temporary mock data for development.
 * TODO: Replace with API calls to backend once integration ready
 * 
 * Data Structure:
 * - inboxThreads: Array of conversation threads
 * - inboxMessages: Map of thread IDs to message arrays
 * - quickReplies: Suggested quick reply messages
 * 
 * Usage:
 *   import { inboxThreads, inboxMessages, quickReplies } from '@/data/mock/inbox';
 */

export const inboxThreads = [
  {
    id: 'thread-1',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: true,
  },
  {
    id: 'thread-2',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: true,
  },
  {
    id: 'thread-3',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: false,
  },
  {
    id: 'thread-4',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: true,
  },
  {
    id: 'thread-5',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: false,
  },
  {
    id: 'thread-6',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: true,
  },
  {
    id: 'thread-7',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: false,
  },
  {
    id: 'thread-8',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: true,
  },
  {
    id: 'thread-9',
    name: 'Guava Finance',
    verified: true,
    preview: "Hey, i saw your profile and i'm interested...",
    time: '2h',
    unread: false,
  },
];

export const inboxMessages = {
  'thread-1': [
    {
      id: 'm1',
      direction: 'in',
      text:
        "Hey, i saw your profile and i'm interested which time would you be available for a call?",
      time: '5:23 PM',
    },
    {
      id: 'm2',
      direction: 'out',
      text: 'Okay that would be great!',
      time: '5:25 PM',
    },
    {
      id: 'm3',
      direction: 'out',
      text: 'I would be available tomorrow by 5:30pm',
      time: '5:25 PM',
    },
    {
      id: 'm4',
      direction: 'in',
      text:
        "Hey, i saw your profile and i'm interested which time would you be available for a call?",
      time: '5:23 PM',
    },
    {
      id: 'm5',
      direction: 'in',
      text:
        "Hey, i saw your profile and i'm interested which time would you be available for a call?",
      time: '5:23 PM',
    },
    {
      id: 'm6',
      direction: 'out',
      text:
        "Hey, i saw your profile and i'm interested which time would you be available for a call?",
      time: '5:23 PM',
    },
    {
      id: 'm7',
      direction: 'in',
      text:
        "Hey, i saw your profile and i'm interested which time would you be available for a call?",
      time: '5:23 PM',
    },
    {
      id: 'm8',
      direction: 'out',
      text:
        "Hey, i saw your profile and i'm interested which time would you be available for a call?",
      time: '5:23 PM',
    },
  ],
};

export const quickReplies = [
  'Alright, i would be available for a quick call',
  'Okay, that would be great!',
];
