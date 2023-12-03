import Table from './Table';


function App() {
  const person=[
    {
      name:"Arun",
      age:21,
      profession:"Desiginer"
    },

    {
      name:"Mani",
      age:24,
      profession:"Coder"
    },

    {
      name:"Achu",
      age:20,
      profession:"Desiginer"
    },

    {
      name:"Arun",
      age:25,
      profession:"tester"
    }
  ]

  return(
    <Table userData={person} />
  )
}

export default App; 