import { Button } from '@/components/ui/button'
import MainLayout from '@/layouts/main/main'
import React from 'react'

const Home = () => {
  return (
    <MainLayout>
      <Button>Click me</Button>
      <div className="w-20 h-20 bg-cf-black"></div>
    </MainLayout>
  )
}

export default Home