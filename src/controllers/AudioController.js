const fs = require('fs');

exports.addAudio = async (req, res) => {
  try{
    console.log(req);
    const { _id } = req.params._id;
    res.setHeader('Content-Type', 'audio/mpeg');
    const file = fs.createReadStream("./src/canciones/Earth Wind & Fire - Boogie Wonderland.mp3");
    file.pipe(res);
  }
  catch(err){
    console.log(err);
  }
}
