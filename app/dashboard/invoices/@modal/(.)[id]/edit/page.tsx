import EditPage from '@/app/ui/invoices/edit-page'
import { Modal } from '@/app/ui/modal'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <Modal>
      <EditPage {...props} />
    </Modal>
  )
}
