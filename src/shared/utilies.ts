export const openModal = (id: string) => {
  const elem = document.getElementById(id)
  elem?.classList.remove('hidden')
  elem?.classList.add('flex')
}