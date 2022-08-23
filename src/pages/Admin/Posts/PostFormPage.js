import React from 'react'
import PostForm from '../../../components/Admin/Post/Form/PostForm'
import TitleSection from '../../../components/Admin/TitleSection'

export default function PostFormPage() {
  return (
    <>
      <TitleSection title="New Post" icon="bi-newspaper"/>
      <PostForm />
    </>
  )
}
