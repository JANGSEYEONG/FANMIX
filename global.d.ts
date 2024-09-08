import ko from './messages/en.json';

type Messages = typeof ko;

declare global {
  type IntlMessages = Messages;
}
