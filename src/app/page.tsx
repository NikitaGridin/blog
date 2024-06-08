import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <h1>Hello World!</h1>
      <h1>Hello World!</h1>
      <h1>Hello World!</h1>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Button>Hello Button</Button>
    </main>
  )
}
