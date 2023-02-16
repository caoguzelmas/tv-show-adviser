import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      console.log(e.target.value);
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search for a TV Show"
      />
    </>
  );
}
