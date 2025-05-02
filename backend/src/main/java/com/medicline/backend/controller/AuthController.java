package com.medicline.backend.controller;

import com.medicline.backend.model.Client;
import com.medicline.backend.security.JwtUtil;
import com.medicline.backend.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Client client) {
        return ResponseEntity.ok(clientService.register(client));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Client client) {
        Client authenticated = clientService.login(client.getUsername(), client.getPassword());

        if (authenticated != null) {
            String token = JwtUtil.generateToken(authenticated.getUsername());

            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("token", token);

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @GetMapping("/clients")
    public ResponseEntity<List<Client>> getAllClients() {
        return ResponseEntity.ok(clientService.getAllClients());
    }

    // ✅ Endpoint pentru testarea tokenului
    @GetMapping("/verify-token")
    public ResponseEntity<?> verifyToken(@RequestHeader("Authorization") String authHeader) {
        try {
            String token = authHeader.replace("Bearer ", "");
            String username = JwtUtil.extractUsername(token);

            Map<String, String> response = new HashMap<>();
            response.put("username_from_token", username);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid or expired token");
        }
    }
}
