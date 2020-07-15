import * as React from "react"
import Checkbox from "./Checkbox"
import CheckboxesList from "./CheckboxesList"
import SearchField from "./SearchField"
import Filter from "./Filter"
import SaveButton from "./SaveButton"

interface Props {
  listItems: string[]
  itemsStates: boolean[]
  onClose: (value: boolean) => void
  selected: string[]
  setSelected: () => void
}

const WidgetContainer = ({
  listItems,
  onClose,
  itemsStates,
  selected,
  setSelected,
}: Props) => {
  const [checkboxState, setCheckboxState] = React.useState(itemsStates)

  const handleCheckboxChange = (index: number) => {
    itemsStates[index] = !itemsStates[index]

    const newItemsStates = itemsStates.slice()

    setCheckboxState(newItemsStates)
  }

  const [searchValue, setSearchValue] = React.useState("")
  const [filterValue, setFilterValue] = React.useState(0)

  return (
    <div className="section select-widget">
      <h3 className="select-widget-title">Диалог выбора элементов</h3>

      <div className="select-widget-search-filter-container">
        <SearchField onChange={setSearchValue} value={searchValue} />
        <Filter onChange={setFilterValue} value={filterValue} />
      </div>

      <p className="select-close" onClick={() => onClose(false)}>
        X
      </p>

      <CheckboxesList
        listItems={listItems}
        checkboxState={checkboxState}
        handleCheckboxChange={handleCheckboxChange}
        searchValue={searchValue}
        filterValue={filterValue}
      />

      <div className="select-selected-container">
        <p className="select-selected-title">
          Выбранные элементы в данный момент:
        </p>
        {listItems.map((item, index) => {
          if (checkboxState[index]) {
            return (
              <div key={item} className="select-selected-item">
                <Checkbox
                  item={item}
                  handleCheckboxChange={() => handleCheckboxChange(index)}
                  index={index}
                />
              </div>
            )
          }
        })}
      </div>

      <SaveButton
        listItems={listItems}
        checkboxState={checkboxState}
        setSelected={setSelected}
        onClick={() => onClose(false)}
      />
      <button className="select-button" onClick={() => onClose(false)}>
        Отмена
      </button>
    </div>
  )
}

export default WidgetContainer
