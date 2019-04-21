import { AboutModel } from './models/about.model';
import { DataKey } from './models/data-key.type';

export const aboutData: AboutModel[] = [
  {
    'key': DataKey.up,
    'content': 'This area will help you listen to God, experience worship, lead a vibrant prayer life, and move towards thankfulness.'
  },
  {
    'key': DataKey.in,
    'content': 'This area will help you engage with the Bible, participate in Christ-centered community, and understand and utilize your spiritual gifts.'
  },
  {
    'key': DataKey.out,
    'content': 'This area will help you learn to offer hospitality, care for others, and share about the work of God in your life with people who don’t yet know Christ.'
  }
];
