import * as React from "react"

interface Props {
  onChange: (value: string) => void
  value: string
}

const SearchField = ({ onChange, value }: Props) => {
  return (
    <div className="select-widget-search-filter">
      <span className="search-filter-label">Поиск</span>
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        value={value}
      />
    </div>
  )
}

export default SearchField
