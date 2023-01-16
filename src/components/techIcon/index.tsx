import { ImgHTMLAttributes } from "react"
import CssIcon from "./Icons/css.svg"
import FigmaIcon from "./Icons/figma.svg"
import GitIcon from "./Icons/git.svg"
import HtmlIcon from "./Icons/html.svg"
import JavaIcon from "./Icons/java.png"
import JavaScriptIcon from "./Icons/javascript.svg"
import MongodbIcon from "./Icons/mongodb.svg"
import MysqlIcon from "./Icons/mysql.png"
import NodeIcon from "./Icons/nodejs.svg"
import PhpIcon from "./Icons/php.png"
import PythonIcon from "./Icons/python.svg"
import ReactIcon from "./Icons/react.svg"
import StorybookIcon from "./Icons/storybook.png"
import StyledComponentsIcon from "./Icons/styled-components.svg"
import TypeScriptIcon from "./Icons/typescript.svg"
import TailWindCssIcon from "./Icons/tailwind.svg"

interface TechIcon extends ImgHTMLAttributes<HTMLImageElement> {
    icon: "TailWindCssIcon" | "CssIcon" | "FigmaIcon" | "GitIcon" | "HtmlIcon" | "JavaIcon" | "JavaScriptIcon" | "MongodbIcon" | "MysqlIcon" | "NodeIcon" | "PhpIcon" | "PythonIcon" | "ReactIcon" | "StorybookIcon" | "StyledComponentsIcon" | "TypeScriptIcon"
}

export function TechIcon({icon, ...props}: TechIcon) {
    switch(icon){
        case "CssIcon":
            return <img src={CssIcon} title="CSS3" {...props}/>

        case "FigmaIcon":
            return <img src={FigmaIcon} title="Figma (Software)" {...props}/>

        case "GitIcon":
            return <img src={GitIcon} title="Git" {...props}/>

        case "HtmlIcon":
            return <img src={HtmlIcon} title="HTML5" {...props}/>

        case "JavaIcon":
            return <img src={JavaIcon} title="Java" {...props}/>

        case "JavaScriptIcon":
            return <img src={JavaScriptIcon} title="Java Script" {...props}/>

        case "MongodbIcon":
            return <img src={MongodbIcon} title="MongoDB" {...props}/>

        case "MysqlIcon":
            return <img src={MysqlIcon} title="MySQL" {...props}/>

        case "NodeIcon":
            return <img src={NodeIcon} title="NodeJS" {...props}/>

        case "PhpIcon":
            return <img src={PhpIcon} title="PHP" {...props}/>
            
        case "PythonIcon":
            return <img src={PythonIcon} title="Python" {...props}/>

        case "ReactIcon":
            return <img src={ReactIcon} title="React" {...props}/>

        case "StorybookIcon":
            return <img src={StorybookIcon} title="Storybook" {...props}/>

        case "StyledComponentsIcon":
            return <img src={StyledComponentsIcon} title="Styled Components" {...props}/>

        case "TypeScriptIcon":
            return <img src={TypeScriptIcon} title="Type Script" {...props}/>

        case "TailWindCssIcon":
            return <img src={TailWindCssIcon} title="Tail Wind CSS" {...props}/>
    }
}