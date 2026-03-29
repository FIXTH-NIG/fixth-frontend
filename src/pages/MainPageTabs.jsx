import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import JobsListPanel from '../components/sections/MainPageSections/jobs/JobsListPanel'
import JobsDescription from '../components/sections/MainPageSections/jobs/jobsDescription'
import InboxListPanel from '../components/sections/MainPageSections/inbox/InboxListPanel'
import MessageThread from '../components/sections/MainPageSections/inbox/MessageThread'
import { jobsData, inboxThreads } from '../data/mock'
import { useIsMobile } from '../hooks'
import { BREAKPOINTS } from '../constants/breakpoints'

export function JobsTab() {
  const { jobId } = useParams()
  const isMobile = useIsMobile(BREAKPOINTS.TABLET)

  const selectedJob = useMemo(
    () => jobsData.find((job) => job.id === jobId) || null,
    [jobId]
  )

  if (isMobile && selectedJob) {
    return <JobsDescription job={selectedJob} isMobile />
  }

  return (
    <JobsListPanel
      jobs={jobsData}
      selectedJobId={selectedJob?.id || null}
    />
  )
}

export function InboxTab() {
  const { threadId } = useParams()
  const isMobile = useIsMobile(BREAKPOINTS.TABLET)

  const selectedThread = useMemo(
    () => inboxThreads.find((thread) => thread.id === threadId) || null,
    [threadId]
  )

  if (isMobile && selectedThread) {
    return <MessageThread thread={selectedThread} isMobile />
  }

  return (
    <InboxListPanel
      activeThreadId={selectedThread?.id || null}
    />
  )
}
