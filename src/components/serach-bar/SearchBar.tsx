import classes from './searchBar.module.css';

interface Iprops {
  keyword: string;
  updateInput: (input: string) => Promise<void>;
}

const SearchBar = ({ keyword, updateInput }: Iprops) => {
  return (
    <input
      className={classes.barStyling}
      key='random1'
      value={keyword}
      placeholder={'search image alt'}
      onChange={(e) => updateInput(e.target.value)}
    />
  );
};

export default SearchBar;
