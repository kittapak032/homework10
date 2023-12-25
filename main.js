const root = ReactDOM.createRoot(document.querySelector('#root'))

function Counter() {
    return (
            <div className="counter">
                <button>+</button>
                <h2>0</h2>
                <button>-</button>
                <button>C</button>
                <button>X</button>
            </div>
    )
}

function App() {
    return (
        <div> 
            {/* <h1>Today : {new Date().toDateString()}</h1> */}
            <div className="sum"> 
            <h1 id ="sum">Sum = 0</h1>
            <button className="button">Add Counter</button>
            </div>
            <Counter/>
        </div>
    );
}

root.render(<App />);

