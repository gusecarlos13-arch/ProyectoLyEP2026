import '../css/dashboard.css'
import useAutorizaciones from '../hooks/useAutorizaciones'
import { useEffect, useState } from 'react'
import clientesService from '../services/clientesService'

const Dashboard = () => {
  const { admin } = useAutorizaciones()
  const [clientes, setClientes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const datos = await clientesService.obtenerClientes()
        setClientes(datos)
      } catch {
        setError(true)
      } finally {
        setCargando(false)
      }
    }

    cargarClientes()
  }, [])

  return (
    <div className="dashboard">

      <h1>Panel de Control de Clientes</h1>

      <div className="user-card">
        <h3>Usuario conectado</h3>

        <p><strong>Administrador:</strong> {admin.nombre}</p>
        <p><strong>Email:</strong> {admin.email}</p>
        <p><strong>Sector:</strong> {admin.sector}</p>
      </div>
      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Clientes</h3>
          <p>{cargando ? 'Cargando...' : error ? 'Error al cargar' : clientes.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Gerencia</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3>Soporte</h3>
          <p>3</p>
        </div>
      </div>

    </div>
  )
}

export default Dashboard