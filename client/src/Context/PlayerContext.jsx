import { createContext, useState, useEffect } from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = (props) => {
  const [nameInput, setNameInput] = useState('Submit')
  const [currentIndex, setCurrentIndex] = useState(null)
  const [player, setPlayer] = useState([])
  const [tampunganPlayer, setTampunganPlayer] = useState([
    {
      username: 'wildan',
      email: 'wildan@gmail.com',
      exp: '87',
      lvl: '100',
    },
    {
      username: 'alif',
      email: 'alif@gmail.com',
      exp: '88',
      lvl: '87',
    },
    {
      username: 'rioditama',
      email: 'rioditama@gmail.com',
      exp: '79',
      lvl: '96',
    },
  ])
  const [form, setForm] = useState({
    username: '',
    email: '',
    exp: 0,
    lvl: 0,
  })

  const [formSearch, setFormSearch] = useState('')

  useEffect(() => {
    setPlayer([...tampunganPlayer])
    clickSearch()
  }, [formSearch])

  //search

  const clickSearch = () => {
    console.log('lagi cari boss')
    if (formSearch !== '') {
      const searchPlayer = player.filter((pl) => {
        if (
          pl.username.includes(formSearch) ||
          pl.email.includes(formSearch) ||
          pl.exp.toString().includes(formSearch) ||
          pl.lvl.toString().includes(formSearch)
        ) {
          return pl
        }
      })
      if (searchPlayer) {
        setPlayer([...searchPlayer])
        console.log(player)
      } else {
        setPlayer([...tampunganPlayer])
      }
    } else if (formSearch === '') {
      setPlayer([...tampunganPlayer])
    }
  }

  //reset form
  const resetForm = () => {
    setForm({
      username: '',
      email: '',
      exp: 0,
      lvl: 0,
    })
    setNameInput('Submit')
  }

  //handler

  const handleExp = (e) => {
    let { value } = e.target

    setForm({
      [form.exp]: Number(value),
    })
  }

  const handleLvl = (e) => {
    let { value } = e.target

    setForm({
      [form.lvl]: Number(value),
    })
  }

  const handleChange = (e) => {
    let { value, name } = e.target

    if (name === 'lvl' || name === 'exp') {
      setForm({
        ...form,
        [name]: Number(value),
      })
    } else {
      setForm({
        ...form,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentIndex === null) {
      setPlayer([...player, form])
      setTampunganPlayer([...tampunganPlayer, form])
    } else {
      player[currentIndex] = form
      setCurrentIndex(null)
    }
    resetForm()
  }

  const handleEdit = (index) => {
    setNameInput('Edit')
    const editPlayer = player[index]
    setCurrentIndex(index)

    form.email = editPlayer.email
    form.username = editPlayer.username
    form.exp = editPlayer.exp
    form.lvl = editPlayer.lvl
  }

  const handleDelete = (index) => {
    setCurrentIndex(index)
    let deletedPlayer = player[index]

    let text = 'Anda akan menghapus data buah ini?'
    if (confirm(text) == true) {
      let newData = player.filter((e) => {
        return e !== deletedPlayer
      })
      setPlayer(newData)
    }

    resetForm()
  }

  const handleSearch = (e) => {
    let { value } = e.target
    setFormSearch(value)

    // setPlayer(searchPlayer)
  }

  //   const searchAction = () => {
  //     const searchPlayer = player.filter((pl) => {
  //         if (pl.username == search || pl.email == search || pl.exp.toString() == search || pl.lvl.toString() == search) {
  //           return pl
  //         }
  //       })

  //       setPlayer(...player, searchPlayer)
  //   }

  let functions = { handleSubmit, handleChange, handleEdit, handleDelete, handleExp, handleLvl, handleSearch }

  let state = {
    nameInput,
    setNameInput,
    currentIndex,
    setCurrentIndex,
    player,
    setPlayer,
    form,
    setForm,
    formSearch,
  }

  return (
    <div>
      <PlayerContext.Provider value={{ state, functions }}>{props.children}</PlayerContext.Provider>
    </div>
  )
}
