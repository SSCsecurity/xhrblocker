const blocklist = [
  "https://api.ipify.org/*",
  "https://api.coindesk.com/v1/bpi/*"
]

window.onload = function() {
  for (let item of blocklist) {
    document.getElementById('blocklist').innerHTML += item + "<br>"
  }
}


xhook.before(function(request, callback) {
  console.log("Checking if " + request.url + " is on the Riscosity block list...");
  const accessedURL = new URL(request.url)
  let shouldBlock = false;
  let blockReason = ""
  for (item of blocklist) {
      // Turn '*' into '.*' and add a '$' so the blocklist items will work as regexes. 
      const urlRegex = new RegExp(item.replace("*", ".*")+"$")
      if (urlRegex.test(accessedURL.origin+accessedURL.pathname)) {
        shouldBlock = true;
        blockReason = item;
        break;
      }
  }

  if (shouldBlock) {
    setTimeout(function() {
      callback({
        status: 401,
        text: 'Blocked by Riscosity. <br>Matched blocked site: ' + blockReason,
      });
    }, 500);
  }
  else {
    // Return an empty callback so that the request continues unchanged. 
    callback();
  }
});


