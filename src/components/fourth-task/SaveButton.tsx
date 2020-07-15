import * as React from "react"

interface Props {
  listItems: string[]
  checkboxState: boolean[]
  setSelected: () => void
  onClick: () => void
}

const SaveButton = ({
  listItems,
  checkboxState,
  setSelected,
  onClick,
}: Props) => {
  const handleSaveButton = () => {
    const newSelectedItems: string[] = []

    {
      listItems.map((item, index) => {
        if (checkboxState[index]) {
          newSelectedItems.push(item)
        }
      })
    }

    setSelected(newSelectedItems.slice())
  }

  return (
    <button
      className="select-button"
      onClick={() => {
        handleSaveButton()
        onClick()
      }}
    >
      Сохранить
    </button>
  )
}

export default SaveButton
