#RuNo bridge usage example

Generating boilerplate C++ code to call Rust from NodeJS.

WIP. Still very raw prototype.

Rust bridge: https://github.com/andruhon/runo-bridge

##non NPM dependencies

You should install following dependencies by yourself:

* Rust and Cargo (compatible with your NodeJS)
* C++ compiler (see [node-gyp installation instructions](https://github.com/nodejs/node-gyp))

##important
This runo-bridge itself does not need Rust or C++ with node-gyp, it just emits a C++ source file.

However in order to build this source code, your rust and C++ compiler should be compatible with your NodeJS. It is **particularly important on Windows**, where Rust target should be MSVC not GNU, unless you building your NodeJS for Windows from source with GCC. For example, if one using **32 bit** NodeJS on Windows this one should use target `i686-pc-windows-msvc`, if **64 bit** Node then Rust should be configured with `x86_64-pc-windows-msvc` compile target. The same about C++: Everything is mostrly smooth on platforms with GCC, and a bit painful with MS Visual C++, please refer to [node-gyp installation instructions](https://github.com/nodejs/node-gyp) for details.

##Installation

  >git clone https://github.com/andruhon/runo-bridge-example

  >cd runo-bridge-example

  >npm install

##Building

  >npm run generate-addon

  >npm run build

Inspect that works:

  >node index.js

##Report a Bug
This example tested on Ubuntu 15, Windows 10 and OS X Yosemite. Please submit a bug if it does not work somewhere.
