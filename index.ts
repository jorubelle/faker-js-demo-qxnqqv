import './styles.css';

import { faker } from '@faker-js/faker';
import { faker as faker_zh_CN } from '@faker-js/faker/locale/zh_CN';

// const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
 const avatarUrl = faker.image.avatar();
// const natureImageUrl = faker.image.nature();
// const zh_CN_fullName = `${faker_zh_CN.name.firstName()} ${faker_zh_CN.name.lastName()}`;
    const randomCompanyName = faker.company.name(); // Rowan Nikolaus
    var randomCatchPhrase = faker.company.catchPhrase(); // Kassandra.Haley@erich.biz
    var randomAvatar = faker.image.business(); // random contact card containing many properties
    

const appDiv: HTMLElement = document.querySelector('#app');
appDiv.innerHTML = `
<h1>Faker Demo</h1>
<div class="card">
  <div class="card__image">
    <img src="${randomAvatar}" alt="Background image for ${randomCompanyName}"/>
  </div>
  <div class="card__profile">
    <img src="${avatarUrl}" alt="Avatar image of ${randomCompanyName}"/>
  </div>
  <div class="card__body">
    ${randomCompanyName} </b><br> ${randomCatchPhrase}
  </div>  
</div>
`;
