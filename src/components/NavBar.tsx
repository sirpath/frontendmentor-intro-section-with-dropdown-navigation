import Image from 'next/image'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'

const NavBar = () => (
  <div className="flex w-full justify-between bg-primary p-3 text-thirdary">
    <div className="flex flex-row">
      <div>
        <Image width={84} height={27} className="h-10 w-24 p-2 md:hidden md:pl-5" src="./images/logo.svg" alt="LogoSnap" />
        <Image width={168} height={54} className="hidden p-2 md:block md:pl-5" src="./images/logo.svg" alt="LogoSnap" />
      </div>
      <div className="hidden  pl-10 md:pl-4 lg:block ">
        <div className=" flex items-center gap-4 text-center text-secondary">

          {/* eslint-disable-next-line tailwindcss/classnames-order */}
          <ul className="menu dropdown dropdown-end bg-primary px-0 text-base ">
            <li>
              <details>
                <summary className="after:justify-self-start hover:text-thirdary ">Features</summary>
                <ul className="menu dropdown-content rounded-box z-[1] w-52 bg-primary p-2 shadow">
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      <img alt="iconTodo" src="./images/icon-todo.svg" />
                      Todo List
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      <img alt="iconCalendar" src="./images/icon-calendar.svg" />
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      <img alt="iconReminders" src="./images/icon-reminders.svg" />
                      Reminders
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      <img alt="iconPlanning" src="./images/icon-planning.svg" />
                      Planning
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

          </ul>
          <ul className="menu dropdown bg-primary px-0 text-base">
            <li>
              <details>
                <summary className="after:justify-self-start hover:text-thirdary">Company</summary>
                <ul className=" menu dropdown-content rounded-box z-[1] w-52 bg-primary p-2  shadow">
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-thirdary" href="./">
                      Blog
                    </Link>
                  </li>

                </ul>
              </details>
            </li>
          </ul>
          <Link className="px-4 hover:text-thirdary" href="./">Careers</Link>
          <Link className="px-4 hover:text-thirdary" href="./">About</Link>
        </div>
      </div>
    </div>
    <div>
      <div className="hidden pr-5 text-secondary lg:block">
        <button className="px-4 pr-6 hover:cursor-pointer hover:text-thirdary" type="button">Log in</button>
        <button className="rounded-xl border-2 border-secondary px-5 py-2 hover:cursor-pointer hover:text-thirdary" type="button">Register</button>
      </div>

      <div className="drawer drawer-end lg:hidden">
        <input id="NavDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

          <label htmlFor="NavDrawer" className="drawer-button text-4xl hover:cursor-pointer"><RxHamburgerMenu /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="NavDrawer" className="drawer-overlay" />

          <ul className="menu min-h-full bg-primary p-4  text-secondary">
            <div className="flex justify-end">
              <div className="text-4xl text-thirdary">
                <label htmlFor="NavDrawer" className="drawer-button">
                  <p><FiX /></p>
                </label>
              </div>
            </div>
            <ul className="menu bg-primary">
              <li>
                <details>
                  <summary className="after:justify-self-start hover:text-thirdary">Features</summary>
                  <ul>
                    <li>

                      <Link className="hover:text-thirdary" href="./">
                        <img alt="iconTodo" src="./images/icon-todo.svg" />
                        Todo List
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-thirdary" href="./">
                        <img alt="iconCalendar" src="./images/icon-calendar.svg" />
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-thirdary" href="./">
                        <img alt="iconReminders" src="./images/icon-reminders.svg" />
                        Reminders
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-thirdary" href="./">
                        <img alt="iconPlanning" src="./images/icon-planning.svg" />
                        Planning
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="after:justify-self-start hover:text-thirdary">Company</summary>
                  <ul>
                    <li><Link className="hover:text-thirdary" href="./">History</Link></li>
                    <li><Link className="hover:text-thirdary" href="./">Our Team</Link></li>
                    <li><Link className="hover:text-thirdary" href="./">Blog</Link></li>
                  </ul>
                </details>
              </li>
              <li><Link className="hover:text-thirdary" href="./">Careers</Link></li>
              <li><Link className="hover:text-thirdary" href="./">About</Link></li>
            </ul>
            <div className="flex flex-col items-center gap-4 pt-6">
              <button className="hover:text-thirdary" type="button">Log in</button>
              <button className="rounded-xl border-2 border-secondary px-24 py-3 hover:text-thirdary" type="button">Register</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>

)

export default NavBar
