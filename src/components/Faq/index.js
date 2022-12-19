import SubTitle from "components/SubTitle";
import TitleItems from "components/TitleItems";
import FaqItems from "../FaqItems";


export default function index({ title, question, answer }) {
    return (
        <div className="container mt-16 mx-auto -my-14">
            <div className="px-14 py-14">
                <TitleItems className="mb-6">Frequenly Ask Question (FAQ)</TitleItems>
                <FaqItems
                    title={"Frequenly Ask Question (FAQ)"}
                    question={"Can PT PELNI (Persero) provide additional services for ship agency services"}
                    answer={"Yes, we can provide additional services (husbandary services)for ship agency services in the territory of Indonesia."}
                />
                
                <FaqItems
                    title={"Frequenly Ask Question (FAQ)"}
                    question={"Can PT PELNI (Persero) provide additional services for ship agency services"}
                    answer={"Yes, we can provide additional services (husbandary services)for ship agency services in the territory of Indonesia."}
                />
                
                <FaqItems
                    title={"Frequenly Ask Question (FAQ)"}
                    question={"Can PT PELNI (Persero) provide additional services for ship agency services"}
                    answer={"Yes, we can provide additional services (husbandary services)for ship agency services in the territory of Indonesia."}
                />
                
                <FaqItems
                    title={"Frequenly Ask Question (FAQ)"}
                    question={"Can PT PELNI (Persero) provide additional services for ship agency services"}
                    answer={"Yes, we can provide additional services (husbandary services)for ship agency services in the territory of Indonesia."}
                />
            </div>
        </div>
    )
}
