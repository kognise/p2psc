# P2PSC

*Point to point secure chat*

## About

P2PSC is a simple command-line chat application that's based on sockets, and most importantly, **doesn't rely on a main server or backend**.

Chats are created by "peering" with other users. They must give you an IP address and port to connect to, and then all messages will be sent over a socket.

## Usage

Just run `p2psc` and enter your hostname to start P2PSC. This hostname is what others will be able to use to connect to you.

To peer with someone else, just send `/peer HOST:PORT` in chat.