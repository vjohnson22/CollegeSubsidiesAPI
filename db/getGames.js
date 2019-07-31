const axios = require('axios')
const fs = require('fs')


// let baseURL = `https://api-v3.igdb.com/games`
// let peopleCount = 10000
const tokenStr = 'ca858f6fe859dda26c94bb6704aa36d3'

let jsonFile 
// Make a request for a user with a given ID
axios.post(`https://api-v3.igdb.com/games`, 
	{ headers: {"user-key" : tokenStr}} 
).then(file => {
    // handle success
	jsonFile = response.json(file)
	console.log(file)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
//   .finally(function () {
//     // always executed
//   });




















// // update this with user key and code to pull data correctly

// let ids = []

// // build array of random ids
// for(let i = 0; i < peopleCount; i++) {
// 	let rand = Math.floor(Math.random() * 10000)
// 	ids.push(rand)
// }

// // build 20 urls to make calls to, and return array of promises with those urls
// let calls = ids.map(id => `${baseURL}${id}`)
// .map(url => axios.get(url))

// // execute all promises, writing to disk if successful
// Promise.all(calls)
// .then(success => {
// 	let collectedData = success.map(res => res.data)
// 	let stringified = JSON.stringify(collectedData)
// 	fs.writeFile(__dirname + '/people.json', stringified, 'utf8', (err) => {
// 		if(err) {
// 			console.error(err)
// 		}
// 		else {
// 			console.log(`successfully wrote ${collectedData.length} records to db/people.json`)
// 		}
// 	}) 
// })
// .catch(err => {
// 	console.error(err)
// 	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
// })



