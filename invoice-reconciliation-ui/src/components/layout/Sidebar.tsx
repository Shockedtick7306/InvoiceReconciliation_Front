import { useState } from 'react'
import {
  House,
  CloudUpload,
  History,
  ChartNoAxesColumn,
  Settings,
  LogOut,
  Scale,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'
import './Sidebar.css'

type MenuItem = {
  id: string
  label: string
  icon: LucideIcon
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'داشبورد', icon: House },
  { id: 'new-reconciliation', label: 'مغایرت‌گیری جدید', icon: CloudUpload },
  { id: 'my-sessions', label: 'جلسات من', icon: History },
  { id: 'reports', label: 'گزارش‌ها', icon: ChartNoAxesColumn },
  { id: 'settings', label: 'تنظیمات', icon: Settings },
]

function Sidebar() {
  const [activeId, setActiveId] = useState('dashboard')

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Scale size={32} />
        <span>مغایرت‌گیری فاکتور</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={
                item.id === activeId ? 'sidebar-item active' : 'sidebar-item'
              }
              onClick={() => setActiveId(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">ع‌ا</div>
          <div className="sidebar-user-info">
            <strong>علی احمدی</strong>
            <small>مسئول مالیاتی</small>
          </div>
          <ChevronDown size={16} />
        </div>

        <button className="sidebar-item">
          <LogOut size={20} />
          <span>خروج</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar