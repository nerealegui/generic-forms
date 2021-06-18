# generic-forms



![image](https://user-images.githubusercontent.com/17240961/122134221-7881d180-ce3e-11eb-961b-91a551178118.png)

 
![image](https://user-images.githubusercontent.com/17240961/122134475-f645dd00-ce3e-11eb-8214-624ef98ff392.png)

# Salesforce LWC Dynamic Forms
## _Ready to use Customizable LWC Components to generate dynamic forms_



Dynamic forms are meant to easen the development of custom forms in Lightning, they allow an easy and fast setup using the Lightning Web Components' framework. You will be able to: 


- Create forms for **Custom and Standard Objects**
- Have custom forms ready to use in any page type within Lightning.

```
    <targets>
        <target>lightningCommunity__Page</target>
        <target>lightningCommunity__Default</target>
        <target>lightning__AppPage</target>
        <target>lightning__HomePage</target>
    </targets>
```

- Setup conditional visibility using Audiences (Community) or Standard Visibility Setup
![image](https://user-images.githubusercontent.com/17240961/122608636-d996e880-d07c-11eb-9884-3dfbf2100473.png)


## Installation

Before starting make sure Lightning is enabled in your org.

Get the repository

```sh
git clone https://github.com/nereagit/generic-forms
```

Deploy the components in your org, for this you should be authenticated with your target org.

```sh
sfdx auth:web:login --setdefaultdevhubusername --setalias my-hub-org 
sfdx force:source:deploy --manifest "<project-forder-path>/generic-forms/manifest/package.xml" 
```

## How it works

![image](https://user-images.githubusercontent.com/17240961/122608774-1c58c080-d07d-11eb-8ef5-9181cafc7a00.png)


## Settings

The components have the following parameters to setup the components' forms.



| Field | Description |
| ------ | ------ |
| dynamicObject | API name of Salesforce object (can be custom or standard) |
| fieldList | List of fields' API names separated by commas |
| headerLabel | (Optional) Header title for the component |
| formIcon | (Optional) Icon placed next to the header title, should be part of the [Lightning Design System](https://www.lightningdesignsystem.com/icons/) |

Note: All the fields are required by default but it can changed in the component's json file > connectedCallback > required.


## Development

Want to contribute? Great!
Reach out to me or open a pull request in the project, any contribution is welcome!

