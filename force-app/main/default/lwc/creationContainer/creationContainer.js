import { LightningElement} from "lwc";

export default class CreationContainer extends LightningElement {

    dynamicObjectType;
    formIcon;
    formHeaderLabel;
    objectFieldList = [];

    objectMap = new Map([
        ["Contact", { icon: "standard:contact", label: "New Contact", fields: this.fieldListContact }]
    ]);

    fieldListContact = [
        { id: 0, value: "FirstName", required: true },
        { id: 1, value: "LastName", required: true },
        { id: 2, value: "MobilePhone", required: true },
        { id: 3, value: "Email", required: true },
        { id: 4, value: "AccountId", required: true }
    ];


    connectedCallback() {
        this.dynamicObjectType = "Contact";   
        this.formIcon = this.objectMap.get(this.dynamicObjectType).icon;
        this.formHeaderLabel = this.objectMap.get(this.dynamicObjectType).label;
        this.objectFieldList = this.objectMap.get(this.dynamicObjectType).fields;

    }


}
