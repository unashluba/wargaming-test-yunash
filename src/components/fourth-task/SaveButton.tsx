import * as React from "react"

interface Props {
  onClick: () => void
}

const SaveButton = ({ onClick }: Props) => {
  return (
    <button className="select-button" onClick={() => onClick()}>
      Сохранить
    </button>
  )
}

export default SaveButton
