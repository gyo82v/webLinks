import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Section({title, children, open, toggle, variant = "default"}){

    const variants = {
        default : `from-orange-200 to-orange-100`,
        yellow : `from-yellow-200 to-yellow-100`,
        green : `from-green-200 to-green-100`,
        sky : `from-sky-200 to-sky-100`,
        rose : `from-rose-200 to-rose-100`,
        purple : `from-purple-200 to-purple-100`
    }
    const variantsText = {
        default : `text-orange-800`,
        yellow : `text-yellow-800`,
        green : `text-green-800`,
        sky : `text-sky-800`,
        rose : `text-rose-800`,
        purple : `text-purple-800`
    }

    const sectionMainStl = `bg-gradient-to-br ${variants[variant] || ""} ${variantsText[variant] || ""}
                            p-3 rounded-lg shadow-lg m-4`
    const sectionSecStl = ` flex font-semibold`
    const btnStl = `p-2 shadow-lg  rounded-xl 
                    hover:cursor-pointer hover:transform hover:scale-115 active:scale-95`
    const ulStl = `mt-4`
    return(
        <section className={sectionMainStl}>
            <section className={sectionSecStl}>
                <h1 className="mr-auto">{title} links</h1>
                <button className={btnStl} onClick={toggle}>
                    {open ? <FaChevronDown /> : <FaChevronUp />}
                </button>
            </section>
            {open && 
              <ul className={ulStl}>
                  {children}
              </ul>
            }
        </section>
    )
}