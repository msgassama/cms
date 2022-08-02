import { Layout } from 'antd'
import AdminNav from '../nav/AdminNav'

const { Content } = Layout

const AdminLayout = ({ children, currentDefault = 'dashboard' }) => {
  return (
    <Layout>
      <AdminNav currentDefault={currentDefault} />
      <Layout>
        <Content style={{padding:'10px'}}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
