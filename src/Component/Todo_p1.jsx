import { useState } from "react";

const Todo_p1 = () => {
  const [todos, setTodos] = useState([])
  const [item, setItem] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const submitData = () => {
    if (item.trim) {
      if (editIndex !== null) {
        const updatetodo = [...todos]
        updatetodo[editIndex] = { item }
        setTodos(updatetodo)
        setEditIndex(null)
      } else {
        setTodos([...todos, { id: Date.now(), item }])
      }
      setItem('')
    } else {
      alert('All Field are Important')
    }
  }

  const editData = (index) => {
    const todo = todos[index]
    setItem(todo.item)
    setEditIndex(index)
  }

  const deleteData = (index) => {
    const deleteData = [...todos]
    deleteData.splice(index, 1)
    setTodos(deleteData)
  }
  const toggleAllComplete = (index) => {
    const toggleData = [...todos]
    toggleData[index].completed = !toggleData
    [index].completed
    setTodos(toggleData)
  }

  return (
    <div>
      <h1 className="mt-5">Todo Application</h1>
      <div className="container p-4 mt-3"
        style={{
          maxWidth: '400px',
          background: '#2d2d4d',
          borderRadius: '8px',
          color: 'white'
        }}>
        <div className="mb-3 input-group">
          <input
            type="text"
            placeholder="Add something to your list"
            className="form-control shadow-none"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button className="btn btn-primary " onClick={submitData}>{editIndex !== null ? 'Update Data' : 'Add Data'} </button>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((Item, index) => {
                  return (
                    <tr>
                      <td style={{ textDecoration: Item.completed ? 'line-through' : 'none' }}>{index + 1}</td>
                      <td style={{ textDecoration: Item.completed ? 'line-through' : 'none' }}>{Item.item}</td>
                      <td style={{ textDecoration: Item.completed ? 'line-through' : 'none' }}>
                        <button className="btn btn-warning me-2" onClick={() => editData(index)}>
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn btn-danger me-2" onClick={() => deleteData(index)}>
                          <i class="bi bi-trash"></i>
                        </button>
                        <button className="btn btn-success" onClick={() => toggleAllComplete(index)}>
                          <i class="bi bi-check-square"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>


      </div>
    </div>

  )
}
export default Todo_p1;