import * as React from "react"
import SectionFirstTask from "../components/SectionFirstTask"
import SectionSecondTask from "../components/SectionSecondTask"
import SectionThirdTask from "../components/SectionThirdTask"
import SectionFourthTask from "../components/SectionFourthTask"

const IndexPage = () => {
  const responsiveList = [
    "World Of Tanks",
    "World Of Warplanes",
    "World Of Warships",
  ]
  const elementsNumber = 300
  const initChecked: number[] = [4, 7]
  const elements: string[] = []
  const states: boolean[] = []

  for (let i = 0; i < elementsNumber; i++) {
    const element = `Элемент ${i + 1}`
    const isInitChecked = initChecked.includes(i)

    elements.push(element)
    states.push(isInitChecked)
  }

  return (
    <div className="container">
      <SectionFirstTask />
      <SectionSecondTask responsiveListItems={responsiveList} />
      <SectionThirdTask />
      <SectionFourthTask listItems={elements} itemsStates={states} />
    </div>
  )
}

export default IndexPage
