import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  /*  if (!country) {
    return null; // or handle the case when country is undefined
  } */
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
