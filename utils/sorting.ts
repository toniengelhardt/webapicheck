/**
 * Sorts a list of objects in place by field.
 * @param sortable: Array to sort.
 * @param field: Field to sort by.
 */
export function sortByField(sortable: any[], field: string, reverse = false): void {
  const direction = reverse ? 1 : -1
  sortable.sort((a, b) => {
    const x = a[field]?.toLowerCase()
    const y = b[field]?.toLowerCase()
    if (x < y)
      return direction
    if (x > y)
      return -direction
    return 0
  })
}
