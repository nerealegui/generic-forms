# generic-forms


**Improvements regarding Salesforce Dynamic Forms**
- Dynamic Forms is supported on record pages for **custom objects** and **standard objects**.
- Custom availability for community and home pages: lightningCommunity__Page, lightningCommunity__Default, lightning__AppPage, lightning__HomePage.
- Filter visibility via **Set Visibility Component** on page setup

![image](https://user-images.githubusercontent.com/17240961/122134221-7881d180-ce3e-11eb-961b-91a551178118.png)


**Configuration of generic forms**

The generic forms are configurable with the following fields:
- Object type (custom or standard)
- Icon (can be left blank)
- Header Label
- Form fields (API name separated by commas, all the fields are required by default but it can changed in the component's json file > connectedCallback > required)

![image](https://user-images.githubusercontent.com/17240961/122134475-f645dd00-ce3e-11eb-8214-624ef98ff392.png)
