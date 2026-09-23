import { useState } from 'react'
import StudentShell from '../../components/StudentShell'
import MobileShell from '../../components/MobileShell'
import NotificationCard from '../../components/NotificationCard'
import useIsMobile from '../../lib/useIsMobile'
import { NOTIFICATIONS } from '../../lib/student'

const FILTERS = ['All', 'Unread', 'Read']

export default function StudentNotifications() {
  const isMobile = useIsMobile()
  const [filter, setFilter] = useState('All')
  const [items, setItems] = useState(NOTIFICATIONS)

  const unreadCount = items.filter((item) => item.unread).length

  const markRead = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, unread: false } : item)))
  }

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, unread: false })))
  }

  const visible = items.filter(
    (item) =>
      filter === 'All' || (filter === 'Unread' ? item.unread : !item.unread),
  )

  const content = (
    <div
      className={`mx-auto flex w-full flex-col gap-[50px] ${isMobile ? '' : 'max-w-[552px]'}`}
    >
      <div className="flex w-full flex-col">
        <h1
          className={`font-heading font-medium whitespace-nowrap text-black ${
            isMobile ? 'text-[28px] tracking-[-1.12px]' : 'text-[32px] tracking-[-1.28px]'
          }`}
        >
          Notifications
        </h1>
        <p className="text-[16px] tracking-[-0.48px] text-primary-grey">
          You have {unreadCount} unread notification{unreadCount === 1 ? '' : 's'}
        </p>
      </div>

      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-wrap items-center justify-between gap-y-[4px]">
          <div className="flex items-center gap-[4px]">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`rounded-[12px] px-[10px] py-[5px] text-[11px] font-medium tracking-[-0.44px] whitespace-nowrap ${
                  filter === option ? 'bg-primary-blue text-off-white' : 'bg-light-ash text-black'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={markAllRead}
            className="cursor-pointer text-right text-[13px] tracking-[-0.39px] whitespace-nowrap text-primary-blue"
          >
            Mark all as Read
          </button>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {visible.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
              onMarkRead={() => markRead(item.id)}
              compact={isMobile}
            />
          ))}
          {visible.length === 0 && (
            <p className="w-full py-8 text-center text-[13px] tracking-[-0.39px] text-primary-grey">
              No notifications here.
            </p>
          )}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return <MobileShell active="notifications">{content}</MobileShell>
  }
  return <StudentShell active="notifications">{content}</StudentShell>
}
