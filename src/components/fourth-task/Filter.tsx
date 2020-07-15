import * as React from "react"

interface Props {
  onChange: (value: string) => void
}

const Filter = ({ onChange }: Props) => {
  return (
    <div className="select-widget-search-filter">
      <span className="search-filter-label">Фильтр</span>
      <select
        onChange={(event: React.FormEvent<HTMLSelectElement>) =>
          onChange(event.target.value)
        }
      >
        <option value={0}>Без фильтра</option>
        <option value={10}>Номер > 10</option>
        <option value={100}>Номер > 100</option>
        <option value={200}>Номер > 200</option>
      </select>
    </div>
  )
}

export default Filter
