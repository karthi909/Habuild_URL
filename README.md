# Habuild_URL

## PS2: URL SHORTNER

### Tech Stack
  1) MongoDB
  2) ExpressJs
  3) MongoDB
  
### Packages used 
  1) nanoId
  2) redis
  
### Database collections
  1) URL collection
```yaml
  {
    urlCode:{
        type: String,
        required: true, 
        unique: true, 
        lowercase:true, 
        trim:true
    },
    longUrl: { 
        type: String, 
        required: true
    },  
    shortUrl: { 
        type: String, 
        required: true,
        unique:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
  },{timestamps: true}
```

## Features

  1) We are making a URL shortner where users will give long URL and in response we give ShortURl that will redirect to the required longURl
  2) Hear we used Redis for cacheing the data, so that the redirecting and page response can be fast and with minimal time period where comapred to retriving from the DataBase.
  3) Hear each short URL will be unique, for that we used nanoid of 12chareters so that we cna achive a Trillion combinations from it
  4) we also integrated method as mentioned so that we cna reuse a shortURL with diffrent longURL to. 
  5) if a user try to short a smae short url which is previously shortend then it will give the previous data By this we can achive using less data.
  6) In this we had given expiry limit of redis data for 30sec you can increase if we want.

## Routes 

- POST _ ('/url/shorten')
  1) This method will create a shorturl for the longURL. before creating it will check weather the giving shortURL is already created or not if it it created it will give details of that short URL. or else it will create the new one. 
  2) Every time we crearte the short URL we will update to the redis cache memory so that the latency of the speed will increase and number of DB calls also Decreased.
  
- GET _ ('/:urlCode')
  1) This will be used to redirect the short URL to the longURL that is in the dataBase. 
  2) when ever the user try to access the short URL it will first find in the redis DB if it's there it will get the data from it by avoiding the main DB calls.
  3) The other reasin to use redis is it will give faster response than compare to the main DB responce

- PUT _ ('/urlUpdate/:urlid')
  1) This method will update the deleted and existing url by changeing there longURL destination by this we can achive low data usage and also reuse the old short URL to .
  
- DELETE _ ('/url/:urlid')
  1) This Method is used to delete the certain shortURL so that it can't be used. or expired.

  
  
