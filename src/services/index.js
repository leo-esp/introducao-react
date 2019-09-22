import Marvel from 'marvel';
const api_key = "e606860805dd66cb5790ed0234154103"
const private_key = "9c343f891e9ffc33dd22c5f4454c5d39c6456d3a"
var api = new Marvel({ publicKey: api_key, privateKey: private_key })

export function getCharacters() {
  api.characters.get((err, res) => {
    if (err) { throw err }
    return res.data.results;
  })

}