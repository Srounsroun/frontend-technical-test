# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# From Singdavid : 

To start 

open a command line to execute the api server : 
- npm run start-server

open another command line to start the app:
- npm run dev
- access to http://localhost:3000

open another command line to start the document and test environment:
- npm run storybook
- access to http://localhost:6006

 The development process : 

- First part, I forked the repo and took some times to understand the solution
- I installed a storybook environment and try to make it work with NextJS
- I create my first component ConversationBox
- Then I use it in a ConversationListBox component and add the stories to be sure to match the api response.
- I needed to update some types to add the timestamp
- Then I continue to work on the messages and update the css accordingly with responsivity
- I create the messenger api to be able to fetch and post data to conversation api.
- I use it in messenger Component which regroup everything that have been done
- storybook allows me to develop and test at the same time.

Bonus 1: 
- messenger component is also added to main home, don't forget to start the api server before

Bonus 2: 
- a text message is displayed when error is catch during api fetching

Adding storybook allow to document and also develop component
 - we can had test case
 - we can also test responsiveness of component
 - we can be sure that the component is pure

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
