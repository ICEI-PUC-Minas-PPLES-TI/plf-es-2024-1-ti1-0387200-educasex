// Função assíncrona para carregar contatos do arquivo JSON
async function loadContacts() {
    try {
      const response = await fetch('../data/listaprofessores.json');
      const contacts = await response.json();
      const contactList = document.querySelector('.contact-list');
      contactList.innerHTML = ''; // Limpar qualquer conteúdo existente
  
      contacts.forEach(contact => {
        const li = document.createElement('li');
        
        const a = document.createElement('a');
        a.href = '../views/chataluno.html';
        
        const img = document.createElement('img');
        img.src = contact.avatar;
        img.alt = contact.name;
        
        const span = document.createElement('span');
        span.textContent = contact.name;
        
        const p = document.createElement('p');
        p.textContent = contact.bio;
        
        const hr = document.createElement('hr');
  
        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        li.appendChild(p);
        li.appendChild(hr);
        
        contactList.appendChild(li);
      });
    } catch (error) {
      console.error('Erro ao carregar contatos:', error);
    }
  }
  
  // Chama a função para carregar os contatos
  loadContacts();
  