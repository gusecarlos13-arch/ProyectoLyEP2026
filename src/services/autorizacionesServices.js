const usuarios = JSON.parse(import.meta.env.VITE_USUARIOS || '[]')

const login = (email, password, sector) => {
  return usuarios.find(
    usuario =>
      usuario.email === email &&
      usuario.password === password &&
      usuario.sector === sector
  )
}

export default {
  login
}