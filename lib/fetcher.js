export default async function Fetcher(slug, jsonData) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ ...jsonData, hasError: false })
  };

  try {
    const res = await fetch(`/api/${slug}`, requestOptions);
    return res.json();
  } catch (error) {
    return { hasError: true };
  }
}
