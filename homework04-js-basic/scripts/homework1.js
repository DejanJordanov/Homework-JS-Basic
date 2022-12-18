array = ['Dejan','tired','working'];

function tellStory(someArray) {
    return `This is ${someArray[0]}. ${someArray[0]} is a nice person. Today they are ${someArray[1]}. They have been ${someArray[2]} all day. The end.`;
}

const story = tellStory(array);
console.log(story);