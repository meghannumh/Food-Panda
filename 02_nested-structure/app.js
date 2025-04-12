const parent = React.createElement('div', 
    {id:"parent"},
    React.createElement('div', 
        {id:"child"},
        React.createElement('h1', 
            {id:"heading"},
            "I'm in h1 tag"
        )
    )
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

// example for siblings 

const grandFather = React.createElement('div', 
    {id:'grandFather'},
    React.createElement('div', 
        {id:'father'},
        [React.createElement('h1', 
            {id:'son'},
            'I am son'
        ), React.createElement('h1', 
            {id:'daughter'},
            'I am daughter'
        )]
    )
)

const root2 = ReactDOM.createRoot(document.getElementById('root2'))

root2.render(grandFather)

//when we do root.render the elements inside root will be replaced by the one you've created like for example here root elements will get replaced by parent.