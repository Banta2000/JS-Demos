

const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "The only way to do great work is to love what you do."]


const usedIndexes = new Set()

const quoteTag = document.getElementById('quoteDisplay')

    
function generateQuote() {
    if (usedIndexes.size === quotes.length) usedIndexes.clear()
    
    while (true) {
        const i = Math.floor(Math.random() * quotes.length)
        if (usedIndexes.has(i)) continue
        
        const quote = quotes[i]
        quoteTag.innerHTML = quote
        usedIndexes.add(i)
        break
        }
    }
