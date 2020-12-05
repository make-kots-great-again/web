export default function makeFakeGroup (name, description) {
  const group = {
    groupName: name,
    groupDescription: description
  }

  return {
    ...group
  }
}
