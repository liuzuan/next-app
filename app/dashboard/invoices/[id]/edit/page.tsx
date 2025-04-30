import EditPage from '@/app/ui/invoices/edit-page'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const id = params.id

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditPage {...props} />
    </>
  )
}
