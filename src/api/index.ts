const params = {
  id: "2",
  lat: "45.64",
  limit: "25",
  lon: "25.60",
  // "q-city_cont": "Denver",
  // "q-country_cont": "Australia",
  // "q-state_cont": "California",
  radius: "25",
  // "q-activities_activity_type_name_eq": "hiking",
};

const headers = {
  "x-rapidapi-key": "174ef2cf8cmsh3f753829cdd7a68p1580a7jsnc7353bbe8556",
  "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
};

export const getTrailsData = async () => {
  const url = new URL("https://trailapi-trailapi.p.rapidapi.com/trails/2/maps");
  url.search = new URLSearchParams(params).toString();

  try {
    const res = await fetch(url, { headers });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
