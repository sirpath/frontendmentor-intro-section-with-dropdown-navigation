import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'

import Footer from '@/components/Footer'

const Home = () => (

  <main className="flex min-h-screen  w-full flex-col items-center justify-center bg-primary text-lg">
    <div className="flex w-full justify-between bg-primary p-3 text-thirdary">
      <div className="flex flex-row">
        <span className="p-2 text-center text-4xl font-extrabold md:pl-5">snap</span>
        <div className="hidden  pl-10 md:block ">
          <div className="flex items-center gap-10 text-center text-secondary">

            <details className="dropdown-end dropdown">

              <summary className="btn m-1 border-0 bg-transparent px-0 text-base font-normal capitalize text-secondary hover:bg-transparent hover:text-thirdary">
                Features
                <BsChevronDown />
              </summary>

              <ul className="menu dropdown-content rounded-box z-[1] w-52 bg-primary p-2 shadow">
                <li>
                  <a href="./">
                    <img alt="iconTodo" src="./images/icon-todo.svg" />
                    Todo List
                  </a>
                </li>
                <li>
                  <a href="./">
                    <img alt="iconCalendar" src="./images/icon-calendar.svg" />
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="./">
                    <img alt="iconReminders" src="./images/icon-reminders.svg" />
                    Reminders
                  </a>
                </li>
                <li>
                  <a href="./">
                    <img alt="iconPlanning" src="./images/icon-planning.svg" />
                    Planning
                  </a>
                </li>
              </ul>
            </details>

            <details className="dropdown">
              <summary className="btn m-1 border-0 bg-transparent px-0 text-base font-normal capitalize text-secondary hover:bg-transparent hover:text-thirdary">
                Company
                <BsChevronDown />
              </summary>
              <ul className="menu dropdown-content rounded-box z-[1] w-52 bg-primary p-2 shadow">
                <li>
                  <a href="./">
                    History
                  </a>
                </li>
                <li>
                  <a href="./">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="./">
                    Blog
                  </a>
                </li>
              </ul>
            </details>
            <a className="hover:text-thirdary" href="/c">Careers</a>
            <a className="hover:text-thirdary" href="/d">About</a>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden pr-5 text-secondary lg:block">
          <button className="pl-4 pr-14 hover:cursor-pointer hover:text-thirdary" type="button">Log in</button>
          <button className="rounded-xl border-2 border-secondary px-5 py-2 hover:cursor-pointer hover:text-thirdary" type="button">Register</button>
        </div>
        <div className="drawer drawer-end lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">

            <label htmlFor="my-drawer" className="drawer-button text-4xl hover:cursor-pointer"><RxHamburgerMenu /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay" />

            <ul className="menu min-h-full bg-primary p-4  text-secondary">
              <div className="flex justify-end">
                <div className="text-4xl text-thirdary">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <a href="./"><FiX /></a>
                </div>
              </div>
              <ul className="menu bg-primary">
                <li>
                  <details>
                    <summary className="after:justify-self-start">Features</summary>
                    <ul>
                      <li>

                        <a href="./">
                          <img alt="iconTodo" src="./images/icon-todo.svg" />
                          Todo List
                        </a>
                      </li>
                      <li>
                        <a href="./">
                          <img alt="iconCalendar" src="./images/icon-calendar.svg" />
                          Calendar
                        </a>
                      </li>
                      <li>
                        <a href="./">
                          <img alt="iconReminders" src="./images/icon-reminders.svg" />
                          Reminders
                        </a>
                      </li>
                      <li>
                        <a href="./">
                          <img alt="iconPlanning" src="./images/icon-planning.svg" />
                          Planning
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="after:justify-self-start">Company</summary>
                    <ul>
                      <li><a href="./">History</a></li>
                      <li><a href="./">Our Team</a></li>
                      <li><a href="./">Blog</a></li>
                    </ul>
                  </details>
                </li>
                <li><a href="./">Careers</a></li>
                <li><a href="./">About</a></li>
              </ul>
              <div className="flex flex-col items-center gap-4 pt-6">
                <button type="button">Log in</button>
                <button className="rounded-xl border-2 border-secondary px-24 py-3" type="button">Register</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section className="w-full max-w-7xl md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-14 md:px-10 md:py-14 md:text-left">
      <div>
        <img className="bg-primary md:hidden" alt="bannerImg" src="./images/image-hero-mobile.png" />
        <img className="hidden bg-primary md:block" alt="bannerImg" src="./images/image-hero-desktop.png" />
      </div>
      <div className="flex w-full flex-col items-center gap-4 md:items-start md:gap-0">
        <h1 className="pt-8 text-4xl font-bold text-thirdary md:hidden">Make remote work</h1>
        <h2 className="hidden pt-20 text-7xl font-bold text-thirdary md:block">Make</h2>
        <div className="hidden text-7xl font-bold text-thirdary md:block">remote work</div>
        <p className="max-w-md px-5 pb-5 text-center text-secondary md:px-0 md:pb-14 md:pt-10 md:text-left">
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </p>

        <button className="rounded-xl border-2 border-thirdary bg-thirdary px-5 py-2 font-semibold text-primary hover:bg-primary hover:text-thirdary" type="button">Learn more</button>

        <picture className="m-10 flex h-6 justify-between gap-5 md:m-0 md:mt-32 md:w-full md:max-w-md">
          <img alt="databizIcon" src="./images/client-databiz.svg" />
          <img alt="audiophileIcon" src="./images/client-audiophile.svg" />
          <img alt="meetIcon" src="./images/client-meet.svg" />
          <img alt="makerIcon" src="./images/client-maker.svg" />
        </picture>
      </div>

    </section>
    <Footer />
  </main>
)

export default Home
