import { IHitsEntity } from "./types";
const baseUrl = `https://places-dsn.algolia.net/1/places/query`;

export const fetchCities = async (search: string) => {
  const res = await (
    await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        query: search,
        type: 'city',
        language: 'en',
      }),
    })
  ).json();

  return CreateListOfMatches(res);
};

function CreateListOfMatches(res: any) {
  const result: string[] = [];
  const updateDropdown = (i: IHitsEntity) => {
    let administrative: string = '';
    let localNames: string = '';
    if (Array.isArray(i.administrative)) { administrative = i.administrative[0]; }
    if (Array.isArray(i.locale_names)) { localNames = i.locale_names[0]; }
    result.push(`${localNames}, ${administrative}`);
  };
  res.hits.forEach(updateDropdown);

  return result;
}

