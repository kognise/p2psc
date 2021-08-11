> 🚩 **This project is archived!** 🚩
> 
> *This was never that great of an idea for a project, and has been superseded by [Crypticat](https://github.com/kognise/crypticat).*

[![P2PSC Logo](https://raw.githubusercontent.com/arch-lord/p2psc/master/assets/logo-long.png)](https://p2psc.js.org/)

[![NPM Badge](https://img.shields.io/npm/v/p2psc.svg?style=for-the-badge)](https://npm.im/p2psc)
[![MIT License](https://img.shields.io/github/license/arch-lord/p2psc.svg?logo=license&style=for-the-badge)](https://github.com/arch-lord/p2psc/blob/master/LICENSE.md)

*Point to point secure chat*

**It's better on our website!** We recommend going to [our website](https://p2psc.js.org/) instead of reading the below content. It's meant to be clearer and also looks better.

## About

P2PSC is a simple command-line chat application that's based on sockets, and most importantly, **doesn't rely on a main server or backend**.

Chats are created by "peering" with other users. They must give you an IP address and port to connect to, and then all messages will be sent over a socket.

## Quick Start

A guide to quickly creating a chat between two people not on the same network.

Both of you:

- Install P2PSC with `yarn global add p2psc` or `npm install -g p2psc`
- Download and set up [Ngrok](https://ngrok.com/download)
- Run `p2psc ngrok 1337`
- Run `ngrok http 1337` in a seperate terminal
- Enter the url that Ngrok gave you (without the `https://`) into P2PSC

One of you:

- Get the other's peer string; it should look something like `/peer a5506f69.ngrok.io:80`
- Send it in chat

## Installation

To download P2PSC the normal way from Node, just run one of the below commands depending on your preferred package manager.

- Yarn: `yarn global add p2psc`
- NPM: `npm install -g p2psc`

If you want to download a compiled executable which could be useful if you're going to a summer camp and want to give others copies of the app to chat with one another across campus under the nose of the faculty and staff *(seems oddly specific, doesn't it?)*, you can download it for various platforms from one of the below links:

- [Windows](https://github.com/kognise/p2psc/raw/master/dist/p2psc-win.exe)
- [macOS](https://github.com/kognise/p2psc/raw/master/dist/p2psc-macos)
- [Linux](https://github.com/kognise/p2psc/raw/master/dist/p2psc-linux)

## Usage

Just run `p2psc` and enter your hostname to start P2PSC. This hostname is what others will be able to use to connect to you.

To peer with someone else, just send `/peer HOST:PORT` in chat.

## FAQs

**Does it support group chats?**  
Yep! Just peer to multiple people and it'll work fine.

**How secure *is* it?**  
Well, nothing is encrypted. But by default, it's only exposed to people on your local network and other people need both your IP and the port P2PSC is running on. To expose it to the public you'd need a service such as Ngrok, see the next question.

**Can I use it with Ngrok to chat with other people across the web?**  
Why, yes! Just run P2PSC like this instead `p2psc ngrok SOME_PORT`, and then run `ngrok http SOME_PORT`. Then, in P2PSC when it asks for a host enter the url Ngrok gave you (without the `https://`).

**How does P2PSC choose ports? Can I choose my own?**  
P2PSC will find an available port with an amazing NPM package called [`portfinder`](https://www.npmjs.com/package/portfinder). And yes, you *can* choose your own! Just run `p2psc SOME_PORT`.
