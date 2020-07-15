import * as React from "react"
import WidgetContainer from "./fourth-task/WidgetContainer"
import SelectedItem from "../components/fourth-task/SelectedItem"

interface Props {
  listItems: string[]
  itemsStates: boolean[]
  selectedItems: string[]
}

const SectionFourthTask = ({
  listItems,
  itemsStates,
  selectedItems,
}: Props) => {
  const [showWidgetContainer, setShowWidgetContainer] = React.useState(false)
  const [selected, setSelected] = React.useState(selectedItems)
  const [checkboxState, setCheckboxState] = React.useState(itemsStates)

  const removeSelectedItem = (index: number) => {
    checkboxState[index] = !checkboxState[index]

    const newItemsStates = checkboxState.slice()

    setCheckboxState(newItemsStates)

    const newSelectedItems = listItems.filter((item, index) => {
      return newItemsStates[index]
    })

    setSelected(newSelectedItems)
  }

  return (
    <>
      <h2 className="title-second">Выбор элементов</h2>
      <div className="select-selected-container">
        <p className="select-selected-title">
          На данный момент у вас выбрано {selected.length} элемента:
        </p>
        {listItems.map((item, index) => {
          if (checkboxState[index]) {
            return (
              <div key={item} className="select-selected-item">
                <SelectedItem
                  item={item}
                  onClick={() => removeSelectedItem(index)}
                />
              </div>
            )
          }
        })}
      </div>

      <button
        className="select-button"
        onClick={() => setShowWidgetContainer(true)}
      >
        Изменить мой выбор
      </button>

      {showWidgetContainer && (
        <WidgetContainer
          onClose={setShowWidgetContainer}
          listItems={listItems}
          itemsStates={checkboxState}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </>
  )
}

export default SectionFourthTask
