const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "db05847b21msh1991065c74fc883p1759eajsn086d35208722",
    "X-RapidAPI-Host": "twitter-api45.p.rapidapi.com",
  },
};

export class API {
  constructor() {}

  async getUser(username) {
    try {
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username}`,
        options
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  //   diğer api istekleri
  /* hocanun haftaya kadar yapın dediği kısım */

  async getTweets(tweet) {
    try {
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com/timeline.php?screenname=elonmusk`,
        options
      );
      console.log(res);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
