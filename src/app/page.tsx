import { craftingStyles } from "galadrielcss";
import { SiTiktok, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
// Importing the CSS file generated by Galadriel.CSS
import "./page.css";

export default function Home() {
    const container = craftingStyles(() => ({
        backgroundImage: "linear-gradient(to right, #1c92d2, #f2fcfe)",
        display: "flex",
        alignItems: "$adjust-center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    }))

    const ul = craftingStyles(() => ({
        display: "flex",
        gap: "70px",
        flexDirection: "column",
        alignItems: "$adjust-center",
        justifyContent: "center",
        minPortraitTablets: {
            flexDirection: "row",
            gap: "40px",
        }
    }))

    const li = craftingStyles(() => ({
        background: "linear-gradient(145deg, #6ce6c1, #80ffe5)",
        border: "1px inset #0e443780",
        borderRadius: "19px",
        boxShadow: "5px 5px 10px #438f78, -5px -5px 10px #adffff",
        cursor: "pointer",
        display: "flex",
        alignItems: "$adjust-center",
        justifyContent: "center",
        aspectRatio: "1/1",
        height: "80px",
        listStyle: "none",
        position: "relative",
        hover: {
            background: "linear-gradient(145deg, #3c816c, #489980)",
            boxShadow: "5px 5px 10px #397a66, -5px -5px 10px #4da48a",
        },
        after: {
            content: "attr(data-name)",
            position: "absolute",
            bottom: "-50%",
            fontFamily: "'Quicksand', sans-serif",
        },
    }))

    return <main className={container}>
        <div>
            <ul className={ul}>
                <li className={li} data-name="TikTok"><SiTiktok size={28} /></li>
                <li className={li} data-name="Instagram"><SiInstagram size={28} /></li>
                <li className={li} data-name="Linkedin"><SiLinkedin size={28} /></li>
                <li className={li} data-name="GitHub"><SiGithub size={28} /></li>
            </ul>
        </div>
    </main>;
}
