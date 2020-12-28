import {Message} from '../core/types/message.interface';

export class MockMessageData {
  public messages: Message[] = [
    { id: 0, uuid: '', message: 'Happy New Year!', videoId: 'XqZsoesa55w'},
    { id: 1, uuid: '', message: 'Happy New Year! second', videoId: 'XqZsoesa55w'},
    { id: 2, uuid: '', message: 'Happy New Year! second 🤣', videoId: 'XqZsoesa55w'},
  ];
}
