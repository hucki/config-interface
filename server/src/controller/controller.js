exports.getDefaultTools = async(req, res) => {
  // TODO: save default tools in DB
  const defaultTools = ['Tool.TRIM', 'Tool.TRANSFORM', 'Tool.FILTER', 'Tool.ADJUSTMENT', 'Tool.FOCUS', 'Tool.STICKER', 'Tool.TEXT', 'Tool.TEXT_DESIGN', 'Tool.OVERLAY', 'Tool.FRAME', 'Tool.BRUSH']
  res.status(200);
  res.send(defaultTools)
}