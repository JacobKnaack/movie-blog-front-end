// const AWS = require('aws-sdk')
// const s3 = new AWS.S3()
// AWS.config.update({
//   region: 'us-east-1',
//   credentials: {}
// })

export const formatPublicImageUrl = (imageName) => {
  let url = 'https://sick-flick-nit-pickers.s3.amazonaws.com/images/' + imageName
  return url
}