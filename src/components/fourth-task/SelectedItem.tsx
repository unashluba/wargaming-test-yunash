import * as React from "react"

interface Props {
  item: string
  onClick: () => void
}

const SelectedItem = ({ item, onClick }: Props) => {
  return (
    <span key={item} className="select-selected-copy">
      {item}
      <span className="select-remove-selected-icon" onClick={onClick}>
        x
      </span>
    </span>
  )
}

export default SelectedItem
