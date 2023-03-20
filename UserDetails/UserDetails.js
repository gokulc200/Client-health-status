let quote = document.getElementById("quote");
let quotesList = [`“Wrinkles will only go where the smiles have been😊”`,
    `“Count your age by friends, not years. Count your life by smiles😊, not tears”`,
    `“Have a good day❤️”`, `“Hope you are doing well!❤️”`, `“One are so old as those who have outlived enthusiasm🌟”`,
    `“Getting old is like climbing a mountain🌄; you get a little out of breath, but the view is much better!❤️”`,
    `“Anyone who keeps the ability to see beauty never grows old🫶🏻”`
];

let noOfMessageInChatList = quotesList.length;
let chatBotMessage = quotesList[Math.ceil(Math.random() * noOfMessageInChatList) - 1];

quote.textContent = chatBotMessage;