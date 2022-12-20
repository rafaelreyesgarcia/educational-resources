import * as secp from 'ethereum-cryptography/secp256k1.js';
import { toHex, utf8ToBytes } from 'ethereum-cryptography/utils.js';

const privateKey = '3194a24e6587dcdaf50db239031791b073766cb299c1c35b6f606e72f08046d1';

console.log(utf8ToBytes(privateKey));

console.log(secp.getPublicKey(privateKey));