# 2ACoin-Blockchain-Explorer
Block explorer for 2ACoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon 2ACoind. It should be accessible from the Internet. Run 2ACcoind with open port as follows:
```bash
./2ACoind --enable-cors="*" --enable_blockexplorer --rpc-bind-ip=0.0.0.0
```  
2) Just upload the contents of this git to your website and change 'api' variable in config.js to point to your daemon.


### Thanks and Acknowledgements

Much of this code is derived from;


-  the TurtleCoin/TurtleCoin-Blockchain-Explorer
-  the Karbovanets/Karbowanec-Blockchain-Explorer


### Licensed ###

Released under the GNU General Public License v2

[http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)