#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class soundsystem_voicecontainers_CVoiceContainerAnalysisBase;
#include "soundsystem_voicecontainers_CVSound.hpp"

class soundsystem_voicecontainers_CVoiceContainerEnvelope {
    char vTable474[0x38];
    soundsystem_voicecontainers_CVSound m_vSound;
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_pEnvelopeAnalyzer;
    char m_sound[0x8];
    soundsystem_voicecontainers_CVoiceContainerAnalysisBase* m_analysisContainer;
};
