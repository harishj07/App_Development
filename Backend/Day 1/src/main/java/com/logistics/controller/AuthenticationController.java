package com.logistics.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logistics.dto.JwtAuthenticationResponse;
import com.logistics.dto.RefreshTokenRequest;
import com.logistics.dto.SigninRequest;
import com.logistics.dto.SignupRequest;
import com.logistics.entities.User;
import com.logistics.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
private final AuthenticationService authenticationService;

@PostMapping("/signup")
public ResponseEntity<User> signup(@RequestBody SignupRequest signuprequest){
  return ResponseEntity.ok(authenticationService.signup(signuprequest));	
}

@PostMapping("/signin")
public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest){
	return ResponseEntity.ok(authenticationService.signin(signinRequest));
}

@PostMapping("/refresh")
public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest){
	return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
}
}
