const App = () => {

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return <input onChange={handleInputChange} />
}

export default App;
