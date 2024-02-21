export type CardProps = {
  image: string
  id: number
  showAnimal: boolean
  callback: (card: HTMLDivElement) => void
}
