export default async function Fetcher(
  endpoint,
  jsonData,
  BASE_URL = 'http://localhost:5000'
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

    // checking if response is JSON
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return res.json();
    }else{
      return res.text();
    }
  } catch (error) {
    throw Error('SOMETHING WENT WRONG');
  }
}
