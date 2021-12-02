import {storage} from '../core/utils';

function toHTML(key) {
  const model = storage(key);
  const id = key.split(':')[1];
  const lastOpenedDate = new Date(model.lastOpenedAt).toLocaleDateString();
  const lastOpenedTime = new Date(model.lastOpenedAt).toLocaleTimeString();

  return `
      <li class="db__record">
         <a href="#excel/${id}">${model.title}</a>
         <strong>
            ${lastOpenedDate}
            ${lastOpenedTime}
        </strong>
      </li>
    `
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key);
  }

  return keys;
}

export function createDashboardRecords() {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p>You haven't created any tables yet</p>`
  }

  return `
        <div class="db__list-header">
                <span>Title</span>
                <span>Last Opened</span>
            </div>

            <ul class="db__list">
               ${keys.map(toHTML).join('')}
            </ul>
    `
}
