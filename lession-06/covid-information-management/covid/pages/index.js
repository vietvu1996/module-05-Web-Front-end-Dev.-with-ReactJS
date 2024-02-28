import styles from "@/styles/Home.module.css";
import axios from "axios";

export async function getStaticProps() {
  const respone = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=39c170ea2faa55a3196f9ac535873360"
  );

  const data = respone.data;
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <h1>Vietnam's COVID-19 Information: {data.weather[0].main}</h1>
    </div>
  );
}
