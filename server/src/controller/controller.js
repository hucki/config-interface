const Configuration = require('../models/configuration');

exports.getDefaultTools = async(req, res) => {
  // TODO: save default tools in DB
  const defaultTools = ['Tool.TRIM', 'Tool.TRANSFORM', 'Tool.FILTER', 'Tool.ADJUSTMENT', 'Tool.FOCUS', 'Tool.STICKER', 'Tool.TEXT', 'Tool.TEXT_DESIGN', 'Tool.OVERLAY', 'Tool.FRAME', 'Tool.BRUSH']
  res.status(200);
  res.send(defaultTools)
}

exports.saveConfig = async(req, res) => {
  try {
    const configuration = await Configuration.create({
      tools: req.body.tools,
      enableZoom: req.body.enableZoom
    });
    res.status(201);
    res.send(configuration);
  } catch (error) {
    // TODO: internally log error
    res.status(500);
    res.send('internal server Error')
  }
}