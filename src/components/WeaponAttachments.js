import React from "react"
import Link from "./shared/Link"

export const weaponAttachmentsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/weapon-attachments/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Category", name: "category" },
  { label: "Price", name: "price" },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Rarity", name: "rarity", numeric: true },
  { label: "Index", name: "index", grouping: false },
]
