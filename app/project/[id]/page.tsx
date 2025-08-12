'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectHero from '@/components/ProjectHero'
import ProjectTabs from '@/components/ProjectTabs'
import { projects } from '@/data/mockData'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <ProjectHero project={project} />
        <ProjectTabs project={project} />
      </main>
      
      <Footer />
    </div>
  )
}