import { SqipPlugin } from 'sqip-tt'
import svgToMiniDataURI from 'mini-svg-data-uri'

export default class DataUriPlugin extends SqipPlugin {
  encodeBase64(rawSVGBuffer) {
    const base64 = rawSVGBuffer.toString('base64')
    return `data:image/svg+xml;base64,${base64}`
  }

  apply(imageBuffer) {
    this.metadata.dataURI = svgToMiniDataURI(imageBuffer.toString())
    this.metadata.dataURIBase64 = this.encodeBase64(imageBuffer)
    return imageBuffer
  }
}
