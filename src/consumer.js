import dotenv from 'dotenv';
import amqp from 'amqplib';
import PlaylistSongService from './PlaylistSongService.js';
import MailSender from './MailSender.js';
import Listener from './Listener.js';

dotenv.config();

const init = async () => {
  const playlistSongService = new PlaylistSongService();
  const mailSender = new MailSender();
  const listener = new Listener(playlistSongService, mailSender);

  const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
  const channel = await connection.createChannel();

  await channel.assertQueue('export:playlist', {
    durable: true,
  });

  channel.consume('export:playlist', listener.listen, { noAck: true });
};

init();
