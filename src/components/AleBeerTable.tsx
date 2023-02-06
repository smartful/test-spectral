import { Fragment, useEffect, useState } from "react";

export interface IAleBeer {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ALE_BEER_API_URL = "https://api.sampleapis.com/beers/ale";

const AleBeerTable: React.FC = () => {
  const [aleBeers, setAleBeers] = useState<IAleBeer[]>([]);

  useEffect(() => {
    const fetchAleBeer = async () => {
      const response = await fetch(ALE_BEER_API_URL);
      const data = await response.json();
      setAleBeers(data);
    };

    fetchAleBeer();
  }, []);

  return (
    <Fragment>
      <h1>Table des Bières Ale</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {aleBeers.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.name}</td>
              <td>{beer.price}</td>
              <td>
                <img src={beer.image} alt={beer.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default AleBeerTable;
