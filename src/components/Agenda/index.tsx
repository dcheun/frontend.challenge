import React, { ReactElement, useContext, useMemo, useState } from 'react'
import { DateTime } from 'luxon'

import greeting from 'lib/greeting'

import Calendar from 'src/models/Calendar'
import Event from 'src/models/Event'
import AccountContext from 'src/context/accountContext'

import List from './List'
import EventCell from './EventCell'

import style from './style.scss'

type AgendaItem = {
  calendar: Calendar
  event: Event
}

const compareByDateTime = (a: AgendaItem, b: AgendaItem) =>
  a.event.date.diff(b.event.date).valueOf()

/**
 * Agenda component
 * Displays greeting (depending on time of day)
 * and list of calendar events
 */

const Agenda = (): ReactElement => {
  const account = useContext(AccountContext)
  const [calChoice, setCalChoice] = useState('all')
  const [deptView, setDeptView] = useState(false)

  const events: AgendaItem[] = useMemo(
    () =>
      account.calendars
        .filter((calendar) => {
          return calChoice === 'all' || calChoice === calendar.color
        })
        .flatMap((calendar) =>
          calendar.events.map((event) => ({ calendar, event })),
        )
        .sort(compareByDateTime),
    [account, calChoice],
  )

  const localHour = DateTime.local().hour
  const title = useMemo(() => greeting(localHour), [localHour])
  // Get unique departments
  const departments = events
    .map((event) => event.event.department)
    .filter((value, index, self) => self.indexOf(value) === index)

  const handleCalChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target
    setCalChoice(value)
  }

  const handleToggleDeptView = () => {
    setDeptView(!deptView)
  }

  return (
    <div className={style.outer}>
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.title}>{title}</span>
          <span className="dropdown">
            <label htmlFor="cal">Calendar: </label>
            <select name="cal" onChange={handleCalChange} defaultValue="all">
              <option value="all">All</option>
              {account.calendars.map((c) => (
                <option key={c.id} value={c.color}>
                  {c.color}
                </option>
              ))}
            </select>
          </span>
          <span>
            <button
              className={style.deptToggleBtn}
              onClick={handleToggleDeptView}
            >
              {deptView ? 'Default View' : 'Department View'}
            </button>
          </span>
        </div>

        {deptView ? (
          departments.map((department) => (
            <>
              <div className={style.deptGroupHeader}>
                <span>{department ? department : 'No Department'}</span>
                <hr />
              </div>
              <List>
                {events
                  .filter((event) => event.event.department === department)
                  .map(({ calendar, event }) => (
                    <EventCell
                      key={event.id}
                      calendar={calendar}
                      event={event}
                    />
                  ))}
              </List>
            </>
          ))
        ) : (
          <List>
            {events.map(({ calendar, event }) => (
              <EventCell key={event.id} calendar={calendar} event={event} />
            ))}
          </List>
        )}
      </div>
    </div>
  )
}

export default Agenda
