import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-cyan-800 w-full z-20 py-2 h-24 fixed shadow">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex h-full items-center justify-between px-4">
					<Link to="/" className="py-5 my-auto h-full">
						<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                            API Consum
                        </h1>
					</Link>
					<div className="flex gap-0 md:gap-2">
						<NavLink
							to="/form"
							className={navData =>
								`py-2 px-3 text-lg font-semibold text-green-400 font-mono hover:underline underline-offset-2 ${
									navData.isActive ? 'underline' : ''
								}`
							}
						>
							Form
						</NavLink>
						<NavLink
							to="/users"
							className={navData =>
								`py-2 px-3 text-lg font-semibold text-green-400 font-mono hover:underline underline-offset-2 ${
									navData.isActive ? 'underline' : ''
								}`
							}
						>
							Users
						</NavLink>
						<NavLink
							to="/rickmorty"
							className={navData =>
								`py-2 px-3 text-lg font-semibold text-green-400 font-mono hover:underline underline-offset-2 ${
									navData.isActive ? 'underline' : ''
								}`
							}
						>
							Cards
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
  )
}
export default NavBar