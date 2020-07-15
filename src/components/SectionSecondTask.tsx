import * as React from "react"

interface Props {
  responsiveListItems: string[]
}

const SectionSecondTask = ({ responsiveListItems }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(1)
  const [mobileOpened, setMobileOpened] = React.useState(false)

  return (
    <div className="section list-container">
      <div
        className={
          mobileOpened ? "list-item-active opened" : "list-item-active"
        }
        onClick={() => setMobileOpened(!mobileOpened)}
      >
        {responsiveListItems[activeIndex]}
      </div>
      <ul className="list">
        {responsiveListItems.map((item, index) => (
          <li
            key={item}
            className={index === activeIndex ? "list-item active" : "list-item"}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SectionSecondTask
