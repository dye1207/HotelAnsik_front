import React, { useEffect, useState } from 'react'
import AnsikGnb from '../../layout/ansik-gnb/ansik-gnb'
import './dashboard-index.scss'
import { startOfMonth, endOfMonth, addMonths, subMonths, getDay, getDate, format } from 'date-fns'

const DashboardIndex = () => {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [prevMonthDateList, setPrevMonthDateList] = useState([])
  const [nextMonthDateList, setNextMonthDateList] = useState([])
  const subHeaderList = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  useEffect(() => {
    setPrevMonthDateList(genMonthDateList(currentMonth))
    setNextMonthDateList(genMonthDateList(addMonths(currentMonth, 1)))
  }, [currentMonth])


  const genMonthDateList = (curMonth) => {
    const start = startOfMonth(curMonth)
    const end = endOfMonth(curMonth)
    const startDate = getDate(start)
    const endDate = getDate(end)
    const startDay = getDay(start)
    const endDay = getDay(end)

    const dateList = []

    for (let i = 0; i < startDay; i++) {
      dateList.push('')
    }

    for (let i = startDate; i <= endDate; i++) {
      dateList.push(i)
    }

    for (let i = endDay + 1; i < 7; i++) {
      dateList.push('')
    }

    return dateList
  }

  const changeMonth = (type) => {
    if (type === 'PREV') {
      setCurrentMonth(subMonths(currentMonth, 1))
    } else if (type === 'NEXT') {
      setCurrentMonth(addMonths(currentMonth, 1))
    }
  }

  return (
    <>
      <AnsikGnb></AnsikGnb>
      <main>
        <section className="intro-book">
          <video className="intro-video" autoPlay loop muted playsInline src="./video/dashboard-intro.mp4"></video>
          <div className="intro-book__reservation-form">
            <h2>HOTEL ANSIK</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem ratione illum enim dolores vel dolor neque quae obcaecati iusto minima, labore dignissimos porro excepturi quidem veniam tempore eos magnam.</h3>

            <div className="form-wrapper">
              {
                isDatePickerOpen ?
                  <div className="datepicker-panel">
                    <div className="month-box prev">
                      <div className="month-box__header">
                        <div className="arrow prev" onClick={() => changeMonth('PREV')}>{"<"}</div>
                        {format(currentMonth, "yyyy.MM")}
                      </div>
                      <ul className="month-box__sub-header">
                        {subHeaderList.map((week, index) => (<li key={index} className="sub-header-item">{week}</li>))}
                      </ul>
                      <ul className="month-box__date-list">
                        {
                          prevMonthDateList.map((date, index) => (
                            <li className='date' key={index}>{date}</li>
                          ))
                        }
                      </ul>

                    </div>
                    <div className="month-box next">
                      <div className="month-box__header">
                        <div className="arrow next" onClick={() => changeMonth('NEXT')} >{">"}</div>
                        {format(addMonths(currentMonth, 1), "yyyy.MM")}
                      </div>
                      <ul className="month-box__sub-header">
                        {subHeaderList.map((week, index) => (<li key={index} className="sub-header-item">{week}</li>))}
                      </ul>
                      <ul className="month-box__date-list">
                        {
                          nextMonthDateList.map((date, index) => (
                            <li className='date' key={index}>{date}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div> : ''
              }

              <div className="input-row">
                <div className="input-col">
                  <p className="label">CHECK IN / OUT</p>
                  <div className="data strong" onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
                    2023.05.07 - 2023.05.08
                  </div>
                </div>
                <div className="input-col flex-row">
                  <div className="inner-col">
                    <p className="label">ROOM</p>
                    <div className="data">1</div>
                  </div>
                  <div className="inner-col">
                    <p className="label">ADULT</p>
                    <div className="data">2</div>
                  </div>
                  <div className="inner-col">
                    <p className="label">CHILDREN</p>
                    <div className="data">0</div>
                  </div>
                </div>
              </div>
              <div className="action-wrapper">
                <input className="search-button" type="button" value="SEARCH" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DashboardIndex