package com.logistics.service;

import com.logistics.dto.JwtAuthenticationResponse;
import com.logistics.dto.RefreshTokenRequest;
import com.logistics.dto.SigninRequest;
import com.logistics.dto.SignupRequest;
import com.logistics.entities.User;

public interface AuthenticationService {
	User signup(SignupRequest signupRequest);
	JwtAuthenticationResponse signin(SigninRequest signinRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
