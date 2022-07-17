module.exports = {
    token: process.env.TOKEN || "OTIyNDI3Nzc2NjkzMzA1MzU0.YcBTzw.740XzoMalRdcoUraa-Az6OUd1xQ",  // your bot token
    prefix: process.env.PREFIX || "_", // bot prefix
    ownerID: process.env.OWNERID || "902883391421153290", //your discord id
    SpotifyID: process.env.SPOTIFYID || "bf5ee2a72bae40ffadc71a47280e5ff9", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "053469ffeb3844079fab734ebf3090c2", // spotify client secret
    mongourl: process.env.MONGO_URI || "mongodb+srv://database3:qDYXLeUZe1wlxui6@cluster0.sbig2.mongodb.net/", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "921771782225158145", // channel id for guild create and delete logs 

  nodes: {
     
      host: "disbotlistlavalink.ml",
      port: 443,
      password: "LAVA",
      id: "DisBotlist Lavalink",
      retryDelay: 3000,
      secure: true
    
    },
 
}
