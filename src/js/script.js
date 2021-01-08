const qs = el => document.querySelector(el);

const accessToken = '837b5ca43ca6f4fd53aba386c0518f3255806e2d'
const url = `https://www.strava.com/api/v3/athletes/17552785/stats?access_token=${accessToken}`;

const distanceInKM = metres => metres/1000;

async function stravaData() {
    let response = await fetch(url);

    if (response.ok) {
      let json = await response.json();

      const ytdInKM = distanceInKM(json.ytd_run_totals.distance).toFixed(2);
      const recentInKM = distanceInKM(json.recent_run_totals.distance).toFixed(2);

      qs('.ytd-distance').innerHTML = `${ytdInKM}km`;
      qs('.recent-distance').innerHTML = `${recentInKM}km`;

    } else {
        qs('.wrapper').innerHTML = `<p>Oh no! Could not load data...</p>`;
        console.log("HTTP-Error: " + response.status);
    }
}

stravaData();
