import * as React from "react"
import Checkbox from "./Checkbox"

interface Props {
  listItems: string[]
  checkboxState: boolean[]
  handleCheckboxChange: (index: number) => void
  searchValue: string
  filterValue: number
}

const CheckboxesList = ({
  listItems,
  checkboxState,
  handleCheckboxChange,
  searchValue,
  filterValue,
}: Props) => {
  const moreThanThree = checkboxState.filter(item => item).length >= 3

  return (
    <div className="select-list">
      {listItems.map((item, index) => {
        return (
          <div
            className="select-list-item"
            key={`${item}-${checkboxState[index]}`}
          >
            <Checkbox
              item={item}
              index={index}
              isChecked={checkboxState[index]}
              isDisabled={!checkboxState[index] && moreThanThree}
              handleCheckboxChange={() => handleCheckboxChange(index)}
              className={
                (!item.toLowerCase().includes(searchValue.toLowerCase()) &&
                  searchValue) ||
                index < filterValue
                  ? "hide"
                  : "show"
              }
            />
          </div>
        )
      })}
    </div>
  )
}

export default CheckboxesList
