import { Button } from '@mui/material'

interface Props {
  title: string
}

export default function ButtonComponent({ title }: Props) {
  return (
    <Button variant="contained" id="button">
      {title}
    </Button>
  )
}
