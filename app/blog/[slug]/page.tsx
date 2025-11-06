import CompletePage from "@/components/blogs/CompletePage"

export const runtime = 'edge';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return <CompletePage slug={slug} />
}