
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/components/Button'

export function ProductsPage() {
  const navigate = useNavigate()

  function handleCreateProduct() {
    navigate('/produtos/novo')
  }

  return (
    <div>
      <h1>Produtos</h1>
      <Button onClick={handleCreateProduct}>Novo produto</Button>
    </div>
  )
}