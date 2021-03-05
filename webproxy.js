import https from 'https';

async function fetchData(){
  return new Promise ((resolve, reject) => {
    let req = https.get("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");
    req.on('response', res => {
      resolve(res);
    });

    req.on('error', err => {
      reject(err);
    });
  }); 
};

export { fetchData as fetchData };