import { useState } from "react";
import Quote from "./components/Quote";
import SocialBtn from "./components/SocialBtn";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [myColor, setMyColor] = useState("#B93A95");
  const myColor1 = "#B93A95";

  function getRandomQuote() {
    const quotes = [
      ["Education costs money. But then so does ignorance.", "Sir Claus Moser"],
      [
        "Go confidently in the direction of your dreams. Live the life you have imagined.",
        "Henry David Thoreau",
      ],
      [
        "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        "Dalai Lama",
      ],
      [
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Franklin D. Roosevelt",
      ],
      ["The secret of getting ahead is getting started.", "Mark Twain"],
      [
        "The way to get started is to quit talking and begin doing.",
        "Walt Disney",
      ],
      ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
      [
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Winston Churchill",
      ],
      ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
      [
        "Your time is limited, don't waste it living someone else's life.",
        "Steve Jobs",
      ],
      [
        "The future belongs to those who believe in the beauty of their dreams.",
        "Eleanor Roosevelt",
      ],
    ];

    let random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random][0]);
    setAuthor(quotes[random][1]);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setMyColor(color);
    // return color;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-[#2274d2]`}
    >
      <div
        id="quote-box"
        className="flex flex-col justify-center w-[32rem]  bg-white rounded-md p-4"
      >
        <Quote quote={quote} author={author} />

        <div className="flex flex-row mt-8">
          <SocialBtn id="tweet-quote">
            <FaTwitter />
          </SocialBtn>
          <SocialBtn id="tweet-quote">
            <FaLinkedinIn />
          </SocialBtn>

          <div className="flex-1 rounded-md text-white px-3  text-right">
            <button
              onClick={() => {
                getRandomQuote();
                getRandomColor();

                console.log("bg-[" + myColor + "]");
              }}
              id="new-quote"
              className={"bg-[#2274d2] rounded-md  p-2 text-white"}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
      <p className="mt-4 text-white">by hixCoder</p>
    </div>
  );
}
