import React from 'react';
import { CryptoCurrencyWidgetSearchBarProps } from 'interfaces';
import styles from './CryptoCurrencyWidgetSearchBar.module.scss';

export const CryptoCurrencyWidgetSearchBar: React.FC<CryptoCurrencyWidgetSearchBarProps> = ({ onChange }) => {
  return (
    <div className={styles.coinSearch}>
      <h1 className={styles.coinText}>Search a currency</h1>
      <form>
        <input
          className={styles.coinInput}
          type="text"
          placeholder="Search"
          onChange={onChange} />
      </form>
    </div>
  );

};
