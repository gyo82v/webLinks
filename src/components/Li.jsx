export default function Li({name, href, children}){
    const listl = `flex items-center mb-2`
    const aStl = `font-semibold text-lg mr-auto
                  hover:transform hover:scale-115 active:scale-95`
    const pStl = `mr-3 p-2 italic
                  bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl shadow-lg`
    return(
        <li className={listl}>
            <a className={aStl} href={href} target="_blank">{name}</a>
            <p className={pStl}>{children}</p>
        </li>
    )
}