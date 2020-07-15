import * as React from "react"
import SearchTypeOne from "../components/first-task/SearchTypeOne"
import SearchTypeTwo from "../components/first-task/SearchTypeTwo"

const SectionFirstTask = () => {
  return (
    <div className="section">
      <SearchTypeOne />
      <SearchTypeOne buttonText="Go" />

      <SearchTypeTwo />
      <SearchTypeTwo buttonText="Go" />

      <SearchTypeOne searchContainerClass="type-three" />
      <SearchTypeOne searchContainerClass="type-three" buttonText="Go" />
    </div>
  )
}

export default SectionFirstTask
