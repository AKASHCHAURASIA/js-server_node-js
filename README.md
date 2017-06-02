# js-server_node-js
how to implement simple java server on windows using node-js
fistly you need to setup environment for nodejs.
Windows	download node-v6.3.1-x64.msi
Linux	download node-v6.3.1-linux-x86.tar.gz
Mac download	node-v6.3.1-darwin-x86.tar.gz
SunOS	download node-v6.3.1-sunos-x86.tar.gz
Installation on UNIX/Linux/Mac OS X, and SunOS
Based on your OS architecture, download and extract the archive node-v6.3.1-osname.tar.gz into /tmp, and then finally move extracted files into /usr/local/nodejs directory. For example:

$ cd /tmp
$ wget http://nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.gz
$ tar xvfz node-v6.3.1-linux-x64.tar.gz
$ mkdir -p /usr/local/nodejs
$ mv node-v6.3.1-linux-x64/* /usr/local/nodejs
Add /usr/local/nodejs/bin to the PATH environment variable.

OS	Output
Linux	export PATH=$PATH:/usr/local/nodejs/bin
Mac	export PATH=$PATH:/usr/local/nodejs/bin
FreeBSD	export PATH=$PATH:/usr/local/nodejs/bin
Installation on Windows
Use the MSI file and follow the prompts to install the Node.js. By default, the installer uses the Node.js distribution in C:\Program Files\nodejs. The installer should set the C:\Program Files\nodejs\bin directory in window's PATH environment variable. Restart any open command prompts for the change to take effect.

Verify installation: Executing a File
Create a js file named main.js on your machine (Windows or Linux) having the following code.

/* Hello, World! program in node.js */
console.log("Hello, World!")
Now execute main.js file using Node.js interpreter to see the result:

$ node main.js
If everything is fine with your installation, this should produce the following result:

Hello, World!
now you create server according to requirment.
