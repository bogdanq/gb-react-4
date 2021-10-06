import Message from "./Message"
import "../styles/App.css";

const message = "Работает! Восславим же Господа! Аллилуйя!"

export default function App() {
    return (
        <div className="Message mt-5">
            <Message className=""
                message={message}
            >

            </Message>
        </div>
    );
}
