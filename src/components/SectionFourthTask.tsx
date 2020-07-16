import * as React from "react"
import WidgetContainer from "./fourth-task/WidgetContainer"
import SelectedItem from "../components/fourth-task/SelectedItem"

interface Props {
  listItems: string[]
  itemsStates: boolean[]
}

const SectionFourthTask = ({ listItems, itemsStates }: Props) => {
  const [showWidgetContainer, setShowWidgetContainer] = React.useState(false)
  const [checkboxState, setCheckboxState] = React.useState(itemsStates)

  const selectedItems = listItems.filter((item, index) => {
    return checkboxState[index]
  })

  const removeSelectedItem = (index: number) => {
    checkboxState[index] = !checkboxState[index]

    const newItemsStates = [...checkboxState]

    setCheckboxState(newItemsStates)
  }

  return (
    <>
      <h2 className="title-second">Выбор элементов</h2>
      <div className="select-selected-container">
        <p className="select-selected-title">
          На данный момент у вас выбрано {selectedItems.length} элемента:
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
        disabled={!!showWidgetContainer}
      >
        Изменить мой выбор
      </button>

      {showWidgetContainer && (
        <WidgetContainer
          onClose={setShowWidgetContainer}
          listItems={listItems}
          itemsStates={checkboxState}
          setSelected={setCheckboxState}
        />
      )}
    </>
  )
}

export default SectionFourthTask
