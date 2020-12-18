import { Message } from '../types/message.interface';

export class MockMessageData {
  public messages: Message[] = [
    { id: 0, message: 'Happy New Year!', video_id: 'XqZsoesa55w',},
    { id: 1, message: 'Happy New Year! second', video_id: 'XqZsoesa55w',},
    { id: 2, message: 'Happy New Year! second 🤣', video_id: 'XqZsoesa55w',},
  ];
}
