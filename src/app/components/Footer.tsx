import Info from "./Info";

export default function Footer() {
   return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <Info text="Learn" image="/file.svg"/>
            <Info text="Examples" image="/window.svg"/>
            <Info text="Go" image="/globe.svg"/>
          </footer>
   ); 
}