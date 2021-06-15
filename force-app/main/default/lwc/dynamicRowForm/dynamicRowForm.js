import { LightningElement, track, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
export default class TbrDynamicRowForm extends NavigationMixin(LightningElement) {
    keyIndex = 0;
    @track itemList = [
        {
            id: 0
        }
    ];

    @api formHeader;
    @api formIcon;
    @api fieldList;
    @api dynamicObject;
    @api objectId;
    @api labelList;

    addRow() {
        ++this.keyIndex;
        var newItem = [{ id: this.keyIndex }];
        this.itemList = this.itemList.concat(newItem);
    }

    removeRow(event) {
        if (this.itemList.length >= 2) {
            this.itemList = this.itemList.filter(function (element) {
                return parseInt(element.id) !== parseInt(event.target.accessKey);
            });
        }
    }

    handleSubmit() {
        var isVal = true;
        this.template.querySelectorAll("lightning-input-field").forEach((element) => {
            isVal = isVal && element.reportValidity();
        });
        if (isVal) {
            this.template.querySelectorAll("lightning-record-edit-form").forEach((element) => {
                element.submit();
            });
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Success",
                    message: "Successfully created",
                    variant: "success"
                })
            );
            const selectedEvent = new CustomEvent("submitrowobject");
            this.dispatchEvent(selectedEvent);
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Error creating record",
                    message: "Please enter all the required fields",
                    variant: "error"
                })
            );
        }
    }

    handleCancel(event) {
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
            attributes: {
                pageName: "pageNameHere"
            }
        });
    }
}
