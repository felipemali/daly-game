export async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );

    return res.json();
  } catch (err) {
    return null;
  }
}
