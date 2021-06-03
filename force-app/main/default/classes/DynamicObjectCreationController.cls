public with sharing class DynamicObjectCreationController {
    final private static String CONTACT = 'Contact';
    private static String DYNAMIC_OBJECT;


    @AuraEnabled
    public static void createDynamicObject(final String objectType, final Map<String, String> objectForm) {

        try {
            if (objectType == CONTACT) {
                supplyContact(objectForm);   
            }
        } catch (System.DMLException e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    private static Contact supplyContact(final Map<String, String> objectForm) {
        Contact newContact = new Contact(
            FirstName = objectForm.get('FirstName'),
            LastName = objectForm.get('LastName'),
            MobilePhone = objectForm.get('MobilePhone'),
            Email = objectForm.get('Email'),
            AccountId = objectForm.get('AccountId')
        );
        insert newContact;
        return newContact;
    }



   
}
