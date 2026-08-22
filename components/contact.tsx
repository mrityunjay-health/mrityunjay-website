"use client";

import { type ReactElement, useState, useEffect } from "react";
import { Reveal } from "./intersection-reveal";
import { GoogleOAuthProvider, GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

interface GoogleJwtPayload {
  name?: string;
  given_name?: string;
  email?: string;
}

export function Contact(): ReactElement {
  const [inquiryType, setInquiryType] = useState<"patient" | "industrial">("patient");
  const [signedInStates, setSignedInStates] = useState({ patient: false, industrial: false });
  const [userProfiles, setUserProfiles] = useState<{
    patient: {name: string, email: string} | null,
    industrial: {name: string, email: string} | null
  }>({ patient: null, industrial: null });
  
  const [redirectUrl, setRedirectUrl] = useState("");
  
  useEffect(() => {
    setRedirectUrl(window.location.origin + "/thank-you");
  }, []);

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<GoogleJwtPayload>(credentialResponse.credential);
      setSignedInStates(prev => ({ ...prev, [inquiryType]: true }));
      setUserProfiles(prev => ({
        ...prev,
        [inquiryType]: {
          name: decoded.name || decoded.given_name || "Verified User",
          email: decoded.email || "user@example.com",
        }
      }));
    }
  };

  const handleSignOut = () => {
    setSignedInStates(prev => ({ ...prev, [inquiryType]: false }));
    setUserProfiles(prev => ({ ...prev, [inquiryType]: null }));
  };

  const currentIsSignedIn = signedInStates[inquiryType];
  const currentUserProfile = userProfiles[inquiryType];

  return (
    <GoogleOAuthProvider clientId="866654168622-rjhur8jgrqvd92nu8q2kicdmtvp1md1k.apps.googleusercontent.com">
      <section id="contact" className="min-h-[100svh] flex flex-col justify-center py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-container-low">
      <div className="max-w-container-max w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:pr-8">
          <Reveal className="text-left mb-8">
            <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
              GET IN TOUCH
            </span>
            <h2 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
              Connect with Mritunjay
            </h2>
            <p className="font-body-lg text-base sm:text-lg text-secondary max-w-lg mt-4 sm:mt-6 leading-relaxed">
              Whether you are an individual seeking better care or an institution looking to integrate our intelligence, we want to hear from you. We process all our incoming inquiries securely to ensure your data is protected.
            </p>
          </Reveal>
          
          <Reveal className="hidden lg:flex flex-col gap-6 mt-12">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 border border-primary/10 shadow-sm">
                 <span className="material-symbols-outlined text-xl text-primary">mail</span>
               </div>
               <div>
                  <h4 className="font-headline-md text-lg text-primary mb-0.5">Direct Email</h4>
                  <p className="font-body-md text-sm text-secondary">antigravity87@gmail.com</p>
               </div>
            </div>
            
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 border border-primary/10 shadow-sm">
                 <span className="material-symbols-outlined text-xl text-primary">schedule</span>
               </div>
               <div>
                  <h4 className="font-headline-md text-lg text-primary mb-0.5">Response Time</h4>
                  <p className="font-body-md text-sm text-secondary">Within 24 hours for patients.</p>
               </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT CONTENT (FORM) */}
        <div className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col w-full h-auto">
          
          <div role="tablist" aria-label="Select inquiry type" className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 shrink-0">
            <button
              type="button"
              role="tab"
              aria-selected={inquiryType === "patient"}
              onClick={() => setInquiryType("patient")}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-label-caps text-[10px] sm:text-xs tracking-widest transition-all active:scale-[0.98] flex-1 sm:flex-none ${
                inquiryType === "patient" ? "bg-primary text-clinical-white shadow-double-bezel-dark" : "bg-surface-container-low text-primary border border-data-node/40 hover:bg-surface-container"
              }`}
            >
              INDIVIDUAL PATIENT
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={inquiryType === "industrial"}
              onClick={() => setInquiryType("industrial")}
              className={`px-4 sm:px-6 py-2.5 rounded-full font-label-caps text-[10px] sm:text-xs tracking-widest transition-all active:scale-[0.98] flex-1 sm:flex-none ${
                inquiryType === "industrial" ? "bg-primary text-clinical-white shadow-double-bezel-dark" : "bg-surface-container-low text-primary border border-data-node/40 hover:bg-surface-container"
              }`}
            >
              INDUSTRIAL / COMPANY
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6 shrink-0">
              <h3 className="font-headline-md text-xl sm:text-2xl text-primary mb-2">
                Send us an Inquiry
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                Your message will be routed directly to <strong>antigravity87@gmail.com</strong>.
              </p>
            </div>
            
            {/* 
              USER INSTRUCTION: 
              We are using Web3Forms here so the form stays on your website!
              Your Access Key is correctly set below.
            */}
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-4 text-left flex-1"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="d7bf2cae-4247-479a-94d9-730d8e6c3336" />
              
              {/* Redirect to Custom Thank You Page */}
              <input type="hidden" name="redirect" value={redirectUrl} />
              
              {/* Hidden field to pass inquiry type */}
              <input type="hidden" name="Inquiry Type" value={inquiryType} />
              
              {!currentIsSignedIn ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-5 bg-surface-bright border border-dashed border-outline-variant rounded-xl">
                  <p className="font-body-md text-sm text-on-surface-variant text-center px-4">
                    Please sign in to verify your identity before sending a direct message.
                  </p>
                  <div className="flex justify-center">
                    <GoogleLogin
                      onSuccess={handleGoogleSuccess}
                      onError={() => {
                        console.error("Login Failed");
                      }}
                      shape="pill"
                      theme="outline"
                      text="signin_with"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="flex items-center justify-between bg-green-500/5 border border-green-500/20 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary text-clinical-white flex items-center justify-center text-sm font-bold shadow-sm uppercase">
                        {currentUserProfile?.name.charAt(0) || "U"}
                      </div>
                      <div>
                        <p className="font-headline-md text-sm text-primary leading-tight">{currentUserProfile?.name || "Verified User"}</p>
                        <p className="font-mono text-[9px] text-green-700 tracking-wider">{currentUserProfile?.email || "user@example.com"} (SECURED)</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={handleSignOut} 
                      className="font-label-caps text-[9px] text-secondary hover:text-error transition-colors tracking-widest px-2 py-1"
                    >
                      SIGN OUT
                    </button>
                  </div>

                  {/* Hidden inputs to capture the verified user's details for Web3Forms submission */}
                  <input type="hidden" name="name" value={currentUserProfile?.name || "Verified User"} />
                  <input type="hidden" name="email" value={currentUserProfile?.email || "user@example.com"} />
                  <input type="hidden" name="subject" value={`[Mritunjay] New ${inquiryType === 'patient' ? 'Patient' : 'Enterprise'} Inquiry from ${currentUserProfile?.name || "Verified User"}`} />

                  {inquiryType === "industrial" && (
                    <div>
                      <label htmlFor="company" className="block font-mono text-[10px] text-secondary tracking-wider uppercase mb-1.5 ml-1">
                        Company / Institution
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        className="w-full bg-surface-container-low border border-data-node/30 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body-md text-sm"
                        placeholder="Mritunjay Healthcare Systems"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block font-mono text-[10px] text-secondary tracking-wider uppercase mb-1.5 ml-1">
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={3}
                      className="w-full bg-surface-container-low border border-data-node/30 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body-md text-sm resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-primary text-clinical-white px-8 py-3.5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-xl shadow-md active:scale-[0.98]"
                    >
                      <span>SEND INQUIRY</span>
                      <span className="material-symbols-outlined text-[15px]">send</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
            
            <p className="font-mono text-[9px] text-secondary mt-5 uppercase tracking-wider text-center shrink-0">
              {inquiryType === "patient" ? "We typically respond to patient inquiries within 24 hours." : "Enterprise inquiries are prioritized by our integration team."}
            </p>
          </div>
        </div>
      </div>
      </section>
    </GoogleOAuthProvider>
  );
}
