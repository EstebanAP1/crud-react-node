export class Controller {
  static prueba1 = async (req, res) => {
    return res.json({ message: 'You are testing 1' })
  }

  static prueba2 = async (req, res) => {
    return res.json({ message: 'You are testing 2' })
  }

  static deleteUserById = async (req, res) => {
    const { id } = req.params
    // if (id) return res.status(404).json({ message: 'User not found' })
    return res.json({ message: `User ${id} deleted` })
  }
}
