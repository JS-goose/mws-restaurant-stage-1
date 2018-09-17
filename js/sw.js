if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    .then( (reg)=> {
        console.log(`Success, service worker registered: ${reg}`);
    })
    .catch( (err)=> {
        console.log(`There was an error: ${err}`);
    });
}

console.log("bacon")