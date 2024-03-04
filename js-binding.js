const { existsSync } = require('fs');
let pathToRequire = global.GLOBAL_NATIVE_BINDING_PATH;

if (!existsSync(pathToRequire)) throw new Error(`File ${pathToRequire} does not exist.`);

let nativeBinding = require(pathToRequire);
const {
  ChromaSubsampling,
  SvgExportFlag,
  CanvasRenderingContext2D,
  CanvasGradient,
  ImageData,
  Image,
  PathOp,
  FillType,
  StrokeCap,
  StrokeJoin,
  Path,
  CanvasPattern,
  convertSVGTextToPath,
  CanvasElement,
  SVGCanvas,
  clearAllCache,
  GlobalFonts,
} = nativeBinding

module.exports.ChromaSubsampling = ChromaSubsampling
module.exports.SvgExportFlag = SvgExportFlag
module.exports.CanvasRenderingContext2D = CanvasRenderingContext2D
module.exports.CanvasGradient = CanvasGradient
module.exports.ImageData = ImageData
module.exports.Image = Image
module.exports.PathOp = PathOp
module.exports.FillType = FillType
module.exports.StrokeCap = StrokeCap
module.exports.StrokeJoin = StrokeJoin
module.exports.Path = Path
module.exports.CanvasPattern = CanvasPattern
module.exports.convertSVGTextToPath = convertSVGTextToPath
module.exports.CanvasElement = CanvasElement
module.exports.SVGCanvas = SVGCanvas
module.exports.clearAllCache = clearAllCache
module.exports.GlobalFonts = GlobalFonts
