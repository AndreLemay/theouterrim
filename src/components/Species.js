import React from "react"
import Link from "./shared/Link"

export const speciesColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/species/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Player?", name: "player" },
  { label: "Index", name: "index", grouping: false },
]
