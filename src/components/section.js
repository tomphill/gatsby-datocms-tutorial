import React from "react"
import "./section.css"
import GridColumn from "./gridColumn"

const Section = ({ gridColumns }) => {
  return (
    <div className="section">
      <div className="section-inner">
        {gridColumns.map(gridCol => (
          <GridColumn
            key={gridCol.originalId}
            mobileWidth={gridCol.mobileWidth}
            tabletWidth={gridCol.tabletWidth}
            desktopWidth={gridCol.desktopWidth}
            content={gridCol.content}
          />
        ))}
      </div>
    </div>
  )
}

export default Section
