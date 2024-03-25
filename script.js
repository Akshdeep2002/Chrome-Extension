async function getMatchData() {
  //fetching cricket information from cricketdata.org
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      //add your api key from cricketdata.org
      const relevantData = matchesList
        .filter(
          (match) => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc"
        )
        .map(
          (match) =>
            `${match.name}, ${match.status}, ${match.t1}, ${match.t2}, ${match.t1s}, ${match.t2s}`
        );

      console.log({ relevantData });

      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match} </li>`)
        .join("");

      return relevantData;
    })
    .catch((e) => console.log(e));
}

getMatchData();
