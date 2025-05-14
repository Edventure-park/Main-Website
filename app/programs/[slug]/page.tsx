/* eslint-disable no-unused-vars */
import CompleteProgramPage from "@/components/Programs/CompleteProgramPage"

export const runtime = 'edge';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return <CompleteProgramPage slug={(await params).slug} />
}