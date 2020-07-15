import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import DeleteIcon from "../../images/DeleteIcon"

interface Props {
  searchContainerClass?: string
  buttonText?: string
}

const SearchTypeOne = ({
  searchContainerClass = "type-one",
  buttonText = "Найти",
}: Props) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />

  return (
    <form className={`search-container ${searchContainerClass}`}>
      <div className="search-input-wrapper">
        <span className="search-icon">{searchIcon}</span>
        <input className="search-input" type="text" required />
        <button className="search-button-reset" type="reset">
          <DeleteIcon />
        </button>
      </div>
      <button className="search-button">{buttonText}</button>
    </form>
  )
}

export default SearchTypeOne
