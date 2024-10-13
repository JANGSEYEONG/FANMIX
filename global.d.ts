import ko from './messages/ko.json';

type Messages = typeof ko;

declare global {
  type IntlMessages = Messages;
}
