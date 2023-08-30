import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios(`${apiUrl}/cities`)
      .then((res) => setCities(res.data.response))
      .catch((err) => console.log(err));
    console.log(cities);
  }, []);

  return <div>Cities</div>;
}
