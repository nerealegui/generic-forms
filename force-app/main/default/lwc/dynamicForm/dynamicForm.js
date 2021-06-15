import { LightningElement, track, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import createDynamicObject from "@salesforce/apex/DynamicObjectCreationController.createDynamicObject";
import { NavigationMixin } from "lightning/navigation";

export default class dynamicForm extends NavigationMixin(LightningElement) {

    @api dynamicObject;
    @api fieldList;
    @api headerLabel;
    @api formIcon;

    @track resource;
    @track accountId;


    handleSubmit(event) {
        event.preventDefault();
        const objectFields = {};

        var isVal = true;
        this.template.querySelectorAll("lightning-input-field").forEach((element) => {
            isVal = isVal && element.reportValidity();
            objectFields[element.fieldName] = element.value;
        });

        if (isVal) {
            createDynamicObject({
                objectType: this.dynamicObject,
                objectForm: objectFields
            })
                .then((result) => {
                    const evt = new ShowToastEvent({
                        title: "Sucess",
                        variant: "success"
                    });
                    this.dispatchEvent(new CustomEvent("submitdynamicobject", { detail: "id resource" }));
                })
                .catch((error) => {
                    const evt = new ShowToastEvent({
                        title: "Error",
                        message: error.body.message,
                        variant: "error"
                    });
                    this.dispatchEvent(evt);
                });
        }
    }

    handleCancel(event) {
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
            attributes: {
                pageName: "namePageHere"
            }
        });
    }
}
