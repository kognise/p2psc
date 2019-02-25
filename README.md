# P2PSC

*Point to point secure chat*

## About

P2PSC is a simple command-line chat application that's based on sockets, and most importantly, **doesn't rely on a main server or backend**.

Chats are created by "peering" with other users. They must give you an IP address and port to connect to, and then all messages will be sent over a socket.

## Installation

To download P2PSC the normal way from Node, just run one of the below commands depending on your preferred package manager.

- Yarn: `yarn global add p2psc`
- NPM: `npm install -g p2psc`

If you want to download a compiled executable which could be useful if you're going to a summer camp and want to give others copies of the app to chat with one another across campus under the nose of the faculty and staff *(seems oddly specific, doesn't it?)*, you can download it for your platform from one of the below links:

- Windows
- macOS
- Linux

## Usage

Just run `p2psc` and enter your hostname to start P2PSC. This hostname is what others will be able to use to connect to you.

To peer with someone else, just send `/peer HOST:PORT` in chat.