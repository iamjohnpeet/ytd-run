const qs = el => document.querySelector(el);

const accessToken = '06fe0b00ac6146beda97caa9f0ceda382ad27a85'
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
