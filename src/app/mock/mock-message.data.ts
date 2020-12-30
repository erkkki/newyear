import {Message} from '../core/types/message.interface';

export class MockMessageData {
  public messages: Message[] = [
    { uuid: '', message: 'Happy New Year!', videoId: 'XqZsoesa55w'},
    { uuid: '', message: 'Happy New Year! second', videoId: 'XqZsoesa55w'},
    { uuid: '', message: 'Happy New Year! second 🤣', videoId: 'XqZsoesa55w'},
  ];
}
