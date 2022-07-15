import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import input from 'input';
async function TelegramAPI() {
  // Telegram API credential
  const STRING_SESSION = '';
  const API_ID = 
  const API_HASH = '';
  const session = new StringSession(STRING_SESSION);
  const client = new TelegramClient(session, API_ID, API_HASH, {});
  await client.start({
    phoneNumber: async () => await input.text('Please enter your number: '),
    password: async () => await input.text('Please enter your password: '),
    phoneCode: async () =>
      await input.text('Please enter the code you received: '),
    onError: (err) => console.log(err),
  });
  console.log('You should now be connected.');
  console.log('string session =====');
  console.log(client.session.save());
}

TelegramAPI();
