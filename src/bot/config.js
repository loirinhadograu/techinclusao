import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';

const config = {
  initialMessages: [createChatBotMessage(`seja bem vindo(a) ao tik tok,aqui o entreterimento e garatido!`, {
    widget: "startBtn"
  })],
  botName: "chat bot tik tok",
  customComponents: {
    botAvatar: (props) => <Avatar { ... props}/>
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "startSlow",
      widgetFunc: (props) => <StartSlow {...props} />,
    },
  ]
};

export default config;