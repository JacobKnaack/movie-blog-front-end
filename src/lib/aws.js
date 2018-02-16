const AWS = require('aws-sdk')
const s3 = new AWS.S3()

export const requestMovieImage = (imageName) => {
  s3.getSignedUrl('getObject', {
    Bucket: 'sick-flick-nit-pickers',
    Key: imageName,
  }, function (err, url){
    if (err) {
      console.error(err)
      return err
    } else {
      console.log(url)
      return url
    }
  })
}