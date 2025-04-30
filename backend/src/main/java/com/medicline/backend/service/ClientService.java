package com.medicline.backend.service;

import com.medicline.backend.model.Client;
import com.medicline.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client register(Client client) {
        return clientRepository.save(client);
    }

    public Client login(String username, String password) {
        Client found = clientRepository.findByUsername(username);
        if (found != null && found.getPassword().equals(password)) {
            return found;
        }
        return null;
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }
}
