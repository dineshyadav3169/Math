export default async function Fetcher(
  endpoint,
  jsonData,
  BASE_URL = 'http://localhost:3000'
) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(jsonData)
  };

  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);
    return res.json();
  } catch (error) {
    throw Error('SOMETHING WENT WRONG');
  }
}
