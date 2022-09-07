import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className="d-inline-flex flex-column gap-2 border rounded color: #64748B justify-content-between flex-grow-1  p-3">
             <div className="d-flex flex-column gap-4">
            <div className="title">Адреса заведений</div>
            <div className="d-inline-flex flex-column gap-3">
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                  </div>
                  </div>
                  <div className="d-inline-end align-self-start. mt-auto p-2 bd-hghlight">
                <SecondaryButton>Добавить филиал</ SecondaryButton>     
            </div>
        </div>
    );
}

export default Addresses;