import * as React from "react"

interface Props {
  item: string
  index: number
  isChecked?: boolean
  isDisabled?: boolean
  handleCheckboxChange?: () => void
  className?: string
}

const Checkbox = ({
  item,
  index,
  isChecked,
  isDisabled,
  handleCheckboxChange,
  className,
}: Props) => {
  return (
    <div className={`select-checkbox ${className}`}>
      <input
        type="checkbox"
        id={`select-list-item-${index}`}
        value={item}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={`select-list-item-${index}`}>{item}</label>
    </div>
  )
}

export default Checkbox
