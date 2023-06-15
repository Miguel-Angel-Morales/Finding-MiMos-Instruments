import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { HomePage } from "./views/HomePage"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Repairs.css"
import InventoryPage from "./Inventory/InventoryPage"


export const Repairs = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/Inventory" element={<InventoryPage />} />
		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<HomePage />
				</>
			</Authorized>

		} />
	</Routes>
}

