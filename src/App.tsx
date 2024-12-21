import './App.css'
import { Button } from '@/src/components/ui/button'

function App() {

  return (
    <>
      {/* 用意された複数のvariantが利用できる */}
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>

      {/* 既に指定されているclassNameでも上書き可能 */}
      <Button className='p-20'>outline</Button>
    </>
  )
}

export default App
