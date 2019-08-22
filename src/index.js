const arr = ['./pages/a.js', 
             './pages/b.js']

arr.map((item) => {
  import(item).then((utils)=>{
    let obj = utils.default()
    console.log(obj)
  }, (err)=>{
    console.log(err)
  })
})

