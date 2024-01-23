import dynamic from 'next/dynamic'

export const metadata = {
    title: 'Đăng nhập 2'
}
const Login = dynamic(() => import('./page'), {
    loading: () => <p>Loading...</p>
})
export default function DashboardLayout({ children }) {
    return <section><Login /></section>
}
