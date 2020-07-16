import * as React from "react"

interface Props {
  value: number
  onChange: (value: number) => void
}

const Filter = ({ onChange, value }: Props) => {
  return (
    <div className="select-widget-search-filter">
      <span className="search-filter-label">Фильтр</span>
      <select
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(Number(event.target.value))
        }
      >
        <option selected={value === 0} value={0}>
          Без фильтра
        </option>
        <option selected={value === 10} value={10}>
          Номер > 10
        </option>
        <option selected={value === 100} value={100}>
          Номер > 100
        </option>
        <option selected={value === 200} value={200}>
          Номер > 200
        </option>
      </select>
    </div>
  )
}

export default Filter
