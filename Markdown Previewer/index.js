marked.setOptions({
    breaks: true
  });

const renderer = new marked.Renderer();
function App(){
    const [text,setText] =React.useState(placeHolder)
    
    return(
<div className="text-center px-4">
    <h1 className="p-2">My Markdown</h1>
    <textarea name="text" id="editor" rows="10" onChange = {(e)=> setText(e.target.value)} value={text} className="textarea"></textarea>
    <Preview markdown={text}/>
</div>        
    )
}

function Preview({markdown}){
    return (    
     <div dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer })}}
    id='preview'
  ></div>)
}
const placeHolder =`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<inline style>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

The coolest part is probably the toolbar, so go ahead and check that out. There are libraries out there that embed pre-coded toolbards like [SimpleMDE](https://simplemde.com/), but I decided to try to undertake the challenge myself, so this is definitely not perfect (some scrolling issues), but for the most part it works.

There's also [links](https://www.freecodecamp.com/no-stack-dub-sack), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With differnt indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. The tool bar keeps adding 1s.
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

Well, that's it! Thanks for visiting my project. The code is in desperate need of a refactor, so maybe I will improve later and add additional functionality like syntax highlighting and fix some of the bugs. For this first round, I was just exploring these techniques and focusing on getting things working. 

Feel free to play around and leave some comments if you have any thoughts!
`
ReactDOM.render(<App/>,document.getElementById("root"))